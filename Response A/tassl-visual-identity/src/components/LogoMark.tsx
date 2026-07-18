type LogoMarkProps = {
  variant?: 'light' | 'dark'
  compact?: boolean
}

export function LogoMark({ variant = 'dark', compact = false }: LogoMarkProps) {
  const color = variant === 'light' ? 'text-white' : 'text-charcoal'
  return (
    <div className={`inline-flex items-end gap-3 ${color}`} aria-label="TASSL logo concept">
      <div className="relative flex flex-col items-center">
        <span className="roof-shape" aria-hidden="true" />
        {!compact && <span className="mt-1 text-[11px] font-semibold tracking-[0.5em] text-gold">T</span>}
      </div>
      {!compact && (
        <span className="font-black uppercase leading-none tracking-[-0.08em] text-[clamp(2.2rem,6vw,5rem)]">
          T<span className="relative inline-block">A<span className="absolute bottom-[0.12em] left-1/2 h-[0.28em] w-[0.34em] -translate-x-1/2 bg-olive" /></span>SSL
        </span>
      )}
      {compact && <span className="text-2xl font-black tracking-[-0.08em]">TASSL</span>}
    </div>
  )
}
