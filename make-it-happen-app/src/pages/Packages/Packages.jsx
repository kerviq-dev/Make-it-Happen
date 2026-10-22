import { Link } from 'react-router-dom'
import { packages } from '../../data/packages.js'
import PackagesBackground from '../../components/shared/PackagesBackground.jsx'
import { useSEO } from '../../utils/seo.js'

export default function Packages() {
  useSEO({
    title: 'Investment & Packages | Make It Happen Events',
    description:
      'Bespoke event planning packages tailored to your vision: Essential (£350), Standard (£700), and Premium Luxury (£1,000). Delivered with uncompromising elegance in London.',
  })

  return (
    <div className="flex-grow pt-[76px] pb-[80px] w-full flex flex-col relative overflow-hidden bg-[#F3E4D6] min-h-screen">
      {/* ─── BESPOKE BACKGROUND: Luxury Vitrine Horizon & Tri-Pedestal Light System ─── */}
      <PackagesBackground />

      {/* Header */}
      <header className="text-center pt-8 mb-4 max-w-3xl mx-auto px-margin-mobile relative z-20">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] mb-stack-md leading-tight font-bold">
          Investment
        </h1>
        <p className="font-body-lg text-body-lg text-[#4A3E42]">
          Bespoke event planning packages tailored to your vision, delivered with uncompromising luxury.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 text-[#D77A91]">
          <div className="w-12 h-px bg-[#D77A91]" />
          <p className="font-label-caps text-label-caps tracking-widest uppercase font-semibold">
            Hover or touch to initialize
          </p>
          <div className="w-12 h-px bg-[#D77A91]" />
        </div>
      </header>

      {/* Holographic Carousel */}
      <div className="hologram-container w-full max-w-site mx-auto relative">
        {packages.map((pkg) => (
          <HologramOrb key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  )
}

function HologramOrb({ pkg }) {
  const isPremium = pkg.featured

  return (
    <div className={`orb-wrapper ${isPremium ? 'orb-premium' : ''}`}>
      {/* Background data line */}
      <div className="data-line" style={{ left: '50%' }} />

      {/* Recommended badge */}
      {isPremium && (
        <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-[#D77A91] text-white font-label-caps text-[10px] px-4 py-1 tracking-widest rounded-full z-30 whitespace-nowrap shadow-md font-bold">
          {pkg.badge || 'RECOMMENDED'}
        </div>
      )}

      {/* Idle Luxury Emblem (2 with same, 1 featured center) */}
      <div className="orb-idle-emblem">
        {isPremium ? <PremiumEmblem /> : <StandardEmblem />}
      </div>

      {/* Orb Core with scan-line */}
      <div className="orb-core">
        <div className="scan-line" />
      </div>

      {/* Hologram Content */}
      <div className={`hologram-content ${isPremium ? 'pt-16' : ''}`}>
        <h3 className={`font-headline-sm text-headline-sm hologram-title mb-6 font-bold ${isPremium ? 'text-[#D4A13A]' : 'text-[#241C1E]'}`}>
          {pkg.name}
        </h3>

        <div className="hologram-details">
          <div className="font-display-lg price-text font-bold tracking-tighter">
            {pkg.price}
          </div>
          <p className="font-body-md text-body-md italic mb-4 text-[#D77A91] font-semibold">
            {pkg.tagline}
          </p>
          <p className="font-body-md text-body-md text-[#4A3E42] mb-6 text-sm max-w-[260px] leading-relaxed">
            {pkg.description}
          </p>

          <ul className="space-y-3 mb-8 font-body-md text-sm text-[#241C1E] text-left inline-block stagger-list w-full pl-6 font-medium">
            {pkg.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#D77A91] text-xs mt-1">diamond</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/plan-your-event"
            className={`hologram-btn font-label-caps text-label-caps px-8 py-3 rounded-full transition-all duration-300 w-full block text-center uppercase tracking-widest font-semibold ${
              isPremium
                ? 'bg-[#D77A91] text-white hover:bg-[#D4A13A] shadow-lg shadow-[#D77A91]/30'
                : 'bg-[#FAF4EE] border border-[#D77A91] text-[#241C1E] hover:bg-[#D77A91] hover:text-white'
            }`}
          >
            {pkg.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * Matching Emblem for Essential & Standard Packages (2 identical symmetrical cards)
 * Interlocking Celestial Atelier Rings & Diamond Star in Rose & Gold
 */
function StandardEmblem() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#D77A91]/15 blur-md pointer-events-none" />
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D77A91]">
        {/* Outer dashed halo */}
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
        {/* Intersecting luxury orbital rings */}
        <ellipse cx="50" cy="50" rx="36" ry="17" stroke="#D4A13A" strokeWidth="1.2" opacity="0.85" transform="rotate(-25 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="17" stroke="currentColor" strokeWidth="1" opacity="0.75" transform="rotate(25 50 50)" />
        {/* Concentric inner circle */}
        <circle cx="50" cy="50" r="14" stroke="#D4A13A" strokeWidth="0.8" opacity="0.7" />
        {/* Centered 4-point diamond star */}
        <path d="M50 36 Q50 44 42 50 Q50 56 50 64 Q50 56 58 50 Q50 44 50 36 Z" fill="#D4A13A" />
        <circle cx="50" cy="50" r="2" fill="#FFFFFF" />
        {/* Delicate satellite dots */}
        <circle cx="50" cy="14" r="1.5" fill="#D77A91" />
        <circle cx="50" cy="86" r="1.5" fill="#D77A91" />
        <circle cx="14" cy="50" r="1.5" fill="#D4A13A" />
        <circle cx="86" cy="50" r="1.5" fill="#D4A13A" />
      </svg>
    </div>
  )
}

/**
 * Featured Unique Emblem for Premium Luxury Package (Center distinct card)
 * Imperial Atelier Crown, Sunburst Radiant Flare & Heart Gem in Rich Gold
 */
function PremiumEmblem() {
  return (
    <div className="w-28 h-28 relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#D4A13A]/25 blur-lg pointer-events-none" />
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D4A13A]">
        {/* Radiant Sunburst Rays */}
        <g opacity="0.6" stroke="#D4A13A" strokeWidth="0.8">
          <line x1="60" y1="12" x2="60" y2="20" />
          <line x1="60" y1="100" x2="60" y2="108" />
          <line x1="12" y1="60" x2="20" y2="60" />
          <line x1="100" y1="60" x2="108" y2="60" />
          <line x1="26" y1="26" x2="32" y2="32" />
          <line x1="88" y1="88" x2="94" y2="94" />
          <line x1="26" y1="94" x2="32" y2="88" />
          <line x1="88" y1="32" x2="94" y2="26" />
        </g>
        {/* Outer ornate halo */}
        <circle cx="60" cy="60" r="48" stroke="#D4A13A" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <circle cx="60" cy="60" r="42" stroke="#D77A91" strokeWidth="0.8" opacity="0.5" />
        {/* Royal Crown / Coronet */}
        <path
          d="M38 72 L42 48 L52 60 L60 40 L68 60 L78 48 L82 72 Z"
          stroke="#D4A13A"
          strokeWidth="1.6"
          fill="rgba(212,161,58,0.18)"
          strokeLinejoin="round"
        />
        {/* Crown Base Filigree */}
        <path d="M36 74 Q60 77 84 74" stroke="#D4A13A" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 78 Q60 81 82 78" stroke="#D77A91" strokeWidth="1" strokeLinecap="round" />
        {/* Crown Jewels (Pearls / Stars on Crown Tips) */}
        <circle cx="42" cy="48" r="2.5" fill="#D4A13A" />
        <circle cx="42" cy="48" r="1" fill="#FFFFFF" />
        <circle cx="60" cy="40" r="3.5" fill="#D4A13A" />
        <circle cx="60" cy="40" r="1.5" fill="#FFFFFF" />
        <circle cx="78" cy="48" r="2.5" fill="#D4A13A" />
        <circle cx="78" cy="48" r="1" fill="#FFFFFF" />
        {/* Centered Crown Heart Jewel */}
        <circle cx="60" cy="64" r="3" fill="#D77A91" />
        <circle cx="60" cy="64" r="1.2" fill="#FFFFFF" />
        {/* Floating North Star above Crown */}
        <path d="M60 22 Q60 26 56 28 Q60 30 60 34 Q60 30 64 28 Q60 26 60 22 Z" fill="#D4A13A" />
        <circle cx="60" cy="28" r="1" fill="#FFFFFF" />
      </svg>
    </div>
  )
}
