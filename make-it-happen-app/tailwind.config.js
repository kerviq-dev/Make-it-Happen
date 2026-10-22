/** @type {import('tailwindcss').Config} */
export default {
  // Manually enable dark mode via class (matches Stitch html.dark)
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // ─── AURELIAN EDITORIAL COLOUR SYSTEM ───
      colors: {
        // ─── CLIENT NEW COLOR PALETTE ───
        // Main Background: Nude / Cream (soft beige, champagne, cream)
        'nude-cream': '#F3E4D6',
        'soft-nude': '#FAF4EE',
        'champagne': '#F8EFE7',
        'cream': '#F3E4D6',
        'seashell': '#FFF8F4',

        // Clean White Highlights
        'pure-white': '#FFFFFF',
        'white': '#FFFFFF',

        // Elegant Pink / Blush (matching flowers and logo)
        'blush-pink': '#D77A91',
        'blush': '#D77A91',
        'rose-pink': '#D77A91',
        'muted-rose': '#D77A91',

        // Luxury / Accent Gold (matching logo)
        'luxury-gold': '#D4A13A',
        'gold': '#D4A13A',
        'primary': '#D4A13A',
        'primary-container': '#B88028',
        'primary-fixed': '#FFE5A3',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#3C2A00',

        // Secondary Background: Black (used occasionally)
        'secondary-black': '#0B0B0B',
        'dark-black': '#0B0B0B',
        'midnight': '#0B0B0B',

        // Text & Neutral Tones
        'text-dark': '#241C1E',
        'text-muted': '#6B5E62',
        'on-surface': '#241C1E',
        'on-surface-variant': '#6B5E62',
        'surface': '#FAF4EE',
        'surface-dim': '#F3E4D6',
        'surface-bright': '#FFFFFF',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#FAF4EE',
        'surface-container': '#F3E4D6',
        'surface-container-high': '#EBDACE',
        'surface-container-highest': '#E2CEBF',
        'background': '#F3E4D6',
        'on-background': '#241C1E',

        'outline': '#D77A91',
        'outline-variant': '#E8CBD2',
        'error': '#BA1A1A',
      },

      // ─── TYPOGRAPHY SCALE ───
      fontFamily: {
        'display-lg':        ['"Playfair Display"', 'Georgia', 'serif'],
        'display-lg-mobile': ['"Playfair Display"', 'Georgia', 'serif'],
        'headline-md':       ['"Playfair Display"', 'Georgia', 'serif'],
        'headline-sm':       ['"Playfair Display"', 'Georgia', 'serif'],
        'body-lg':           ['Inter', 'system-ui', 'sans-serif'],
        'body-md':           ['Inter', 'system-ui', 'sans-serif'],
        'label-caps':        ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg':        ['72px',  { lineHeight: '80px',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['40px',  { lineHeight: '48px',  letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md':       ['32px',  { lineHeight: '40px',  fontWeight: '600' }],
        'headline-sm':       ['24px',  { lineHeight: '32px',  fontWeight: '600' }],
        'body-lg':           ['18px',  { lineHeight: '28px',  fontWeight: '400' }],
        'body-md':           ['16px',  { lineHeight: '24px',  fontWeight: '400' }],
        'label-caps':        ['12px',  { lineHeight: '16px',  letterSpacing: '0.1em', fontWeight: '600' }],
      },

      // ─── BORDER RADIUS (matches Stitch) ───
      borderRadius: {
        'DEFAULT': '0.125rem',   // 2px — architectural crispness
        'lg':      '0.25rem',    // 4px
        'xl':      '0.5rem',     // 8px
        'full':    '9999px',     // 9999px — true circle for orbs and pills
        '2xl':     '1rem',
      },

      // ─── SPACING TOKENS ───
      spacing: {
        'margin-desktop': '80px',
        'margin-mobile':  '24px',
        'gutter':         '32px',
        'section-gap':    '160px',
        'stack-sm':       '8px',
        'stack-md':       '16px',
        'stack-lg':       '32px',
      },

      // ─── MAX WIDTH ───
      maxWidth: {
        'site': '1440px',
      },

      // ─── BOX SHADOW ───
      boxShadow: {
        'gold-ambient': '0 0 80px rgba(212,175,55,0.15)',
        'gold-glow':    '0 0 40px rgba(212,175,55,0.2)',
        'card':         '0 24px 40px -12px rgba(0,0,0,0.5)',
        'nav':          '0 20px 50px rgba(212,175,55,0.1)',
      },

      // ─── BACKDROP BLUR ───
      backdropBlur: {
        'xl':  '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
    },
  },
  plugins: [],
}
