# Western Steel and Forgings Limited (WSFL)

Static corporate website for WSFL — Ghana’s integrated steel rolling and forging plant in Tema.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css` via `@theme`)
- React Router `HashRouter` (static hosting without server-side routes)
- Framer Motion (hero entrance, section reveals, process scroll-sync)

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (e.g. InfinityFree). Hash routing works without rewrite rules.
