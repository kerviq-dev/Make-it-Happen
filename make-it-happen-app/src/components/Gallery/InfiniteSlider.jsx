import { handleImgError } from '../../utils/seo.js'

/**
 * InfiniteSlider — horizontal infinite-scroll strip with edge vignettes.
 * Used on the Events page "More Experiences" section.
 * Duplicates items automatically for seamless looping.
 */
export default function InfiniteSlider({ items = [], speed = 35 }) {
  // Triplicate for completely seamless continuous loop on any monitor
  const looped = [...items, ...items, ...items]

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 2%, rgba(0, 0, 0, 0.5) 6%, black 12%, black 88%, rgba(0, 0, 0, 0.5) 94%, rgba(0, 0, 0, 0.05) 98%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 2%, rgba(0, 0, 0, 0.5) 6%, black 12%, black 88%, rgba(0, 0, 0, 0.5) 94%, rgba(0, 0, 0, 0.05) 98%, transparent 100%)',
      }}
    >

      <style>{`
        @keyframes scrollStrip {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .infinite-slider-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          animation: scrollStrip ${speed}s linear infinite !important;
          will-change: transform;
        }
        .infinite-slider-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div
        className="infinite-slider-track gap-6 px-6"
        role="list"
        aria-label="Event categories"
      >
        {looped.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            role="listitem"
            aria-label={item.title}
            className="relative w-[300px] md:w-[350px] h-[400px] md:h-[450px] flex-shrink-0 group image-zoom-container overflow-hidden rounded-lg shadow-xl cursor-pointer bg-[#FAF4EE] border border-[#D77A91]/20 hover:border-[#D77A91] transition-all duration-500"
            style={{ backgroundColor: '#FAF4EE' }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover zoom-image"
              onError={handleImgError}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C1E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 glass-panel border-x-0 border-b-0 border-t border-[#D77A91]/25">
              <h4 className="font-headline-sm text-headline-sm text-[#241C1E] group-hover:text-[#D77A91] transition-colors font-bold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
