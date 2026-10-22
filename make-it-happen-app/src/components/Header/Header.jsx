import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks, ctaLink } from '../../data/navigation.js'
import MobileMenu from '../Navigation/MobileMenu.jsx'
import logoImg from '@logo'

/**
 * Header — fixed, rock-solid luxury navigation bar.
 * Implements a static layout with zero layout shifts on route or tab switches.
 * Fixed height (76px) and stable typography metrics prevent any jitter.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[76px] z-50 bg-[#FAF4EE]/95 backdrop-blur-xl border-b border-[#D77A91]/25 shadow-[0_2px_15px_rgba(215,122,145,0.08)]">
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Brand Logo & Full Company Name at Top-Left Corner */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            aria-label="Make It Happen Events — Home"
          >
            <img
              src={logoImg}
              alt="Make It Happen Events Logo"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-[#D77A91]/50 shadow-sm shrink-0 group-hover:border-[#D4A13A] transition-all duration-300"
            />
            <span className="font-headline-sm text-sm sm:text-base md:text-lg lg:text-xl tracking-wider text-[#D4A13A] font-bold whitespace-nowrap group-hover:text-[#D77A91] transition-colors duration-300">
              MAKE IT HAPPEN EVENTS
            </span>
          </Link>

          {/* Desktop Nav Items — zero layout shift underline animation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 flex-shrink-0" role="menubar" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                role="menuitem"
                className={({ isActive }) =>
                  `group relative py-2 font-label-caps text-[11px] xl:text-xs uppercase tracking-wider font-semibold transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#D77A91]'
                      : 'text-[#241C1E] hover:text-[#D77A91]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D77A91] transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Desktop CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={ctaLink.path}
              className="hidden lg:inline-flex items-center justify-center font-label-caps text-[11px] xl:text-xs bg-[#D77A91] text-white hover:bg-[#D4A13A] px-5 py-2.5 rounded transition-all duration-300 uppercase tracking-widest shadow-md shadow-[#D77A91]/25 font-semibold whitespace-nowrap"
            >
              {ctaLink.label}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden p-2 text-[#D77A91] hover:text-[#241C1E] transition-colors shrink-0 flex items-center justify-center rounded focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile slide-in menu drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
