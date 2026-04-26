'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

const courses = ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering', 'Web Development', 'Mobile Development']

export default function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0b1a30' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.edu.sub} title={t.edu.title} />

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="pro-card rounded-lg p-7" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="flex items-start gap-4 mb-5">
            <div className="rounded-md p-2" style={{ backgroundColor: 'rgba(139,124,246,0.06)', border: '1px solid rgba(139,124,246,0.1)' }}>
              <GraduationCap className="h-6 w-6" style={{ color: '#8b7cf6' }} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{t.edu.degree}</h3>
              <p className="text-[13px]" style={{ color: '#8b7cf6' }}>{t.edu.uni}</p>
              <p className="text-[12px]" style={{ color: '#64748b' }}>{t.edu.date}</p>
            </div>
          </div>

          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-wider font-semibold mb-2.5" style={{ color: '#64748b' }}>{t.edu.coursework}</p>
            <div className="flex flex-wrap gap-1.5">
              {courses.map(c => <span key={c} className="tag text-[11px]">{c}</span>)}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1e3a5f', paddingTop: 16 }}>
            <p className="text-[11px] uppercase tracking-wider font-semibold mb-2.5" style={{ color: '#64748b' }}>{t.edu.achievements}</p>
            <div className="space-y-2">
              {[t.edu.honors, t.edu.award].map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: '#94a3b8' }}>
                  <Award className="h-3.5 w-3.5 shrink-0" style={{ color: '#8b7cf6' }} /> {a}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
