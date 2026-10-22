import { Link } from 'react-router-dom'

/**
 * Primary CTA Button — consistent styling across all pages
 * Can render as a <button> or a react-router <Link> if `to` is provided
 */
export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'gold', // 'gold' | 'ivory'
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 text-center select-none cursor-pointer rounded-DEFAULT disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    gold: 'bg-[#D4A13A] text-[#FFFFFF] hover:bg-[#D77A91] hover:text-[#FFFFFF] shadow-lg shadow-[#D4A13A]/25 px-8 py-4 font-semibold',
    rose: 'bg-[#D77A91] text-[#FFFFFF] hover:bg-[#D4A13A] hover:text-[#FFFFFF] shadow-lg shadow-[#D77A91]/25 px-8 py-4 font-semibold',
    blush: 'bg-[#D77A91] text-[#FFFFFF] hover:bg-[#D4A13A] hover:text-[#FFFFFF] shadow-lg shadow-[#D77A91]/25 px-8 py-4 font-semibold',
    ivory: 'bg-[#FAF4EE] text-[#241C1E] border border-[#D77A91]/30 hover:bg-[#D77A91] hover:text-[#FFFFFF] px-8 py-4 font-semibold',
    cream: 'bg-[#FAF4EE] text-[#241C1E] border border-[#D77A91]/30 hover:bg-[#D77A91] hover:text-[#FFFFFF] px-8 py-4 font-semibold',
    black: 'bg-[#0B0B0B] text-[#FFFFFF] hover:bg-[#D77A91] hover:text-[#FFFFFF] px-8 py-4 font-semibold shadow-md',
    outline: 'border border-[#D77A91] text-[#241C1E] hover:bg-[#D77A91] hover:text-[#FFFFFF] px-8 py-4 font-semibold',
  }

  const combinedClass = `${baseStyles} ${variants[variant] || variants.rose || variants.gold} ${className}`

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
