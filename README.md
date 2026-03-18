# SCORPIUS Website

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Start the website (development)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in your terminal (usually `http://localhost:3000`).

## Other useful commands

- Build for production:

  ```bash
  npm run build
  ```

- Preview the production build locally:

  ```bash
  npm run preview
  ```

- Run lint checks:

  ```bash
  npm run lint
  ```

## Deploy to GitHub Pages

- A GitHub Actions workflow is included in `.github/workflows/deploy.yml`.
- Push to the `main` branch (or run the workflow manually) to publish the built `build/index.html` to GitHub Pages.
