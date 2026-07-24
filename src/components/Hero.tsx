import { motion } from 'framer-motion'
import { ArrowRight, Mail, FileText } from 'lucide-react'

/* Inline SVG icons for social platforms */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const ProductHuntIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.806-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
  </svg>
)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

interface HeroProps {
  onOpenResume: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow" />
      <div className="hero-grid-overlay" />

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="hero-badge">
          <span className="hero-badge-dot" />
          Building & Shipping
        </motion.div>

        <motion.h1 variants={item} className="hero-name">
          Pranavesh N
        </motion.h1>

        <motion.p variants={item} className="hero-tagline">
          BTech ECE <span>•</span> Product Development <span>•</span> Full Stack PWAs
        </motion.p>

        <motion.p variants={item} className="hero-description">
          Applying logical systems thinking to solve real-world logistics problems.
        </motion.p>

        <motion.p variants={item} className="hero-description-sub">
          Creator of <span className="highlight">ValarchiX</span>, <span className="highlight">Sikkanam</span> &{' '}
          <span className="highlight">Marakadhey</span>
        </motion.p>

        <motion.div variants={item} className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <ArrowRight size={16} />
            View My Work
          </a>
          <button onClick={onOpenResume} className="btn btn-secondary" id="hero-resume-btn">
            <FileText size={16} />
            View Resume
          </button>
          <a href="#contact" className="btn btn-secondary">
            <Mail size={16} />
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="hero-socials">
          <a href="https://www.linkedin.com/in/pranaveshn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="social-linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/pranaveshnandakumar-cmyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" id="social-github">
            <GitHubIcon />
          </a>
          <a href="https://www.producthunt.com/products/sikkanam" target="_blank" rel="noopener noreferrer" aria-label="Product Hunt" id="social-producthunt">
            <ProductHuntIcon />
          </a>
          <a href="mailto:pranavesh.n2023@vitstudent.ac.in" aria-label="Email" id="social-email">
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

