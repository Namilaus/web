# Sulaiman Atayi's portfolio

Personal portfolio for a Software Engineering student at NORDAKADEMIE and dual student at EDEKA IT. Built with React, TypeScript, Vite, CSS Modules, and a deferred Three.js scene.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

An optional browser regression script is available at `scripts/portfolio-smoke.mjs`. With a Playwright installation and Chromium available, start the development server and run `node scripts/portfolio-smoke.mjs`. It checks theme persistence, section navigation, responsive layouts, menu keyboard behavior, blocked browser storage, and optional-scene failure. Set `PORTFOLIO_URL` for a non-default port, `BROWSER_CHANNEL` to use an installed browser, or `PLAYWRIGHT_MODULE` to use a tooling-provided Playwright installation.

## Updating content

- `src/data/portfolio.ts`: navigation, selected projects, work experience, and skill groups.
- `src/components/Hero.tsx`, `About.tsx`, and `Contact.tsx`: introduction, education, and contact copy.
- `index.html`: page and sharing metadata. The canonical site URL is `https://atayi.net/`.
- `public/social-preview.svg`: editable source for the 1200 × 630 sharing image; keep the PNG export in sync.

The content plan and source review are in `docs/plans/` and `docs/research/`. The CV supplied for review is not included in the public site. Project statuses distinguish personal work and prototypes from professional experience.
