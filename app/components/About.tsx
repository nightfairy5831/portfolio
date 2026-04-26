'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Briefcase, User, Star, Trophy } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

const images = [
  { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop', alt: 'Code' },
  { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', alt: 'Mobile' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop', alt: 'AI' },
]

export default function About() {
  const { t } = useLang()
  const profileInfo = [
    { icon: User, label: t.about.name, value: 'Max Li' },
    { icon: Briefcase, label: t.about.exp, value: '8+ Years' },
    { icon: Mail, label: t.about.email, value: 'maxli980303@gmail.com' },
    { icon: MapPin, label: t.about.loc, value: 'Remote Worldwide' },
    { icon: Star, label: t.about.spec, value: 'Full Stack & AI Automation' },
    { icon: Trophy, label: t.about.proj, value: '40+ Delivered' },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0b1a30 0%, #0f2240 50%, #0b1a30 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(139,124,246,0.06), transparent 50%)' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.about.sub} title={t.about.title} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative grid grid-cols-2 gap-3" style={{ minHeight: 420 }}>
            <div className="relative rounded-lg overflow-hidden row-span-2" style={{ border: '1px solid #1e3a5f' }}>
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="animate-float absolute top-3 left-3 rounded-lg px-3 py-1.5 backdrop-blur-md" style={{ background: 'rgba(11,26,48,0.85)', border: '1px solid #1e3a5f' }}>
                <div className="text-xs font-bold" style={{ color: '#8b7cf6' }}>{t.about.badge1}</div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden" style={{ border: '1px solid #1e3a5f' }}>
              <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-lg overflow-hidden" style={{ border: '1px solid #1e3a5f' }}>
              <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="animate-float-delay absolute bottom-3 right-3 rounded-lg px-3 py-1.5 backdrop-blur-md" style={{ background: 'rgba(11,26,48,0.85)', border: '1px solid #1e3a5f' }}>
                <div className="text-xs font-bold" style={{ color: '#22c55e' }}>{t.about.badge2}</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#e8ecf1' }}>
              {t.about.p1}<strong style={{ color: '#8b7cf6' }}>{t.about.p1b}</strong>{t.about.p1e}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#94a3b8' }}>{t.about.p2}</p>

            <div className="pro-card rounded-lg p-5 mb-6">
              <div className="grid grid-cols-2 gap-3">
                {profileInfo.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-2.5">
                    <div className="rounded-md p-1.5" style={{ backgroundColor: 'rgba(139,124,246,0.08)' }}>
                      <item.icon className="h-3.5 w-3.5" style={{ color: '#8b7cf6' }} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: '#64748b' }}>{item.label}</div>
                      <div className="text-[13px] font-medium text-white">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a href="mailto:maxli980303@gmail.com" className="btn-primary inline-flex items-center gap-2 text-[13px]">
                <Mail className="h-3.5 w-3.5" /> {t.about.contact}
              </a>
              <a href="#portfolio" className="btn-secondary inline-flex items-center gap-2 text-[13px]">{t.about.viewProj}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
