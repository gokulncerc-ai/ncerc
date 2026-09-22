# NCERC Next.js Header Migration

Header for ncerc.ac.in ported from `newheader.php` (PHP + jQuery) to
Next.js 15 (App Router) + TypeScript + Tailwind, using pnpm.

## Run it

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## What's here

```
src/
  app/
    layout.tsx        fonts + <html>/<body> shell
    page.tsx           preview page that renders SiteHeader
    globals.css         Tailwind + the announcement marquee keyframes
  components/header/
    navigation.ts        typed nav tree (see below)
    SiteHeader.tsx        utility bar + logo + nav + search + mobile toggle
    DesktopNavigation.tsx  dropdowns, and a 4-column mega menu for Departments
    MobileNavigation.tsx  accordion for small screens
    AnnouncementBar.tsx    horizontal marquee, replaces the old vertical ticker
```

## Navigation data

`navigation.ts` mirrors the *current* production header
(`newheader.php`): **Home, About Us, Admission, Academics,
Departments, Placements, RTI, R&D Cell, IQAC**. Submenu items for
each of those (About NCERC, Admission Procedure, B.Tech/M.Tech
departments, IQAC/AQAR, etc.) are carried over unchanged from the
legacy site so no existing link is lost.

Two items need real content before launch:

- **R&D Cell** — no source page existed in either PHP file you
  shared, so it currently points at a placeholder `/rd-cell`.
- Items still marked `external` link straight at the legacy PDF
  paths (HR Policy, brochures, RTI, bank details) — move those PDFs
  into `/public/downloads/...` and swap the `href`s once they're on
  the new host.

Utility-bar-only items from the old design (Student Portal, Alumni,
News & Events, social icons) live in `utilityNavigation` /
`socialLinks`, separate from the primary 9-item nav so the header
doesn't get overcrowded on desktop.

## Images

Copy the existing assets into `public/images/` keeping the same
relative paths the PHP used (e.g. `images/ncerc_logo_1.png`,
`images/main-slider/naac.jpg`) so nothing in `navigation.ts` or
`SiteHeader.tsx` needs to change:

```
public/images/ncerc_logo_1.png
public/images/main-slider/naac.jpg
public/images/main-slider/nba.png
public/images/main-slider/aicte.png
public/images/main-slider/iso.png
public/images/main-slider/ktu.png
```

`next/image` handles resizing/optimization — just point `src` at the
`/public`-relative path.

## Notes on the rebuild

- Dropdowns use CSS `group-hover` (desktop) and a controlled
  accordion (mobile) instead of jQuery/Bootstrap's collapse plugin.
- Departments renders as a 4-column mega menu (B.Tech, M.Tech, MCA,
  MBA) instead of a nested `<ul>`, since it's the one item with
  grandchildren.
- The vertical `margin-top` keyframe ticker is replaced with a CSS
  `translateX` marquee (`announcement-track` in `globals.css`),
  which is cheaper to animate and pauses on hover/`prefers-reduced-motion`.
- All interactive pieces (`SiteHeader`, `DesktopNavigation`,
  `MobileNavigation`) are client components (`"use client"`); layout
  and page stay server components.
