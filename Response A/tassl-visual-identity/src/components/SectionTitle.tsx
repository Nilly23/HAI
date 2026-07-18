type SectionTitleProps = {
  eyebrow: string
  title: string
  body?: string
}

export function SectionTitle({ eyebrow, title, body }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-charcoal md:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-stone-600">{body}</p>}
    </div>
  )
}
