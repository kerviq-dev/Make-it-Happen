---
name: Aurelian Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6c3'
  on-secondary: '#31302f'
  secondary-container: '#484745'
  on-secondary-container: '#b7b4b2'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b5b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2df'
  secondary-fixed-dim: '#c9c6c3'
  on-secondary-fixed: '#1c1b1a'
  on-secondary-fixed-variant: '#484745'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is rooted in the "New Luxury" aesthetic—combining the structural discipline of high-end editorial magazines with the immersive depth of modern digital interfaces. It targets a high-net-worth clientele in London, demanding an experience that feels bespoke, curated, and quiet.

The style is a hybrid of **Minimalism** and **Glassmorphism**, characterized by:
- **Expansive Whitespace:** Using negative space as a luxury commodity to focus attention on high-quality event photography.
- **Editorial Precision:** Strict alignment and high-contrast typography that mirrors physical lookbooks.
- **Atmospheric Depth:** A dark-mode default that utilizes semi-transparent layers and soft gold luminescence to simulate a gala environment.

## Colors

The palette is anchored in a "Midnight and Champagne" theme to evoke evening elegance.

- **Primary (Soft Gold):** Used sparingly for interactive highlights, active states, and delicate borders. It should never be used for large surfaces.
- **Secondary (Warm Ivory):** Reserved for primary text content and high-contrast surface elements (like cards in light-mode sections).
- **Tertiary (Deep Charcoal):** The canvas. This near-black provides the depth necessary for gold accents to glow.
- **Neutral:** Mid-tone greys are used for secondary text and subtle UI borders to maintain a low-friction visual hierarchy.

## Typography

Typography functions as the primary decorative element. 

1.  **Headlines:** Utilize *Playfair Display* with tight letter-spacing for a modern serif feel. Large display type should use "Optical Sizing" where possible to maintain the hairline thins of the characters.
2.  **Body & UI:** *Inter* provides a functional, neutral counterpoint to the expressive serif. 
3.  **Hierarchy:** Use the `label-caps` style for section headers and small navigational elements to create a rhythmic, architectural feel across the layout.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure editorial control, transitioning to a fluid model on mobile.

- **Desktop:** 12-column grid with a max-width of 1440px. Large 80px margins create a "frame" around the content, heightening the premium feel.
- **Sectioning:** Use extreme vertical spacing (`section-gap`) to separate different event stories or service tiers, allowing the eye to rest.
- **Rhythm:** All vertical spacing should be multiples of 8px. Use asymmetrical layouts (e.g., content spanning columns 2-7 with an image spanning 8-12) to break the "template" feel.

## Elevation & Depth

Depth is achieved through material simulation rather than traditional drop shadows.

- **Glassmorphism:** Use for navigation bars and floating action cards. Apply a `20px` backdrop-blur with a `10%` white tint and a `0.5px` border in Soft Gold (#D4AF37) at `30%` opacity.
- **Tonal Layering:** Objects closer to the user are slightly lighter charcoal (#1A1A1A) rather than having heavy shadows.
- **Shadows:** When necessary, use "Ambient Glows"—extra-diffused shadows (60px blur) with a hint of gold color instead of black to simulate light reflecting off high-end surfaces.

## Shapes

The shape language is **Soft** but disciplined. 

- **Primary Elements:** Buttons and input fields use a `0.25rem` (4px) radius. This small roundness maintains a crisp, architectural look while feeling more approachable than sharp 90-degree corners.
- **Media:** Photography and large cards follow the same 4px radius to ensure a consistent "gallery" aesthetic.
- **Interactive Elements:** Small UI components like tags or chips can use `rounded-xl` for a "pill" effect to distinguish them from structural layout blocks.

## Components

### Buttons
- **Primary:** Warm Ivory background, Charcoal text. No border. On hover, the background shifts to Soft Gold.
- **Secondary/Ghost:** Transparent background with a 1px Soft Gold border. Text in Warm Ivory.
- **CTA:** Use `label-caps` typography for button labels to maintain the editorial tone.

### Input Fields
- Underline-only style or very subtle charcoal background (#1A1A1A). 
- Active state: The bottom border transitions from Neutral to Soft Gold.
- Labels: Always use `label-caps` positioned above the input.

### Cards
- **Editorial Card:** Large-scale imagery with a slight zoom-in effect on hover. Typography is overlaid using a linear-gradient scrim (black to transparent).
- **Service Card:** Glassmorphic background with a 0.5px Gold border.

### Lists & Navigation
- Use generous line-height for lists.
- Navigation links should use a subtle "expanding underline" animation in Soft Gold on hover.

### Additional Components
- **Image Carousels:** Minimalist indicators (thin lines instead of dots).
- **Modals:** Full-screen takeovers with a heavy backdrop blur to maintain the premium, immersive focus.