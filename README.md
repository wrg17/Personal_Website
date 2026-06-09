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

| Script            | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Vite dev server with HMR                         |
| `npm run build`   | Production build via `@sveltejs/adapter-netlify` |
| `npm run preview` | Preview the production build locally             |
| `npm run check`   | Type-check Svelte + TS                           |
| `npm run lint`    | Prettier + ESLint                                |
| `npm run format`  | Prettier write                                   |

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

## Deploy

The repository is connected to Netlify; merges to `main` trigger a build. Build artifacts (`build/`, `.netlify/`, `.svelte-kit/`) are ignored from source control.
