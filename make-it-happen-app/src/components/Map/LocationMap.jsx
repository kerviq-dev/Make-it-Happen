/**
 * LocationMap — Bespoke Luxury Interactive Map Component
 * Displays the Make It Happen London headquarters & coverage area
 * Styled with a custom dark-mode luxury filter, golden map pin, and direct navigation actions.
 */
export default function LocationMap() {
  return (
    <div className="w-full h-full min-h-[520px] md:min-h-[580px] rounded-2xl glassmorphism border border-[#D77A91]/30 shadow-2xl relative overflow-hidden flex flex-col">
      {/* ─── Top Architectural Datum Bar ─── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#D77A91]/20 bg-[#FAF4EE]/90 backdrop-blur-md z-20">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#D4A13A] shadow-[0_0_10px_#D4A13A] animate-pulse" />
          <span className="font-label-caps text-label-caps text-[#D4A13A] tracking-[0.2em] uppercase font-bold text-xs">
            London Atelier & HQ
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#241C1E]/60 tracking-widest hidden sm:inline-block">
          51.5074° N · 0.1278° W
        </span>
      </div>

      {/* ─── Interactive Map Viewport with Standard Google Maps Colors ─── */}
      <div className="relative flex-grow w-full h-full overflow-hidden bg-[#FAF4EE]">
        <iframe
          title="Make It Happen Events London Location"
          src="https://maps.google.com/maps?q=London,+United+Kingdom&t=&z=12&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full min-h-[440px] border-0"
          loading="lazy"
          allowFullScreen
        />

        {/* ─── Custom Floating Golden Location Badge ─── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center select-none">
          <div className="bg-[#0B0B0B]/90 border border-[#D4A13A] px-4 py-1.5 rounded-full shadow-[0_0_25px_rgba(212,161,58,0.55)] backdrop-blur-md flex items-center gap-2 mb-1.5 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#D4A13A] shadow-[0_0_8px_#D4A13A]" />
            <span className="font-label-caps text-[11px] text-[#D4A13A] uppercase tracking-widest font-bold">
              Make It Happen Events
            </span>
          </div>
          <span
            className="material-symbols-outlined text-[#D4A13A] text-4xl"
            style={{
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6)) drop-shadow(0 0 12px rgba(212,161,58,0.7))',
              fontVariationSettings: "'FILL' 1",
            }}
          >
            location_on
          </span>
        </div>
      </div>

      {/* ─── Bottom Status & External Navigation Bar ─── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3.5 border-t border-[#D77A91]/20 bg-[#FAF4EE]/90 backdrop-blur-md z-20">
        <span className="font-body-md text-xs text-[#4A3E42]">
          Serving Mayfair, Kensington, Westminster & Destination Commissions
        </span>
        <a
          href="https://maps.google.com/?q=London,+UK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-label-caps text-label-caps text-[#D4A13A] hover:text-[#D77A91] transition-colors tracking-widest uppercase text-[11px] font-bold group"
        >
          <span>View on Google Maps</span>
          <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            open_in_new
          </span>
        </a>
      </div>
    </div>
  )
}
