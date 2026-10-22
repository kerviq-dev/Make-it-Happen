import { useState } from 'react'
import { buildWhatsAppUrl, getWhatsAppUrl } from '../../utils/whatsapp.js'
import { contactInfo } from '../../data/contact.js'
import { useSEO } from '../../utils/seo.js'

export default function PlanYourEvent() {
  useSEO({
    title: 'Plan Your Event via WhatsApp | Make It Happen Events',
    description:
      'Connect directly with our event architects on WhatsApp (+44 7301 553790) for instant consultation and bespoke event curation in London.',
  })

  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    date: '',
    guests: '',
    notes: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleOpenWhatsApp(e) {
    e.preventDefault()
    const url = buildWhatsAppUrl(formData)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full min-h-[90vh] pt-[76px] pb-section-gap px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center relative overflow-hidden bg-[#F3E4D6]">
      {/* Ambient soft cream and blush background glow */}
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(243, 228, 214, 0.6) 35%, rgba(215, 122, 145, 0.15) 60%, transparent 85%)',
          filter: 'blur(130px)',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center py-10">
        <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase mb-stack-sm font-semibold">
          Immediate Direct Consultation
        </span>

        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#241C1E] mb-stack-md leading-tight font-bold">
          Plan Your Event
        </h1>

        <p className="font-body-lg text-body-lg text-[#4A3E42] max-w-2xl mx-auto mb-stack-lg leading-relaxed">
          Connect directly with our senior event architects on WhatsApp for immediate consultation, date availability,
          and bespoke proposals.
        </p>

        {/* Glass Card Container */}
        <div className="glassmorphism w-full p-8 md:p-12 rounded-2xl text-left mt-stack-md relative overflow-hidden border border-[#D77A91]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-8 border-b border-[#D77A91]/20 gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-[#D77A91] uppercase tracking-wider block mb-1 font-semibold">
                Direct WhatsApp Hotline
              </span>
              <span className="font-headline-sm text-headline-sm text-[#D4A13A] font-bold">
                {contactInfo.phone}
              </span>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-white bg-[#D77A91] hover:bg-[#D4A13A] px-6 py-3 rounded-DEFAULT uppercase tracking-widest transition-all duration-300 shadow-md shadow-[#D77A91]/25 font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Chat Directly Now
            </a>
          </div>

          {/* Optional Pre-fill form to compose WhatsApp message */}
          <form onSubmit={handleOpenWhatsApp} className="flex flex-col gap-stack-md">
            <span className="font-label-caps text-label-caps text-[#D77A91] tracking-wider uppercase block font-semibold">
              Or Customize Your Enquiry Before Sending:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-[#241C1E] font-medium" htmlFor="wa-name">
                  Your Name
                </label>
                <input
                  id="wa-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-glass"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-[#241C1E] font-medium" htmlFor="wa-event-type">
                  Event Type
                </label>
                <select
                  id="wa-event-type"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="input-glass appearance-none"
                >
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday & Celebration">Birthday & Celebration</option>
                  <option value="Engagement Party">Engagement Party</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Blessingsway">Blessingsway</option>
                  <option value="Church Event">Church Event</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Private Gala">Private Gala</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-[#241C1E] font-medium" htmlFor="wa-date">
                  Approximate Date
                </label>
                <input
                  id="wa-date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input-glass"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-[#241C1E] font-medium" htmlFor="wa-guests">
                  Expected Guests
                </label>
                <input
                  id="wa-guests"
                  name="guests"
                  type="number"
                  placeholder="e.g. 120"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-glass"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#241C1E] font-medium" htmlFor="wa-notes">
                Your Vision / Notes
              </label>
              <textarea
                id="wa-notes"
                name="notes"
                rows={3}
                placeholder="Share any venue preferences, theme ideas, or budget expectations..."
                value={formData.notes}
                onChange={handleChange}
                className="input-glass resize-none"
              />
            </div>

            <div className="pt-stack-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="font-label-caps text-label-caps text-[#6B5E62] text-xs">
                Clicking below launches WhatsApp on your phone or desktop.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#D77A91] text-white hover:bg-[#D4A13A] font-label-caps text-label-caps px-10 py-4 uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded-DEFAULT shadow-lg shadow-[#D77A91]/25 font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
