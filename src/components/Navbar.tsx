import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Train } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Platforms & Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Station Timetable', href: '#journey' },
]

interface NavbarProps {
  onOpenResume: () => void
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}
    >
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="navbar-logo-icon">
            <Train size={18} />
          </div>
          <div className="navbar-logo-text">
            <span>Pranavesh Express</span>
            <span className="navbar-signal-badge">
              <span className="signal-dot green" />
              Signal Clear
            </span>
          </div>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <button onClick={onOpenResume} className="navbar-resume-btn" id="nav-resume-btn">
            <FileText size={14} />
            <span>Resume</span>
          </button>
          <a href="#contact" className="navbar-cta">Dispatch Desk</a>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-menu open"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</a>
            ))}
            <button
              onClick={() => {
                handleNavClick()
                onOpenResume()
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 600, padding: '8px 0', textAlign: 'left' }}
              id="mobile-nav-resume-btn"
            >
              <FileText size={18} />
              <span>View Resume (PDF)</span>
            </button>
            <a href="#contact" onClick={handleNavClick}>Dispatch Desk</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
