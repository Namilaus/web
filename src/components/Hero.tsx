import { lazy, Suspense, useEffect, useState } from 'react';
import { usePointerParallax } from '../hooks/usePointerParallax';
import { SceneBoundary } from './common/SceneBoundary';
import styles from './Hero.module.css';

const RetroTerminal = lazy(() => import('./RetroTerminal'));

/* Mount the WebGL terminal only on wide viewports where it has room
   beside the text, and only once the browser is idle so it never
   competes with first paint. Under prefers-reduced-motion it renders a
   single static frame (fully booted) instead of animating. */
const useTerminalEnabled = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1140px)');
    if (!wide.matches) return;

    const hasIdle = typeof window.requestIdleCallback === 'function';
    const idle = hasIdle
      ? window.requestIdleCallback(() => setEnabled(true))
      : window.setTimeout(() => setEnabled(true), 350);

    return () => {
      if (hasIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, []);

  return enabled;
};

/* Nautical depth contours of an imagined Elbe chart — the hero's backdrop */
const ChartLines = () => (
  <svg
    className={styles.chart}
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <g className={styles.chartGroupA}>
      <path d="M -80 180 C 260 110, 480 300, 780 220 S 1240 340, 1540 250" />
      <path d="M -80 290 C 280 210, 500 400, 800 320 S 1250 450, 1540 360" />
      <path d="M -80 410 C 300 320, 520 510, 820 430 S 1260 560, 1540 470" />
      <text x="356" y="232" className={styles.depth}>8</text>
      <text x="912" y="352" className={styles.depth}>12</text>
    </g>
    <g className={styles.chartGroupB}>
      <path d="M -80 540 C 320 440, 540 630, 840 550 S 1270 670, 1540 590" />
      <path d="M -80 670 C 340 560, 560 760, 860 680 S 1280 790, 1540 710" />
      <path d="M -80 800 C 360 690, 580 880, 880 800 S 1290 910, 1540 830" />
      <text x="500" y="582" className={styles.depth}>16</text>
      <text x="1080" y="724" className={styles.depth}>20</text>
    </g>
  </svg>
);

export const Hero = () => {
  const heroRef = usePointerParallax<HTMLElement>();
  const terminalEnabled = useTerminalEnabled();

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      <ChartLines />
      <div className={styles.sonar} aria-hidden="true" />
      {terminalEnabled && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <RetroTerminal />
          </Suspense>
        </SceneBoundary>
      )}

      <div className={styles.container}>
        <p className={styles.eyebrow}>
          Port of Hamburg <span className={styles.eyebrowSep}>·</span>{' '}
          <span className={styles.eyebrowCoords}>53.55° N / 9.99° E</span>
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span className={styles.titleInner}>Sulaiman</span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.titleInner}>
              Atayi<span className={styles.titleMark}>.</span>
            </span>
          </span>
        </h1>

        <div className={styles.roles}>
          <span>Software Engineering Student</span>
          <span className={styles.roleSep} aria-hidden="true">/</span>
          <span>Backend &amp; Cloud</span>
          <span className={styles.roleSep} aria-hidden="true">/</span>
          <span>Automation</span>
        </div>

        <p className={styles.description}>
          I'm a Software Engineering student combining dual study at NORDAKADEMIE with
          practical work at EDEKA IT in Hamburg. I work on cloud monitoring, CI pipelines,
          and Power BI dashboards, and explore backend and infrastructure projects of my own.
        </p>

        <div className={styles.cta}>
          <a className={styles.primaryBtn} href="#projects">
            View My Work
          </a>
          <a className={styles.secondaryBtn} href="#contact">
            Get in Touch
          </a>
        </div>
      </div>

      <div className={styles.registry}>
        <div className={styles.registryItem}>
          <span className={styles.registryKey}>Cargo</span>
          <span className={styles.registryValue}>Backend · Cloud infrastructure · Automation</span>
        </div>
        <div className={styles.registryItem}>
          <span className={styles.registryKey}>Status</span>
          <span className={styles.registryValue}>
            <span className={styles.statusDot} aria-hidden="true" />
            Dual student at EDEKA IT
          </span>
        </div>
        <div className={styles.registryScroll}>
          <span>Scroll to explore</span>
          <span className={styles.scrollArrow} aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
};
