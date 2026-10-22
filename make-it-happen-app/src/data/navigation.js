/**
 * Navigation data — single source of truth for all nav links.
 * Header and Footer both consume this array.
 * The `path` values match the HashRouter routes in App.jsx.
 */
export const navLinks = [
  { label: 'Our Story',  path: '/our-story',       key: 'our-story'       },
  { label: 'Services',   path: '/services',         key: 'services'        },
  { label: 'Events',     path: '/events',           key: 'events'          },
  { label: 'Packages',   path: '/packages',         key: 'packages'        },
  { label: 'Our Work',   path: '/our-work',         key: 'our-work'        },
  { label: 'Experience', path: '/experience',       key: 'experience'      },
  { label: 'Contact',    path: '/contact',          key: 'contact'         },
]

/** CTA button used in the header */
export const ctaLink = {
  label: 'Plan Your Event',
  path:  '/plan-your-event',
}
