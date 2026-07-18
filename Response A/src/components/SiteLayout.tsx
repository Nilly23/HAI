import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Instagram, Facebook } from './BrandIcons'

const NAV = [
  { to: '/', label: 'Welcome' },
  { to: '/legacy', label: 'Legacy' },
  { to: '/showroom', label: 'Showroom' },
  { to: '/partner-portal', label: 'Partner Portal' },
]

function GoldMonogram({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gm-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0cc55" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8a6d1c" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="none" stroke="url(#gm-grad)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="url(#gm-grad)" strokeWidth="0.6" opacity="0.6" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="22"
        fontWeight={700}
        fill="url(#gm-grad)"
        letterSpacing="-1"
      >
        RS
      </text>
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[#1a1a1a] bg-black/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-black/40 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <GoldMonogram className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
              The Royal <span className="text-[#D4AF37]">Stitch</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-neutral-500">
              Bespoke Atelier · Est. 1962
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `group relative whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-200 ${
                  isActive ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1.5 left-0 right-0 mx-auto block h-px origin-center bg-[#D4AF37] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <MessageCircle size={14} />
            Reserve a Fitting
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#1f1f1f] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#1a1a1a] bg-black lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-md px-3 py-3 font-mono text-xs uppercase tracking-[0.22em] transition ${
                      isActive
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                        : 'text-neutral-300 hover:bg-[#0a0a0a] hover:text-white'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-[#D4AF37]">→</span>
                </NavLink>
              ))}
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[#D4AF37] bg-[#D4AF37] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-black"
              >
                <MessageCircle size={14} />
                WhatsApp Connection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-[#1a1a1a] bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <GoldMonogram className="h-12 w-12" />
            <div>
              <div className="font-display text-xl text-white">
                The Royal <span className="text-[#D4AF37]">Stitch</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-neutral-500">
                Atelier · 1962
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-400">
            A heritage house dedicated to the architecture of elegance. Every
            stitch, a covenant of craft.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
            Atelier
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-[#D4AF37]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
            Visit
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#D4AF37]" />
              <span>14 Saville Court, Mayfair, London W1S 3PR</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={15} className="mt-0.5 shrink-0 text-[#D4AF37]" />
              <span>+44 20 7946 0921</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={15} className="mt-0.5 shrink-0 text-[#D4AF37]" />
              <span>concierge@royalstitch.atelier</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
            Follow
          </h4>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com/royalstitch"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#1f1f1f] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com/royalstitch"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#1f1f1f] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#1f1f1f] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <MessageCircle size={16} />
            </a>
          </div>
          <p className="mt-5 text-xs leading-6 text-neutral-500">
            Showroom hours: Mon–Sat, 10:00 – 19:00 GMT.
            <br />
            Private fittings by appointment.
          </p>
        </div>
      </div>

      <div className="border-t border-[#141414]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-neutral-500 sm:flex-row sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} The Royal Stitch · Mayfair, London</span>
          <span className="font-mono uppercase tracking-[0.22em]">
            Crafted by hand · Delivered worldwide
          </span>
        </div>
      </div>
    </footer>
  )
}

function FloatingContact() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a] p-4 shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm text-white">Concierge</p>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">
                Online
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-neutral-400">
              Connect instantly with our atelier consultant for fittings,
              fabric swatches, or worldwide delivery.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 rounded-lg border border-[#1f1f1f] py-2 text-[10px] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/royalstitch"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 rounded-lg border border-[#1f1f1f] py-2 text-[10px] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="mailto:concierge@royalstitch.atelier"
                className="flex flex-col items-center gap-1 rounded-lg border border-[#1f1f1f] py-2 text-[10px] text-neutral-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        aria-label="Open contact"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#D4AF37] text-black shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-colors hover:bg-[#f0cc55]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#D4AF37]/40" />
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
    </div>
  )
}
