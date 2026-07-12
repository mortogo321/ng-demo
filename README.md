# Angular Demo Scaffold

An Angular project scaffold with routing, shared header/footer components, and Tailwind CSS wired in. Currently placeholder pages (Welcome, Employee) with no application logic yet.

## What's inside

- Routed pages: `/` (Welcome), `/employee` (Employee — placeholder)
- Shared `HeaderComponent` / `FooterComponent`
- Tailwind CSS configured via PostCSS
- Unit test specs (Karma + Jasmine) scaffolded per component

## Tech Stack

- Angular, TypeScript, RxJS
- Tailwind CSS
- Karma, Jasmine

## Quickstart

```bash
bun install
bun run start
```

The dev server runs on `http://localhost:4200`.

```bash
bun run build   # production build to dist/
bun run test    # unit tests via Karma
```

## Structure

```
src/app/components/   # Shared header/footer
src/app/pages/         # Routed page components
src/app/app-routing.module.ts
```
