# dehaas-template

Starter Next.js project for client builds at DeHaas Webservice. Cloning this template gives you a Vercel-ready site with the design system, header/footer, contact stub, SEO defaults, Dependabot, CI, and Playwright smoke tests already in place.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind v4 + shadcn/ui (Base UI variant, Sera preset)
- next-themes for dark mode
- Playwright for smoke tests
- Dependabot weekly + auto-merge minor/patch

## Per-build checklist

When spinning up a new client repo from this template:

1. **Create the repo** from the template:
   ```
   gh repo create dehaas-<client-short-name> --template Niels020/dehaas-template --private
   gh repo clone Niels020/dehaas-<client-short-name>
   cd dehaas-<client-short-name>
   npm install
   ```

2. **Replace placeholders.** Search and replace `Client Name` and `hello@example.com` across:
   - `app/layout.tsx` (metadata title, description)
   - `components/header.tsx`
   - `components/footer.tsx`
   - `app/contact/page.tsx`

3. **Swap branding assets** in `public/`:
   - `favicon.svg`
   - `logo.svg`

4. **Set the site URL.** Add to Vercel project (Production) and to `.env.local` for dev:
   ```
   NEXT_PUBLIC_SITE_URL=https://<client-domain>
   ```
   Used by `app/sitemap.ts`, `app/robots.ts`, and `app/layout.tsx` (metadataBase).

5. **Pick the accent (optional).** Apply an accent class on `<body>` in `app/layout.tsx`:
   ```
   <body className="min-h-full flex flex-col accent-blue">
   ```
   Available: `accent-blue`, `accent-indigo`, `accent-purple`, `accent-pink`, `accent-rose`, `accent-red`, `accent-orange`, `accent-yellow`, `accent-lime`, `accent-green`, `accent-teal`, `accent-cyan`. Light + dark variants are wired in `globals.css`.

6. **Vercel link:**
   ```
   vercel link
   ```
   Set Production Branch to `main` and Preview to all other branches.

7. **Add the custom domain** in the Vercel dashboard. SSL provisions automatically.

8. **Maintenance — repo settings (one-time per repo):**
   - Settings → Code security: turn on Dependabot alerts, security updates, and version updates.
   - Settings → General → Pull Requests: tick "Allow auto-merge".
   - Settings → Branches: protect `main`, require the CI `build` status check.

9. **Add to `_project/portfolio.md`** once live.

## Local dev

```
npm run dev          # next dev
npm run build        # production build
npm run start        # production server (used by Playwright)
npm run lint
npm run test:e2e     # playwright smoke
npm run test:e2e:ui  # playwright UI mode
```

## What lives where

```
app/
  layout.tsx        Root layout — fonts, metadata, theme provider, header/footer
  page.tsx          Homepage skeleton
  contact/page.tsx  Contact route stub (mailto for now)
  sitemap.ts        Auto-generated sitemap.xml
  robots.ts         Auto-generated robots.txt
  globals.css       Design tokens (lifted from dehaas-demo): light/dark + 12 accents
components/
  header.tsx        Top nav with logo + Home/Contact
  footer.tsx        Footer with copyright + DeHaas attribution
  theme-provider.tsx next-themes wrapper
  ui/               shadcn components (added on demand: npx shadcn@latest add <name>)
.github/
  dependabot.yml
  workflows/
    ci.yml                       lint + build + Playwright
    dependabot-auto-merge.yml    auto-merges minor/patch dep PRs
tests/
  e2e/smoke.spec.ts  Route smoke: 200 + h1 visible + no console errors
playwright.config.ts
```

## Maintenance pipeline (per `_project/operations-technical.md`)

This template is the entry point for all eight maintenance tasks. As we work through each one in `_project/` it gets wired here first; clients inherit it on next build.

- ✅ #1 Updates / Dependabot — `.github/dependabot.yml`, auto-merge workflow, CI
- ⬜ #2 Technical SEO / Lighthouse CI
- ⬜ #3 Uptime monitoring (UptimeRobot — set up per-client at launch, no template change)
- ⬜ #4 Metrics tracking (Plausible script in `<head>`, Vercel Analytics)
- ⬜ #5 Compliance maintenance (cookie banner, privacy policy boilerplate)
- ⬜ #6 Form + functional checks
- ⬜ #7 Content drift checks
- ⬜ #8 Domain / DNS / SSL / backups (GitHub Action for off-platform backup)
