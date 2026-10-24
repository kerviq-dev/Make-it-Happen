import { useState } from 'react'
import { Link } from 'react-router-dom'
import LocationMap from '../../components/Map/LocationMap.jsx'
import { contactInfo } from '../../data/contact.js'
import { getWhatsAppUrl, buildWhatsAppUrl } from '../../utils/whatsapp.js'
import { useSEO } from '../../utils/seo.js'

export default function Contact() {
  useSEO({
    title: "Contact & Enquiry | Make It Happen Events",
    description:
      "Ready to start planning your event? Get in touch with Make It Happen Events in London and let's bring your vision to life.",
  })

  const [toastMessage, setToastMessage] = useState('')
  const [quickForm, setQuickForm] = useState({
    name: '',
    emailOrPhone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function showToast(msg) {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  function handleCopy(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`)
    })
  }

  function handleQuickSubmit(e) {
    e.preventDefault()
    const url = buildWhatsAppUrl({
      name: quickForm.name,
      notes: `${quickForm.message} (Contact details: ${quickForm.emailOrPhone})`,
    })
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative z-10 w-full min-h-[90vh] pt-[76px] pb-section-gap overflow-hidden bg-[#F3E4D6]">
      {/* The Celestial Halo */}
      <div className="halo-ring" aria-hidden="true" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#FAF4EE] border border-[#D4A13A] text-[#241C1E] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in font-label-caps text-xs tracking-wider">
          <span className="material-symbols-outlined text-[#D4A13A] text-lg">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div
        className="w-full max-w-site mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col lg:flex-row gap-gutter md:gap-section-gap items-start justify-center relative z-10"
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
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-[#D77A91]/15 hover:border-[#D77A91]/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="block font-label-caps text-[10px] text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                    Phone / Hotline
                  </span>
                  <a className="font-body-md text-sm md:text-base text-[#241C1E] hover:text-[#D77A91] transition-colors font-medium" href={contactInfo.phoneHref}>
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contactInfo.phone, 'Phone number')}
                title="Copy phone number"
                className="p-2 text-[#6B5E62] hover:text-[#D77A91] transition-colors"
                aria-label="Copy phone"
              >
                <span className="material-symbols-outlined text-[18px]">content_copy</span>
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-[#D77A91]/15 hover:border-[#D77A91]/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="block font-label-caps text-[10px] text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                    Email Atelier
                  </span>
                  <a className="font-body-md text-sm md:text-base text-[#241C1E] hover:text-[#D77A91] transition-colors break-all font-medium" href={contactInfo.emailHref}>
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contactInfo.email, 'Email address')}
                title="Copy email address"
                className="p-2 text-[#6B5E62] hover:text-[#D77A91] transition-colors"
                aria-label="Copy email"
              >
                <span className="material-symbols-outlined text-[18px]">content_copy</span>
              </button>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-[#D77A91]/15 hover:border-[#D77A91]/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A13A]/15 flex items-center justify-center text-[#D4A13A] shrink-0 border border-[#D4A13A]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div>
                  <span className="block font-label-caps text-[10px] text-[#D4A13A] mb-0.5 uppercase tracking-wider font-semibold">
                    WhatsApp Consultation
                  </span>
                  <a
                    className="font-body-md text-sm md:text-base text-[#241C1E] hover:text-[#D4A13A] transition-colors font-medium inline-flex items-center gap-1.5"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Instant Chat Available</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </a>
                </div>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A13A] hover:text-[#D77A91] p-2 transition-colors"
                aria-label="Open WhatsApp"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/40 border border-[#D77A91]/15">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </div>
              <div>
                <span className="block font-label-caps text-[10px] text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Instagram
                </span>
                <a
                  className="font-body-md text-sm md:text-base text-[#241C1E] hover:text-[#D77A91] transition-colors font-medium"
                  href={contactInfo.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.instagram}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/40 border border-[#D77A91]/15">
              <div className="w-10 h-10 rounded-full bg-[#D77A91]/15 flex items-center justify-center text-[#D77A91] shrink-0 border border-[#D77A91]/40 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </div>
              <div>
                <span className="block font-label-caps text-[10px] text-[#D77A91] mb-0.5 uppercase tracking-wider font-semibold">
                  Coverage
                </span>
                <span className="font-body-md text-sm md:text-base text-[#241C1E] font-medium">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/plan-your-event"
              className="w-full bg-[#D77A91] hover:bg-[#D4A13A] text-white py-4 px-8 rounded-DEFAULT font-label-caps text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#D77A91]/25 font-semibold"
            >
              <span className="material-symbols-outlined text-lg">event</span>
              Open Full Planning Questionnaire
            </Link>
          </div>
        </div>

        {/* Location Map & Fast Enquiry Column */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 relative z-20">
          <LocationMap />

          {/* Direct Quick Note / Consultation Card */}
          <div className="glassmorphism p-6 md:p-8 rounded-2xl border border-[#D77A91]/30 shadow-xl bg-[#FAF4EE]/80">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D77A91]/20">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#D77A91] text-xl">send</span>
                <h3 className="font-headline-sm text-base md:text-lg text-[#241C1E] font-bold">
                  Send a Direct Note to Our Atelier
                </h3>
              </div>
              <span className="text-[11px] font-label-caps text-[#D77A91] uppercase tracking-wider">
                Direct Dispatch
              </span>
            </div>

            <form onSubmit={handleQuickSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                  className="input-glass text-sm"
                />
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  required
                  value={quickForm.emailOrPhone}
                  onChange={(e) => setQuickForm({ ...quickForm, emailOrPhone: e.target.value })}
                  className="input-glass text-sm"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Briefly tell us what celebration or vision you have in mind..."
                required
                value={quickForm.message}
                onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                className="input-glass text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto self-end bg-[#D4A13A] hover:bg-[#D77A91] text-white py-3 px-8 rounded-DEFAULT font-label-caps text-xs uppercase tracking-widest transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>Dispatch Message</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
