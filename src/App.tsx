import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Journey from './components/Journey'
import CodingProfiles from './components/CodingProfiles'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import ParticlesCanvas from './components/3d/ParticlesCanvas'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <div className="app-main-layout">
      {/* Interactive Background Particles Canvas */}
      <ParticlesCanvas />

      <Navbar onOpenResume={handleOpenResume} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenResume={handleOpenResume} />
        <div className="section-divider" />
        <About onOpenResume={handleOpenResume} />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <CodingProfiles />
        <div className="section-divider" />
        <Articles />
        <div className="section-divider" />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  )
}
