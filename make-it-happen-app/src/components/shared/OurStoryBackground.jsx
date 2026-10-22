/**
 * OurStoryBackground — The British Heritage Editorial Canvas
 * Spans the FULL window across the entire scroll of the Our Story tab.
 * Combines deep atmospheric architectural photography, a high-fashion 6-column
 * editorial hairline grid, living champagne auroras, and understated archival datum markings.
 */
export default function OurStoryBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── Layer 1: Atmospheric Heritage Venue Photography ─── */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f5240d4536?q=80&w=2069&auto=format&fit=crop')",
          opacity: 0.08,
          mixBlendMode: 'multiply',
          filter: 'contrast(115%) brightness(105%)',
        }}
      />

      {/* ─── Layer 2: Luminous Champagne & Nude Cream Scrim ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.4) 0%, rgba(243, 228, 214, 0.7) 65%, #F3E4D6 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #F3E4D6 0%, transparent 18%, transparent 82%, #F3E4D6 100%)',
        }}
      />

      {/* ─── Layer 3: Living Champagne, Nude & Blush Aurora Sweeps ─── */}
      {/* Upper Soft Champagne & White Aurora */}
      <div
        className="absolute -top-[10%] left-[15%] w-[70vw] max-w-[950px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, rgba(248, 239, 231, 0.6) 30%, rgba(215, 122, 145, 0.15) 55%, transparent 75%)',
          filter: 'blur(65px)',
          animation: 'storyAuroraSweep 22s ease-in-out infinite alternate',
        }}
      />

      {/* Middle Section Primary Warm Nude & Blush Aurora (Philosophy Section) */}
      <div
        className="absolute top-[42%] left-[20%] w-[75vw] max-w-[900px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(243, 228, 214, 0.65) 35%, rgba(215, 122, 145, 0.2) 60%, transparent 80%)',
          filter: 'blur(70px)',
          animation: 'storyAuroraSweep 20s ease-in-out infinite alternate',
        }}
      />

      {/* Lower Blush & Gold Aurora */}
      <div
        className="absolute bottom-[-10%] right-[10%] w-[65vw] max-w-[850px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(215, 122, 145, 0.22) 0%, rgba(212, 161, 58, 0.18) 35%, rgba(255, 255, 255, 0.5) 55%, transparent 75%)',
          filter: 'blur(70px)',
          animation: 'storyAuroraSweep 26s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* ─── Layer 4: Editorial 6-Column Architectural Hairline Grid ─── */}
      {/* Spans the full height and width of the window, framing the entire page */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
        {[8.33, 25, 41.66, 58.33, 75, 91.66].map((percent) => (
          <div
            key={percent}
            className="absolute top-0 bottom-0 w-[1px]"
            style={{
              left: `${percent}%`,
              background:
                'linear-gradient(to bottom, transparent 3%, rgba(215, 122, 145, 0.2) 18%, rgba(212, 161, 58, 0.2) 82%, transparent 97%)',
            }}
          />
        ))}
      </div>

      {/* ─── Layer 5: Horizontal Architectural Framing Datum Lines ─── */}
      {/* Top Datum Line (Positioned just below the navbar) */}
      <div
        className="absolute top-[76px] left-0 right-0 h-[1px] opacity-40"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(215, 122, 145, 0.2) 10%, rgba(212, 161, 58, 0.5) 50%, rgba(215, 122, 145, 0.2) 90%, transparent 100%)',
        }}
      />

      {/* Bottom Datum Line */}
      <div
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.08) 10%, rgba(212, 175, 55, 0.35) 50%, rgba(212, 175, 55, 0.08) 90%, transparent 100%)',
        }}
      />

      {/* ─── Layer 6: Architectural Crosshair Registration Marks ─── */}
      <div className="absolute top-[72px] left-[8.33%] text-primary/50 text-[9px] font-mono select-none pointer-events-none -translate-x-1/2">
        +
      </div>
      <div className="absolute top-[72px] right-[8.33%] text-primary/50 text-[9px] font-mono select-none pointer-events-none translate-x-1/2">
        +
      </div>
      <div className="absolute bottom-[44px] left-[8.33%] text-primary/50 text-[9px] font-mono select-none pointer-events-none -translate-x-1/2">
        +
      </div>
      <div className="absolute bottom-[44px] right-[8.33%] text-primary/50 text-[9px] font-mono select-none pointer-events-none translate-x-1/2">
        +
      </div>

      {/* ─── Layer 7: Minimalist Archival Marginalia (Left & Right Viewport Edges) ─── */}
      <div
        className="absolute top-1/2 left-3 -translate-y-1/2 -rotate-90 origin-left text-primary/35 text-[9px] font-mono tracking-[0.3em] uppercase select-none pointer-events-none hidden xl:block"
        style={{ letterSpacing: '0.35em' }}
      >
        EST. MMXII · LONDON ATELIER
      </div>
      <div
        className="absolute top-1/2 right-3 -translate-y-1/2 rotate-90 origin-right text-primary/35 text-[9px] font-mono tracking-[0.3em] uppercase select-none pointer-events-none hidden xl:block"
        style={{ letterSpacing: '0.35em' }}
      >
        HERITAGE ARCHIVE · FOLIO XII
      </div>
    </div>
  )
}
