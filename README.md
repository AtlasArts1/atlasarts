# Atlas Arts

A personal website built with Vue 3 and Vite, designed for GitHub Pages. Browse the three galleries under `/galleries`: digital art, 3D art, and astronomy photos. Each has date-based captions, search, and an enlarged image viewer.

Source images are kept in matching folders under `assets`. Optimized JPEG XL, WebP, JPEG, and PNG versions are in `public/art`; the browser selects the best supported format.
The former `/gallery` address redirects to `/galleries/digital-art`.

The homepage hero artwork source is `assets/hero/dragon.jpg`, with its browser-selected versions in `public/hero`.

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
