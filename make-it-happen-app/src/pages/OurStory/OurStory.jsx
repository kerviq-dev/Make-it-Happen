import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx'
import OurStoryBackground from '../../components/shared/OurStoryBackground.jsx'
import { useSEO, handleImgError } from '../../utils/seo.js'

export default function OurStory() {
  useSEO({
    title: 'Our Story | Make It Happen Events',
    description:
      'We orchestrate moments of profound beauty. In the quiet intersection of flawless execution and visionary design, true luxury breathes.',
  })

  return (
    <div className="relative w-full overflow-hidden bg-[#F3E4D6] pt-[76px]">
      {/* ─── BESPOKE BACKGROUND: Full-Page Celestial Heritage Astrolabe System ─── */}
      <OurStoryBackground />

      {/* Hero Section */}
      <header className="relative min-h-[75vh] flex items-center justify-center py-16 px-margin-mobile md:px-margin-desktop z-10">
        {/* Hero Card */}
        <div className="relative z-10 max-w-site mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-8 md:col-start-3 text-center flex flex-col gap-stack-lg glassmorphism p-8 md:p-16 rounded-xl relative shadow-2xl border border-[#D77A91]/30">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-[0.25em] uppercase font-semibold">
              The Heritage of Craft
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] leading-tight font-bold">
              The Soul of Celebration
            </h1>
            <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl mx-auto leading-relaxed">
              We do not merely host events; we orchestrate moments of profound beauty. In the quiet intersection of
              flawless execution and visionary design, true luxury breathes.
            </p>
          </div>
        </div>
      </header>

      {/* Our Philosophy */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 flex flex-col gap-stack-lg glassmorphism p-8 md:p-12 rounded-xl z-10 relative md:-mr-12 shadow-2xl border border-[#D77A91]/25">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
              Our Philosophy
            </span>
            <h2 className="font-headline-md text-headline-md text-[#241C1E] font-bold">Visionary Precision</h2>
            <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
              Luxury is found in the details that go unnoticed, yet felt profoundly. It is the perfect symmetry of a
              table setting, the deliberate pacing of an evening, and the atmospheric shift as light turns to dusk. We
              believe that true sophistication is effortless, born from meticulous planning and an unwavering dedication
              to the art of gathering.
            </p>
          </div>
          <div className="md:col-span-6 relative z-0 mt-8 md:mt-0">
            <div className="ambient-rose-glow rounded-xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#D77A91]/30">
              <img
                className="w-full h-full object-cover"
                alt="Detailed editorial shot of a meticulously set dining table in a London venue"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4B8QpZ5K4AZN63mDQXiqT9cGSHvxXpkQqA7THgVHNHX9plo1GDRjsiSvd1mH-zCS2WoIy1m43OBpp-DMIOK9Q30A_lTwEOk0U7eaHjEdkniq-eUsT1r7_H3-Xxi_a2OXzZyZ6u4vyjLjXCH70DINyHD_qZzCGUDYl97qD7Qj7tJbPWiAF1XnU1dN3Y21XnqZUZhN4MJESM63umnWknSWXQfY9nJSLySiz59s9iWMtkfSthAcsK4l"
                onError={handleImgError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Persona */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 relative h-[600px] md:h-[800px] rounded-xl overflow-hidden shadow-2xl border border-[#D77A91]/25">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 transition-all duration-1000"
                  alt="Editorial portrait of event planner in an architectural space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLxRi1b1AdaGEEPbBSa_ZWtwRe2ZOaPBYtxlAaYZ-3E9kDK2jGUD5_fjx5WlhzHy6cdiF1zKcG-q8yNmyU7X3p-LKAas_KA9Q7VJGXdRsZXyBd0Vt_nq9S9tzonDLqzsa9C1quKK1F02feS3djW1cWvlMaAWZTa-iuLjo5BHMBozIAxibcBejrI0NUh1WbHz5NKIGqyvCRrTVqvlNFODWXcjols5kXpkKTXcVT-5SiGpZuQQXG2QW"
                  onError={handleImgError}
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-stack-lg glassmorphism p-8 md:p-12 rounded-xl z-10 relative md:-ml-24 mt-8 md:mt-0 shadow-2xl border border-[#D77A91]/25">
              <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
                The Architect
              </span>
              <h3 className="font-headline-sm text-headline-sm text-[#241C1E] font-bold">Curating the Intangible</h3>
              <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
                Behind every flawless execution is a singular vision. Our approach is deeply personal—an intimate
                collaboration translating your unspoken desires into a tangible reality. We don't follow trends; we create
                atmospheric experiences that resonate on an emotional frequency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Heritage */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-site mx-auto text-center flex flex-col items-center gap-stack-lg relative z-10 glassmorphism p-12 md:p-24 rounded-2xl max-w-4xl shadow-2xl border border-[#D77A91]/30">
          <span
            className="material-symbols-outlined text-[#D4A13A] text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            assured_workload
          </span>
          <h2 className="font-headline-md text-headline-md text-[#241C1E] font-bold">Rooted in London, Felt Globally</h2>
          <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-3xl leading-relaxed">
            With over a decade of defining high-end celebrations, our London atelier serves as the nexus of global
            luxury event design. We bring British editorial sensibility to discerning clients worldwide.
          </p>
          <div className="mt-stack-md p-8 bg-[#FAF4EE] border border-[#D77A91]/30 rounded-xl inline-flex flex-col gap-stack-sm shadow-inner">
            <span className="font-display-lg text-display-lg text-[#D4A13A] font-bold">12</span>
            <span className="font-label-caps text-label-caps text-[#241C1E] uppercase tracking-widest font-semibold">
              Years of Excellence
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-stack-lg glassmorphism p-12 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl border border-[#D77A91]/30">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A13A]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D77A91]/15 rounded-full blur-3xl" />
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] relative z-10 font-bold">
            Begin the Dialogue
          </h2>
          <p className="font-body-md text-body-md text-[#4A3E42] relative z-10">
            Every masterpiece starts with a conversation. Let us understand the vision you wish to bring to life.
          </p>
          <div className="relative z-10 mt-stack-md">
            <PrimaryButton to="/plan-your-event" variant="rose">
              Start Your Story
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
