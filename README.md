# Jafar Madadi Portfolio

Production portfolio for Jafar Madadi, a Senior Software Engineer and Software Architect focused on enterprise platforms, backend architecture, APIs, workflow automation, and full-stack delivery.

## Technology

- Next.js 16 App Router and React 19
- Vinext and Vite for Cloudflare-compatible rendering
- TypeScript in strict mode
- Tailwind CSS and `next-themes`
- Cloudflare Worker runtime and OpenAI Sites hosting
- Formspree for contact-form delivery

## Architecture

```text
app/          Routes, metadata routes, layout, and global styles
components/   Reusable presentation and interactive components
data/         Typed portfolio content and public site configuration
lib/          Environment resolution and small pure utilities
types/        Shared portfolio data contracts
worker/       Cloudflare Worker entry point and response headers
tests/        Focused tests for configuration boundaries
```

Portfolio content, navigation, professional links, and public site metadata are centralized in `data/portfolio.ts`. Environment-dependent URL and form handling live in `lib/`.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Setup

```bash
npm ci
copy .env.example .env.local
npm run dev
```

The development server prints the local URL when ready.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical production origin used by metadata, sitemap, and structured data |
| `NEXT_PUBLIC_BASE_PATH` | Optional | Production subdirectory such as `/portfolio` for GitHub Pages assets and résumé links |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Optional | Formspree form ID; without it, the contact page provides a direct-email fallback |

Formspree form IDs are public routing identifiers, not API secrets. Do not add private keys or credentials to `NEXT_PUBLIC_*` variables.

## Scripts

```bash
npm run dev        # Start local development
npm run lint       # Run Next.js, React, TypeScript, and accessibility lint rules
npm run typecheck  # Run strict TypeScript checks
npm test           # Run focused Node tests
npm run build      # Create the production Cloudflare build
npm run check      # Run every verification step in sequence
npm run start      # Serve a completed production build locally
```

## Contact form behavior

The form uses progressive enhancement in a client component. It validates native HTML fields, posts directly to Formspree, exposes sending/success/error states to assistive technology, includes a spam honeypot, and falls back to email when no form ID is configured.

## SEO and accessibility

The app includes route metadata, canonical configuration, Open Graph and X metadata, JSON-LD person data, `sitemap.xml`, `robots.txt`, a web manifest, semantic heading structures, a skip link, current-page navigation semantics, visible focus states, reduced-motion support, and an accessible not-found page.

## Testing and continuous integration

GitHub Actions runs installation, linting, strict type checks, tests, and a production build for pull requests and changes to `main`. Deployment is managed by Sites using `.openai/hosting.json`; the CI workflow intentionally does not publish server output as static GitHub Pages files.

## Deployment

The repository is configured for OpenAI Sites and emits a Cloudflare Worker-compatible ESM bundle into `dist/`. Keep `.openai/hosting.json`, `vite.config.ts`, `build/sites-vite-plugin.ts`, and `worker/index.ts` aligned when changing runtime behavior.

Before publishing:

```bash
npm ci
npm run check
```

Set hosted runtime values through the Sites environment rather than committing secrets.

The repository also includes a separate GitHub Pages workflow. That build uses a static export with `NEXT_PUBLIC_BASE_PATH=/portfolio`, so navigation, images, metadata assets, and `resume.pdf` resolve correctly from `https://jafarxdev.github.io/portfolio/`. The Sites build remains base-path-free and continues to use Vinext.
