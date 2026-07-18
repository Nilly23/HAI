import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Upload,
  Tag,
  Boxes,
  DollarSign,
  Image as ImageIcon,
  Trash2,
  Plus,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  PackageOpen,
  Eye,
  Layers,
  Search,
} from 'lucide-react'

type Asset = {
  id: string
  title: string
  material: string
  price: string
  category: string
  cover: string
  status: 'Draft' | 'Published'
  views: number
  createdAt: string
}

const seed: Asset[] = [
  {
    id: 'A-1042',
    title: 'Mayfair Two-Piece — Charcoal',
    material: 'Super 180s Worsted, Loro Piana',
    price: '£4,800',
    category: 'Suits',
    cover: '/images/item-suit-1.jpg',
    status: 'Published',
    views: 482,
    createdAt: '2025-04-12',
  },
  {
    id: 'A-1041',
    title: 'Saville Court Overcoat — Camel',
    material: 'Cashmere · Holland & Sherry',
    price: '£5,950',
    category: 'Coats',
    cover: '/images/item-coat-1.jpg',
    status: 'Published',
    views: 311,
    createdAt: '2025-03-28',
  },
  {
    id: 'A-1040',
    title: 'Ivory Sea-Island Shirting',
    material: 'Sea-Island Cotton',
    price: '£420',
    category: 'Shirting',
    cover: '/images/item-shirt-1.jpg',
    status: 'Draft',
    views: 19,
    createdAt: '2025-03-10',
  },
]

const categoryOptions = [
  'Suits',
  'Coats',
  'Shirting',
  'Ceremonial',
  'Accessories',
  'Limited Edition',
]

const materialOptions = [
  'Super 180s Worsted',
  'Cashmere — Holland & Sherry',
  'Sea-Island Cotton',
  'Silk Grosgrain — Scabal',
  'Vicuña Blend',
  'Pure New Wool — Vitale Barberis',
  'Hand-Rolled Silk',
]

export function PartnerPortalPage() {
  const [assets, setAssets] = useState<Asset[]>(seed)
  const [showForm, setShowForm] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'All' | Asset['status']>('All')
  const [confirmId, setConfirmId] = useState<string | null>(null)

  const [form, setForm] = useState({
    title: '',
    material: '',
    price: '',
    category: '',
    cover: '',
  })
  const [touched, setTouched] = useState(false)
  const [justAdded, setJustAdded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return assets.filter((a) => {
      const inFilter = filter === 'All' || a.status === filter
      const inQ =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.material.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      return inFilter && inQ
    })
  }, [assets, query, filter])

  const stats = useMemo(() => {
    const published = assets.filter((a) => a.status === 'Published').length
    const drafts = assets.filter((a) => a.status === 'Draft').length
    const views = assets.reduce((sum, a) => sum + a.views, 0)
    return { total: assets.length, published, drafts, views }
  }, [assets])

  const validate = () => {
    return (
      form.title.trim().length >= 3 &&
      form.material.trim().length >= 2 &&
      form.price.trim().length >= 1 &&
      form.category.trim().length >= 1
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!validate()) return
    const id = `A-${1043 + assets.length - seed.length}`
    const next: Asset = {
      id,
      title: form.title.trim(),
      material: form.material.trim(),
      price: form.price.startsWith('£') ? form.price : `£${form.price}`,
      category: form.category.trim(),
      cover:
        form.cover.trim() ||
        '/images/item-suit-2.jpg',
      status: 'Draft',
      views: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setAssets((prev) => [next, ...prev])
    setForm({ title: '', material: '', price: '', category: '', cover: '' })
    setTouched(false)
    setJustAdded(id)
    setTimeout(() => setJustAdded(null), 2400)
  }

  const togglePublish = (id: string) => {
    setAssets((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'Published' ? 'Draft' : 'Published' }
          : a,
      ),
    )
  }

  const removeAsset = (id: string) => {
    setAssets((prev) => prev.filter((a) => a.id !== id))
    setConfirmId(null)
  }

  return (
    <div className="bg-black text-white">
      {/* HEADER */}
      <section className="relative isolate overflow-hidden border-b border-[#111111]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-black to-[#050505]" />
        <div className="absolute inset-0 -z-10 opacity-30">
          <img
            src="/images/partner-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  Private · Partner Portal
                </p>
              </div>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[64px]">
                Asset Manager
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
                A management hub for the platform manager: add new styles to
                the showroom, edit material details, and govern catalog
                publication.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-300">
                <span className="text-[#D4AF37]">●</span> Honora Vance · Director
              </div>
              <button
                type="button"
                onClick={() => setShowForm((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-black transition hover:bg-[#f0cc55]"
              >
                <Plus size={14} />
                {showForm ? 'Hide form' : 'Add new style'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        {/* STATS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Assets', value: stats.total, icon: Boxes },
            { label: 'Published', value: stats.published, icon: CheckCircle2 },
            { label: 'Drafts', value: stats.drafts, icon: Layers },
            { label: 'Total Views', value: stats.views, icon: TrendingUp },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="rounded-xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                    {s.label}
                  </p>
                  <Icon size={16} className="text-[#D4AF37]" />
                </div>
                <p className="mt-3 font-display text-3xl font-semibold text-white">
                  {s.value.toLocaleString()}
                </p>
              </div>
            )
          })}
        </div>

        {/* PAGE BODY */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* FORM */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                key="form-card"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="lg:col-span-5"
              >
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Upload size={20} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl text-white">
                        Add a new style
                      </h2>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                        Asset Manager · v3.2
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-5">
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Title
                      </label>
                      <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="e.g. Mayfair Two-Piece — Slate"
                        className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                      />
                      {touched && form.title.trim().length < 3 && (
                        <p className="mt-2 text-xs text-rose-400">
                          Title must be at least 3 characters.
                        </p>
                      )}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                          Material Type
                        </label>
                        <div className="group relative">
                          <Tag size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#D4AF37]" />
                          <input
                            list="material-list"
                            value={form.material}
                            onChange={(e) => setForm({ ...form, material: e.target.value })}
                            placeholder="Cashmere · Holland & Sherry"
                            className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-10 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                          />
                          <datalist id="material-list">
                            {materialOptions.map((m) => (
                              <option key={m} value={m} />
                            ))}
                          </datalist>
                        </div>
                        {touched && form.material.trim().length < 2 && (
                          <p className="mt-2 text-xs text-rose-400">
                            Provide a material.
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                          Price Tag
                        </label>
                        <div className="group relative">
                          <DollarSign size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#D4AF37]" />
                          <input
                            type="text"
                            inputMode="decimal"
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            placeholder="4,800"
                            className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-10 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                          />
                        </div>
                        {touched && !form.price.trim() && (
                          <p className="mt-2 text-xs text-rose-400">
                            Provide a price.
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categoryOptions.map((c) => (
                          <button
                            type="button"
                            key={c}
                            onClick={() => setForm((f) => ({ ...f, category: c }))}
                            className={`rounded-lg border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] whitespace-nowrap transition ${
                              form.category === c
                                ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                                : 'border-[#1f1f1f] bg-black/40 text-neutral-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                      {touched && !form.category && (
                        <p className="mt-2 text-xs text-rose-400">
                          Select a category.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        Cover Image URL <span className="lowercase text-neutral-600">(optional)</span>
                      </label>
                      <div className="group relative">
                        <ImageIcon size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#D4AF37]" />
                        <input
                          type="url"
                          value={form.cover}
                          onChange={(e) => setForm({ ...form, cover: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full rounded-lg border border-[#1f1f1f] bg-black/50 px-10 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40"
                        />
                      </div>
                    </div>

                    {/* DROPZONE STYLE UPLOAD */}
                    <label className="block cursor-pointer rounded-xl border-2 border-dashed border-[#2a2418] bg-black/30 p-7 text-center transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/5">
                      <Upload size={26} className="mx-auto text-[#D4AF37]" />
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                        Upload Cover Asset
                      </p>
                      <p className="mt-2 text-xs text-neutral-400">
                        Drag a file here, or paste a URL above. PNG, JPG up to 8MB.
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0]
                          if (f) {
                            const url = URL.createObjectURL(f)
                            setForm((p) => ({ ...p, cover: url }))
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-black transition hover:bg-[#f0cc55] active:scale-[0.99]"
                    >
                      <Upload size={15} />
                      Publish to Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({ title: '', material: '', price: '', category: '', cover: '' })
                        setTouched(false)
                      }}
                      className="rounded-lg border border-[#1f1f1f] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                      Reset
                    </button>
                  </div>

                  <AnimatePresence>
                    {justAdded && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2.5 text-xs text-[#D4AF37]"
                      >
                        <CheckCircle2 size={14} />
                        Asset {justAdded} added to drafts.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TABLE */}
          <div className={showForm ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
              <div className="flex flex-col gap-4 border-b border-[#1a1a1a] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl text-white">
                    Catalog Assets
                  </h2>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                    {filtered.length} of {assets.length} assets
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search assets"
                      className="w-44 rounded-full border border-[#1f1f1f] bg-black/50 py-2 pl-9 pr-3 text-xs text-white placeholder:text-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  {(['All', 'Published', 'Draft'] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition ${
                        filter === f
                          ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                          : 'border-[#1f1f1f] bg-[#0a0a0a] text-neutral-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-[#141414]">
                {filtered.length === 0 ? (
                  <div className="px-5 py-16 text-center">
                    <PackageOpen size={28} className="mx-auto text-neutral-600" />
                    <p className="mt-3 font-display text-xl text-white">
                      No assets match this view.
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Try a different filter or add a new style.
                    </p>
                  </div>
                ) : (
                  filtered.map((a) => (
                    <motion.div
                      layout
                      key={a.id}
                      className="grid grid-cols-1 items-center gap-4 p-4 sm:grid-cols-[64px_1fr_auto] sm:gap-5"
                    >
                      <img
                        src={a.cover}
                        alt={a.title}
                        loading="lazy"
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                            {a.id}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] ${
                              a.status === 'Published'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-amber-500/10 text-amber-400'
                            }`}
                          >
                            {a.status}
                          </span>
                          <span className="rounded-full border border-[#1f1f1f] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400">
                            {a.category}
                          </span>
                        </div>
                        <h3 className="mt-1 truncate font-display text-lg text-white">
                          {a.title}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-neutral-400">
                          {a.material} · {a.price}
                        </p>
                        <p className="mt-1 flex items-center gap-3 text-[11px] text-neutral-500">
                          <span className="inline-flex items-center gap-1">
                            <Eye size={11} /> {a.views.toLocaleString()}
                          </span>
                          <span>·</span>
                          <span>Added {a.createdAt}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => togglePublish(a.id)}
                          className={`rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition ${
                            a.status === 'Published'
                              ? 'border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                              : 'border-[#D4AF37] bg-[#D4AF37] text-black hover:bg-[#f0cc55]'
                          }`}
                        >
                          {a.status === 'Published' ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmId(a.id)}
                          aria-label="Delete asset"
                          className="grid h-9 w-9 place-items-center rounded-full border border-[#1f1f1f] text-neutral-400 transition hover:border-rose-500/60 hover:text-rose-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <ShieldCheck size={14} className="text-[#D4AF37]" />
              All actions are logged. Drafts are visible only to the partner team.
            </p>
          </div>
        </div>
      </section>

      {/* DELETE CONFIRMATION */}
      <AnimatePresence>
        {confirmId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={() => setConfirmId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a] p-7"
            >
              <h3 className="font-display text-2xl text-white">
                Remove this asset?
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                This will permanently delete <span className="text-white">{confirmId}</span> from
                the catalog. This action cannot be undone.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmId(null)}
                  className="rounded-full border border-[#1f1f1f] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => removeAsset(confirmId)}
                  className="rounded-full bg-rose-500 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white hover:bg-rose-400"
                >
                  Delete asset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
