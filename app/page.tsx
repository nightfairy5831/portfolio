'use client'
import { LangProvider } from './components/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function Home() {
  return (
    <LangProvider>
      <Particles />
      <div className="flex min-h-screen flex-col relative z-10">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
