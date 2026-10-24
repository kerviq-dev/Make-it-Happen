<div align="center">

<img src="make-it-happen-app/public/Logo.jpeg" alt="Make It Happen Events" width="120" height="120" style="border-radius: 50%;" />

# Make It Happen Events

### Bespoke Luxury Event Planning & Digital Experience Platform
**London, United Kingdom**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r167-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

[Overview](#overview) &nbsp;·&nbsp; [Features](#features) &nbsp;·&nbsp; [Tech Stack](#tech-stack) &nbsp;·&nbsp; [Quickstart](#quickstart) &nbsp;·&nbsp; [Deploy](#deploy-to-vercel) &nbsp;·&nbsp; [Contact](#contact)

</div>

---

## Overview

**Make It Happen Events** is a high-performance web platform for a luxury event-planning atelier based in London. Built with an *Aurelian Editorial* design language — champagne surfaces, blush rose accents, gold highlights, and autonomous Three.js WebGL motion — it delivers an immersive showcase and a frictionless WhatsApp-first booking experience.

From high-profile weddings in Kensington to bespoke galas in Mayfair and private soirées, every route is crafted to convert visitors into consultations.

---

## Features

- **Autonomous 3D WebGL Hero** — Real-time Three.js canvas with orbital champagne spheres, gold rods, and starlight particles (zero mouse dependency).
- **Holographic Package Showcase** — Interactive investment cards with glowing scanlines and a full side-by-side comparison modal across three tiers (Essential £350 / Standard £700 / Premium £1,000).
- **Infinite Motion Galleries** — Pause-on-hover horizontal category ribbon and a circular orbital marquee with high-res lightbox modals.
- **WhatsApp-First Booking** — Smart URI encoder that pre-fills a WhatsApp consultation message (`+44 7301 553790`) with one-tap clipboard copy and toast feedback.
- **Floating Concierge Widget** — Persistent bottom-right quick-access to WhatsApp, phone, and the planning questionnaire.
- **Interactive London Map** — Coverage map pinpointing Mayfair, Kensington, and Westminster with custom dark styling.
- **UK GDPR-Compliant Legal Layer** — Integrated Privacy Policy & Terms of Service modal.
- **Full SPA Routing** — Instant scroll restoration, page-fade transitions, and clean URLs via Vercel rewrites.

---

## Pages

| Route | Page | Description |
|:------|:-----|:------------|
| `/` | **Home** | Cinematic 3D hero, brand manifesto, and Experience teaser |
| `/our-story` | **Our Story** | Heritage narrative with astrolabe geometry |
| `/services` | **Services** | Editorial stack of all 6 bespoke services |
| `/events` | **Events** | Weddings, occasions, and the infinite experience slider |
| `/packages` | **Packages** | Holographic investment tiers + comparison modal |
| `/our-work` | **Our Work** | Celestial orbital gallery with lightbox modals |
| `/experience` | **Experience** | The 4 architectural pillars of bespoke gatherings |
| `/contact` | **Contact** | Communication channels, map, and note dispatch |
| `/plan-your-event` | **Plan Your Event** | WhatsApp booking with URL query pre-fill |
| `*` | **404** | Branded error page with return-to-home CTA |

---

## Tech Stack

| Layer | Technology | Version |
|:------|:-----------|:--------|
| Framework | React | `^18.3.1` |
| Routing | React Router DOM | `^6.26.2` |
| Build Tool | Vite | `^5.4.8` |
| Styling | Tailwind CSS + Vanilla CSS | `^3.4.14` |
| 3D Graphics | Three.js | `^0.167.1` |
| Typography | Google Fonts | Playfair Display · Inter |
| Deployment | Vercel | SPA rewrites + security headers |

---

## Repository Structure

```
Make-it-Happen/
├── .gitignore              # Root ignore rules
├── package.json            # Root orchestration scripts
├── vercel.json             # Vercel deployment configuration
├── README.md               # This file
│
└── make-it-happen-app/     # Production web application
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── vercel.json
    ├── public/
    │   ├── Logo.jpeg
    │   └── favicon.ico
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── components/     # Header, Footer, Gallery, Map, ThreeD, shared
        ├── data/           # Contact, events, navigation, packages, services
        ├── pages/          # 10 route-level page components
        ├── styles/         # globals.css, animations.css, variables.css
        └── utils/          # WhatsApp URL builder, SEO metadata
```

---

## Quickstart

**Prerequisites:** Node.js ≥ 18, npm ≥ 9

```bash
# 1. Clone
git clone https://github.com/kerviq-dev/Make-it-Happen.git
cd Make-it-Happen

# 2. Install & run dev server
cd make-it-happen-app
npm install
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build
npm run preview
```

Or from the repository root:

```bash
npm run dev        # start dev server
npm run build      # install deps + build
npm run preview    # preview production bundle
```

---

## Deploy to Vercel

The project ships with a ready-to-use [`vercel.json`](vercel.json) at the root.

### One-click via Dashboard

1. Go to **[vercel.com/new](https://vercel.com/new)** and import `kerviq-dev/Make-it-Happen`.
2. Keep the **Root Directory** as `./` (the default).
3. Click **Deploy** — Vercel reads `vercel.json` automatically.

### Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

> Vercel will run `cd make-it-happen-app && npm install && npm run build` and serve from `make-it-happen-app/dist` with SPA rewrites and security headers applied.

---

## Contact

| Channel | Details |
|:--------|:--------|
| WhatsApp | [+44 7301 553790](https://wa.me/447301553790) |
| Phone | [+44 7301 553790](tel:+447301553790) |
| Email | [makeithappenevents123@gmail.com](mailto:makeithappenevents123@gmail.com) |
| Instagram | [@makeit376](https://instagram.com/makeit376) |
| Coverage | London (Mayfair · Kensington · Westminster) & Global |

---

<div align="center">

**© 2026 Make It Happen Events. All Rights Reserved.**  
*Extraordinary moments are made to be remembered.*

</div>