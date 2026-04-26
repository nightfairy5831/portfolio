'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0b1a30 0%, #0f2240 50%, #0b1a30 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,124,246,0.04), transparent 50%)' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.contact.sub} title={t.contact.title} />

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center" style={{ maxWidth: 520, margin: '0 auto' }}>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#94a3b8' }}>{t.contact.desc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="rounded-md p-2" style={{ backgroundColor: 'rgba(139,124,246,0.06)', border: '1px solid rgba(139,124,246,0.1)' }}>
                <Mail className="h-4 w-4" style={{ color: '#8b7cf6' }} />
              </div>
              <a href="mailto:maxli980303@gmail.com" className="text-[13px] text-white hover:text-[#8b7cf6] transition-colors">
                maxli980303@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="rounded-md p-2" style={{ backgroundColor: 'rgba(139,124,246,0.06)', border: '1px solid rgba(139,124,246,0.1)' }}>
                <MapPin className="h-4 w-4" style={{ color: '#8b7cf6' }} />
              </div>
              <span className="text-[13px] text-white">{t.contact.loc}</span>
            </div>
          </div>

          <a href="mailto:maxli980303@gmail.com" className="btn-primary inline-flex items-center gap-2">
            <Send className="h-3.5 w-3.5" /> {t.contact.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
