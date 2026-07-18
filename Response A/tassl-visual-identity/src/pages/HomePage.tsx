import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle2, Copy, Download, Eye, Image as ImageIcon, Palette, Type } from 'lucide-react'
import { LogoMark } from '../components/LogoMark'
import { SectionTitle } from '../components/SectionTitle'
import { applications, brand, deliverables, palette, pillars } from '../lib/brand'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

function copyValue(value: string) {
  void navigator.clipboard?.writeText(value)
}

export function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-paper text-charcoal">
      <section className="relative isolate min-h-screen px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(210,166,110,0.28),transparent_28%),linear-gradient(135deg,#f8f3e9_0%,#f2efe8_42%,#ded2bd_100%)]" />
        <div className="absolute -right-28 top-24 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -left-20 bottom-12 -z-10 h-96 w-96 rounded-full bg-olive/20 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/55 px-5 py-3 shadow-sm backdrop-blur-xl">
          <LogoMark compact />
          <div className="hidden items-center gap-6 text-sm font-bold text-stone-600 md:flex">
            <a href="#palette" className="transition hover:text-gold">الألوان</a>
            <a href="#logo" className="transition hover:text-gold">الشعار</a>
            <a href="#applications" className="transition hover:text-gold">التطبيقات</a>
          </div>
          <a href="#brandbook" className="rounded-full bg-charcoal px-5 py-2 text-sm font-bold text-white transition hover:bg-gold hover:text-charcoal">
            الدليل
          </a>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-2 text-sm font-bold text-stone-700 shadow-sm backdrop-blur">
              <Eye size={17} className="text-gold" /> هوية بصرية مستخرجة من الصورة المرفقة
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              {brand.arabicName} / <span className="text-gold">{brand.name}</span>
              <br />دليل علامة فاخرة وواضحة
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-stone-700">{brand.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#brandbook" className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 font-bold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal">
                تصفح الهوية <ArrowDown size={18} />
              </a>
              <a href={brand.image} download className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-white/60 px-7 py-4 font-bold text-charcoal backdrop-blur transition hover:-translate-y-0.5 hover:border-gold hover:text-gold">
                تحميل الصورة الأصلية <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-white/20 to-olive/35 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white p-3 shadow-2xl shadow-black/20">
              <img src={brand.image} alt="الصورة الأصلية المستخدمة لاستخراج هوية TASSL" className="aspect-square w-full rounded-[1.55rem] object-cover" />
              <div className="absolute bottom-6 right-6 left-6 rounded-3xl bg-white/82 p-5 shadow-xl backdrop-blur-md">
                <LogoMark compact />
                <p className="mt-2 text-sm leading-6 text-stone-600">ألوان ورمز وحروف مستوحاة مباشرة من تكوين الصورة.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="brandbook" className="px-5 py-24 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Brand DNA" title="جوهر الهوية" body="ترجمة بصرية للصورة إلى نظام علامة قابل للتطبيق على الويب، المطبوعات، والعروض الرسمية." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <motion.article key={item.title} {...fadeUp} className="rounded-[2rem] border border-black/10 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
              <item.icon className="h-9 w-9 text-gold" />
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="logo" className="bg-charcoal px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp} className="rounded-[2.5rem] bg-[#101010] p-8 shadow-2xl shadow-black/30">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-gold">Logo system</p>
            <div className="mt-10 rounded-[2rem] bg-paper p-10 text-charcoal">
              <LogoMark />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <LogoMark compact variant="light" />
                <p className="mt-4 text-sm leading-6 text-stone-300">نسخة داكنة لاستخدامها فوق الخلفيات الفاتحة أو الصور الهادئة.</p>
              </div>
              <div className="rounded-3xl bg-gold p-6 text-charcoal">
                <span className="roof-shape dark" />
                <p className="mt-8 text-sm font-bold leading-6">أيقونة مختصرة تصلح كتطبيق، ختم، فافيكون، أو علامة مائية.</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col justify-center">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">الشعار يقود العين إلى فكرة السقف والوجهة.</h2>
            <p className="mt-6 text-lg leading-9 text-stone-300">
              يحافظ التصميم على كلمة TASSL بحروف كبيرة ومتينة، مع تحويل حرف A إلى نقطة تميّز هندسية. الرمز الذهبي أعلى الاسم يعمل كسقف، سهم صاعد، وإطار ثقة في الوقت نفسه.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['مساحة أمان = ارتفاع حرف T', 'لا تدوير أو تمديد للشعار', 'استخدم الذهبي بنسبة 10–20%'].map((rule) => (
                <div key={rule} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-bold leading-6 text-stone-200">
                  <CheckCircle2 className="mb-3 text-gold" size={22} />{rule}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="palette" className="px-5 py-24 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Color palette" title="لوحة الألوان المعتمدة" body="ألوان مأخوذة من الصورة وموزعة وظيفياً لتسهيل الاستخدام في الهوية." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-5">
          {palette.map((color) => (
            <motion.button key={color.hex} {...fadeUp} onClick={() => copyValue(color.hex)} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white text-right shadow-sm transition hover:-translate-y-1 hover:shadow-xl" aria-label={`نسخ لون ${color.name}`}>
              <div className={`h-44 ${color.text} flex items-end p-5`} style={{ backgroundColor: color.hex }}>
                <div>
                  <p className="text-2xl font-black">{color.hex}</p>
                  <p className="mt-1 text-xs font-bold opacity-75">RGB {color.rgb}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black">{color.name}</h3>
                <p className="mt-2 min-h-20 text-sm leading-6 text-stone-600">{color.usage}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold"><Copy size={15} /> انقر للنسخ</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-xl lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-gold"><Type size={18} /> Typography</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight">النظام الطباعي</h2>
            <p className="mt-5 text-lg leading-9 text-stone-600">يوصى باستخدام خط هندسي عربي/لاتيني يحافظ على الصلابة والحداثة. في التطبيق الحالي استُخدم نظام خطوط نظيف قريب من Montserrat و Tajawal.</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-paper p-6"><p className="text-sm text-stone-500">عنوان رئيسي</p><p className="mt-2 text-4xl font-black">مساحات تُصمم لتدوم</p></div>
              <div className="rounded-3xl bg-paper p-6"><p className="text-sm text-stone-500">نص تعريفي</p><p className="mt-2 leading-8 text-stone-700">تاصل تبني حضوراً بصرياً هادئاً، موثوقاً، ومناسباً للعلامات العقارية والاستشارية.</p></div>
            </div>
          </div>
          <div className="relative min-h-[460px] bg-charcoal p-8 text-white md:p-12">
            <div className="terrain-lines absolute inset-0 opacity-50" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-gold"><Palette size={18} /> Pattern</p>
                <h3 className="mt-5 text-4xl font-black">باترن التضاريس</h3>
                <p className="mt-5 max-w-md leading-8 text-stone-300">خطوط ناعمة مستوحاة من خلفية الصورة لتعطي عمقاً بدون تشويش على الشعار.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <LogoMark compact variant="light" />
                <p className="mt-3 text-sm text-stone-300">نسخة مائية فوق الباترن بنسبة شفافية منخفضة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="bg-[#eee5d8] px-5 py-24 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Applications" title="تطبيقات الهوية" body="نماذج استخدام عملية تساعد على نقل الهوية من الصورة إلى نقاط تواصل حقيقية." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...fadeUp} className="rounded-[2.5rem] bg-charcoal p-8 text-white shadow-xl">
            <LogoMark compact variant="light" />
            <h3 className="mt-10 text-3xl font-black">بطاقة عمل</h3>
            <p className="mt-3 text-stone-300">مدير التطوير العقاري</p>
            <div className="mt-10 space-y-3 text-sm text-stone-300">
              <p>hello@tassl.sa</p>
              <p>+966 55 000 0000</p>
              <p>Riyadh, Saudi Arabia</p>
            </div>
            <div className="mt-10 h-1 w-28 rounded-full bg-gold" />
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item) => (
              <motion.article key={item.title} {...fadeUp} className="rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <item.icon className="h-8 w-8 text-olive" />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-white p-7 shadow-sm">
          <p className="mb-5 inline-flex items-center gap-2 font-black text-gold"><ImageIcon size={20} /> قائمة الاستخدامات المقترحة</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => <div key={app} className="rounded-2xl bg-paper px-5 py-4 font-bold text-stone-700">{app}</div>)}
          </div>
        </div>
      </section>

      <footer className="bg-charcoal px-5 py-12 text-center text-white sm:px-8 lg:px-12">
        <LogoMark compact variant="light" />
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">{brand.tagline}. تم بناء هذا الدليل كتطبيق ويب تفاعلي اعتماداً على الصورة المرفقة فقط، مع نظام ألوان وشعار وتطبيقات قابلة للتوسع.</p>
      </footer>
    </main>
  )
}
