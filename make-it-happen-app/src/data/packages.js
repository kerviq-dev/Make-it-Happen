/**
 * Packages data — extracted from packages_holographic_projection_variant
 * Order: Essential, Premium (featured/center), Standard
 * matches the visual order in the Stitch hologram layout
 */
export const packages = [
  {
    id: 'essential',
    name: 'Essential Package',
    price: '£350',
    tagline: 'Simple. Elegant. Stress-free.',
    description:
      'For clients who need professional planning guidance for a smaller or more intimate event.',
    featured: false,
    features: [
      'Event consultation',
      'Planning guidance',
      'Timeline creation',
      'Basic décor advice',
      'Vendor recommendations',
    ],
    ctaLabel: 'Initialize Setup',
  },
  {
    id: 'premium',
    name: 'Premium Luxury',
    price: '£1,000',
    tagline: 'Luxury. Perfection. Unforgettable.',
    description:
      'For clients who want the complete event experience managed from start to finish.',
    featured: true,
    badge: 'RECOMMENDED',
    features: [
      'Everything in Standard',
      'Full event planning & management',
      'Venue sourcing & management',
      'Full vendor management',
      'Luxury décor & styling',
      'On-the-day coordination',
      'VIP service & support',
    ],
    ctaLabel: 'Initialize Setup',
  },
  {
    id: 'standard',
    name: 'Standard Package',
    price: '£700',
    tagline: 'Beautifully planned. Perfectly delivered.',
    description:
      'For clients who want a well-planned and stylish event with support from planning through the event day.',
    featured: false,
    features: [
      'Everything in Essential',
      'Theme & concept design',
      'Vendor coordination',
      'Décor planning & setup',
      'Event timeline & schedule',
      'On-the-day coordination',
    ],
    ctaLabel: 'Initialize Setup',
  },
]
