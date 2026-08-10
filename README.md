# Ayush Varma — Portfolio

Senior Shopify Engineer · Shopify Apps · 3D / WebGL · React & Next.js

Live at **[theayushvarma.vercel.app](https://theayushvarma.vercel.app)**

- **LinkedIn** — [linkedin.com/in/theayushvarma](https://linkedin.com/in/theayushvarma)
- **GitHub** — [github.com/theayushvarma](https://github.com/theayushvarma)
- **Email** — vayush798@gmail.com

---

## What's in here

A Next.js 14 (App Router) portfolio built on the [Once UI Magic Portfolio](https://once-ui.com) template, customised throughout.

| Route | Purpose |
| --- | --- |
| `/` | Hero, featured case studies, latest posts |
| `/about` | Bio, work history, education, skills |
| `/work`, `/work/[slug]` | Case studies (MDX) |
| `/blog`, `/blog/[slug]` | Technical posts (MDX) |
| `/project` | Project gallery — every tile links to a live site |
| `/resume` | Resume PDF viewer + download |
| `/og` | Dynamic OpenGraph image generation (edge runtime) |

## Stack

Next.js 14 · React 18 · TypeScript · SCSS + Once UI design system · MDX (`next-mdx-remote`, `gray-matter`) · Vercel

## Content

Almost everything user-facing lives in two files:

- **`src/app/resources/content.js`** — person, social, home, about, work history, skills, gallery
- **`src/app/resources/config.js`** — `baseURL`, route toggles, theme tokens, background effects

Case studies are MDX in `src/app/work/projects/`; posts are MDX in `src/app/blog/posts/`. Frontmatter contract is defined by the `Metadata` type in `src/app/utils/utils.ts`.

## URL conventions

`baseURL` in `config.js` includes the scheme and has **no trailing slash**. Always build URLs with the helpers:

```ts
import { absoluteUrl, ogUrl } from "@/app/utils/url";
```

Never interpolate `` `https://${baseURL}` `` — that produces `https://https/...`. Acceptance check:

```bash
grep -rn 'https://${baseURL}' src/   # must return nothing
```

## Resume

Sources are LaTeX at the repo root:

| File | Target |
| --- | --- |
| `resume.tex` | Master, dual-positioned |
| `resume-commerce.tex` | Shopify / commerce roles |
| `resume-frontend3d.tex` | 3D and frontend roles |

There is no local LaTeX toolchain. Compile on [Overleaf](https://overleaf.com) (new blank project → paste → Recompile → download), then save the PDF to `public/pdf/resume.pdf`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # must pass before committing
```

## Gallery screenshots

Captured headlessly with Edge at 1600×900, cropped to 1600×730:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --hide-scrollbars `
  --window-size=1600,900 --virtual-time-budget=2500 `
  --user-data-dir="$env:TEMP\edge-shot" `
  --screenshot="public\images\gallery\NN.png" "https://example.com"
```

Keep `--virtual-time-budget` around 2500ms: long enough for the hero to render, short enough to beat most newsletter popups.

**Re-verify every gallery link before an interview or application.** A dead link costs more than a missing one.
