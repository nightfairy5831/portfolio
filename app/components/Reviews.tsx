'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from './SectionHeader'

const reviews = [
  { name: 'Jose Miguel de la Cruz Ortiz', project: 'WordPress & Elementor', text: 'Excelente profesional para el trabajo de diseno web. Sabe trabajar perfectamente los programas mas utilizados con atencion, rapidez y eficacia.', time: 'Recent' },
  { name: 'Jose Vallico', project: 'N8n + Claude AI + WooCommerce', text: 'Max no solo cumplio con la implementacion tecnica del chatbot de IA de manera impecable, sino que entrego documentacion de alta calidad. Muy recomendado para proyectos complejos.', time: '3 days ago' },
  { name: 'Sebastian Epitia', project: 'Fitness MVP App', text: 'Es un desarrollador excelente y muy dedicado! Muy inteligente y brillante. Lo recomiendo a todos los clientes que buscan profesionales competentes.', time: '3 weeks ago' },
  { name: 'Alex Eduardo Lemos', project: 'Assessment App', text: 'Profissional extremamente competente, agil e comprometido com a excelencia. Alinha cada etapa com clareza, estrategia e proposito.', time: '2 months ago' },
  { name: 'Erica Andrade', project: 'Marketbot System', text: 'Excelente experiencia trabalhando com MAX. Grande agilidade, entregando resultados rapidos e com alto nivel de qualidade.', time: '3 months ago' },
  { name: 'Marta Martin', project: 'WhatsApp Agent - Medical', text: 'Professional delivery of the WhatsApp agent system. Great understanding of healthcare workflow requirements.', time: 'Last month' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0b1a30' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle="Testimonials" title="Client Reviews" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2" style={{ backgroundColor: 'rgba(139,124,246,0.06)', border: '1px solid rgba(139,124,246,0.1)' }}>
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: '#a78bfa' }} />)}</div>
            <span className="text-sm font-bold text-white">5.0</span>
            <span className="text-xs" style={{ color: '#64748b' }}>/ 5 average client satisfaction</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="pro-card rounded-lg p-5 flex flex-col">
              <Quote className="h-4 w-4 mb-3" style={{ color: '#a78bfa', opacity: 0.3 }} />
              <p className="text-[13px] leading-relaxed flex-1 mb-4" style={{ color: '#94a3b8' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ borderTop: '1px solid #1e3a5f', paddingTop: 12 }}>
                <p className="text-[13px] font-semibold text-white">{r.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[11px]" style={{ color: '#64748b' }}>{r.project}</p>
                  <p className="text-[10px]" style={{ color: 'rgba(139,124,246,0.4)' }}>{r.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
