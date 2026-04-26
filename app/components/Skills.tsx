'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

const coreSkills = [
  { name: 'React.js / Next.js', level: 92 },
  { name: 'PHP / MySQL', level: 95 },
  { name: 'HTML / CSS', level: 95 },
  { name: 'Laravel', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'Express.js / Node.js', level: 88 },
  { name: 'TypeScript', level: 90 },
  { name: 'API / REST API', level: 92 },
]

const additional = [
  'React Native', 'Flutter', 'Android', 'iOS', 'Python / Django', 'AWS',
  'PostgreSQL', 'AI / ML', 'Chatbot', 'Blockchain', 'WordPress', 'AWS AI/ML', 'CRM',
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0b1a30' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.skills.sub} title={t.skills.title} />

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-5 mb-14" style={{ maxWidth: 860, margin: '0 auto' }}>
          {coreSkills.map((skill, i) => (
            <motion.div key={skill.name} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-[13px] font-semibold text-white">{skill.name}</span>
                <span className="text-[13px] font-bold" style={{ color: '#8b7cf6' }}>{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1e3a5f' }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #8b7cf6, #8b7cf6, #a78bfa)' }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-center text-[11px] uppercase tracking-[0.15em] font-semibold mb-5" style={{ color: '#64748b' }}>{t.skills.additional}</p>
          <div className="flex flex-wrap justify-center gap-1.5" style={{ maxWidth: 740, margin: '0 auto' }}>
            {additional.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                className="tag cursor-default">{s}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
