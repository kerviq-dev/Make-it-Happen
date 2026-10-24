import { useEffect } from 'react'

/**
 * LegalModal — Bespoke modal for Privacy Policy & Terms of Service.
 * Provides complete transparency for luxury bespoke event clients in London.
 */
export default function LegalModal({ isOpen, mode = 'privacy', onClose }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isPrivacy = mode === 'privacy'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#FAF4EE] border border-[#D77A91]/40 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative text-[#241C1E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D77A91]/25">
          <div>
            <span className="font-label-caps text-xs text-[#D77A91] uppercase tracking-widest font-bold">
              Make It Happen Events · Legal & Atelier Standards
            </span>
            <h2 className="font-headline-md text-2xl md:text-3xl text-[#241C1E] font-bold mt-1">
              {isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms & Conditions of Service'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B5E62] hover:text-[#241C1E] rounded-full hover:bg-[#D77A91]/15 transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6 font-body-md text-sm text-[#4A3E42] leading-relaxed">
          {isPrivacy ? (
            <>
              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  1. Commitment to Client Confidentiality
                </h3>
                <p>
                  At Make It Happen Events, discretion and client confidentiality are central to our bespoke atelier
                  practice. We plan private galas, milestone celebrations, and high-profile unions across London and
                  destination venues with strict non-disclosure protections.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  2. Collection of Information
                </h3>
                <p>
                  We collect only the personal information essential to orchestrating your event, such as your name,
                  contact phone number, email address, guest numbers, venue preferences, and dietary or stylistic
                  guidelines.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  3. Use & Sharing of Event Data
                </h3>
                <p>
                  Your details are never sold, rented, or distributed to third-party marketing services. Information is
                  shared strictly on a need-to-know basis with approved luxury vendors (caterers, floral designers, sound
                  and lighting engineers) involved directly in delivering your commission.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  4. Your Rights under UK GDPR
                </h3>
                <p>
                  You have the right to request access to the data we hold regarding your event, request corrections, or
                  request complete erasure following the successful conclusion of your booking. To exercise your rights,
                  contact our team at{' '}
                  <a href="mailto:makeithappenevents123@gmail.com" className="text-[#D77A91] font-semibold underline">
                    makeithappenevents123@gmail.com
                  </a>
                  .
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  1. Commission & Retainer
                </h3>
                <p>
                  Commissioning Make It Happen Events requires an agreed consultation brief and a formal deposit or
                  retainer to secure your calendar date. Tiers include Essential (£350), Standard (£700), and Premium
                  Luxury (£1,000), alongside custom architectural quotes.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  2. Scope of Architecture & Deliverables
                </h3>
                <p>
                  Deliverables correspond to the selected package agreement. Revisions to floor plans, themes, or vendor
                  lineups are accommodated up to 21 days before the scheduled date of execution, subject to vendor
                  availability.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  3. Coordination & Vendor Stewardship
                </h3>
                <p>
                  Make It Happen Events acts as the senior coordinator and client advocate. Third-party vendors (venues,
                  specialty caterers, production crews) operate under their individual contracts, which our team audits
                  and manages for cohesive execution.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-base text-[#241C1E] font-bold mb-2">
                  4. Postponement & Cancellation
                </h3>
                <p>
                  Should client circumstances necessitate date adjustment, we make every reasonable effort to transfer
                  retainers to an alternative mutually available date within 12 months. Notice must be provided in
                  writing to our London atelier.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#D77A91]/20 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#D77A91] hover:bg-[#D4A13A] text-white px-6 py-2.5 rounded font-label-caps text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  )
}
