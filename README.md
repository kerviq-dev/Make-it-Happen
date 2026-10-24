# Make It Happen Events — London Atelier

<div align="center">

![Make It Happen Events Logo](make-it-happen-app/public/Logo.jpeg)

# MAKE IT HAPPEN EVENTS
### *Bespoke Luxury Event Planning & Architectural Experience Platform*
**London · United Kingdom**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.167.1-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Turnkey%20Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Proprietary-D4A13A?style=for-the-badge)](#)

<p align="center">
  <a href="#-executive-overview">Executive Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-route-architecture">Route Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-quickstart--local-development">Quickstart</a> •
  <a href="#-vercel-deployment-guide">Vercel Deployment</a> •
  <a href="#-contact--atelier-hotline">Contact</a>
</p>

---

</div>

## 🏛️ Executive Overview

**Make It Happen Events** is a modern, high-performance digital platform crafted for London's premier luxury event planning atelier. Rooted in British editorial sensibility and bespoke architectural event design, the platform serves high-profile private clients, milestone celebrations, society weddings, and corporate galas across Mayfair, Belgravia, Kensington, Westminster, and worldwide commissions.

The digital identity blends an **Aurelian Editorial** aesthetic:
- **Warm Champagne & Nude Cream Canvas** (`#F3E4D6`, `#FAF4EE`)
- **Delicate Blush Rose** (`#D77A91`)
- **Royal Champagne Gold Accents** (`#D4A13A`)
- **Architectural Midnight Footer** (`#090909`) with celestial astrolabe filigree
- **Autonomous WebGL Three.js 3D motion** paired with *Playfair Display* serif headlines and *Inter* metrics

---

## ✨ Key Features

### 🌌 1. Autonomous 3D WebGL Canvas (`HeroScene`)
- Real-time Three.js WebGL canvas rendered with autonomous orbital kinetics (zero mouse dependency required).
- Features floating champagne spheres, gold cylinders, blush orbital rings, and dynamic starlight particles.
- Fully responsive with automatic device pixel ratio throttling and resource disposal on route dismount to prevent memory leaks.

### 💎 2. Holographic Investment Showcase & Comparison Matrix
- **Three Core Tiers**:
  - **Essential Package (`£350`)**: Timeline creation, event consultation, and curated vendor recommendations.
  - **Standard Package (`£700`)**: Concept design, styling, vendor coordination, and on-the-day coordination.
  - **Premium Luxury (`£1,000`)**: Full event management, venue sourcing, luxury styling, and VIP concierge stewardship.
- **Interactive Comparison Modal**: Comprehensive matrix comparing all features, deliverables, and on-site coverage side-by-side.
- **Deep-Linked CTAs**: Selecting any tier automatically pre-populates the planning inquiry with that specific package.

### 🖼️ 3. Interactive Celestial Marquee & Lightbox Gallery
- Continuous GPU-accelerated horizontal orbital marquee with smooth pause-on-hover mechanics.
- **Interactive Lightbox Modal**: Tapping any circular orb opens full-screen high-resolution photography, venue details (e.g. *The Shard*, *Belgravia*, *Kensington*), architectural descriptions, and a direct **"Inquire About This Style"** CTA.

### 🕊️ 4. Curated Events & Infinite Category Slider
- Dedicated editorial features for **Weddings** (*Timeless Unions*) and **Special Occasions** (*Bespoke Gatherings*).
- **Infinite Category Slider**: Seamless looped strip covering *Birthdays & Celebrations*, *Engagement Parties*, *Blessingsway*, *Graduations*, *Church Events*, and *Corporate Galas* with direct prefilled inquiry routing.

### 📲 5. Direct WhatsApp & Fast Consultation Conduit
- **Smart URI Encoder**: Form inputs (name, package, event type, approximate date, guest count, aesthetic style, and notes) generate a clean, formatted WhatsApp dispatch message.
- **1-Click Clipboard Copy**: Built-in clipboard copying with real-time feedback toast notifications.
- **Direct Hotline**: One-tap phone dialer (`+44 7301 553790`) and direct email conduit.

### 🛎️ 6. Persistent Floating Concierge
- Unobtrusive floating action button in the lower-right corner across all pages.
- Offers instant access to WhatsApp consultation, direct atelier telephone call, and the bespoke planning proposal questionnaire.

### 📜 7. UK GDPR-Compliant Legal Architecture
- Built-in accessible **Privacy Policy** and **Terms & Conditions** modal.
- Details client confidentiality standards, private event NDAs, data retention, and booking retainer policies.

---

## 🗺️ Route Architecture

Built with modern Single Page Application (SPA) routing with instant scroll restoration and smooth page-fade transitions:

| Route | Page | Purpose & Description |
|:---|:---|:---|
| `/` | **Home** | Cinematic 3D Hero scene, brand manifesto, centered emblem lockup, and Experience teaser. |
| `/our-story` | **Our Story** | The Heritage of Craft, Visionary Precision, and The Architect persona with astrolabe background. |
| `/services` | **Bespoke Services** | Editorial stack detailing all 6 services with direct consultation CTAs. |
| `/events` | **Curated Events** | Weddings, Special Occasions, and the infinite looped experience slider. |
| `/packages` | **Investment** | Holographic vitrine packages, tri-pedestal lighting, and full comparison modal. |
| `/our-work` | **Our Work** | Celestial orbital marquee gallery with interactive high-res lightbox modals. |
| `/experience` | **The Experience** | Deep-dive into the 4 architectural pillars of bespoke gathering. |
| `/contact` | **Contact** | Celestial Halo, direct communication channels, interactive map, and note dispatch. |
| `/plan-your-event` | **Plan Your Event** | Instant WhatsApp booking conduit with URL query parameter pre-fill support. |
| `*` | **Not Found (404)** | Branded error sanctuary with 1-click return to home. |

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
|:---|:---|:---|
| **Core Framework** | React 18 | `react@^18.3.1`, `react-dom@^18.3.1` |
| **Routing** | React Router DOM v6 | `react-router-dom@^6.26.2` with SPA rewrite configuration |
| **Build Tool** | Vite 5 | Fast HMR, Rollup chunk splitting (`react`, `three`) |
| **Styling** | Vanilla CSS + Tailwind CSS | Custom Aurelian Editorial design tokens, glassmorphism, responsive utilities |
| **3D Graphics** | Three.js | Autonomous WebGL canvas, custom lighting, procedural particle geometries |
| **Typography** | Google Fonts | *Playfair Display* (Editorial Serif) & *Inter* (Geometric Sans) |
| **Icons** | Google Material Symbols | Clean outlined luxury iconography |
| **Hosting** | Vercel | Native SPA rewrites, clean URLs, and immutable asset cache headers |

---

## 📁 Repository Structure

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
        │
        ├── assets/                     # Packaged static image assets
        ├── components/
        │   ├── Buttons/                # PrimaryButton, CTA buttons
        │   ├── Footer/                 # Luxury obsidian footer with astrolabe SVG
        │   ├── Gallery/                # CelestialMarquee, InfiniteSlider
        │   ├── Header/                 # Fixed 76px non-shifting luxury navbar
        │   ├── Map/                    # LocationMap with dark styling & coordinates
        │   ├── Navigation/             # MobileMenu slide-out drawer
        │   ├── ThreeD/                 # HeroScene (WebGL Three.js autonomous drift)
        │   └── shared/                 # FloatingConcierge, LegalModal, Backgrounds
        │
        ├── data/                       # Contact details, packages, events, services
        ├── pages/                      # 10 Route page components
        ├── styles/                     # globals.css, animations.css, variables.css
        └── utils/                      # WhatsApp URL generator, SEO metadata manager
```

---

## 🚀 Quickstart & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kerviq-dev/Make-it-Happen.git
   cd Make-it-Happen
   ```

2. **Install dependencies:**
   ```bash
   cd make-it-happen-app
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build production bundle:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ☁️ Vercel Deployment Guide

This repository is pre-configured for **turnkey Vercel deployment**. Both root-level and subfolder deployments work seamlessly.

### Method 1: Deploy from Vercel Dashboard (Recommended)

1. Navigate to **[vercel.com/new](https://vercel.com/new)**.
2. Connect your GitHub account and import **`kerviq-dev/Make-it-Happen`**.
3. **Project Settings**:
   - **Framework Preset**: Leave as default / Vite
   - **Root Directory**: `./` (or select `make-it-happen-app`)
4. Click **Deploy**.

Vercel will automatically detect [`vercel.json`](vercel.json), execute `npm install && npm run build`, and serve the application from `make-it-happen-app/dist` with zero configuration needed.

### Method 2: Deploy using Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 📞 Atelier Contact & Inquiries

<div align="center">

| Channel | Details | Action |
|:---|:---|:---|
| **WhatsApp Hotline** | `+44 7301 553790` | [Chat on WhatsApp](https://wa.me/447301553790) |
| **Direct Telephone** | `+44 7301 553790` | [Call Atelier](tel:+447301553790) |
| **Email Atelier** | `makeithappenevents123@gmail.com` | [Send Email](mailto:makeithappenevents123@gmail.com) |
| **Instagram** | `@makeit376` | [Follow Instagram](https://instagram.com/makeit376) |
| **Coverage** | London (Mayfair, Kensington, Westminster) & Destination Commissions | [View on Map](https://maps.google.com/?q=London,+UK) |

<br />

**© 2026 Make It Happen Events. All Rights Reserved.**  
*Extraordinary moments are made to be remembered.*

</div>#   M a k e - i t - H a p p e n  
 