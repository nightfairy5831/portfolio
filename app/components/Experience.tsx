'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

const timeline = [
  { period: '2019', title: 'Senior Full-Stack Developer', sub: 'Contract & Remote', techs: ['Laravel', 'React', 'React Native', 'Node.js', 'AWS', 'Python'],
    items: [
      'Full development lifecycle: architecture, implementation, deployment, and post-launch optimization',
      'Backend-heavy systems: APIs, real-time services, web/mobile/cloud integrations',
      'Key technical decisions: system architecture, data modeling, deployment strategy',
      'Cross-functional collaboration with product managers, designers, and stakeholders',
      'Focus on security, performance, and reliability for sensitive data and high-traffic systems',
    ],
  },
]

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0b1a30 0%, #0f2240 50%, #0b1a30 100%)' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.exp.sub} title={t.exp.title} />

        <div className="relative" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, transparent, #1e3a5f 10%, #1e3a5f 90%, transparent)' }} />

          <div className="space-y-10">
            {timeline.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative pl-10">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.1, type: 'spring', stiffness: 300 }}
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full" style={{ border: '2px solid #8b7cf6', backgroundColor: '#0b1a30' }} />

                <div className="inline-flex rounded-md px-2.5 py-1 text-[11px] font-semibold mb-2" style={{ backgroundColor: 'rgba(139,124,246,0.08)', color: '#8b7cf6', border: '1px solid rgba(139,124,246,0.12)' }}>
                  {`2019 - ${t.exp.present}`}
                </div>
                <h3 className="text-[16px] font-bold text-white mb-0.5">{e.title}</h3>
                <p className="text-[12px] mb-3" style={{ color: '#64748b' }}>{e.sub}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {e.techs.map(tc => <span key={tc} className="tag text-[10px] py-0.5 px-2">{tc}</span>)}
                </div>
                <ul className="space-y-1.5">
                  {e.items.map((a, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.08 + 0.2 }}
                      className="flex items-start gap-2 text-[13px]" style={{ color: '#94a3b8' }}>
                      <span className="w-1 h-1 rounded-full shrink-0 mt-[7px]" style={{ backgroundColor: '#8b7cf6' }} /> {a}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
