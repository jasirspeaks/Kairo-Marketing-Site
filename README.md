# Kairo Marketing Site

Standalone marketing website for Kairo — the deal intelligence workspace.
This project is intentionally separate from the Kairo product repo.

## Stack

- Vite + React + TypeScript
- No UI framework dependency — plain CSS-in-JS with a shared token file
- Design tokens: `src/styles/tokens.ts` (colors, fonts, deal stages/statuses —
  kept in sync with the Kairo product Blueprint)

## Structure

```
src/
  components/       one file per page section
  styles/tokens.ts   single source of truth for all design tokens
  App.tsx            assembles all sections in order
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Vercel)

1. Push this repo to GitHub (separate from the Kairo product repo).
2. In Vercel: New Project → Import this repo.
3. Framework preset: Vite (auto-detected).
4. Build command: `npm run build` (default). Output dir: `dist` (default).
5. No environment variables required — the site has no backend calls.

## Updating product-accurate content

The mockups (Hero, Risk Evolution, Deal Review) use realistic but fictional deal
data. If the product's Deal Stage or Deal Status enums change, update
`src/styles/tokens.ts` first — every mockup pulls from it.
