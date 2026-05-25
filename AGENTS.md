# AGENTS.md — funmungus.github.io

Personal intro site for Jonathan Pelletier. React 19 SPA bootstrapped with Vite, deployed via GitHub Pages.

## Project structure

- **`project/`** — the React app (vite). All source lives here.
- Root `CNAME` sets `funmungus.github.io` as the custom domain.
- No monorepo tooling, no codegen, no migrations.

## Commands

Run everything from `project/`:

```sh
cd project
npm run dev      # dev server on :5173
npm test         # CRA test runner (Jest + react-testing-library)
npm run build    # production build → project/build/
```

## Deployment

Push to `master` → GitHub Action in `.github/workflows/deploy-to-gh-pages.yml`:
- `npm install && npm run-script build` inside `project/`
- deploys `project/build/` to the `build` branch
- GitHub Pages serves from the `build` branch

No manual deploy steps needed.

## Testing

- CRA default setup: `@testing-library/react` + `jest-dom`.
- Run via `npm test` (or `npm test -- --watchAll=false` for single-run).
- **Tests are passing**: `App.test.js` verifies the self-introduction text renders.

## Caveats

- Both `package-lock.json` and `yarn.lock` exist, but CI uses `npm`. Prefer `npm` for consistency.
- No custom ESLint/Prettier config beyond what CRA provides (`eslintConfig.react-app`).
- React 16 / `react-scripts` 3.4.3 — consider upgrading before significant feature work.
