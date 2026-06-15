# [williamgeorge.dev](https://williamgeorge.dev)

Personal site built with SvelteKit 2 + Svelte 5, TypeScript, and Tailwind v4. Deployed to Netlify.

## Requirements

- Node 24 LTS (see `.nvmrc`)
- npm 10+
- macOS for image ingest scripts in `bin/` (relies on `sips`)
- [`libavif`](https://github.com/AOMediaCodec/libavif) for AVIF encoding (`brew install libavif`) — only needed when adding new card images

## Quickstart

```bash
nvm use            # picks up .nvmrc
npm install
npm run dev        # local dev server at http://localhost:5173
```

## Scripts

| Script               | What it does                                                   |
| -------------------- | -------------------------------------------------------------- |
| `npm run dev`        | Vite dev server with HMR                                       |
| `npm run build`      | Production build via `@sveltejs/adapter-netlify`               |
| `npm run preview`    | Preview the production build locally                           |
| `npm run check`      | Type-check Svelte + TS                                         |
| `npm run lint`       | Prettier + ESLint                                              |
| `npm run format`     | Prettier write                                                 |
| `npm run test`       | Vitest component + store tests (jsdom)                         |
| `npm run test:e2e`   | Playwright E2E + axe a11y against `preview`                    |
| `npm run test:links` | Linkinator crawl of `build/`                                   |
| `npm run ci`         | Full local pipeline: lint → check → test → build → e2e → links |

## bin

Small repo-local scripts. Run from the repo root.

| Script                                  | Purpose                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `bin/encode-card-image <source> <name>` | Generates 480w + 800w JPEG and AVIF variants of a source image into `static/img/` and prints a snippet for `projects.ts`. |

### Testing layout

```
tests/setup.ts                 # Vitest global setup (jest-dom matchers, cleanup)
src/**/*.test.ts               # Vitest component + store tests
e2e/                           # Playwright specs (smoke, navigation, theme, a11y)
playwright.config.ts
vitest.config.ts
```

Run a single component test: `npx vitest src/lib/components/Header.test.ts`.
Run a single Playwright spec headed: `npx playwright test e2e/theme.spec.ts --headed`.

## CI / Deploy

GitHub Actions (`.github/workflows/ci.yml`) runs on every pull request and on pushes to `main`. The `verify` job runs `lint`, `check`, Vitest, `build`, Playwright (with axe), and Linkinator. On `main`, a dependent `deploy` job triggers the Netlify production build only after `verify` passes.

Netlify still builds deploy previews for every PR automatically — those are not gated on CI.

### How CI-gated production deploys are wired

- **Netlify**: auto-publishing on `main` is disabled, so direct pushes don't trigger a Netlify build. Deploy previews and branch deploys remain enabled.
- **Netlify build hook**: a hook targeting `main` exists; its URL is stored in GitHub as the `NETLIFY_PROD_BUILD_HOOK` repo secret.
- **GitHub Actions**: the `deploy` job fires that hook only when `verify` passes on a `main` push.

To fully gate production on green CI, add a branch protection rule on `main` requiring the `verify` check and disallowing direct pushes. Build artifacts (`build/`, `.netlify/`, `.svelte-kit/`, `playwright-report/`, `test-results/`) are git-ignored.
