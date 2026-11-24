# CaregiverJP — Personal SSW Study PWA

CaregiverJP is a **single-user, offline-first Progressive Web App** for personal SSW Nursing Care study.

## Hosting and architecture
- Static hosting on GitHub Pages.
- No account registration, login, backend server, database service, Cloudflare Worker, API token, or server-side user system.
- Quiz answers and personal progress are stored locally in this browser.
- Export/Import Backup lets the owner move personal browser data between devices.
- A service worker caches the app shell and successfully visited same-origin resources for offline use.

## Study content
- The nine original source PDFs remain in `data/papers/` and are copied into the static build at `public/papers/`.
- The build verifies the nine source PDFs and generates `papers-manifest.json`.
- Original image files are preserved. If `assets/images/` exists, the build also copies it into the published static assets.
- Imported quiz content remains in `src/data/studyBank.ts`; the source question set is not deduplicated or silently rewritten.

## Local development
```sh
npm install
npm run lint
npm run build
npm run dev
```

## GitHub Pages deployment
Merging changes to `main` triggers `.github/workflows/deploy-pages.yml`. The workflow validates TypeScript, builds the static PWA, verifies all nine PDFs are present, and publishes `dist/` to GitHub Pages.

In repository settings, set **Pages → Build and deployment → Source: GitHub Actions** if it is not already selected.

## Personal data and privacy
- Data is stored only in the browser profile using localStorage.
- Clearing browser/site data can erase progress. Export a backup periodically.
- The backup file contains personal study progress; keep it private.
- GitHub Pages serves static files publicly if the repository is public. Do not place secrets or private documents in the repository.
