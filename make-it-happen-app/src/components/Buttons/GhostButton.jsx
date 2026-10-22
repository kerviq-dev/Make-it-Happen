import { Link } from 'react-router-dom'

/**
 * Ghost/Secondary Button — subtle gold border with transparent background
 */
export default function GhostButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-label-caps text-label-caps uppercase tracking-wider transition-all duration-300 text-center select-none cursor-pointer bg-transparent border border-primary/30 text-on-surface hover:bg-primary/10 hover:text-primary px-8 py-4 rounded-DEFAULT disabled:opacity-50 disabled:cursor-not-allowed'

  const combinedClass = `${baseStyles} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  )
}
