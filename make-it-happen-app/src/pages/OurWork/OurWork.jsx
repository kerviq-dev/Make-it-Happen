import CelestialMarquee from '../../components/Gallery/CelestialMarquee.jsx'
import OurWorkBackground from '../../components/shared/OurWorkBackground.jsx'
import { galleryItems } from '../../data/contact.js'
import { useSEO } from '../../utils/seo.js'

export default function OurWork() {
  useSEO({
    title: 'Our Work & Portfolio | Make It Happen Events',
    description:
      'A selection of our most exquisite recent commissions. Experience the endless editorial archive of luxury weddings, galas, and celebrations.',
  })

  return (
    <div className="flex-grow pt-[76px] pb-section-gap relative overflow-hidden bg-[#F3E4D6] min-h-screen flex flex-col">
      {/* ─── BESPOKE BACKGROUND: Optical Lens Iris, Studio Bokeh & Horizon Line ─── */}
      <OurWorkBackground />

      {/* Header */}
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-site mx-auto pt-8 mb-stack-lg relative z-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] mb-stack-sm leading-tight font-bold">
          Curated Excellence
        </h1>
        <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl leading-relaxed">
          A selection of our most exquisite recent commissions. Experience the endless editorial archive.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden mt-stack-lg z-10 py-20 h-[80vh] min-h-[700px] flex items-center">
        <CelestialMarquee items={galleryItems} />
      </div>
    </div>
  )
}
