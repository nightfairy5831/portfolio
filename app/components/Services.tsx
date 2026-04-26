'use client'
import { motion } from 'framer-motion'
import { Code2, Smartphone, ShoppingCart, Zap } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

const platforms = ['Shopify', 'Tiendanube']

export default function Services() {
  const { t } = useLang()
  const services = [
    { Icon: Code2, title: t.services.s1, desc: t.services.s1d, items: t.services.items.s1 },
    { Icon: Smartphone, title: t.services.s2, desc: t.services.s2d, items: t.services.items.s2 },
    { Icon: ShoppingCart, title: t.services.s3, desc: t.services.s3d, items: t.services.items.s3 },
    { Icon: Zap, title: t.services.s4, desc: t.services.s4d, items: t.services.items.s4 },
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0b1a30 0%, #0f2240 50%, #0b1a30 100%)' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.services.sub} title={t.services.title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="pro-card rounded-lg p-5">
              <div className="rounded-md p-2 inline-flex mb-3" style={{ backgroundColor: 'rgba(139,124,246,0.06)', border: '1px solid rgba(139,124,246,0.1)' }}>
                <s.Icon className="h-5 w-5" style={{ color: '#8b7cf6' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-[12px] leading-relaxed mb-3" style={{ color: '#94a3b8' }}>{s.desc}</p>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-[12px] flex items-center gap-1.5" style={{ color: '#64748b' }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#8b7cf6' }} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 flex flex-wrap justify-center gap-2">
          <p className="w-full text-center text-[11px] uppercase tracking-[0.15em] font-semibold mb-3" style={{ color: '#64748b' }}>{t.services.platforms}</p>
          {platforms.map((p) => <span key={p} className="tag text-[11px]">{p}</span>)}
        </motion.div>
      </div>
    </section>
  )
}
