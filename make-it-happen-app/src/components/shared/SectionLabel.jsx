/**
 * SectionLabel — blush pink horizontal divider line + uppercase editorial label
 * Appears across Events, Services, Experience, and Our Story
 */
export default function SectionLabel({ children, align = 'left', className = '' }) {
  const isRight = align === 'right'

  return (
    <div className={`flex items-center gap-stack-md ${isRight ? 'justify-end md:text-right' : ''} ${className}`}>
      {!isRight && <span className="w-12 h-[1px] bg-[#D77A91] block" />}
      <span className="font-label-caps text-label-caps text-[#D77A91] tracking-widest uppercase font-semibold">
        {children}
      </span>
      {isRight && <span className="w-12 h-[1px] bg-[#D77A91] block" />}
    </div>
  )
}
