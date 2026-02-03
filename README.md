# Astro Site Starter

Minimal, lightweight Astro site ready for GitHub Pages deployment.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

## Build & Deploy

```bash
npm run build
```

Push to GitHub and the GitHub Actions workflow will automatically deploy to GitHub Pages.

## Setup for Your Repository

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Update `astro.config.mjs`** (if using subdomain):
   ```js
   // For username.github.io/repo-name
   site: 'https://username.github.io/repo-name',
   ```

3. **Push & Deploy:**
   - The workflow in `.github/workflows/deploy.yml` runs on every push to `main`
   - Check Actions tab to see deployment status
   - Site goes live at `username.github.io` or `username.github.io/repo-name`

## Project Structure

```
src/
├── pages/       # Routes (index.astro → /, about.astro → /about)
├── components/  # Reusable Astro components
└── layouts/     # Page layouts

.github/
└── workflows/   # GitHub Actions CI/CD
```

## Add Pages

Create new `.astro` files in `src/pages/` and they become routes automatically:
- `src/pages/contact.astro` → `/contact`
- `src/pages/blog/first-post.astro` → `/blog/first-post`

## Customize

- Edit `src/layouts/BaseLayout.astro` to change the global layout
- Add styles inline in `<style>` tags or create `src/styles/`
- Add components in `src/components/`

## Resources

- [Astro Docs](https://docs.astro.build)
- [GitHub Pages Docs](https://pages.github.com)

Enjoy! 🚀
