# Running Locally — Mitadru Karmakar Portfolio

## Prerequisites

| Tool | Version | How to get it |
|------|---------|---------------|
| Node.js | v24 | [nodejs.org](https://nodejs.org) |
| pnpm | Latest | `npm install -g pnpm` (after installing Node) |

---

## Setup

**1. Clone / download the project, then open a terminal in the project root folder.**

**2. Install all dependencies:**

```bash
pnpm install
```

---

## Running the Dev Server

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

Then open **http://localhost:3000** in your browser.

> **Note:** The `PORT` and `BASE_PATH` variables are required by the Vite config. On Replit these are set automatically — locally you must pass them yourself as shown above.

---

## Building for Production

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/portfolio run build
```

Built files are output to `artifacts/portfolio/dist/public/`. You can serve this folder with any static file host (e.g. Nginx, GitHub Pages, Netlify, Vercel).

---

## Notes

- **No database required** — the portfolio is entirely frontend-only.
- **No API keys required** — no external services are used.
- Two Replit-specific dev plugins (`@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`) are conditionally loaded only when `REPL_ID` is set, so they are automatically skipped when running locally — no action needed.
