import { useLocation } from 'react-router-dom'

/**
 * PageTransition — wraps page content in a smooth, GPU-accelerated fade-in animation.
 * Re-triggers on route change using the pathname key.
 */
export default function PageTransition({ children }) {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition flex-grow flex flex-col w-full">
      {children}
    </div>
  )
}
