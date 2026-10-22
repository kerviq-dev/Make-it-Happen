/**
 * ExperienceBackground — Architectural Resonance & Candlelight Cadence Background
 * Exclusively designed for The Experience tab.
 * Reflects the philosophy of "Negative Space as Luxury" and "Choreographed Pacing"
 * with breathing candlelight amber blooms, architectural symmetry axes,
 * and delicate golden acoustic resonance arcs.
 */
export default function ExperienceBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── Layer 1: Atmospheric Champagne, Nude & Blush Blooms ─── */}
      {/* Upper-left champagne/white glow */}
      <div
        className="absolute top-[12%] left-[5%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0%, rgba(248, 239, 231, 0.5) 30%, rgba(215, 122, 145, 0.15) 60%, transparent 80%)',
          filter: 'blur(70px)',
          animation: 'candleBreathe 12s ease-in-out infinite alternate',
        }}
      />

      {/* Mid-page warm nude/blush glow */}
      <div
        className="absolute top-[48%] right-[5%] w-[720px] h-[720px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(243, 228, 214, 0.6) 35%, rgba(215, 122, 145, 0.2) 65%, rgba(212, 161, 58, 0.1) 80%, transparent 90%)',
          filter: 'blur(75px)',
          animation: 'candleBreathe 16s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Lower-page champagne & blush mist */}
      <div
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(215, 122, 145, 0.18) 0%, rgba(255, 255, 255, 0.6) 35%, transparent 75%)',
          filter: 'blur(60px)',
          animation: 'candleBreathe 14s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Layer 2: Architectural Negative-Space Axis ─── */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] opacity-30 hidden md:block"
        style={{
          background:
            'linear-gradient(to bottom, transparent 5%, rgba(212, 161, 58, 0.4) 25%, rgba(215, 122, 145, 0.6) 50%, rgba(212, 161, 58, 0.4) 75%, transparent 95%)',
        }}
      />

      {/* ─── Layer 3: The Cadence Resonance Arcs (SVG) ─── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
        style={{
          animation: 'resonanceBreathe 18s ease-in-out infinite alternate',
          willChange: 'transform, opacity',
        }}
      >
        <defs>
          <linearGradient id="cadenceGold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#D4A13A" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D77A91" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#D4A13A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4A13A" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="cadenceGold2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.05" />
            <stop offset="30%" stopColor="#FAF4EE" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#D77A91" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4A13A" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Primary Cadence Parabola (Atmospheric Resonance) */}
        <path
          d="M -50,220 Q 720,40 1490,220"
          fill="none"
          stroke="url(#cadenceGold1)"
          strokeWidth="1.5"
        />

        {/* Echo Parabola 1 (Choreographed Pacing) */}
        <path
          d="M -50,260 Q 720,80 1490,260"
          fill="none"
          stroke="url(#cadenceGold1)"
          strokeWidth="0.85"
          strokeDasharray="4 8"
          opacity="0.6"
        />

        {/* Mid-Page Cadence Arc (Negative Space Transition) */}
        <path
          d="M -50,650 Q 720,850 1490,650"
          fill="none"
          stroke="url(#cadenceGold2)"
          strokeWidth="1.5"
        />

        {/* Mid-Page Echo Arc */}
        <path
          d="M -50,690 Q 720,890 1490,690"
          fill="none"
          stroke="url(#cadenceGold2)"
          strokeWidth="0.75"
          strokeDasharray="3 7"
          opacity="0.55"
        />

        {/* Lower-Page Pacing Arc (Discrete Stewardship) */}
        <path
          d="M -50,1020 Q 720,900 1490,1020"
          fill="none"
          stroke="url(#cadenceGold1)"
          strokeWidth="1.25"
        />
      </svg>

      {/* ─── Layer 4: Deep Vignette for Maximum Contrast ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(14, 14, 14, 0.6) 80%, #0e0e0e 100%)',
        }}
      />
    </div>
  )
}
