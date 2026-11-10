# Atlas Arts

A personal website built with Vue 3 and Vite, designed for GitHub Pages. The `/gallery` page displays the artwork from `assets/images` with date-based captions, search, and an enlarged image viewer.

Each source image has optimized JPEG XL, WebP, JPEG, and PNG versions in `public/art/optimized`. The gallery uses a `<picture>` element so the browser can select JPEG XL or WebP when supported, with PNG and JPEG fallbacks.

## Start locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Pushing to `main` builds and deploys the site with GitHub Actions. In the repository settings, set Pages to use **GitHub Actions** as its source.

The home page has sections for an introduction, about, selected work, and social contacts. Update the social profile links in `src/components/SocialLinks.vue` as needed.
