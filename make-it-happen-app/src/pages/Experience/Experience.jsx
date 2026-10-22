import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx'
import SectionLabel from '../../components/shared/SectionLabel.jsx'
import ExperienceBackground from '../../components/shared/ExperienceBackground.jsx'
import { useSEO, handleImgError } from '../../utils/seo.js'

export default function Experience() {
  useSEO({
    title: 'The Experience | Make It Happen Events',
    description:
      'Your vision. Our expertise. An unforgettable experience. Discover our approach to luxury event architecture in London.',
  })

  const pillars = [
    {
      num: '01',
      title: 'Negative Space as Luxury',
      body: 'We reject clutter. By allowing architecture, lighting, and curated florals breathing room, every single detail commands the prominence it deserves.',
    },
    {
      num: '02',
      title: 'Atmospheric Resonance',
      body: 'From golden-hour transitions to dramatic candlelight dining, we sculpt multi-sensory atmospheres that adapt seamlessly as your evening unfolds.',
    },
    {
      num: '03',
      title: 'Choreographed Pacing',
      body: 'An unforgettable event has rhythm. We orchestrate transitions between arrival, dining, toasts, and revelry with effortless, invisible precision.',
    },
    {
      num: '04',
      title: 'Discrete Stewardship',
      body: 'On the day, our presence is felt through perfection rather than visibility. You and your guests exist entirely in the moment; we hold the rest.',
    },
  ]

  return (
    <div className="relative w-full pt-[76px] overflow-hidden bg-[#F3E4D6]">
      {/* ─── BESPOKE BACKGROUND: Candlelight Blooms, Symmetry Axis & Cadence Arcs ─── */}
      <ExperienceBackground />

      {/* Hero Header */}
      <section className="relative z-10 px-margin-mobile md:px-margin-desktop py-16 max-w-site mx-auto flex flex-col items-center justify-center text-center min-h-[400px]">
        <SectionLabel className="mb-stack-md text-[#D77A91]">Bespoke Event Architecture</SectionLabel>
        <h1 className="font-display-lg text-display-lg max-md:font-display-lg-mobile max-md:text-display-lg-mobile text-[#241C1E] mb-stack-md leading-tight max-w-4xl font-bold">
          Your Vision. <br className="hidden md:block" />
          <span className="text-gradient-rose font-display-lg italic font-semibold">Our Expertise.</span> <br />
          An Unforgettable Experience.
        </h1>
        <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl leading-relaxed">
          We believe negative space is a luxury. Our approach strips away the noise, focusing on tactile quality,
          atmospheric lighting, and flawless execution to create events that feel both expansive and intimately yours.
        </p>
      </section>

      {/* Main Editorial Feature */}
      <section className="relative z-10 py-12 px-margin-mobile md:px-margin-desktop max-w-site mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 relative h-[550px] md:h-[650px] overflow-hidden group rounded-xl shadow-xl">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              alt="Luxury table styling at evening event"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSNVFqrzsY7-uCax4tvV8VQymDeJ6A6BJ1zQDvw4Oxy9w0I8KfLFyEvrWPKKub3bcG16MxGo8b-XTI2zATP35ubbwhBo_7IdiaGysUfgF2-Wa-Qua102E85avAZJwhvt1TOEc03KpmZlpxAwq5u7XwB4Zt6PNgwJArOBmgDSnRmnU8IFKFNDMckzh75Fs7LiPWtdVZ7N3NJ9SqpW3HUbdbpa-q4Cd_8H_7VhN2ZguDRARuhktdGau"
              onError={handleImgError}
            />
            <div className="absolute inset-0 border-2 border-[#D77A91]/40 pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-700 rounded-xl" />
          </div>

          <div className="md:col-span-6 flex flex-col gap-stack-lg md:pl-8 mt-8 md:mt-0">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
              The Philosophy of Gathering
            </span>
            <h2 className="font-headline-md text-headline-md text-[#241C1E] font-bold">
              Crafting Memories Through Uncompromising Discipline
            </h2>
            <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
              Every gathering in London carries its own gravity. Whether hosted in a historic townhouse, a sky-high
              penthouse, or a secluded private estate, we ensure that your event feels deeply authentic to your personal
              narrative.
            </p>
            <p className="font-body-md text-body-md text-[#4A3E42] leading-relaxed">
              From our first conceptual dialogue to the departure of your final guest, our team operates with quiet
              confidence, anticipating needs before they arise and delivering an effortless experience.
            </p>
            <div className="pt-stack-sm">
              <PrimaryButton to="/plan-your-event" variant="rose">
                Plan With Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="relative z-10 py-24 px-margin-mobile md:px-margin-desktop border-t border-[#D77A91]/20 mb-section-gap">
        <div className="max-w-site mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel className="justify-center mb-stack-sm text-[#D77A91]">Core Principles</SectionLabel>
            <h2 className="font-headline-md text-headline-md text-[#241C1E] font-bold">
              The Pillars of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="glassmorphism p-8 rounded-xl flex flex-col gap-stack-md hover:-translate-y-1 transition-transform duration-300 shadow-lg border border-[#D77A91]/25 hover:border-[#D77A91]"
              >
                <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest font-bold">
                  {pillar.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-[#241C1E] font-semibold">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-[#4A3E42] text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-site mx-auto mb-section-gap flex justify-center">
        <div className="glassmorphism rounded-2xl p-stack-lg md:p-[80px] text-center max-w-3xl shadow-2xl relative overflow-hidden w-full border border-[#D77A91]/30">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A13A]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D77A91]/15 rounded-full blur-3xl" />
          <h2 className="font-headline-md text-headline-md text-[#241C1E] mb-stack-md relative z-10 font-bold">
            Experience the Extraordinary
          </h2>
          <p className="font-body-md text-body-md text-[#4A3E42] mb-stack-lg relative z-10">
            Tell us about your upcoming event, and let us design an experience tailored entirely to your standard.
          </p>
          <div className="relative z-10">
            <PrimaryButton to="/contact" variant="rose">
              Get in Touch
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
