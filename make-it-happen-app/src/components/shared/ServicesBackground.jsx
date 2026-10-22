/**
 * ServicesBackground — The Architectural Light Pillar & Horizon Beams
 * Simple, unique, and deeply professional design covering the FULL window for Services.
 * Features a full-height column of warm champagne light extending through the navbar
 * to the bottom of the screen, framed by dual horizontal golden architectural beams.
 */
export default function ServicesBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── The Full-Height Column of Light (Champagne & Nude Cream Ambiance) ─── */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[75vw] max-w-[800px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(243, 228, 214, 0.65) 30%, rgba(215, 122, 145, 0.18) 55%, rgba(212, 161, 58, 0.1) 75%, transparent 90%)',
          filter: 'blur(50px)',
          animation: 'lightPillarBreathe 12s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Top Ambient Light Corona (Behind Navbar) ─── */}
      <div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[900px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.8) 0%, rgba(248, 239, 231, 0.55) 35%, rgba(215, 122, 145, 0.15) 55%, transparent 75%)',
          filter: 'blur(45px)',
          animation: 'eventAuraFloat 16s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Bottom Ambient Light Corona ─── */}
      <div
        className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[850px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(215, 122, 145, 0.22) 0%, rgba(212, 161, 58, 0.15) 40%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'eventAuraFloat 14s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* ─── Dual Architectural Golden Horizon Beams (Framing the Viewport) ─── */}
      {/* Upper Golden Horizon Beam (Just beneath navbar level, above card) */}
      <div
        className="absolute top-[13%] left-0 right-0 h-[1px] opacity-40"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.2) 15%, rgba(212, 161, 58, 0.7) 50%, rgba(215, 122, 145, 0.2) 85%, transparent 100%)',
          boxShadow: '0 0 16px rgba(212, 161, 58, 0.3)',
          animation: 'horizonLightPulse 8s ease-in-out infinite alternate',
        }}
      />

      {/* Lower Golden Horizon Beam (Below card level) */}
      <div
        className="absolute bottom-[13%] left-0 right-0 h-[1px] opacity-40"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.2) 15%, rgba(212, 161, 58, 0.7) 50%, rgba(215, 122, 145, 0.2) 85%, transparent 100%)',
          boxShadow: '0 0 16px rgba(212, 161, 58, 0.3)',
          animation: 'horizonLightPulse 8s ease-in-out infinite alternate 1s',
        }}
      />

      {/* ─── Central Luminous Crystal Light Ray (Diagonal Architectural Axis) ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1100px] h-[3px] opacity-35"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.2) 20%, rgba(212, 161, 58, 0.7) 50%, rgba(215, 122, 145, 0.2) 80%, transparent 100%)',
          transform: 'translate(-50%, -50%) rotate(-8deg)',
          boxShadow: '0 0 20px rgba(212, 161, 58, 0.35)',
          animation: 'prismRayDrift 14s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Subtle Architectural Framing Hairlines (Left & Right) ─── */}
      <div
        className="absolute top-[13%] bottom-[13%] left-[5%] w-[1px] opacity-30 hidden md:block"
        style={{
          background:
            'linear-gradient(to bottom, rgba(212, 161, 58, 0.6), rgba(215, 122, 145, 0.2) 50%, rgba(212, 161, 58, 0.6))',
        }}
      />
      <div
        className="absolute top-[13%] bottom-[13%] right-[5%] w-[1px] opacity-30 hidden md:block"
        style={{
          background:
            'linear-gradient(to bottom, rgba(212, 161, 58, 0.6), rgba(215, 122, 145, 0.2) 50%, rgba(212, 161, 58, 0.6))',
        }}
      />

      {/* ─── Soft Champagne Edge Vignette ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(243, 228, 214, 0.35) 80%, #F3E4D6 100%)',
        }}
      />
    </div>
  )
}
