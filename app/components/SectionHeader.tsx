'use client'
import { motion } from 'framer-motion'

export default function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="text-center mb-14">
      <div className="section-divider" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#8b7cf6' }}>{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white font-oswald tracking-tight">{title}</h2>
    </motion.div>
  )
}
