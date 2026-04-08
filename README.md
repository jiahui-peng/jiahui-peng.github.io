# jiahui-peng.github.io

Personal website for Jiahui Peng. Built with [Astro](https://astro.build) +
Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 to preview.

## Deploy

Pushing to `main` triggers the workflow in `.github/workflows/deploy.yml`,
which builds the site and publishes `dist/` to GitHub Pages.
