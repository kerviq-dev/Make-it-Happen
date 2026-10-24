import { Link } from 'react-router-dom'
import { featuredEvents, eventCategories } from '../../data/events.js'
import InfiniteSlider from '../../components/Gallery/InfiniteSlider.jsx'
import EventsBackground from '../../components/shared/EventsBackground.jsx'
import { useSEO, handleImgError } from '../../utils/seo.js'

export default function Events() {
  useSEO({
    title: 'Events | Make It Happen Events',
    description:
      "A portfolio of avant-garde experiences, meticulously designed for the world's most discerning individuals and organizations.",
  })

  const weddingTier  = featuredEvents.find((e) => e.id === 'weddings')
  const occasionTier = featuredEvents.find((e) => e.id === 'occasions')

  return (
    <div className="relative w-full overflow-hidden bg-[#F3E4D6] pt-[76px]">
      {/* ─── BESPOKE BACKGROUND: Full-Canvas Golden Silk Ribbon Waves & Editorial Framing ─── */}
      <EventsBackground />

      {/* Header Section */}
      <section className="relative z-10 px-margin-desktop max-md:px-margin-mobile py-16 max-w-site mx-auto flex flex-col items-center justify-center text-center min-h-[400px]">
        <h1 className="font-display-lg text-display-lg max-md:font-display-lg-mobile max-md:text-display-lg-mobile text-[#241C1E] mb-stack-md leading-tight font-bold">
          Curated Excellence
        </h1>
        <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl leading-relaxed">
          A portfolio of avant-garde experiences, meticulously designed for the world's most discerning individuals
          and organizations.
        </p>
      </section>

      {/* Editorial Stack Grid (Exact Stitch UI) */}
      <div className="relative z-10 max-w-site mx-auto px-margin-desktop max-md:px-margin-mobile pb-section-gap">
        {/* Weddings Tier */}
        {weddingTier && (
          <section className="mb-section-gap relative">
            <div className="flex items-center gap-stack-md mb-stack-lg">
              <span className="w-12 h-[1px] bg-[#D77A91] block" />
              <h2 className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
                {weddingTier.category}
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-gutter relative">
              {/* Layer 1: Background Image */}
              <div className="col-span-12 md:col-span-8 md:col-start-1 h-[600px] relative overflow-hidden image-zoom-container z-10 rounded-lg shadow-xl">
                <img
                  alt={weddingTier.imageAlt}
                  className="w-full h-full object-cover zoom-image"
                  src={weddingTier.imageUrl}
                  onError={handleImgError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C1E]/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Layer 2: Overlapping Glass Card */}
              <div className="col-span-12 md:col-span-5 md:col-start-7 max-md:-mt-24 md:absolute md:top-1/4 md:right-[5%] glass-panel p-8 md:p-10 z-20 border border-[#D77A91]/30 rounded-xl shadow-2xl">
                <h3 className="font-headline-md text-headline-md text-[#241C1E] mb-stack-sm font-bold">
                  {weddingTier.title}
                </h3>
                <p className="font-body-md text-body-md text-[#4A3E42] mb-stack-lg leading-relaxed">
                  {weddingTier.description}
                </p>
                <Link
                  className="inline-flex items-center font-label-caps text-label-caps text-[#D77A91] hover:text-[#D4A13A] transition-colors group font-semibold"
                  to="/plan-your-event?event=Wedding"
                >
                  {weddingTier.cta}
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform" style={{ fontSize: 16 }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Special Occasions Tier */}
        {occasionTier && (
          <section className="mb-section-gap relative">
            <div className="flex items-center justify-end gap-stack-md mb-stack-lg md:text-right">
              <h2 className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
                {occasionTier.category}
              </h2>
              <span className="w-12 h-[1px] bg-[#D77A91] block hidden md:block" />
            </div>
            <div className="grid grid-cols-12 gap-gutter relative">
              {/* Overlapping Glass Card (Left aligned) */}
              <div className="col-span-12 md:col-span-5 md:col-start-2 max-md:mb-8 md:absolute md:top-1/3 md:left-[5%] glass-panel p-8 md:p-10 z-20 border border-[#D77A91]/30 rounded-xl shadow-2xl">
                <h3 className="font-headline-md text-headline-md text-[#241C1E] mb-stack-sm font-bold md:text-right">
                  {occasionTier.title}
                </h3>
                <p className="font-body-md text-body-md text-[#4A3E42] mb-stack-lg leading-relaxed">
                  {occasionTier.description}
                </p>
                <div className="flex md:justify-end">
                  <Link
                    className="inline-flex items-center font-label-caps text-label-caps text-[#D77A91] hover:text-[#D4A13A] transition-colors group font-semibold"
                    to="/plan-your-event?event=Special%20Occasion"
                  >
                    {occasionTier.cta}
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform" style={{ fontSize: 16 }}>
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              {/* Background Image (Right aligned) */}
              <div className="col-span-12 md:col-span-8 md:col-start-5 h-[500px] relative overflow-hidden image-zoom-container z-10 rounded-lg shadow-xl">
                <img
                  alt={occasionTier.imageAlt}
                  className="w-full h-full object-cover zoom-image"
                  src={occasionTier.imageUrl}
                  onError={handleImgError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C1E]/60 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Infinite Scroll Event Categories */}
      <section className="relative z-10 w-full overflow-hidden pb-section-gap pt-stack-lg">
        <div className="max-w-site mx-auto px-margin-desktop max-md:px-margin-mobile mb-stack-lg">
          <div className="flex items-center gap-stack-md">
            <span className="w-12 h-[1px] bg-[#D77A91] block" />
            <h2 className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
              More Experiences
            </h2>
          </div>
        </div>
        <InfiniteSlider items={eventCategories} speed={40} />
      </section>
    </div>
  )
}
