import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, ctaLink } from '../../data/navigation.js'
import logoImg from '@logo'

/**
 * Mobile slide-in navigation drawer.
 * Appears when the hamburger in Header is tapped.
 * If !isOpen, returns null to avoid duplicate nav links and overlay clutter.
 */
export default function MobileMenu({ isOpen, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md lg:hidden animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[70] flex flex-col bg-[#FAF4EE] border-l border-[#D77A91]/30 shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#D77A91]/20">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Make It Happen Events Logo"
              className="w-10 h-10 rounded-full object-cover border border-[#D77A91]/60 shadow-sm"
            />
            <span className="font-headline-sm text-sm text-[#D4A13A] tracking-wider font-bold whitespace-nowrap">
              MAKE IT HAPPEN EVENTS
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#D77A91] p-1.5 hover:text-[#241C1E] transition-colors"
            aria-label="Close navigation menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-stack-lg py-stack-lg flex-grow overflow-y-auto" role="menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              role="menuitem"
              className={({ isActive }) =>
                `font-label-caps text-label-caps uppercase tracking-widest py-3.5 border-b border-[#D77A91]/10 transition-colors duration-200 ${
                  isActive ? 'text-[#D77A91] font-bold' : 'text-[#241C1E] hover:text-[#D77A91]'
                }`
              }
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-stack-lg pb-stack-lg pt-4 border-t border-[#D77A91]/15">
          <Link
            to={ctaLink.path}
            onClick={onClose}
            className="block w-full text-center bg-[#D77A91] text-[#FFFFFF] font-label-caps text-label-caps uppercase tracking-widest py-4 hover:bg-[#D4A13A] transition-colors duration-300 rounded-DEFAULT shadow-md shadow-[#D77A91]/25 font-semibold"
          >
            {ctaLink.label}
          </Link>
        </div>
      </div>
    </>
  )
}
