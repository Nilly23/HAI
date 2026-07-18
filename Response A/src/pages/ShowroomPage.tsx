import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Filter,
  Heart,
  Eye,
  CheckCircle2,
  Phone,
  User,
  Sparkles,
  ArrowRight,
  Award,
} from 'lucide-react'

type Item = {
  id: string
  name: string
  category: 'Suits' | 'Coats' | 'Shirting' | 'Ceremonial' | 'Accessories'
  price: string
  fabric: string
  img: string
  badge?: string
}

const catalog: Item[] = [
  {
    id: 'rs-001',
    name: 'The Mayfair Two-Piece',
    category: 'Suits',
    price: '£4,800',
    fabric: 'Super 180s, Loro Piana',
    img: '/images/item-suit-1.jpg',
    badge: 'Signature',
  },
  {
    id: 'rs-002',
    name: 'Saville Court Overcoat',
    category: 'Coats',
    price: '£5,950',
    fabric: 'Cashmere · Holland & Sherry',
    img: '/images/item-coat-1.jpg',
  },
  {
    id: 'rs-003',
    name: 'The Crimson Tuxedo',
    category: 'Ceremonial',
    price: '£6,400',
    fabric: 'Silk Grosgrain · Scabal',
    img: '/images/item-tux-1.jpg',
    badge: 'Limited',
  },
  {
    id: 'rs-004',
    name: 'Honora Three-Piece',
    category: 'Suits',
    price: '£5,200',
    fabric: 'Worsted Wool · Biella',
    img: '/images/item-suit-2.jpg',
  },
  {
    id: 'rs-005',
    name: 'Ivory Sea-Island Shirting',
    category: 'Shirting',
    price: '£420',
    fabric: 'Sea-Island Cotton',
    img: '/images/item-shirt-1.jpg',
  },
  {
    id: 'rs-006',
    name: 'Vance Morning Coat',
    category: 'Ceremonial',
    price: '£7,200',
    fabric: 'Pure New Wool · Vitale Barberis',
    img: '/images/item-morning.jpg',
    badge: 'Couture',
  },
  {
    id: 'rs-007',
    name: 'Mid-Grey Travel Suit',
    category: 'Suits',
    price: '£4,200',
    fabric: 'High-Twist Worsted',
    img: '/images/item-suit-3.jpg',
  },
  {
    id: 'rs-008',
    name: 'Chesterfield Overcoat',
    category: 'Coats',
    price: '£5,400',
    fabric: 'Vicuña Blend',
    img: '/images/item-coat-2.jpg',
  },
  {
    id: 'rs-009',
    name: 'Royal Stitch Pocket Square',
    category: 'Accessories',
    price: '£180',
    fabric: 'Hand-Rolled Silk',
    img: '/images/item-acc.jpg',
  },
]

const categories: ('All' | Item['category'])[] = [
  'All',
  'Suits',
  'Coats',
  'Shirting',
  'Ceremonial',
  'Accessories',
]

const styles = [
  'British Bespoke Two-Piece',
  'Three-Piece Heritage Suit',
  'Ceremonial Morning Coat',
  'Evening Tuxedo',
  'Bespoke Overcoat',
  'Hand-Made Shirting',
  'Curated Accessory',
]

export function ShowroomPage() {
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>('All')
  const [query, setQuery] = useState('')
  const [favourites, setFavourites] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<Item | null>(null)

  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    style: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState(false)

  const filtered = useMemo(() => {
    return catalog.filter((it) => {
      const inCat = activeCat === 'All' || it.category === activeCat
      const inQuery =
        !query ||
        it.name.toLowerCase().includes(query.toLowerCase()) ||
        it.fabric.toLowerCase().includes(query.toLowerCase())
      return inCat && inQuery
    })
  }, [activeCat, query])

  const toggleFav = (id: string) => {
    setFavourites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!form.fullName.trim() || form.mobile.length < 6 || !form.style) return
    setSubmitted(true)
  }

  return (
    <div className="bg-black text-white">
      {/* HEADER */}
      <section className="relative isolate overflow-hidden border-b border-[#111111]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/showroom-hero.jpg"
            alt="Showroom"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        </div>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                The Showroom
              </p>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[80px]">
              An interactive
              <br />
              <span className="gold-shimmer">catalog of craft.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Browse current commissions, curated cloths, and ceremonial
              pieces. Reserve a private fitting through the Inquiry Portal —
              our consultant responds within twelve hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TOOLBAR + GRID */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCat(c)}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] transition ${
                  activeCat === c
                    ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                    : 'border-[#1f1f1f] bg-[#0a0a0a] text-neutral-300 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <Search
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cloth or piece"
                className="w-full rounded-full border border-[#1f1f1f] bg-[#0a0a0a] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none sm:w-64"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
              <Filter size={12} className="text-[#D4AF37]" />
              {filtered.length} pieces
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.article
                key={it.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#070707]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                  {it.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/50 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] backdrop-blur">
                      {it.badge}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFav(it.id)}
                    aria-label="Favourite"
                    className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Heart
                      size={16}
                      fill={favourites.has(it.id) ? '#D4AF37' : 'transparent'}
                      stroke={favourites.has(it.id) ? '#D4AF37' : 'currentColor'}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                    {it.category}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-white">
                      {it.name}
                    </h3>
                    <span className="shrink-0 font-display text-lg text-[#D4AF37]">
                      {it.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400">{it.fabric}</p>

                  <div className="mt-5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(it)}
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#D4AF37] hover:text-black"
                    >
                      <Eye size={13} />
                      Quick Look
                    </button>
                    <a
                      href="#inquiry"
                      onClick={() => setForm((f) => ({ ...f, style: it.category + ' — ' + it.name }))}
                      className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                    >
                      Inquire
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] py-16 text-center">
            <p className="font-display text-2xl text-white">
              No pieces match this view.
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Try a different category or clear your search.
            </p>
          </div>
        )}
      </section>

      {/* QUICK LOOK MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]"
            >
              <div className="grid gap-0 sm:grid-cols-2">
                <img src={selected.img} alt={selected.name} className="h-72 w-full object-cover sm:h-full" />
                <div className="p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                    {selected.category}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-white">{selected.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{selected.fabric}</p>
                  <p className="mt-5 font-display text-2xl text-[#D4AF37]">{selected.price}</p>
                  <p className="mt-5 text-sm leading-7 text-neutral-300">
                    Each commission is composed across more than 140 hours of
                    hand-work and refined through three private fittings.
                    Cloth is selected from our archival library and cut to
                    your individual measure.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="#inquiry"
                      onClick={() => {
                        setForm((f) => ({
                          ...f,
                          style: selected.category + ' — ' + selected.name,
                        }))
                        setSelected(null)
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-black transition hover:bg-[#f0cc55]"
                    >
                      Reserve a fitting
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INQUIRY PORTAL */}
      <section id="inquiry" className="border-y border-[#111111] bg-[#040404] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  Inquiry Portal
                </p>
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Begin a private commission.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
                Submit your details and our consultant will contact you to
                arrange a fitting at our Mayfair flagship — or any of our
                forty-seven trunk-show cities.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  Response within 12 hours, by your preferred channel
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  Private consultation — no obligation to commission
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  Discreet handling of all measurements and details
                </li>
              </ul>

              <div className="mt-10 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-5">
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-[#D4AF37]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                    A Note from the Concierge
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  "Tell us only what you wish — your preferred silhouette,
                  the occasion, the timeline. The rest we will discover
                  together at the cutting table."
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="inq-form"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-7 sm:p-9"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Full Name
                      </label>
                      <div className="group relative">
                        <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition group-focus-within:text-[#D4AF37]" />
                        <input
                          type="text"
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="e.g. Henry Ashcombe"
                          className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-12 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                        />
                      </div>
                      {touched && !form.fullName.trim() && (
                        <p className="mt-2 text-xs text-rose-400">Please enter your full name.</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Mobile Contact
                      </label>
                      <div className="group relative">
                        <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition group-focus-within:text-[#D4AF37]" />
                        <input
                          type="tel"
                          value={form.mobile}
                          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                          placeholder="+44 20 7946 0921"
                          className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-12 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                        />
                      </div>
                      {touched && form.mobile.length < 6 && (
                        <p className="mt-2 text-xs text-rose-400">Please provide a valid mobile number.</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Preferred Style
                      </label>
                      <div className="group relative">
                        <Sparkles size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition group-focus-within:text-[#D4AF37]" />
                        <select
                          value={form.style}
                          onChange={(e) => setForm({ ...form, style: e.target.value })}
                          className="w-full appearance-none rounded-lg border border-[#1f1f1f] bg-black/50 px-12 py-3.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                        >
                          <option value="" className="bg-black">— Select a style —</option>
                          {styles.map((s) => (
                            <option key={s} value={s} className="bg-black">
                              {s}
                            </option>
                          ))}
                          {form.style && !styles.includes(form.style) && (
                            <option value={form.style} className="bg-black">{form.style}</option>
                          )}
                        </select>
                      </div>
                      {touched && !form.style && (
                        <p className="mt-2 text-xs text-rose-400">Please choose a style of interest.</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.3em] text-black transition hover:bg-[#f0cc55] active:scale-[0.99]"
                  >
                    Submit Inquiry
                    <ArrowRight size={15} />
                  </button>

                  <p className="mt-4 text-center text-xs text-neutral-500">
                    By submitting you agree to be contacted regarding your
                    inquiry. We never share your details.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="inq-success"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/5 p-9"
                >
                  <CheckCircle2 size={32} className="text-[#D4AF37]" />
                  <h3 className="mt-4 font-display text-3xl text-white">
                    Inquiry received.
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-200">
                    Inquiry received. Our consultant will contact you shortly via mobile.
                  </p>
                  <div className="mt-6 grid gap-3 rounded-xl border border-[#1a1a1a] bg-black/30 p-5 text-sm sm:grid-cols-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">Name</p>
                      <p className="mt-1 text-white">{form.fullName}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">Mobile</p>
                      <p className="mt-1 text-white">{form.mobile}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">Style</p>
                      <p className="mt-1 text-white">{form.style}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ fullName: '', mobile: '', style: '' })
                      setTouched(false)
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
