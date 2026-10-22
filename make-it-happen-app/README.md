# Make It Happen Events

> **Curating bespoke luxury experiences for the discerning few. Editorial precision meets immersive atmosphere.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.167.1-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Private-d4af37.svg)](#)

---

## 🌟 Overview

**Make It Happen Events** is a modern, high-performance web application designed for a luxury event planning atelier based in London, UK. Built with an **Aurelian Editorial** design philosophy, the interface unites deep obsidian surfaces (`#131313`) with warm gold accents (`#f2ca50`, `#d4af37`), fine glassmorphism, autonomous Three.js 3D motion, and editorial serif typography.

From high-profile weddings in Kensington to bespoke galas in Mayfair and private soirées, this platform provides an immersive digital showcase and an instant WhatsApp-first booking conduit.

---

## ✨ Key Features

* **Aurelian Editorial Design System**: Tailored dark-mode color palette, custom glassmorphism panels, radiant caustics, and typography paired with *Playfair Display* and *Inter*.
* **Autonomous 3D Canvas (`HeroScene`)**: Real-time WebGL celestial drift with Three.js rendering floating champagne spheres, gold cylinders, and orbital torus rings with ambient lighting.
* **3D Holographic Investment Orbs**: Interactive packages showcase with CSS 3D perspectives, glowing laser scanlines, staggered item animations, and responsive touch initialization.
* **Continuous Motion Galleries**:
  * **Infinite Slider**: Smooth, pause-on-hover horizontal category ribbon with gradient edge vignetting.
  * **Celestial Marquee**: True circular orbital marquee showcasing recent luxury commissions.
* **Direct WhatsApp Integration**: Pre-filled, URI-encoded message generator tailored for immediate inquiries directly to the concierge hotline (`+44 7301 553790`).
* **Luxury Noir Location Map**: Interactive London map embedded with dark inversion filters, geographic coordinates (`51.5074° N · 0.1278° W`), and a custom bouncing gold brand marker.
* **Dynamic SEO & Route Transitions**: Per-page document title and Open Graph metadata injection, combined with smooth page entry fade transitions.

---

## 🗺️ Route Architecture

The application uses client-side hash routing (`HashRouter`) to ensure seamless navigation across all hosting environments without server rewrites:

| Route | Page | Purpose & Description |
|---|---|---|
| `#/` | **Home** | Cinematic 3D Hero scene, brand manifesto, and The Experience teaser. |
| `#/our-story` | **Our Story** | The Heritage of Craft, Visionary Precision, and The Architect persona. |
| `#/services` | **Bespoke Services** | Editorial stack detailing the 6 core event curation services. |
| `#/events` | **Curated Events** | Weddings, Special Occasions, and the infinite category slider. |
| `#/packages` | **Investment** | 3D Holographic Orbs for Essential, Standard, and Premium Luxury tiers. |
| `#/our-work` | **Our Work** | Celestial orbital marquee gallery featuring past London commissions. |
| `#/experience` | **The Experience** | Deep-dive into the 4 architectural pillars of event craft. |
| `#/contact` | **Contact** | Celestial Halo, direct communication channels, and interactive London map. |
| `#/plan-your-event` | **Plan Your Event** | Instant WhatsApp booking conduit with customizable inquiry form. |
| `*` | **Not Found (404)** | Elegant branded error page with return-to-sanctuary action. |

---

## 📁 Directory Structure

```
make-it-happen-app/
├── index.html                   # HTML entry point with Google Fonts & Tailwind CDN
├── package.json                 # Scripts and package dependencies
├── vite.config.js               # Vite build configuration with chunk splitting
├── tailwind.config.js           # Design tokens, typography, and spacing scales
├── postcss.config.js            # PostCSS plugin definitions
│
└── src/
    ├── main.jsx                 # Application entry point with HashRouter
    ├── App.jsx                  # Main route hierarchy and shared layout shell
    │
    ├── assets/                  # Static assets and media registry
    │
    ├── components/
    │   ├── Header/              # Fixed glassmorphic navigation bar
    │   ├── Footer/              # Editorial 4-column studio footer
    │   ├── Navigation/          # Responsive mobile slide-in drawer
    │   ├── Buttons/             # Reusable Primary (Gold) & Ghost buttons
    │   ├── ThreeD/              # Autonomous Three.js HeroScene WebGL canvas
    │   ├── Gallery/             # InfiniteSlider & CelestialMarquee components
    │   ├── Map/                 # Luxury Noir interactive Google Maps component
    │   └── shared/              # Background caustics, ScrollToTop, SectionLabel
    │
    ├── pages/                   # Dedicated page components (Home, Events, etc.)
    │
    ├── data/                    # Single source of truth content registries
    │   ├── navigation.js        # Nav items and global CTA targets
    │   ├── services.js          # 6 services definitions and layout flags
    │   ├── events.js            # Featured event tiers & slider categories
    │   ├── packages.js          # Essential, Standard & Premium package data
    │   └── contact.js           # Phone, email, Instagram, and gallery items
    │
    ├── styles/
    │   ├── variables.css        # CSS Custom properties for typography and colors
    │   └── globals.css          # Glassmorphism, animations, orbs, and input styles
    │
    └── utils/
        ├── whatsapp.js          # Form-to-WhatsApp URI message builder
        └── seo.js               # Document title and meta tag updates
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.0.0 or higher) and `npm` installed.

### Installation

1. Navigate to the application directory:
   ```bash
   cd make-it-happen-app
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` (or the port indicated in your terminal).

### Production Build

To build the project for production deployment:

```bash
npm run build
```

The optimized static production assets will be generated in the `/dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### 1. Studio Contact Information
Update contact numbers, email, or social media handles in [`src/data/contact.js`](file:///d:/Make%20it%20Happen/make-it-happen-app/src/data/contact.js):
```javascript
export const contactInfo = {
  phone:     '+44 7301 553790',
  phoneHref: 'tel:+447301553790',
  whatsapp:  '447301553790',
  email:     'makeithappenevents123@gmail.com',
  instagram: '@makeit376',
  location:  'London & Surrounding Areas',
}
```

### 2. Service & Package Tiers
Package pricing, feature lists, and promotional badges are configured in [`src/data/packages.js`](file:///d:/Make%20it%20Happen/make-it-happen-app/src/data/packages.js).

### 3. Design Tokens & Colors
Color tokens are managed across [`tailwind.config.js`](file:///d:/Make%20it%20Happen/make-it-happen-app/tailwind.config.js) and [`src/styles/variables.css`](file:///d:/Make%20it%20Happen/make-it-happen-app/src/styles/variables.css):
* Primary Gold: `#f2ca50` / `#d4af37`
* Surface Obsidian: `#131313` / `#0e0e0e`
* Text Tone: `#e4e2e1` / `#d0c5af`

---

## 🔒 License & Credits

* **Brand**: Make It Happen Events (London, United Kingdom)
* **Status**: Private & Proprietary
* **Copyright**: © 2024–2026 Make It Happen Events. All rights reserved.
