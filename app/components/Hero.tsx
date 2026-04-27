'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Globe, Database, Zap, Smartphone, ShoppingCart, Shield, Cpu } from 'lucide-react'
import CountUp from './CountUp'
import TypeWriter from './TypeWriter'
import { useLang } from './LangContext'

const floatingIcons = [
  { Icon: Code2, x: '7%', y: '22%', size: 20, delay: 0 },
  { Icon: Smartphone, x: '90%', y: '15%', size: 18, delay: 0.8 },
  { Icon: Globe, x: '80%', y: '75%', size: 18, delay: 1.6 },
  { Icon: Database, x: '10%', y: '72%', size: 16, delay: 2.4 },
  { Icon: ShoppingCart, x: '93%', y: '48%', size: 16, delay: 3.2 },
  { Icon: Zap, x: '3%', y: '48%', size: 16, delay: 4 },
  { Icon: Shield, x: '85%', y: '88%', size: 14, delay: 4.5 },
  { Icon: Cpu, x: '15%', y: '88%', size: 14, delay: 5 },
]

const rolesEN = ['Senior Full Stack Engineer', 'Systems Architect & Technical Lead', 'AI Integration Specialist']
const rolesCN = ['高级全栈工程师', '系统架构师 & 技术负责人', 'AI集成专家']

export default function Hero() {
  const { lang, t } = useLang()
  const roles = lang === 'en' ? rolesEN : rolesCN
  const stats = [
    { end: 8, suffix: '+', label: t.hero.years },
    { end: 40, suffix: '+', label: t.hero.projects },
    { end: 20, suffix: 'K+', label: t.hero.users },
    { end: 99, suffix: '%', label: t.hero.uptime },
  ]

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <motion.div className="absolute rounded-full" style={{ left: '-8%', top: '-8%', width: 500, height: 500, background: 'rgba(139,124,246,0.06)', filter: 'blur(120px)' }}
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute rounded-full" style={{ right: '-5%', bottom: '-5%', width: 400, height: 400, background: 'rgba(30,58,95,0.2)', filter: 'blur(100px)' }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />

      {floatingIcons.map((item, i) => (
        <motion.div key={i} className="absolute hidden lg:block" style={{ left: item.x, top: item.y }}
          animate={{ opacity: [0.06, 0.15, 0.06], y: [0, -10, 0] }}
          transition={{ duration: 6, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}>
          <item.Icon size={item.size} style={{ color: '#8b7cf6' }} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="relative z-20 px-6 pt-20 text-center w-full" style={{ maxWidth: 880 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: '1px solid #1e3a5f', background: 'rgba(19,40,68,0.6)' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: '#22c55e' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: '#22c55e' }} />
            </span>
            <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>{t.hero.available}</span>
          </motion.div>

          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="mb-4 text-base font-medium tracking-wide uppercase" style={{ color: '#94a3b8' }}>
            {t.hero.subtitle}
          </motion.h3>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-oswald tracking-tight mb-4">
            <span className="shimmer-text">{t.name}</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="h-8 flex items-center justify-center mb-6">
            <span className="text-base md:text-lg font-medium" style={{ color: '#8b7cf6' }}>
              <TypeWriter words={roles} speed={70} pause={2500} />
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mx-auto mb-8 text-[15px] leading-relaxed" style={{ maxWidth: 560, color: '#94a3b8' }}>
            {t.hero.desc1}<strong className="text-white">{t.hero.descBold}</strong>{t.hero.desc2}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-3 mb-14">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">{t.hero.cta1}</a>
            <a href="#portfolio" className="btn-secondary inline-flex items-center gap-2">{t.hero.cta2}</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <div className="inline-grid grid-cols-4 gap-px rounded-xl overflow-hidden glow-ring" style={{ backgroundColor: '#1e3a5f' }}>
              {stats.map((stat, i) => (
                <div key={i} className="px-6 md:px-10 py-5 text-center" style={{ backgroundColor: 'rgba(11,26,48,0.9)' }}>
                  <div className="text-xl md:text-2xl font-bold font-oswald" style={{ color: '#8b7cf6' }}>
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-[11px] mt-1 font-medium uppercase tracking-wider" style={{ color: '#64748b' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-1.5 group">
            <span className="text-[10px] uppercase tracking-[0.2em] group-hover:text-[#8b7cf6] transition-colors" style={{ color: '#64748b' }}>{t.hero.scroll}</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="h-3.5 w-3.5 group-hover:text-[#8b7cf6] transition-colors" style={{ color: '#64748b' }} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
