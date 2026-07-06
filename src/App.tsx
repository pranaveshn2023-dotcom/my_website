import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <>
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <div className="section-divider" />
        <About onOpenResume={handleOpenResume} />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <Contact onOpenResume={handleOpenResume} />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </>
  )
}

