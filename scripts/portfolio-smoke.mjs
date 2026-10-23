import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

// Optional browser verification. Uses Playwright from the local tooling environment.
const modulePath = process.env.PLAYWRIGHT_MODULE;
const { chromium } = await import(modulePath ? pathToFileURL(modulePath).href : 'playwright');
const browser = await chromium.launch({
  headless: true,
  channel: process.env.BROWSER_CHANNEL || undefined,
});
const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5173';
const output = process.env.SCREENSHOT_DIR || resolve(tmpdir(), 'portfolio-smoke');
await mkdir(output, { recursive: true });

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', colorScheme: 'light' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('main').waitFor();

  // A stale theme attribute on the app wrapper used to override the root theme.
  const background = () => page.locator('main').evaluate((element) => getComputedStyle(element).getPropertyValue('--bg').trim());
  const initial = await background();
  await page.getByRole('button', { name: 'Switch to night theme' }).click();
  assert.notEqual(await background(), initial, 'Theme must change throughout the main content');
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Switch to day theme' }).waitFor();
  assert.notEqual(await background(), initial, 'Selected theme must survive reload');
  await page.getByRole('button', { name: 'Switch to day theme' }).click();
  assert.equal(await background(), initial, 'Theme must switch back');

  // Native anchors must update the address and clear the fixed header.
  await page.getByRole('link', { name: 'View My Work', exact: true }).click();
  await page.waitForURL('**/#projects');
  const sectionTop = await page.locator('#projects').evaluate((element) => element.getBoundingClientRect().top);
  assert.ok(sectionTop >= 64 && sectionTop <= 100, `Fixed header must not cover the section: ${sectionTop}`);

  const sources = await page.locator('#projects article a').evaluateAll((anchors) => anchors.map((anchor) => anchor.href));
  assert.equal(sources.length, 3);
  assert.ok(sources.every((href) => new URL(href).hostname === 'github.com'), 'Every featured project must link to its source');

  const reveal = async () => {
    for (const section of await page.locator('main > section').all()) {
      await section.scrollIntoViewIfNeeded();
    }
    await page.locator('#home').scrollIntoViewIfNeeded();
  };
  await reveal();
  await page.screenshot({ path: resolve(output, 'desktop-light.png'), fullPage: true });
  await page.getByRole('button', { name: 'Switch to night theme' }).click();
  await page.screenshot({ path: resolve(output, 'desktop-dark.png'), fullPage: true });

  for (const width of [320, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
    const overflow = await page.evaluate(() => ({
      width: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('main *, nav *')].filter((element) => {
        if (!(element instanceof HTMLElement)) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1);
      }).slice(0, 20).map((element) => ({ tag: element.tagName, class: element.className, fontSize: getComputedStyle(element).fontSize, right: element.getBoundingClientRect().right, text: element.textContent?.slice(0, 70) })),
    }));
    assert.ok(overflow.scrollWidth <= width, `No horizontal overflow: ${JSON.stringify(overflow)}`);
    await page.getByRole('button', { name: 'Open menu', exact: true }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Experience', exact: true }).click();
    await page.waitForURL('**/#experience');
    assert.equal(await page.getByRole('button', { name: 'Open menu', exact: true }).getAttribute('aria-expanded'), 'false');
    await page.getByRole('button', { name: 'Open menu', exact: true }).click();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button', { name: 'Open menu', exact: true }).getAttribute('aria-expanded'), 'false');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'menu-toggle');
    await reveal();
    await page.screenshot({ path: resolve(output, `mobile-${width}.png`), fullPage: true });
  }
  for (const width of [900, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No horizontal overflow at ${width}px`);
    const navigationFits = await page.getByRole('navigation').evaluate((nav) => [...nav.querySelectorAll('a, button')].every((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width === 0 || (rect.left >= 0 && rect.right <= innerWidth);
    }));
    assert.ok(navigationFits, `Navigation must fit at ${width}px`);
  }
  assert.deepEqual(errors, [], 'No unhandled errors during normal navigation');

  const blocked = await context.newPage();
  await blocked.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Storage disabled', 'SecurityError'); } });
  });
  await blocked.goto(baseURL, { waitUntil: 'networkidle' });
  await blocked.getByRole('button', { name: 'Switch to night theme' }).click();
  await blocked.getByRole('button', { name: 'Switch to day theme' }).waitFor();
  assert.equal(await blocked.locator('main').count(), 1, 'Blocked storage must not break the portfolio');

  // A failed optional scene chunk must not unmount the page.
  const sceneFailure = await context.newPage();
  let sceneRequests = 0;
  await sceneFailure.route('**/*RetroTerminal*', (route) => {
    sceneRequests++;
    return route.abort();
  });
  await sceneFailure.goto(baseURL, { waitUntil: 'networkidle' });
  assert.ok(sceneRequests > 0, 'The optional scene failure scenario must actually intercept a scene request');
  await sceneFailure.getByRole('link', { name: 'View My Work', exact: true }).click();
  await sceneFailure.waitForURL('**/#projects');
  assert.equal(await sceneFailure.locator('main').count(), 1, 'Decorative scene failure must preserve main content');

  const animatedContext = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'no-preference' });
  const animated = await animatedContext.newPage();
  await animated.addInitScript(() => {
    window.__portfolioFrameCount = 0;
    const original = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = (callback) => original((time) => {
      window.__portfolioFrameCount++;
      callback(time);
    });
  });
  await animated.goto(baseURL, { waitUntil: 'networkidle' });
  await animated.locator('#home canvas').waitFor();
  const sampleFrames = () => animated.evaluate(async () => {
    const before = window.__portfolioFrameCount;
    await new Promise((done) => setTimeout(done, 700));
    return window.__portfolioFrameCount - before;
  });
  const visibleFrames = await sampleFrames();
  assert.ok(visibleFrames > 0, 'The normal-motion scene must render while visible');
  await animated.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, document.body.scrollHeight);
  });
  await animated.waitForTimeout(300);
  const hiddenFrames = await sampleFrames();
  assert.ok(hiddenFrames <= 2 && hiddenFrames < visibleFrames, `Offscreen scene must pause: visible=${visibleFrames}, offscreen=${hiddenFrames}`);
  console.log(`PASS: offscreen rendering pauses (${visibleFrames} visible frames, ${hiddenFrames} offscreen frames).`);
  console.log('PASS: theme persistence, native anchors, project links, 320/390/768/900/1024/1440px layouts, mobile menu/Escape, blocked storage, optional scene failure.');
  console.log(`Screenshots: ${output}`);
} finally {
  await browser.close();
}
