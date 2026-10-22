/**
 * PackagesBackground — The Luxury Vitrine Horizon & Tri-Pedestal Light System
 * Completely unique design covering the FULL window for the Packages (Investment) tab.
 * Replaces the tech grid with museum-grade vitrine illumination:
 * Three upward-projecting champagne pedestal glows under the 3 packages,
 * an overhead vault canopy glow behind the header, and an architectural horizon datum beam.
 */
export default function PackagesBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── Overhead Vault Canopy Glow (Fills Behind Navbar & Header) ─── */}
      <div
        className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(248, 239, 231, 0.6) 30%, rgba(215, 122, 145, 0.18) 55%, transparent 75%)',
          filter: 'blur(55px)',
          animation: 'pedestalBreathe 12s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Tri-Pedestal Upward Light Beacons (Directly Beneath the 3 Package Tiers) ─── */}
      {/* Pedestal 1: Essential (£350) - Left Column */}
      <div
        className="absolute bottom-[-10%] left-[20%] w-[320px] h-[650px] pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(215, 122, 145, 0.2) 0%, rgba(212, 161, 58, 0.15) 35%, rgba(255, 255, 255, 0.4) 55%, transparent 75%)',
          filter: 'blur(50px)',
          animation: 'pedestalBreathe 10s ease-in-out infinite alternate 0.5s',
        }}
      />

      {/* Pedestal 2: Standard (£700) - Center Column */}
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[380px] h-[720px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(255, 255, 255, 0.9) 0%, rgba(243, 228, 214, 0.7) 30%, rgba(215, 122, 145, 0.22) 55%, transparent 75%)',
          filter: 'blur(50px)',
          animation: 'pedestalBreathe 9s ease-in-out infinite alternate',
        }}
      />

      {/* Pedestal 3: Premium Luxury (£1,000) - Right Column (Featured / Richest Glow) */}
      <div
        className="absolute bottom-[-10%] right-[20%] w-[380px] h-[720px] pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(212, 161, 58, 0.25) 0%, rgba(215, 122, 145, 0.22) 35%, rgba(255, 255, 255, 0.5) 55%, transparent 80%)',
          filter: 'blur(55px)',
          animation: 'pedestalBreathe 11s ease-in-out infinite alternate 1s',
        }}
      />

      {/* ─── Architectural Vitrine Horizon Datum Beam ─── */}
      <div
        className="absolute bottom-[16%] left-0 right-0 h-[1px] opacity-40"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.2) 15%, rgba(212, 161, 58, 0.7) 50%, rgba(215, 122, 145, 0.2) 85%, transparent 100%)',
          boxShadow: '0 0 16px rgba(212, 161, 58, 0.35)',
          animation: 'horizonLightPulse 8s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Upper Architectural Framing Hairline ─── */}
      <div
        className="absolute top-[140px] left-0 right-0 h-[1px] opacity-35"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.15) 20%, rgba(212, 161, 58, 0.5) 50%, rgba(215, 122, 145, 0.15) 80%, transparent 100%)',
        }}
      />

      {/* ─── Subtle Geometric Registration Ticks ─── */}
      <div className="absolute top-[136px] left-[15%] text-[#D77A91] text-[10px] font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-[136px] right-[15%] text-[#D77A91] text-[10px] font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-[14%] left-[15%] text-[#D77A91] text-[10px] font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-[14%] right-[15%] text-[#D77A91] text-[10px] font-mono select-none pointer-events-none">
        +
      </div>

      {/* ─── Full-Window Soft Champagne Vignette ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(243, 228, 214, 0.4) 80%, #F3E4D6 100%)',
        }}
      />
    </div>
  )
}
