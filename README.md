# HabitTracker — Weekly Habit Tracker

A polished single-page habit tracking app built with React, TypeScript, and Tailwind CSS v4. Features a weekly grid view (desktop table / mobile cards) with streak tracking, week navigation, and full CRUD for habits. Designed for the Frontend Assessment with emphasis on UI polish, responsive layout, and production-quality code.

## Tech Stack

- **React 19** — UI library
- **TypeScript ~6.0** — type safety
- **Tailwind CSS v4** — utility-first styling with custom `@theme` tokens and `@utility` patterns
- **Vite 8** — fast dev server and build tool
- **localStorage** — client-side persistence (no backend)

## How to Run

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push this repo to GitHub/GitLab.
2. Connect your repository on Vercel or Netlify.
3. Use `npm run build` as the build command and `dist` as the output directory.
