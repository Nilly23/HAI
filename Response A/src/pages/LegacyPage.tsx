import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  KeyRound,
  User,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  Crown,
  Award,
  Hammer,
  CheckCircle2,
  Ruler,
} from 'lucide-react'

const milestones = [
  {
    year: '1962',
    title: 'A Cutting Room is Founded',
    body: 'Edmund H. Vance opens his first cutting room above a tobacconist on Saville Court, intent on rebuilding the discipline of fully bespoke menswear after the post-war decline.',
  },
  {
    year: '1978',
    title: 'The Perfect Silhouette Doctrine',
    body: 'After sixteen years of trial, Edmund publishes the house\'s internal "Perfect Silhouette" doctrine — a 47-page rulebook on proportion that still guides every commission today.',
  },
  {
    year: '1994',
    title: 'A Library of Cloth',
    body: 'The atelier opens its archival cloth library, working directly with Loro Piana, Scabal, Holland & Sherry, and Vitale Barberis Canonico to commission private weaves.',
  },
  {
    year: '2008',
    title: 'Worldwide Trunk Tour',
    body: 'A formal trunk-show calendar is established, bringing the master cutters to forty-seven cities a year for private fittings.',
  },
  {
    year: '2024',
    title: 'A Third Generation',
    body: 'Honora Vance, granddaughter of Edmund, assumes creative direction — preserving the doctrine while extending the house into ceremonial couture.',
  },
]

export function LegacyPage() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!form.username.trim() || form.password.length < 4) return
    setSubmitted(true)
  }

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#111111]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/atelier-hero.jpg"
            alt="Atelier heritage"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Our Legacy · Est. 1962
              </p>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[80px]">
              A house defined by
              <br />
              <span className="gold-shimmer">heritage and hand.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Sixty-two years on Saville Court — three generations of cutters,
              one unbroken doctrine of proportion, and a single conviction
              that the most enduring elegance is always the most quietly made.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NARRATIVE — 400+ words */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  Brand History
                </p>
              </div>
              <h2 className="font-display text-4xl font-semibold leading-tight">
                The Craft of the Perfect Silhouette
              </h2>
              <p className="text-sm leading-7 text-neutral-400">
                A four-hundred-word study of how The Royal Stitch
                established — and continues to defend — its discipline of
                tailoring.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-4 text-center">
                  <Hammer size={16} className="mx-auto text-[#D4AF37]" />
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Hand
                  </div>
                </div>
                <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-4 text-center">
                  <Ruler size={16} className="mx-auto text-[#D4AF37]" />
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Measure
                  </div>
                </div>
                <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-4 text-center">
                  <Crown size={16} className="mx-auto text-[#D4AF37]" />
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Heritage
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <article className="space-y-7 text-[15px] leading-8 text-neutral-200 lg:col-span-8 lg:text-base">
            <p className="font-display text-2xl leading-relaxed text-white sm:text-[26px]">
              The Royal Stitch was founded in the spring of 1962, in a single
              cutting room above a tobacconist on Saville Court, by Edmund
              Hartley Vance — an apprentice cutter who refused to accept that
              the post-war world had outgrown patient tailoring.
            </p>

            <p>
              Edmund had served eleven years under the most exacting masters
              of London's old trade. He had learned to draft a chest pattern
              by chalk and string, to bone a lapel with horsehair canvas
              against a cedar block, and to listen — quite literally — for
              the soft drape of cloth as it found its line on the body. Yet
              by 1962 the city's great houses were beginning to surrender
              their workrooms to ready-made production. He believed the
              discipline could be defended. He opened his own room, installed
              two cedar wardrobes, and accepted his first three clients on
              the principle that a garment is not a product but a structure
              made for one wearer alone.
            </p>

            <p>
              Within sixteen years he had codified that principle into what
              the house still calls the <em className="text-[#D4AF37] not-italic">Perfect Silhouette
              Doctrine</em> — a forty-seven-page internal rulebook on
              proportion. The doctrine instructs every cutter on the precise
              relationship between shoulder and chest, the angle at which a
              lapel must roll, the distance from the third button to the
              waist seam, and the small, unrepeatable adjustments that make
              the difference between a flattering coat and a coat that
              disappears into the wearer's own form. We measure
              twenty-eight points on the body and refine the silhouette across
              three private fittings; the average commission requires more
              than a hundred and forty hours of hand-work, and is signed by
              both a senior cutter and the apprentice who assisted.
            </p>

            <p>
              The cloth, of course, must equal the labour. From 1994 our
              archive has held more than fourteen hundred bolts — Sea-Island
              cotton from Charleston, super 220s worsted from Biella, vicuña
              from the Peruvian highlands, ceremonial silk taffeta woven for
              court occasion. Each is logged, conditioned in our cedar room,
              and rested for a full season before it ever meets the cutting
              table. Heritage, in our view, is not a memorial — it is a
              discipline that must be proved again with every garment that
              leaves the house.
            </p>

            <p>
              Three generations now keep that discipline alive. Edmund still
              advises from the upstairs studio. His son, William, oversees the
              fabric library. And in 2024 his granddaughter, Honora Vance,
              accepted creative direction, extending the house into
              ceremonial couture while leaving the doctrine intact. Six
              decades on, our promise is unchanged: every Royal Stitch piece
              is composed by hand, measured by master, and delivered with the
              quiet permanence that is the hallmark of true heritage quality.
            </p>

            <div className="border-l-2 border-[#D4AF37] pl-6 py-2">
              <p className="font-display text-xl italic leading-relaxed text-white">
                "A perfect silhouette is not the most spoken-of garment in
                the room. It is the only one the room cannot quite forget."
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                Honora Vance · Creative Director
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-[#111111] bg-[#040404] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
              Six Decades · Five Moments
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A measured history.
          </h2>

          <div className="relative mt-14">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#D4AF37] via-[#2a2418] to-transparent lg:left-1/2 lg:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`relative grid grid-cols-1 gap-6 pl-12 lg:grid-cols-2 lg:pl-0 ${
                    idx % 2 === 0 ? '' : 'lg:[&>div:first-child]:order-2'
                  }`}
                >
                  <span className="absolute left-2.5 top-2.5 h-3 w-3 rounded-full border-2 border-[#D4AF37] bg-black lg:left-1/2 lg:-translate-x-1/2" />

                  <div className={idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}>
                    <div className="font-display text-5xl font-semibold text-[#D4AF37] sm:text-6xl">
                      {m.year}
                    </div>
                  </div>
                  <div className={idx % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'}>
                    <h3 className="font-display text-2xl text-white">{m.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-400 lg:max-w-none">
                      {m.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER ACCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#070707]">
            <img
              src="/images/legacy-tailor.jpg"
              alt="Tailor at work"
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#D4AF37]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                  Members of the House
                </p>
              </div>
              <h3 className="mt-3 font-display text-3xl text-white">
                Save your measure.
              </h3>
              <p className="mt-2 max-w-md text-sm leading-7 text-neutral-300">
                A private dossier of your fittings, fabric preferences, and
                ceremonial calendar — accessible to you and your consultant
                alone.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Member Access
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Open your dossier.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              Sign in with your Royal Stitch credentials to retrieve saved
              measurements, review past commissions, and schedule new
              fittings.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4 rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-6 sm:p-8"
                >
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                      Username
                    </label>
                    <div className="group relative">
                      <User
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition group-focus-within:text-[#D4AF37]"
                      />
                      <input
                        type="text"
                        autoComplete="username"
                        value={form.username}
                        onChange={(e) =>
                          setForm({ ...form, username: e.target.value })
                        }
                        placeholder="e.g. h.vance"
                        className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-12 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                      />
                    </div>
                    {touched && !form.username.trim() && (
                      <p className="mt-2 text-xs text-rose-400">
                        Please enter your username.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                      Passphrase
                    </label>
                    <div className="group relative">
                      <Lock
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition group-focus-within:text-[#D4AF37]"
                      />
                      <input
                        type={showPass ? 'text' : 'password'}
                        autoComplete="current-password"
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Your private passphrase"
                        className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-12 py-3.5 pr-12 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1.5 text-neutral-500 transition hover:bg-white/5 hover:text-[#D4AF37]"
                        aria-label={showPass ? 'Hide passphrase' : 'Show passphrase'}
                      >
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {touched && form.password.length > 0 && form.password.length < 4 && (
                      <p className="mt-2 text-xs text-rose-400">
                        Passphrase must be at least four characters.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-neutral-400">
                      <input type="checkbox" className="h-4 w-4 accent-[#D4AF37]" />
                      Remember this device
                    </label>
                    <a
                      href="#reset"
                      className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] hover:underline"
                    >
                      Reset passphrase
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.3em] text-black transition hover:bg-[#f0cc55] active:scale-[0.99]"
                  >
                    <KeyRound size={15} />
                    Enter Dossier
                  </button>

                  <p className="flex items-center gap-2 pt-2 text-xs text-neutral-500">
                    <ShieldCheck size={14} className="text-[#D4AF37]" />
                    Secured by 256-bit encryption · Your measurements remain private.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/5 p-8"
                >
                  <CheckCircle2 size={28} className="text-[#D4AF37]" />
                  <h3 className="mt-4 font-display text-2xl text-white">
                    Welcome back, {form.username}.
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Your dossier is ready. Recent fittings, archival cloth
                    selections, and your concierge note have been prepared
                    for review.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ username: '', password: '' })
                      setTouched(false)
                    }}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    Sign out
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
