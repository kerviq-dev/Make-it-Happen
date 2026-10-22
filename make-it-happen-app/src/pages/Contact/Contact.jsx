import LocationMap from '../../components/Map/LocationMap.jsx'
import { contactInfo } from '../../data/contact.js'
import { useSEO } from '../../utils/seo.js'

export default function Contact() {
  useSEO({
    title: "Contact & Enquiry | Make It Happen Events",
    description:
      "Ready to start planning your event? Get in touch with Make It Happen Events in London and let's bring your vision to life.",
  })

  return (
    <div className="relative z-10 w-full min-h-[90vh] pt-[76px] pb-section-gap overflow-hidden bg-[#F3E4D6]">
      {/* The Celestial Halo */}
      <div className="halo-ring" aria-hidden="true" />

      <div
        className="w-full max-w-site mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col lg:flex-row gap-gutter md:gap-section-gap items-center justify-center relative z-10"
        id="scene-container"
      >
        {/* Typography & Contact Info Column */}
        <div className="w-full lg:w-5/12 flex flex-col gap-stack-lg z-10">
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
              Make It Happen Events
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-[#241C1E] leading-none font-bold">
              LET'S
              <br />
              MAKE IT
              <br />
              <span className="text-gradient-gold-rose">
                HAPPEN
              </span>
            </h1>
          </div>

          <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-md leading-relaxed">
            Ready to start planning your event? Get in touch with Make It Happen Events and let's bring your vision to
            life.
          </p>

          <div className="flex flex-col gap-stack-md mt-stack-md border-t border-[#D77A91]/20 pt-stack-lg">
            {/* Phone */}
            <div className="flex items-center gap-4 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Phone
                </span>
                <a className="font-body-md text-body-md text-[#241C1E] hover:text-[#D77A91] transition-colors font-medium" href={contactInfo.phoneHref}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Email
                </span>
                <a className="font-body-md text-body-md text-[#241C1E] hover:text-[#D77A91] transition-colors break-all font-medium" href={contactInfo.emailHref}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Instagram
                </span>
                <a
                  className="font-body-md text-body-md text-[#241C1E] hover:text-[#D77A91] transition-colors font-medium"
                  href={contactInfo.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.instagram}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Location
                </span>
                <span className="font-body-md text-body-md text-[#241C1E] font-medium">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Column */}
        <div className="w-full lg:w-7/12 relative z-20">
          <LocationMap />
        </div>
      </div>
    </div>
  )
}
