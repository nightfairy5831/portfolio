'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from './LangContext'

export default function Navbar() {
  const { lang, t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#portfolio' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const ids = ['about','skills','services','portfolio','experience','contact']
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top < 150) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300" style={{
      backgroundColor: scrolled ? 'rgba(11,26,48,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,58,95,0.4)' : '1px solid transparent',
    }}>
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: 1200 }}>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold text-white font-oswald tracking-wide">
            Max<span style={{ color: '#8b7cf6' }}>.</span>Li
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200"
                style={{
                  color: active === link.href.slice(1) ? '#8b7cf6' : '#94a3b8',
                  backgroundColor: active === link.href.slice(1) ? 'rgba(139,124,246,0.08)' : 'transparent',
                }}>
                {link.label}
              </a>
            ))}
            <button onClick={toggle}
              className="ml-4 flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all hover:bg-[rgba(139,124,246,0.1)]"
              style={{ border: '1px solid #1e3a5f', color: '#8b7cf6' }}>
              <Globe className="h-3 w-3" /> {lang === 'en' ? '中文' : 'EN'}
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggle}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold"
              style={{ border: '1px solid #1e3a5f', color: '#8b7cf6' }}>
              <Globe className="h-3 w-3" /> {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button className="p-1.5" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden" style={{ backgroundColor: 'rgba(11,26,48,0.98)', borderTop: '1px solid #1e3a5f' }}>
          <div className="px-6 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md text-sm transition-colors" style={{ color: '#94a3b8' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
