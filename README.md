# Make It Happen Events — London Atelier

<div align="center">

<img src="make-it-happen-app/public/Logo.jpeg" alt="Make It Happen Events" width="130" height="130" style="border-radius: 50%;" />

# MAKE IT HAPPEN EVENTS
### Bespoke Luxury Event Planning & Architectural Experience Platform
**London · United Kingdom**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.167.1-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Turnkey%20Deploy-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Location](https://img.shields.io/badge/Location-London%20·%20UK-D4A13A?style=flat-square)](#)

[Executive Overview](#executive-overview) &nbsp;|&nbsp;
[Key Features](#key-features) &nbsp;|&nbsp;
[Route Architecture](#route-architecture) &nbsp;|&nbsp;
[Tech Stack](#tech-stack) &nbsp;|&nbsp;
[Quickstart](#quickstart) &nbsp;|&nbsp;
[Vercel Deployment](#vercel-deployment) &nbsp;|&nbsp;
[Contact](#contact)

</div>

---

## Executive Overview

**Make It Happen Events** is a modern, high-performance web platform designed for a luxury event planning atelier based in London, UK. Built with an **Aurelian Editorial** design philosophy, the interface unites warm champagne surfaces (`#F3E4D6`), blush rose accents (`#D77A91`), rich gold highlights (`#D4A13A`), autonomous Three.js 3D motion, and editorial serif typography.

From high-profile weddings in Kensington to bespoke galas in Mayfair and private soirées, this platform provides an immersive digital showcase and an instant WhatsApp-first booking conduit.

---

## Key Features

- **Autonomous 3D WebGL Canvas (`HeroScene`)**: Real-time Three.js WebGL canvas rendered with autonomous orbital kinetics (zero mouse dependency required), featuring champagne spheres, gold rods, and starlight particles.
- **Holographic Investment Showcase**: Interactive package cards with 3D perspectives, glowing scanlines, and deep-linked selection for:
  - **Essential Package (£350)**: Event consultation, planning guidance, timeline creation, and vendor recommendations.
  - **Standard Package (£700)**: Everything in Essential plus theme & concept design, vendor coordination, and on-the-day coordination.
  - **Premium Luxury (£1,000)**: Full event management, venue sourcing & management, luxury décor styling, and VIP concierge stewardship.
- **Package Comparison Matrix**: Interactive modal comparing all three tiers across all deliverables side-by-side.
- **Continuous Motion Galleries**:
  - **Infinite Slider**: Smooth, pause-on-hover horizontal category ribbon with gradient edge vignetting for event types.
  - **Celestial Marquee**: True circular orbital marquee showcasing recent luxury commissions with an interactive Lightbox Modal and direct style inquiry CTAs.
- **Direct WhatsApp Integration**: Smart URI encoder creating pre-filled WhatsApp consultation inquiries (`+44 7301 553790`) with one-click clipboard copying and toast notifications.
- **Interactive London Map**: Atelier coverage map highlighting Mayfair, Kensington, Westminster, and destination commissions.
- **Persistent Floating Concierge**: Bottom-right floating action widget for 1-tap access to WhatsApp, phone hotline, and planning questionnaire.
- **UK GDPR-Compliant Legal Architecture**: Integrated modal for Privacy Policy and Terms of Service.

---

## Route Architecture

Built with modern Single Page Application (SPA) routing with instant scroll restoration and smooth page-fade transitions:

| Route | Page | Purpose & Description |
| :--- | :--- | :--- |
| `/` | **Home** | Cinematic 3D Hero scene, brand manifesto, centered emblem, and The Experience teaser. |
| `/our-story` | **Our Story** | The Heritage of Craft, Visionary Precision, and The Architect persona with astrolabe geometry. |
| `/services` | **Bespoke Services** | Editorial stack detailing all 6 services with direct consultation CTAs. |
| `/events` | **Curated Events** | Weddings, Special Occasions, and the infinite looped experience slider. |
| `/packages` | **Investment** | Holographic vitrine packages, tri-pedestal lighting, and full comparison modal. |
| `/our-work` | **Our Work** | Celestial orbital marquee gallery with interactive high-res lightbox modals. |
| `/experience` | **The Experience** | Deep-dive into the 4 architectural pillars of bespoke gathering. |
| `/contact` | **Contact** | Celestial Halo, direct communication channels, interactive map, and note dispatch. |
| `/plan-your-event` | **Plan Your Event** | Instant WhatsApp booking conduit with URL query parameter pre-fill support. |
| `*` | **Not Found (404)** | Branded error sanctuary with 1-click return to home. |

---

## Tech Stack

| Layer | Technology | Version / Spec |
| :--- | :--- | :--- |
| **Core Framework** | React | `^18.3.1` |
| **DOM Renderer** | React DOM | `^18.3.1` |
| **Routing** | React Router DOM | `^6.26.2` |
| **Build Tool** | Vite | `^5.4.8` |
| **CSS & Design System** | Tailwind CSS + Vanilla CSS | `^3.4.14` |
| **3D Graphics** | Three.js | `^0.167.1` |
| **Typography** | Google Fonts | *Playfair Display* & *Inter* |
| **Iconography** | Material Symbols Outlined | Google Fonts Webfont |
| **Deployment** | Vercel | Clean URLs, security headers, SPA rewrites |

---

## Repository Structure

```
Make-it-Happen/
├── .gitignore                          # Root ignore rules (node_modules, dist, etc.)
├── package.json                        # Root package orchestration scripts
├── vercel.json                         # Root Vercel deployment configuration
├── README.md                           # Master repository documentation
│
└── make-it-happen-app/                 # Complete production web application
    ├── index.html                      # HTML5 entry with preconnected typography
    ├── package.json                    # Application dependencies & Vite scripts
    ├── vite.config.js                  # Rollup manual chunking & path aliases
    ├── tailwind.config.js              # Atelier color tokens & typography scale
    ├── vercel.json                     # Subfolder Vercel configuration
    │
    ├── public/
    │   ├── Logo.jpeg                   # High-resolution brand logo asset
    │   └── favicon.ico                 # Browser tab favicon
    │
    └── src/
        ├── main.jsx                    # React root mount with BrowserRouter
        ├── App.jsx                     # Layout shell, Header, FloatingConcierge, Footer
        ├── assets/                     # Static image assets
        ├── components/
        │   ├── Buttons/                # PrimaryButton, CTA buttons
        │   ├── Footer/                 # Luxury obsidian footer with astrolabe SVG
        │   ├── Gallery/                # CelestialMarquee, InfiniteSlider
        │   ├── Header/                 # Fixed 76px non-shifting luxury navbar
        │   ├── Map/                    # LocationMap with dark styling & coordinates
        │   ├── Navigation/             # MobileMenu slide-out drawer
        │   ├── ThreeD/                 # HeroScene (WebGL Three.js autonomous drift)
        │   └── shared/                 # FloatingConcierge, LegalModal, Backgrounds
        ├── data/                       # Contact details, packages, events, services
        ├── pages/                      # 10 Route page components
        ├── styles/                     # globals.css, animations.css, variables.css
        └── utils/                      # WhatsApp URL generator, SEO metadata manager
```

---

## Quickstart

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kerviq-dev/Make-it-Happen.git
   cd Make-it-Happen
   ```

2. **Install dependencies and start development server:**
   ```bash
   cd make-it-happen-app
   npm install
   npm run dev
   ```
   Open **`http://localhost:5173`** in your browser.

3. **Build and preview production bundle:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Vercel Deployment

This project includes turnkey configuration for Vercel.

### Deploy via Vercel Dashboard

1. Navigate to **[vercel.com/new](https://vercel.com/new)**.
2. Import **`kerviq-dev/Make-it-Happen`**.
3. Keep default settings (`./` root directory).
4. Click **Deploy**.

Vercel will automatically read [`vercel.json`](vercel.json), run `cd make-it-happen-app && npm install && npm run build`, and serve the application with native SPA routing.

---

## Atelier Contact

| Channel | Details | Action |
| :--- | :--- | :--- |
| **WhatsApp Hotline** | `+44 7301 553790` | [Chat on WhatsApp](https://wa.me/447301553790) |
| **Direct Telephone** | `+44 7301 553790` | [Call Atelier](tel:+447301553790) |
| **Email Atelier** | `makeithappenevents123@gmail.com` | [Send Email](mailto:makeithappenevents123@gmail.com) |
| **Instagram** | `@makeit376` | [Follow Instagram](https://instagram.com/makeit376) |
| **Coverage Area** | London (Mayfair, Kensington, Westminster) & Global Commissions | [View on Map](https://maps.google.com/?q=London,+UK) |

---

<div align="center">

**© 2026 Make It Happen Events. All Rights Reserved.**  
*Extraordinary moments are made to be remembered.*

</div>
#   M a k e - i t - H a p p e n  
 