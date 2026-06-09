# Personal Website — William George

Personal site built with SvelteKit 2 + Svelte 5, deployed to Netlify.

## Requirements

- Node 24 LTS (see `.nvmrc`)
- npm 10+

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

## Project layout

```
src/
  app.html         # HTML shell
  app.css          # Global styles
  app.d.ts         # Ambient types
  lib/
    assets/        # SVG icons bundled via Vite
    components/    # Reusable UI
    data/          # Static content (projects, hobbies)
    stores.ts      # Theme store
    types.d.ts
  routes/
    +layout.svelte
    +page.svelte
    hobbies/+page.svelte
    projects/+page.svelte
    projects/project/p1/+page.svelte
static/
  img/             # Photos, favicons (served from /)
  theme/           # Theme CSS swapped at runtime
```

## CI / Deploy

GitHub Actions (`.github/workflows/ci.yml`) runs on every pull request and on pushes to `main`. The `verify` job runs `lint`, `check`, Vitest, `build`, Playwright (with axe), and Linkinator. On `main`, a dependent `deploy` job triggers the Netlify production build only after `verify` passes.

Netlify still builds deploy previews for every PR automatically — those are not gated on CI.

### One-time setup to enable CI-gated production deploys

1. **Netlify UI → Site configuration → Build & deploy → Continuous deployment**: disable auto-publishing for the production branch (`main`) so pushes don't trigger a Netlify build directly. Keep deploy previews and branch deploys enabled.
2. **Netlify UI → Build & deploy → Build hooks**: create a hook named `prod-deploy-from-ci` targeting branch `main`. Copy the URL.
3. **GitHub repo → Settings → Secrets and variables → Actions**: add a repository secret `NETLIFY_PROD_BUILD_HOOK` set to that URL.
4. **GitHub repo → Settings → Branches**: add a protection rule for `main` requiring the `verify` check to pass and disallowing direct pushes (PRs only).

After this, merges to `main` only ship to production if CI is green. Build artifacts (`build/`, `.netlify/`, `.svelte-kit/`, `playwright-report/`, `test-results/`) are git-ignored.
