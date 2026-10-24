import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getWhatsAppUrl } from '../../utils/whatsapp.js'
import { contactInfo } from '../../data/contact.js'

/**
 * FloatingConcierge — Persistent luxury VIP Concierge floating action badge.
 * Provides high-converting 1-tap access to WhatsApp, Direct Call, and Planning form.
 */
export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-3 w-64 bg-[#FAF4EE]/95 backdrop-blur-xl border border-[#D77A91]/40 rounded-2xl shadow-2xl p-4 flex flex-col gap-2.5 animate-fade-in text-[#241C1E]">
          <div className="flex items-center justify-between pb-2 border-b border-[#D77A91]/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-label-caps text-[10px] text-[#D4A13A] uppercase tracking-widest font-bold">
                Atelier Concierge Online
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6B5E62] hover:text-[#241C1E] p-1 transition-colors"
              aria-label="Close concierge menu"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          {/* Action 1: WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 hover:bg-[#D77A91] hover:text-white transition-all text-left group"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 group-hover:bg-white/20 flex items-center justify-center text-emerald-600 group-hover:text-white shrink-0">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs font-bold leading-tight">
                WhatsApp Directly
              </span>
              <span className="text-[10px] opacity-75 font-body-md">
                Instant bespoke response
              </span>
            </div>
          </a>

          {/* Action 2: Direct Call */}
          <a
            href={contactInfo.phoneHref}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 hover:bg-[#D77A91] hover:text-white transition-all text-left group"
          >
            <div className="w-8 h-8 rounded-full bg-[#D4A13A]/15 group-hover:bg-white/20 flex items-center justify-center text-[#D4A13A] group-hover:text-white shrink-0">
              <span className="material-symbols-outlined text-[18px]">call</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs font-bold leading-tight">
                Call London Atelier
              </span>
              <span className="text-[10px] opacity-75 font-body-md">
                {contactInfo.phone}
              </span>
            </div>
          </a>

          {/* Action 3: Plan Your Event */}
          <Link
            to="/plan-your-event"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-[#D77A91]/15 hover:bg-[#D77A91] hover:text-white text-[#D77A91] transition-all text-left group"
          >
            <div className="w-8 h-8 rounded-full bg-[#D77A91]/25 group-hover:bg-white/20 flex items-center justify-center text-[#D77A91] group-hover:text-white shrink-0">
              <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs font-bold leading-tight text-[#241C1E] group-hover:text-white">
                Plan Your Event
              </span>
              <span className="text-[10px] opacity-75 font-body-md text-[#4A3E42] group-hover:text-white/90">
                Custom proposal form
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* Concierge Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle luxury concierge actions"
        aria-expanded={isOpen}
        className="group relative flex items-center gap-2.5 bg-[#FAF4EE] border-2 border-[#D77A91] hover:border-[#D4A13A] py-2.5 px-4 rounded-full shadow-[0_8px_30px_rgba(215,122,145,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A13A] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4A13A]" />
        </span>
        <span className="material-symbols-outlined text-[#D77A91] group-hover:text-[#D4A13A] text-xl transition-colors">
          {isOpen ? 'close' : 'support_agent'}
        </span>
        <span className="font-label-caps text-xs uppercase tracking-widest text-[#241C1E] font-bold hidden sm:inline-block">
          {isOpen ? 'Close' : 'Concierge'}
        </span>
      </button>
    </div>
  )
}
