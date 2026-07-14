# Shahrier Hasan Saki — Portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + React Router.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Project structure

```
src/
  components/ui/        Reusable primitives (Container, Tag, ThemeToggle, brand icons)
  components/layout/    Header, Footer
  components/sections/  Page-specific building blocks (EntityGraph, ProjectCard)
  pages/                One file per route
  data/                 Typed content — edit these files to update copy, no JSX hunting
  hooks/                useTheme (dark/light, persisted)
  lib/                  useSEO (per-page title/meta tags)
public/
  images/, resume/       Static assets served as-is
  robots.txt, sitemap.xml, favicon.svg, 404.html
```

To add a new Lab experiment, edit the `labs` array in `src/pages/Labs.tsx`.
To add a new project, add an entry to `src/data/projects.ts` — a detail page
is generated automatically at `/projects/<slug>`.

## Deploying for free on GitHub Pages (recommended path)

1. Create a **new GitHub repository named exactly `<your-username>.github.io`**
   (e.g. `Shahriersaki.github.io`). This is the one repo name GitHub treats
   as a *user site* — it deploys straight to `https://<username>.github.io/`
   with no sub-path, so none of the routing config below needs to change.
2. Push this project to that repo's `main` branch.
3. In the repo, go to **Settings -> Pages -> Build and deployment -> Source**
   and select **GitHub Actions**. The included workflow at
   `.github/workflows/deploy.yml` will build and deploy automatically on
   every push to `main`.
4. Your site will be live at `https://<your-username>.github.io/`.

If you'd rather use a normal project repo (e.g. `portfolio`) instead of the
`.github.io` repo, it will deploy under a sub-path
(`https://<username>.github.io/portfolio/`) — in that case set `base:
'/portfolio/'` in `vite.config.ts` and pass `basename="/portfolio"` to
`<BrowserRouter>` in `src/main.tsx`.

## Before this goes live — outstanding items

- **Domain / canonical URLs**: `index.html`, `robots.txt`, and
  `sitemap.xml` currently use the placeholder `https://shahriersaki.dev`.
  Replace every instance with your real GitHub Pages URL (or a custom
  domain if you buy one later).
- **OG image**: `og:image` / `twitter:image` point to
  `/images/og-cover.png`, which doesn't exist yet — add a 1200x630 image
  there (or tell me and I'll generate one) so link previews render
  correctly on social platforms.
- **Contact form**: the form on `/contact` is UI-only. GitHub Pages is
  static hosting and can't receive submissions, so wire the `handleSubmit`
  function in `src/pages/Contact.tsx` up to a service like Formspree,
  Getform, or Resend.
- **Project screenshots**: none of the project cards or case studies have
  screenshots yet. Send them over and I'll add them.
- **GitHub repo links**: only Hotel Schema Maker has a linked repo. If the
  other four projects are public (or you're willing to make them public),
  send the links and I'll wire them into `/github` and each project's
  detail page.
- **Blog**: the sitemap and structure account for a future `/blog` section,
  but no blog UI exists yet — this was intentionally deferred until you
  have content to write.
