'use client'
import { useLang } from './LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ borderTop: '1px solid #1e3a5f', backgroundColor: '#0b1a30' }}>
      <div className="mx-auto px-6 lg:px-8 py-8" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-white font-oswald">Max<span style={{ color: '#8b7cf6' }}>.</span>Li</span>
            <span className="text-[12px]" style={{ color: '#64748b' }}>{t.footer.title}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:maxli980303@gmail.com" className="text-[12px] transition-colors hover:text-[#8b7cf6]" style={{ color: '#64748b' }}>{t.footer.email}</a>
          </div>
        </div>
        <div className="mt-6 pt-5 text-center" style={{ borderTop: '1px solid #1e3a5f' }}>
          <p className="text-[11px]" style={{ color: '#475569' }}>&copy; 2024 Max Li. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
