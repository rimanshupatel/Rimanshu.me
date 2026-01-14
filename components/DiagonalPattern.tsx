'use client'

interface DiagonalPatternProps {
  side: 'left' | 'right'
  className?: string
  topOffset?: string
}

export default function DiagonalPattern({
  side,
  className = '',
  topOffset = '0'
}: DiagonalPatternProps) {
  return (
    <div
      className={`
        absolute top-0 h-full w-[30px] overflow-hidden
        sm:block hidden pointer-events-none
        ${side === 'left' ? 'left-[30px]' : 'right-[30px]'}
        ${className}
      `}
      style={{ top: topOffset }}
    >
      <div
        className="absolute inset-0 dark:opacity-[0.04] opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 3px, transparent 3px, transparent 6px)'
        }}
      />
    </div>
  )
}
