import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx'
import ServicesBackground from '../../components/shared/ServicesBackground.jsx'
import { useSEO, handleImgError } from '../../utils/seo.js'

export default function Services() {
  useSEO({
    title: 'Bespoke Services | Make It Happen Events',
    description:
      'Curated experiences, impeccable execution. From intimate consultations to full event management, bespoke luxury services in London.',
  })

  // Separate services for editorial stack
  const service1 = services[0] // 01 Event Consultation
  const service2 = services[1] // 02 Event Planning
  const service3 = services[2] // 03 Theme & Concept Design
  const service4 = services[3] // 04 Décor Planning & Setup
  const service5 = services[4] // 05 Catering & Vendor
  const service6 = services[5] // 06 Coordination

  return (
    <div className="relative w-full overflow-hidden bg-[#F3E4D6] pt-[76px]">
      {/* ─── BESPOKE BACKGROUND: Full-Page Atelier Prismatic Caustics & Dot Matrix ─── */}
      <ServicesBackground />

      {/* Hero Section */}
      <header className="relative min-h-[65vh] flex items-center justify-center py-16 px-margin-mobile md:px-margin-desktop mb-section-gap z-10">
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center mt-2">

          {/* Hero Glass Card */}
          <div className="w-full text-center flex flex-col items-center glassmorphism p-8 md:p-16 rounded-xl shadow-2xl border border-[#D77A91]/30">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-[0.25em] uppercase font-semibold mb-stack-sm">
              Atelier Portfolio
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] mb-stack-md font-bold tracking-tight leading-tight">
              Curated Experiences. <span className="text-gradient-rose italic font-semibold">Impeccable Execution.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl leading-relaxed">
              Bespoke event services designed for the most discerning clients. From intimate gatherings to grand
              galas, we bring your vision to life with editorial precision.
            </p>
          </div>
        </div>
      </header>

      {/* Services Editorial Stack */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-site mx-auto mb-section-gap flex flex-col gap-32 relative z-10">
        {/* Service 1 (Left Image, Right Overlapping Card) */}
        {service1 && (
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8 relative rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] border border-[#D77A91]/25">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover opacity-90 transition-all duration-1000"
                  alt={service1.imageAlt}
                  src={service1.imageUrl}
                  onError={handleImgError}
                />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-7 flex flex-col gap-stack-md glassmorphism p-8 md:p-12 rounded-xl z-10 relative md:-ml-24 mt-8 md:mt-0 shadow-2xl border border-[#D77A91]/30">
              <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                {service1.number}
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                {service1.title}
              </h3>
              <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                {service1.description}
              </p>
              <div>
                <Link
                  to={`/plan-your-event?style=${encodeURIComponent(service1.title)}`}
                  className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors mt-2"
                >
                  <span>Enquire On This Service</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Service 2 (Right Image, Left Overlapping Card) */}
        {service2 && (
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8 md:col-start-5 relative rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] order-1 md:order-2 border border-[#D77A91]/25">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover opacity-90 transition-all duration-1000"
                  alt={service2.imageAlt}
                  src={service2.imageUrl}
                  onError={handleImgError}
                />
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-stack-md glassmorphism p-8 md:p-12 rounded-xl z-10 relative md:-ml-24 mt-8 md:mt-0 order-2 md:order-1 shadow-2xl border border-[#D77A91]/30">
              <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                {service2.number}
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                {service2.title}
              </h3>
              <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                {service2.description}
              </p>
              <div>
                <Link
                  to={`/plan-your-event?style=${encodeURIComponent(service2.title)}`}
                  className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors mt-2"
                >
                  <span>Enquire On This Service</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Service 3 & 4 (Side-by-Side Glass Cards over Atmospheric Background) */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D77A91]/25 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-25"
              src={service3?.imageUrl}
              alt="Services backdrop"
              onError={handleImgError}
            />
            <div className="absolute inset-0 bg-[#FAF4EE]/70 backdrop-blur-md" />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter p-8 md:p-16">
            {service3 && (
              <div className="flex flex-col gap-stack-md glassmorphism p-8 md:p-10 rounded-xl hover:-translate-y-2 transition-transform duration-500 shadow-2xl border border-[#D77A91]/25">
                <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                  {service3.number}
                </span>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                  {service3.title}
                </h3>
                <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                  {service3.description}
                </p>
                <Link
                  to={`/plan-your-event?style=${encodeURIComponent(service3.title)}`}
                  className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Enquire On Concept Design</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <div className="mt-2 rounded-lg overflow-hidden h-48 border border-[#D77A91]/20">
                  <img
                    className="w-full h-full object-cover opacity-90"
                    src={service3.imageUrl}
                    alt={service3.title}
                    onError={handleImgError}
                  />
                </div>
              </div>
            )}
            {service4 && (
              <div className="flex flex-col gap-stack-md glassmorphism p-8 md:p-10 rounded-xl hover:-translate-y-2 transition-transform duration-500 mt-8 md:mt-16 shadow-2xl border border-[#D77A91]/25">
                <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                  {service4.number}
                </span>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                  {service4.title}
                </h3>
                <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                  {service4.description}
                </p>
                <Link
                  to={`/plan-your-event?style=${encodeURIComponent(service4.title)}`}
                  className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Enquire On Décor Styling</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <div className="mt-2 rounded-lg overflow-hidden h-48 border border-[#D77A91]/20">
                  <img
                    className="w-full h-full object-cover opacity-90"
                    src={service4.imageUrl}
                    alt={service4.title}
                    onError={handleImgError}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Service 5 & 6 (Side-by-side cards with image previews) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-gutter mt-16">
          {service5 && (
            <div className="flex flex-col gap-stack-md glassmorphism p-8 md:p-10 rounded-xl shadow-2xl border border-[#D77A91]/25">
              <div className="rounded-lg overflow-hidden h-64 mb-4 border border-[#D77A91]/20">
                <img
                  className="w-full h-full object-cover opacity-90 transition-all duration-700"
                  src={service5.imageUrl}
                  alt={service5.title}
                  onError={handleImgError}
                />
              </div>
              <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                {service5.number}
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                {service5.title}
              </h3>
              <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                {service5.description}
              </p>
              <Link
                to={`/plan-your-event?style=${encodeURIComponent(service5.title)}`}
                className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors mt-1"
              >
                <span>Enquire On Catering & Vendor Management</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          )}
          {service6 && (
            <div className="flex flex-col gap-stack-md glassmorphism p-8 md:p-10 rounded-xl md:mt-16 shadow-2xl border border-[#D77A91]/25">
              <div className="rounded-lg overflow-hidden h-64 mb-4 border border-[#D77A91]/20">
                <img
                  className="w-full h-full object-cover opacity-90 transition-all duration-700"
                  src={service6.imageUrl}
                  alt={service6.title}
                  onError={handleImgError}
                />
              </div>
              <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                {service6.number}
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-[#241C1E] font-bold">
                {service6.title}
              </h3>
              <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                {service6.description}
              </p>
              <Link
                to={`/plan-your-event?style=${encodeURIComponent(service6.title)}`}
                className="inline-flex items-center gap-1.5 font-label-caps text-xs text-[#D77A91] hover:text-[#D4A13A] uppercase tracking-wider font-semibold transition-colors mt-1"
              >
                <span>Enquire On On-Day Coordination</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-site mx-auto mb-section-gap flex justify-center relative z-10">
        <div className="glassmorphism rounded-2xl p-stack-lg md:p-[80px] text-center max-w-3xl shadow-2xl relative overflow-hidden border border-[#D77A91]/30">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A13A]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D77A91]/15 rounded-full blur-3xl" />
          <h2 className="font-headline-md text-headline-md text-[#241C1E] mb-stack-md relative z-10 font-bold">
            Require a Bespoke Solution?
          </h2>
          <p className="font-body-md text-body-md text-[#4A3E42] mb-stack-lg relative z-10 leading-relaxed">
            For VIP Service, Full Event Management, or specialized luxury styling, our team is at your disposal.
          </p>
          <div className="relative z-10">
            <PrimaryButton to="/plan-your-event" variant="rose">
              INQUIRE NOW
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
