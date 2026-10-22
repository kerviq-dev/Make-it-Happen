import { Link } from 'react-router-dom'
import logoImg from '@logo'

/**
 * Footer — Bespoke luxury editorial design matching the official brand layout.
 * Includes corner celestial astrolabe artwork, stylized brand typography,
 * inspirational quote with filigree flourish, and legal copyright bar.
 */
export default function Footer() {
  return (
    <footer className="relative bg-[#090909] text-white w-full border-t border-[#D77A91]/20 overflow-hidden" role="contentinfo">
      
      {/* ─── Celestial Astrolabe & Starlight Radiant Geometry (Bottom-Left Corner) ─── */}
      <div className="absolute -bottom-10 -left-10 w-64 md:w-80 h-64 md:h-80 pointer-events-none opacity-40 select-none z-0">
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="astrolabeGold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#D77A91" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFE5A3" stopOpacity="0.25" />
            </linearGradient>
            <radialGradient id="astrolabeGlow" cx="0%" cy="100%" r="100%">
              <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#D77A91" stopOpacity="0.1" />
              <stop offset="80%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Corner Glow */}
          <circle cx="0" cy="280" r="240" fill="url(#astrolabeGlow)" />

          {/* Concentric Celestial Rings from bottom-left origin */}
          <circle cx="0" cy="280" r="260" stroke="url(#astrolabeGold)" strokeWidth="0.75" strokeDasharray="6 8" opacity="0.4" />
          <circle cx="0" cy="280" r="220" stroke="url(#astrolabeGold)" strokeWidth="1" opacity="0.6" />
          <circle cx="0" cy="280" r="185" stroke="url(#astrolabeGold)" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.5" />
          <circle cx="0" cy="280" r="150" stroke="url(#astrolabeGold)" strokeWidth="1.2" opacity="0.75" />
          <circle cx="0" cy="280" r="115" stroke="url(#astrolabeGold)" strokeWidth="0.75" opacity="0.5" />
          <circle cx="0" cy="280" r="80" stroke="url(#astrolabeGold)" strokeWidth="1.2" opacity="0.8" />
          <circle cx="0" cy="280" r="45" stroke="url(#astrolabeGold)" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />

          {/* Orbital Ellipses (Creating 3D perspective depth) */}
          <ellipse cx="60" cy="220" rx="140" ry="70" transform="rotate(-30 60 220)" stroke="url(#astrolabeGold)" strokeWidth="0.8" opacity="0.5" />
          <ellipse cx="80" cy="200" rx="160" ry="50" transform="rotate(-60 80 200)" stroke="url(#astrolabeGold)" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.4" />

          {/* Radial Starburst Rays */}
          <line x1="0" y1="280" x2="260" y2="60" stroke="url(#astrolabeGold)" strokeWidth="0.75" opacity="0.45" />
          <line x1="0" y1="280" x2="220" y2="20" stroke="url(#astrolabeGold)" strokeWidth="0.9" opacity="0.6" />
          <line x1="0" y1="280" x2="160" y2="0" stroke="url(#astrolabeGold)" strokeWidth="0.75" opacity="0.5" />
          <line x1="0" y1="280" x2="90" y2="0" stroke="url(#astrolabeGold)" strokeWidth="0.9" opacity="0.6" />
          <line x1="0" y1="280" x2="280" y2="150" stroke="url(#astrolabeGold)" strokeWidth="0.75" opacity="0.4" />
          <line x1="0" y1="280" x2="280" y2="220" stroke="url(#astrolabeGold)" strokeWidth="0.75" opacity="0.35" />

          {/* 4-Point Diamond Sparkles & Starlight Nodes */}
          {/* Star 1 */}
          <path d="M120 160 Q120 148 120 136 Q120 148 120 160 Q132 160 144 160 Q132 160 120 160 Q120 172 120 184 Q120 172 120 160 Q108 160 96 160 Q108 160 120 160 Z" fill="#D4A13A" opacity="0.85" />
          <circle cx="120" cy="160" r="2" fill="#FFFFFF" />

          {/* Star 2 */}
          <path d="M180 100 Q180 90 180 80 Q180 90 180 100 Q190 100 200 100 Q190 100 180 100 Q180 110 180 120 Q180 110 180 100 Q170 100 160 100 Q170 100 180 100 Z" fill="#D77A91" opacity="0.9" />
          <circle cx="180" cy="100" r="1.5" fill="#FFFFFF" />

          {/* Star 3 (Top Accent) */}
          <path d="M75 95 Q75 86 75 78 Q75 86 75 95 Q84 95 92 95 Q84 95 75 95 Q75 104 75 112 Q75 104 75 95 Q66 95 58 95 Q66 95 75 95 Z" fill="#D4A13A" opacity="0.75" />
          <circle cx="75" cy="95" r="1.5" fill="#FFFFFF" />

          {/* Orbit Node Spheres */}
          <circle cx="106" cy="174" r="3.5" fill="#D4A13A" opacity="0.8" />
          <circle cx="106" cy="174" r="1.5" fill="#FFFFFF" />
          
          <circle cx="156" cy="124" r="2.5" fill="#D77A91" opacity="0.85" />
          <circle cx="156" cy="124" r="1" fill="#FFFFFF" />

          <circle cx="212" cy="68" r="3" fill="#D4A13A" opacity="0.75" />
          <circle cx="48" cy="232" r="2.5" fill="#D77A91" opacity="0.7" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        
        {/* ─── Main Content Row ─── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 pl-0 sm:pl-12 lg:pl-28">
          
          {/* Left / Brand Identity Lockup */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <Link to="/" className="shrink-0 group">
              <img
                src={logoImg}
                alt="Make It Happen Events Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#D77A91] shadow-[0_0_18px_rgba(215,122,145,0.35)] group-hover:border-[#D4A13A] transition-all"
              />
            </Link>

            {/* Vertical Divider */}
            <div className="h-14 sm:h-16 w-px bg-[#D77A91]/40 shrink-0" aria-hidden="true" />

            {/* Brand Title Lockup */}
            <div className="flex flex-col select-none">
              <span className="font-display-lg text-[15px] sm:text-[17px] md:text-[18px] text-[#D4A13A] tracking-[0.14em] font-bold uppercase leading-none">
                MAKE IT HAPPEN
              </span>
              <span className="font-display-lg italic text-[20px] sm:text-[23px] text-[#D77A91] tracking-[0.06em] leading-tight my-0.5">
                EVENTS
              </span>
              <span className="font-label-caps text-[9px] sm:text-[10px] text-[#D77A91]/80 tracking-[0.25em] uppercase font-semibold">
                LONDON · BESPOKE ATELIER
              </span>
            </div>
          </div>

          {/* Center / Quotation & Filigree Ornament in original position */}
          <div className="flex items-center gap-6 text-center md:text-left">
            {/* Vertical Divider */}
            <div className="hidden md:block h-14 sm:h-16 w-px bg-[#D77A91]/40 shrink-0" aria-hidden="true" />

            <div className="flex flex-col items-center md:items-start">
              <p className="font-display-lg text-base sm:text-lg md:text-[19px] text-white/95 leading-snug">
                Extraordinary moments
              </p>
              <p className="font-display-lg italic text-base sm:text-lg md:text-[19px] text-[#D77A91] leading-snug">
                are made to be remembered.
              </p>

              {/* Ornamental Filigree Divider */}
              <div className="flex items-center gap-2 mt-2 w-full max-w-[220px] justify-center md:justify-start">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4A13A]/60 to-[#D4A13A] flex-grow" />
                <svg viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-3.5 text-[#D4A13A] shrink-0">
                  <path d="M16 2 C13 2 11 5 11 8 C11 11 13 14 16 14 C19 14 21 11 21 8 C21 5 19 2 16 2 Z" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M11 8 C7 5 3 6 1 8 C3 10 7 11 11 8 Z" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M21 8 C25 5 29 6 31 8 C29 10 25 11 21 8 Z" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                </svg>
                <div className="h-px bg-gradient-to-l from-transparent via-[#D4A13A]/60 to-[#D4A13A] flex-grow" />
              </div>
            </div>
          </div>

        </div>

        {/* ─── Bottom Horizontal Full-Width Divider ─── */}
        <div className="w-full h-px bg-[#D77A91]/30 mt-8 mb-4" aria-hidden="true" />

        {/* ─── Bottom Copyright & Legal Links ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-label-caps tracking-widest text-white/50">
          <p>© 2026 MAKE IT HAPPEN EVENTS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-3 text-white/60">
            <a href="#" className="hover:text-[#D77A91] transition-colors">PRIVACY POLICY</a>
            <span className="text-[#D77A91]/60">·</span>
            <a href="#" className="hover:text-[#D77A91] transition-colors">TERMS & CONDITIONS</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
