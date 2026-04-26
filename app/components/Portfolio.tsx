'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code2 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useLang } from './LangContext'

type PKey = 'p1'|'p2'|'p3'|'p4'|'p5'|'p6'|'p7'|'p8'|'p9'|'p10'|'p11'|'p12'

const projectData: { key: PKey; cat: string; img: string; tags: string[] }[] = [
  // Accessory Shop - jewelry/accessories closeup
  { key: 'p1', cat: 'E-commerce', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=450&fit=crop', tags: ['React.js', 'Laravel', 'AWS'] },
  // Real Estate - modern apartment buildings
  { key: 'p2', cat: 'Full Stack', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=450&fit=crop', tags: ['React', 'Laravel', 'PostgreSQL'] },
  // Medical Clinic - clean clinic interior
  { key: 'p3', cat: 'Full Stack', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop', tags: ['React', 'Node.js', 'Express'] },
  // Booking - pet grooming/care
  { key: 'p4', cat: 'Full Stack', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=450&fit=crop', tags: ['Laravel', 'React', 'MySQL'] },
  // Fashion - clothing rack/store
  { key: 'p5', cat: 'E-commerce', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=450&fit=crop', tags: ['React', 'Node', 'MySQL'] },
  // Dating/Social - people connecting
  { key: 'p6', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&h=450&fit=crop', tags: ['React.js', 'JavaScript'] },
  // AI Code - code on screen with AI vibe
  { key: 'p7', cat: 'AI', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=450&fit=crop', tags: ['React', 'Django', 'ML'] },
  // AI/ML tech - neural network / brain visualization
  { key: 'p8', cat: 'AI', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop', tags: ['ML', 'React', 'Python'] },
  // Chat app - phone with chat bubbles
  { key: 'p9', cat: 'AI', img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop', tags: ['React Native', 'OpenAI'] },
  // Island game - tropical island scene
  { key: 'p10', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=450&fit=crop', tags: ['React Native', 'Node.js'] },
  // Real estate mobile - modern house exterior
  { key: 'p11', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop', tags: ['React Native', 'WhatsApp'] },
  // Multiplayer gaming - esports/gaming setup
  { key: 'p12', cat: 'Full Stack', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop', tags: ['React', 'Socket.IO', 'AWS'] },
]

export default function Portfolio() {
  const { t } = useLang()
  const cats = [
    { label: t.portfolio.all, value: 'All' },
    { label: t.portfolio.fullStack, value: 'Full Stack' },
    { label: t.portfolio.ecommerce, value: 'E-commerce' },
    { label: t.portfolio.mobile, value: 'Mobile' },
    { label: t.portfolio.ai, value: 'AI' },
  ]
  const [f, setF] = useState('All')
  const [all, setAll] = useState(false)
  const [selectedKey, setSelectedKey] = useState<PKey | null>(null)
  const filtered = f === 'All' ? projectData : projectData.filter(p => p.cat === f)
  const visible = all ? filtered : filtered.slice(0, 6)

  const getProject = (key: PKey) => t.projects[key]
  const selectedData = selectedKey ? projectData.find(p => p.key === selectedKey) : null
  const selectedText = selectedKey ? getProject(selectedKey) : null

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0b1a30' }} />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <SectionHeader subtitle={t.portfolio.sub} title={t.portfolio.title} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-center gap-1.5 mb-10">
          {cats.map(c => (
            <button key={c.value} onClick={() => { setF(c.value); setAll(false) }}
              className="px-3.5 py-1.5 rounded-md text-[12px] font-semibold transition-all duration-200"
              style={{
                backgroundColor: f === c.value ? '#8b7cf6' : 'transparent',
                color: f === c.value ? '#fff' : '#64748b',
                border: f === c.value ? 'none' : '1px solid #1e3a5f',
              }}>
              {c.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const proj = getProject(p.key)
              return (
                <motion.div key={p.key} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setSelectedKey(p.key)}
                  className="pro-card rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden" style={{ height: 180 }}>
                    <img src={p.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(139,124,246,0.2)', backdropFilter: 'blur(2px)' }}>
                      <span className="text-white text-sm font-semibold px-4 py-2 rounded-md" style={{ backgroundColor: 'rgba(139,124,246,0.8)' }}>{t.portfolio.viewDetails}</span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 rounded-md px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: 'rgba(139,124,246,0.15)', color: '#8b7cf6', border: '1px solid rgba(139,124,246,0.2)' }}>
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[14px] font-bold text-white mb-0.5 group-hover:text-[#8b7cf6] transition-colors">{proj.title}</h3>
                    <p className="text-[11px] mb-2.5" style={{ color: '#64748b' }}>{proj.sub}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map(tg => <span key={tg} className="tag text-[10px] py-0.5 px-2">{tg}</span>)}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {filtered.length > 6 && !all && (
          <div className="text-center mt-6">
            <button onClick={() => setAll(true)} className="btn-secondary text-[12px] px-5 py-2">{t.portfolio.showAll} {filtered.length}</button>
          </div>
        )}
        <p className="text-center mt-4 text-[11px]" style={{ color: '#64748b' }}>{t.portfolio.showing} {visible.length} {t.portfolio.of} {filtered.length}</p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedData && selectedText && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelectedKey(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full rounded-xl overflow-hidden"
              style={{ maxWidth: 640, background: 'linear-gradient(135deg, #0f2240 0%, #132844 100%)', border: '1px solid #1e3a5f' }}
              onClick={e => e.stopPropagation()}>

              <button onClick={() => setSelectedKey(null)} className="absolute top-3 right-3 z-10 p-1.5 rounded-md transition-colors hover:bg-white/10" style={{ color: '#94a3b8' }}>
                <X className="h-5 w-5" />
              </button>

              <div className="relative" style={{ height: 220 }}>
                <img src={selectedData.img} alt={selectedText.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2240] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5"><span className="tag text-[11px]">{selectedData.cat}</span></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{selectedText.title}</h3>
                <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>{selectedText.sub}</p>
                <p className="text-[14px] leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{selectedText.desc}</p>

                <div className="mb-5">
                  <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: '#64748b' }}>{t.portfolio.keyFeatures}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedText.f.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[13px]" style={{ color: '#e8ecf1' }}>
                        <span className="w-1 h-1 rounded-full shrink-0 mt-[7px]" style={{ backgroundColor: '#8b7cf6' }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedData.tags.map(tg => <span key={tg} className="tag text-[11px]">{tg}</span>)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ color: '#64748b' }}>
                    <Code2 className="h-3.5 w-3.5" /> {t.portfolio.source}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
