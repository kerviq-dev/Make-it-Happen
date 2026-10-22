import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx'
import { useSEO } from '../../utils/seo.js'

export default function NotFound() {
  useSEO({
    title: '404 - Page Not Found | Make It Happen Events',
    description: 'The requested page could not be found.',
  })

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-margin-mobile pt-[76px] pb-section-gap relative overflow-hidden">
      <div className="halo-ring" style={{ width: 600, height: 600 }} aria-hidden="true" />
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-stack-lg glassmorphism p-12 md:p-16 rounded-2xl">
        <span className="font-display-lg text-display-lg text-primary leading-none">
          404
        </span>
        <h1 className="font-headline-md text-headline-md text-on-surface">
          Page Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          The requested page does not exist in our digital atelier. Please return to our curated experiences.
        </p>
        <div className="pt-stack-sm">
          <PrimaryButton to="/" variant="gold">
            Return to Home
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
