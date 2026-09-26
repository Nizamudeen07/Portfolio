# Nizamudeen N — Portfolio

A Next.js (App Router) developer portfolio for Nizamudeen N, Full Stack Developer
(React.js / Next.js / Node.js), built with Tailwind CSS and Framer Motion.

All content is sourced from the resume: professional summary, skills, both
professional roles (Solwyz Technologies, DX Global Software Solutions), both
projects (Admin Analytics Dashboard, SEO-Optimized Business Website), and
education. No fabricated employers, metrics, or technologies.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animation (hero entrance, scroll reveals, project hover)
- **lucide-react** for icons
- Custom cursor + mouse-tracking spotlight in the hero (vanilla React, no
  extra dependency)

> Note: the original brief also asked for a Three.js / React Three Fiber 3D
> hero scene. That's intentionally left out of this scaffold so everything
> here is code I could actually verify runs — it's a clean addition on top
> if you want it; ask and I can add an `R3F` scene component and wire it into
> `Hero.js`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Netlify deployment

This repository includes `netlify.toml` for Netlify's Next.js runtime. Deploy
from the `main` branch with the configuration in that file; the project is a
server-rendered Next.js app and does not use a standalone `index.html` file.

## Image assets

- `public/images/nav-avatar.png` — your circular character portrait, used in the navbar.
- `public/favicon.png` / `public/apple-touch-icon.png` — the browser tab icon, generated from the same artwork.
- `public/images/character.png` — the full-body character illustration, saved but not yet placed anywhere. Ask if you'd like it added to the hero, About, or a dedicated section.

## Adding your resume PDF

The "Download Resume" buttons point at `/resume.pdf`. Add your resume file at:

```
public/resume.pdf
```

and it will resolve automatically — no code changes needed.

## Project structure

```
app/
  layout.js       — fonts, metadata, root shell
  page.js         — composes all sections
  globals.css     — Tailwind base + small global rules

components/
  Navbar.js       — sticky nav, scroll shrink, active-section highlight
  Hero.js         — hero, mouse-tracking spotlight, CTAs
  About.js        — editorial about + stat grid
  Experience.js   — vertical timeline
  Projects.js     — project showcase cards
  Skills.js       — full-stack tier flow + detailed skill grid
  HowIBuild.js    — AI-assisted workflow steps
  Contact.js      — recruiter-facing CTA + contact links
  Footer.js
  CustomCursor.js — desktop-only custom cursor, respects reduced motion
  ui/Reveal.js    — shared scroll-reveal wrapper (Framer Motion)

lib/
  constants.js    — all resume-sourced content in one place
  animations.js   — shared Framer Motion variants
```

## Editing content

All text content (name, roles, dates, projects, skills) lives in
`lib/constants.js`. Update it there and it propagates through every section —
no need to touch component markup for content changes.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables custom cursor and shortens
  animations).
- Semantic sectioning (`<section>`, `<nav>`, `<footer>`), visible focus
  states via default Tailwind/browser outlines.
- All professional information is real text in the DOM — nothing critical is
  locked inside canvas/animation-only elements.
- Fonts loaded via `next/font/google` (self-hosted at build time, no
  render-blocking external font requests).
