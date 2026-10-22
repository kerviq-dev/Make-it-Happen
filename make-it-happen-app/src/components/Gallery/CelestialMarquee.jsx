import { handleImgError } from '../../utils/seo.js'

// Responsive pixel sizes for explicit circle dimensions
const orbDimensions = {
  md: { w: 320, h: 320 },
  lg: { w: 380, h: 380 },
  xl: { w: 440, h: 440 },
}

/**
 * CelestialMarquee — continuous horizontal orbital marquee.
 * Strictly guarantees:
 * 1. 100% true circular orbs (aspect-ratio: 1/1, border-radius: 50%, position: relative)
 * 2. Unbroken horizontal flex track (flex-direction: row, flex-wrap: nowrap, width: max-content)
 * 3. Continuous smooth GPU-accelerated motion with pause-on-hover
 */
export default function CelestialMarquee({ items = [] }) {
  // Triplicate for seamless continuous infinite loop
  const looped = [...items, ...items, ...items]

  return (
    <div
      className="relative w-full overflow-hidden py-16"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.03) 2%, rgba(0, 0, 0, 0.3) 7%, rgba(0, 0, 0, 0.8) 14%, black 20%, black 80%, rgba(0, 0, 0, 0.8) 86%, rgba(0, 0, 0, 0.3) 93%, rgba(0, 0, 0, 0.03) 98%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.03) 2%, rgba(0, 0, 0, 0.3) 7%, rgba(0, 0, 0, 0.8) 14%, black 20%, black 80%, rgba(0, 0, 0, 0.8) 86%, rgba(0, 0, 0, 0.3) 93%, rgba(0, 0, 0, 0.03) 98%, transparent 100%)',
      }}
    >
      {/* Self-contained keyframe and track styles */}
      <style>{`
        @keyframes orbitalMarquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .orbital-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          align-items: center !important;
          animation: orbitalMarquee 40s linear infinite !important;
          will-change: transform;
        }
        .orbital-track:hover {
          animation-play-state: paused !important;
        }
        .orbital-circle {
          border-radius: 50% !important;
          aspect-ratio: 1 / 1 !important;
          flex-shrink: 0 !important;
          overflow: hidden !important;
          position: relative !important;
        }
      `}</style>

      {/* Moving Track */}
      <div
        className="orbital-track gap-12 md:gap-24 px-8"
        role="list"
        aria-label="Gallery of our work"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {looped.map((item, idx) => (
          <OrbItem key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  )
}

function OrbItem({ item }) {
  const dim = orbDimensions[item.size] || orbDimensions.lg
  const offsetClass = item.offset || ''
  const bgShade = item.bgShade || '#FAF4EE' // Very Pale Champagne/Pink light background shade

  return (
    <div
      role="listitem"
      className={`orbital-circle relative group shrink-0 ${offsetClass} cursor-pointer border border-[#D77A91]/40 shadow-[0_15px_35px_rgba(180,130,120,0.2)] transition-all duration-700 hover:border-[#D77A91] hover:shadow-[0_20px_50px_rgba(215,122,145,0.35)]`}
      style={{
        width: `${dim.w}px`,
        height: `${dim.h}px`,
        borderRadius: '50%',
        aspectRatio: '1 / 1',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: bgShade,
      }}
    >
      {/* Light Pale Pink Backdrop within circular frame */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          backgroundColor: bgShade,
        }}
        aria-hidden="true"
      />

      {/* Absolute Image so it fills the circle without pushing layout */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2 pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
        onError={handleImgError}
        loading="lazy"
      />

      {/* Circular Hover reveal overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-[3px] p-6 text-center"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="bg-[#FAF4EE]/95 border border-[#D77A91]/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 rounded-lg max-w-[240px]">
          <h3 className="font-headline-sm text-[#241C1E] mb-2 text-base md:text-lg leading-tight font-bold">
            {item.title}
          </h3>
          <div className="w-8 h-[1px] bg-[#D77A91] mx-auto mb-2" />
          <p className="font-label-caps text-label-caps text-[#D77A91] text-[11px] tracking-wider font-semibold">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  )
}
