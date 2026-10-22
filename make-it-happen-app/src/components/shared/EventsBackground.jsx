/**
 * EventsBackground — Bespoke, Professional Silk Ribbon Wave Background
 * Exclusively designed for the Events page.
 * Creates an organic, flowing luxury silk contour across the entire page scroll,
 * paired with architectural editorial margin guidelines and warm champagne radiance.
 */
export default function EventsBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── Ambient Radiant Blooms ─── */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(248, 239, 231, 0.55) 30%, rgba(215, 122, 145, 0.15) 55%, transparent 75%)',
          filter: 'blur(140px)',
        }}
      />
      {/* Middle Section Warm Nude & Blush Bloom */}
      <div
        className="absolute top-[38%] left-[-10%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.85) 0%, rgba(243, 228, 214, 0.65) 35%, rgba(215, 122, 145, 0.2) 60%, transparent 80%)',
          filter: 'blur(130px)',
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(215, 122, 145, 0.22) 0%, rgba(212, 161, 58, 0.15) 45%, transparent 75%)',
          filter: 'blur(150px)',
        }}
      />

      {/* ─── Architectural Editorial Margin Guidelines (Left & Right) ─── */}
      <div
        className="absolute top-0 bottom-0 left-[4%] md:left-[6%] w-[1px] opacity-35 hidden sm:block"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(212, 161, 58, 0.3) 12%, rgba(215, 122, 145, 0.5) 50%, rgba(212, 161, 58, 0.3) 88%, transparent)',
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-[4%] md:right-[6%] w-[1px] opacity-35 hidden sm:block"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(212, 161, 58, 0.3) 12%, rgba(215, 122, 145, 0.5) 50%, rgba(212, 161, 58, 0.3) 88%, transparent)',
        }}
      />

      {/* ─── Full-Canvas SVG Silk Ribbon Waves ─── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Silk Wave Gold & Blush Gradients */}
          <linearGradient id="silkGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#D4A13A" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#D77A91" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#D4A13A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4A13A" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="silkGoldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.05" />
            <stop offset="30%" stopColor="#FAF4EE" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D77A91" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4A13A" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="silkGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A13A" stopOpacity="0" />
            <stop offset="30%" stopColor="#FAF4EE" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#D77A91" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4A13A" stopOpacity="0" />
          </linearGradient>

          <filter id="ribbonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ribbon Glow Layer (Broad Soft Luminous Ambient Stroke) */}
        <path
          d="M -100,140 C 350,60 600,240 1000,160 C 1250,110 1400,220 1600,170"
          fill="none"
          stroke="url(#silkGlowGrad)"
          strokeWidth="32"
          filter="url(#ribbonBlur)"
        />

        {/* Primary Silk Ribbon Wave 1 (Upper Header & Wedding Margin) */}
        <path
          d="M -100,140 C 350,60 600,240 1000,160 C 1250,110 1400,220 1600,170"
          fill="none"
          stroke="url(#silkGoldGrad1)"
          strokeWidth="1.25"
        />

        {/* Secondary Echo Ribbon Wave (Harmonic Moire) */}
        <path
          d="M -100,170 C 330,90 620,270 980,190 C 1230,140 1420,250 1600,200"
          fill="none"
          stroke="url(#silkGoldGrad1)"
          strokeWidth="0.8"
          strokeDasharray="5 7"
          opacity="0.5"
        />

        {/* Mid-Page Wave 2 (Flowing in the space between Weddings and Special Occasions) */}
        <path
          d="M -100,520 C 400,420 700,600 1100,480 C 1300,420 1450,540 1600,500"
          fill="none"
          stroke="url(#silkGoldGrad2)"
          strokeWidth="1.25"
        />

        {/* Secondary Mid-Page Echo */}
        <path
          d="M -100,550 C 380,450 720,630 1080,510 C 1280,450 1470,570 1600,530"
          fill="none"
          stroke="url(#silkGoldGrad2)"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          opacity="0.45"
        />

        {/* Lower Page Wave 3 (Flowing beneath the More Experiences Carousel at base) */}
        <path
          d="M -100,1170 C 300,1120 650,1190 1050,1140 C 1320,1110 1480,1180 1600,1150"
          fill="none"
          stroke="url(#silkGoldGrad1)"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  )
}
