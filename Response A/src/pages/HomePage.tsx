import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Scissors,
  Gem,
  Globe2,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Award,
  Compass,
  ChevronRight,
} from 'lucide-react'
import { Instagram, Facebook } from '../components/BrandIcons'

const sections = [
  {
    icon: Scissors,
    eyebrow: '01 — Atelier',
    title: 'Bespoke Mastery',
    description:
      'Every garment is composed by a senior cutter and an apprentice in tandem — twenty-four hands across more than a hundred and forty hours. We measure twenty-eight points on the body, draft a unique paper pattern, and refine the silhouette through three private fittings. The result is not a suit, but an architecture made for one wearer alone.',
    pull: 'Hand-stitched canvasses · Functional buttonholes · Side-seam by hand',
  },
  {
    icon: Gem,
    eyebrow: '02 — Fabric',
    title: 'Premium Fabric Selection',
    description:
      'Our cloth library spans more than 1,400 archival weaves: super 220s worsted from Biella, Sea-Island cotton from Charleston, vicuña from the Peruvian highlands, and silk taffeta woven for ceremonial occasion. Each bolt is logged, conditioned in our cedar room, and rested before it ever meets the cutting table.',
    pull: 'Loro Piana · Scabal · Holland & Sherry · Vitale Barberis Canonico',
  },
  {
    icon: Globe2,
    eyebrow: '03 — Global',
    title: 'Worldwide Distribution',
    description:
      'From our Mayfair flagship we travel to 47 cities annually for trunk shows and private fittings, and our white-glove logistics network delivers to 86 countries. Garments are packed in cedar-lined trunks, hand-carried where possible, and tracked through a single concierge so that each commission arrives as it left the atelier — pristine.',
    pull: 'Trunk shows · White-glove logistics · 24/7 concierge',
  },
]

const stats = [
  { value: '62', label: 'Years of Heritage' },
  { value: '140+', label: 'Hours per Garment' },
  { value: '1,400', label: 'Curated Cloths' },
  { value: '86', label: 'Countries Served' },
]

const editorial = [
  {
    img: '/images/edit-1.jpg',
    title: 'The Cutter\'s Floor',
    caption: 'Where measure becomes pattern, and pattern becomes promise.',
  },
  {
    img: '/images/edit-2.jpg',
    title: 'A Library of Cloth',
    caption: '1,400 weaves catalogued, conditioned, and rested before they cut.',
  },
  {
    img: '/images/edit-3.jpg',
    title: 'Private Fittings',
    caption: 'Three appointments. Three refinements. One silhouette.',
  },
]

export function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/uploads/input_0.png"
            alt="The Royal Stitch master atelier"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Bespoke Atelier · Mayfair
              </p>
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[88px]">
              The Architecture
              <br />
              of <span className="gold-shimmer">Elegance.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              For sixty-two years, The Royal Stitch has drafted garments the
              way an architect drafts a cathedral — by hand, by measure, and
              by an absolute devotion to the form of a single wearer. Welcome
              to the house of the perfect silhouette.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/showroom"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-[#f0cc55]"
              >
                Enter the Showroom
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
              </Link>
              <Link
                to="/legacy"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Discover Our Legacy
                <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                Connect
              </p>
              <a
                href="https://instagram.com/royalstitch"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com/royalstitch"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                <MessageCircle size={13} />
                WhatsApp Connection
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 border-y border-[#1a1a1a] bg-black/80 backdrop-blur"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#1a1a1a] px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 first:pl-0 last:pr-0">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                The House Disciplines
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Three covenants that
              <br />
              shape every commission.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-neutral-400">
            We are a small atelier, intentionally so. Each new client is
            considered against the rhythm of our cutting room, ensuring the
            standard of every garment never bends to scale.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {sections.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="lift group relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-8"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4AF37]/[0.06] blur-3xl transition group-hover:bg-[#D4AF37]/[0.14]" />
                <div className="relative z-10">
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={22} />
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                    {s.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    {s.description}
                  </p>
                  <div className="mt-6 border-t border-[#1a1a1a] pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]/80">
                      {s.pull}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* EDITORIAL GALLERY */}
      <section className="border-t border-[#111111] bg-[#040404] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  Inside the Atelier
                </p>
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                A study in patience, precision, and proportion.
              </h2>
            </div>
            <Link
              to="/legacy"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#D4AF37]"
            >
              Read our heritage
              <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {editorial.map((e, i) => (
              <motion.figure
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                    Series · 0{i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white">{e.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-300">{e.caption}</p>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="border-y border-[#111111] bg-black py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Sparkles size={22} className="mx-auto text-[#D4AF37]" />
          <p className="mt-6 font-display text-2xl italic leading-relaxed text-neutral-200 sm:text-3xl lg:text-4xl">
            "We do not make clothing. We compose proportion, and let the
            wearer borrow it for a lifetime."
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
            — Edmund H. Vance, Master Cutter
          </p>
        </div>
      </section>

      {/* SOCIAL & CONTACT */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Stay With the House
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Follow the cutting floor.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              Our editors publish weekly studies of fittings, fabric drops,
              and travel schedules across our platforms. For private
              consultations, reach our concierge directly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/royalstitch"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[#1f1f1f] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Instagram size={16} />
                Instagram · @royalstitch
              </a>
              <a
                href="https://facebook.com/royalstitch"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[#1f1f1f] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Facebook size={16} />
                Facebook · /royalstitch
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-black transition hover:bg-[#f0cc55]"
              >
                <MessageCircle size={16} />
                WhatsApp Connection
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-8">
            <div className="flex items-center gap-3">
              <Award size={20} className="text-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                Concierge Service
              </p>
            </div>
            <h3 className="mt-4 font-display text-2xl text-white">
              Reserve a private appointment.
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Whether you require a complete capsule, a single ceremonial
              piece, or counsel on heritage cloths, our consultants respond
              within twelve hours.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Compass size={15} className="text-[#D4AF37]" />
                Trunk shows in 47 cities annually
              </li>
              <li className="flex items-center gap-3">
                <Gem size={15} className="text-[#D4AF37]" />
                Direct access to 1,400+ archival cloths
              </li>
              <li className="flex items-center gap-3">
                <Globe2 size={15} className="text-[#D4AF37]" />
                White-glove delivery to 86 countries
              </li>
            </ul>

            <Link
              to="/showroom"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/5 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white transition hover:bg-[#D4AF37] hover:text-black"
            >
              Open the Inquiry Portal
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
