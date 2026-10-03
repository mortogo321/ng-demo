# ng-demo

![CI](https://github.com/mortogo321/ng-demo/actions/workflows/ci.yml/badge.svg)

An Angular scaffold with routing, shared header/footer components, and Tailwind CSS. Refreshed to Angular 22 (zoneless, standalone) with a modern toolchain.

## What's inside

- Routed pages: `/` (Welcome), `/employee` (Employee — placeholder), lazy-loaded via `app.routes.ts`
- Shared standalone `HeaderComponent` / `FooterComponent`
- Tailwind CSS v4 (`@import "tailwindcss"` + `@tailwindcss/postcss`)
- Vitest unit specs via `@angular/build:unit-test`

## Stack

- **Frontend** — Angular 22 (standalone components, zoneless), TypeScript 6 strict, Tailwind CSS 4, bun
- **Tests** — Vitest via `@angular/build:unit-test`
- **Ops** — multi-stage Dockerfile (dev + nginx production), Docker Compose, GitHub Actions CI

## Quickstart

```sh
bun install
bun start                   # dev server on :4200
```

Open http://localhost:4200.

## Other commands

```sh
bun run build                 # production build to dist/
bun run test -- --watch=false # vitest unit tests
bun run typecheck             # tsc --noEmit
bun run lint                  # prettier --check
```

## Docker

```sh
docker build --target production -t ng-demo:local .
docker compose -f compose.dev.yml up --build    # dev server on :4200
docker compose -f compose.prod.yml up --build   # nginx on :8080
```

## Structure

```
src/app/
├── app.ts / app.routes.ts / app.config.ts   # Root component, routes, providers
├── components/header|footer/                # Shared standalone components
└── pages/welcome|employee/                  # Routed page components
public/                                      # Static assets (favicon.ico)
```

## Design notes

- Zoneless change detection (no `zone.js`): standalone bootstrap with `provideRouter`, relying on Angular 22 signals-based reactivity.
- Strict TypeScript with `noUncheckedIndexedAccess`.
- Karma/Jasmine replaced with Vitest (`@angular/build:unit-test` builder, `vitest/globals` types).
- Tailwind v4 CSS-first setup (`@import "tailwindcss"` in `styles.css`, PostCSS via `@tailwindcss/postcss`); legacy `tailwind.config.js` removed.
- Bun-first workflow (`packageManager: bun@1.4.2`); `ng` runs on real Node 26 in Docker/CI via the bun-installed CLI.
- Documented pins: TypeScript stays on `~6.0.3` (Angular 22 requires `>=6.0.0 <6.1.0`; TypeScript 7 has no Angular support story yet).

## Tests

```sh
bun run test -- --watch=false   # 10 vitest specs (app + header + footer + pages)
```

CI runs lint + typecheck + tests + production build on every push, plus a production Docker build and compose validation.

## License

[MIT](LICENSE)
