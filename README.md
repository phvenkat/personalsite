# phanindragvenkata.com

Personal site for Phanindra G. Venkata - AI-First Product Leader.

Vite + React + TypeScript + Tailwind CSS.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Checks

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # production build -> dist/
npm run preview    # serve dist/ locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which typechecks, lints,
builds, and publishes `dist/` to GitHub Pages. Pull requests run the same checks
without deploying.

The custom domain is configured by `public/CNAME`. It lives in `public/` (not the repo
root) so that Vite copies it into `dist/` on every build - a root-level CNAME would be
dropped from the published output and the domain would break. CI asserts it survives.

## Assets

Files in `public/` are served from the site root (e.g. `public/og-image.png` ->
`/og-image.png`). `og-image.png` is the 1200x630 link-preview card referenced by the
Open Graph and Twitter tags in `index.html`; regenerate it if the headshot or the
headline stats change.
