import { Link } from 'react-router-dom'
import HeroScene from '../../components/ThreeD/HeroScene.jsx'
import { useSEO, handleImgError } from '../../utils/seo.js'
import logoImg from '@logo'

export default function Home() {
  useSEO({
    title: 'Make It Happen Events | Luxury Event Planning, London',
    description:
      'Exceptional events, thoughtfully planned around you. We craft bespoke experiences for a discerning clientele, merging editorial precision with immersive luxury.',
  })

  return (
    <div className="w-full bg-[#F3E4D6] text-[#241C1E] font-body-md antialiased overflow-x-hidden">
      {/* Section 1: Hero Cinematic */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F3E4D6]">
        {/* 3D Scene Background */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
          <div className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
            <HeroScene />
          </div>
        </div>

        {/* Atmospheric Overlay Image with soft luxury blend */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQmjkc3nrFnam2y60iiBZ7C3SPO04YnsqdEPuq542gW9gq_vWlSBS3OziJfBXGPhXtcA_1zCxmYjz2XjVZolDALvY_XDv-_rrD4-AMQorSzrCS1c1VOiHMfKihlxXPfpk_M0P5lR7orV7RDK9XBr7SZL112WT46TKf5IdKSIJiKpJIWKYqo4T_udWDOXVJBoeRH4aVmefBtr1idyFZMcAZ5OBqTsSm-j0u4i9QhKhOviYSKz8sa5Te')",
          }}
        />

        {/* Gradient Scrim for text readability on light background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3E4D6] via-[#F3E4D6]/60 to-transparent z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-margin-mobile flex flex-col items-center max-w-4xl mx-auto mt-20">
          
          {/* Centered Brand Emblem above London · UK */}
          <div className="mb-4">
            <img
              src={logoImg}
              alt="Make It Happen Events Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#D77A91] shadow-[0_0_20px_rgba(215,122,145,0.35)] mx-auto transition-transform duration-500 hover:scale-105"
              width="80"
              height="80"
            />
          </div>

          <p className="font-label-caps text-label-caps text-[#D77A91] mb-stack-lg tracking-[0.2em] uppercase font-semibold">
            London · UK
          </p>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] mb-stack-lg leading-tight font-bold">
            MAKE IT <span className="text-gradient-gold-rose font-display-lg italic inline-block pr-3 sm:pr-4">HAPPEN</span>
          </h1>

          <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            Exceptional events, thoughtfully planned around you. We craft bespoke experiences for a discerning
            clientele, merging editorial precision with immersive luxury.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/plan-your-event"
              className="bg-[#D77A91] text-white px-8 py-4 font-label-caps text-label-caps hover:bg-[#D4A13A] hover:text-white transition-all duration-300 tracking-wider uppercase inline-flex items-center justify-center rounded-DEFAULT shadow-lg shadow-[#D77A91]/25 font-semibold"
            >
              Plan Your Event
            </Link>
            <Link
              to="/our-work"
              className="bg-transparent border-2 border-[#D77A91] text-[#241C1E] px-8 py-4 font-label-caps text-label-caps hover:bg-[#D77A91] hover:text-white transition-all duration-300 tracking-wider uppercase inline-flex items-center justify-center rounded-DEFAULT font-semibold"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: The Experience (Middle Section with Soft Cream & Blush Background Shade) */}
      <section className="relative py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden" id="experience">
        {/* Soft Cream & Blush Warm Ambient Background Shade Layer */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(243, 228, 214, 0.6) 35%, rgba(215, 122, 145, 0.15) 60%, transparent 85%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#D77A91] block" />
              <p className="font-label-caps text-label-caps text-[#D77A91] tracking-[0.2em] uppercase font-semibold">
                The Experience
              </p>
            </div>
            <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md text-[#241C1E] leading-[1.15] mb-stack-lg font-bold">
              Your vision. <br />
              <span className="text-gradient-rose italic font-semibold">Our expertise.</span> <br />
              An unforgettable experience.
            </h2>
            <p className="font-body-md text-body-md text-[#4A3E42] max-w-md leading-relaxed mb-8">
              We believe negative space is a luxury. Our approach strips away the noise, focusing on tactile quality,
              atmospheric lighting, and flawless execution to create events that feel both expansive and intimately yours.
            </p>
            <div>
              <Link
                to="/experience"
                className="inline-flex items-center font-label-caps text-label-caps text-[#D77A91] hover:text-[#D4A13A] transition-colors tracking-widest gap-2 uppercase group font-semibold"
              >
                Explore The Experience
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 relative h-[600px] overflow-hidden group rounded-lg shadow-xl">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              alt="Editorial style portrait of a beautifully styled dining table at a luxury event in London. High-contrast lighting, deep shadows, and soft gold highlights on cutlery and floral centerpieces."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSNVFqrzsY7-uCax4tvV8VQymDeJ6A6BJ1zQDvw4Oxy9w0I8KfLFyEvrWPKKub3bcG16MxGo8b-XTI2zATP35ubbwhBo_7IdiaGysUfgF2-Wa-Qua102E85avAZJwhvt1TOEc03KpmZlpxAwq5u7XwB4Zt6PNgwJArOBmgDSnRmnU8IFKFNDMckzh75Fs7LiPWtdVZ7N3NJ9SqpW3HUbdbpa-q4Cd_8H_7VhN2ZguDRARuhktdGau"
              onError={handleImgError}
            />
            <div className="absolute inset-0 border-2 border-[#D77A91]/40 pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-700 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  )
}
