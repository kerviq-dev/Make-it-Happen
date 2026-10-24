import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
 * 4. Interactive Lightbox Modal on orb tap/click with direct consultation CTA.
 */
export default function CelestialMarquee({ items = [] }) {
  // Triplicate for seamless continuous infinite loop
  const looped = [...items, ...items, ...items]
  const [activeWork, setActiveWork] = useState(null)

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setActiveWork(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
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
            <OrbItem
              key={`${item.id}-${idx}`}
              item={item}
              onSelect={() => setActiveWork(item)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveWork(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FAF4EE] border border-[#D77A91]/50 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative text-[#241C1E]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden bg-black/10">
              <img
                src={activeWork.imageUrl}
                alt={activeWork.title}
                className="w-full h-full object-cover"
                onError={handleImgError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C1E]/80 via-transparent to-transparent" />
              <button
                onClick={() => setActiveWork(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-label-caps text-xs text-[#D4A13A] uppercase tracking-widest font-bold block mb-1">
                  {activeWork.location}
                </span>
                <h3 className="font-headline-md text-2xl md:text-3xl text-white font-bold leading-tight">
                  {activeWork.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <p className="font-body-md text-sm md:text-base text-[#4A3E42] leading-relaxed">
                {activeWork.description ||
                  'An exquisite bespoke commission showcasing curated florals, editorial lighting, and meticulous tablescape architecture in London.'}
              </p>

              <div className="pt-4 border-t border-[#D77A91]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-label-caps text-xs text-[#6B5E62] uppercase tracking-wider">
                  Make It Happen Events Atelier
                </span>
                <Link
                  to={`/plan-your-event?style=${encodeURIComponent(activeWork.title)}`}
                  onClick={() => setActiveWork(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D77A91] hover:bg-[#D4A13A] text-white px-7 py-3.5 rounded-DEFAULT font-label-caps text-xs uppercase tracking-widest transition-all duration-300 shadow-md font-semibold"
                >
                  <span className="material-symbols-outlined text-[16px]">draw</span>
                  Inquire About This Style
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function OrbItem({ item, onSelect }) {
  const dim = orbDimensions[item.size] || orbDimensions.lg
  const offsetClass = item.offset || ''
  const bgShade = item.bgShade || '#FAF4EE' // Very Pale Champagne/Pink light background shade

  return (
    <div
      role="listitem"
      onClick={onSelect}
      aria-label={`View ${item.title}`}
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
