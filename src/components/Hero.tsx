import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, FileText, Code2, Cpu, Train, Search } from 'lucide-react'
import ThreeScene from './3d/ThreeScene'
import SocialLinks from './SocialLinks'

interface HeroProps {
  onOpenResume: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="hero-text-col">
            <motion.div variants={itemVariants} className="hero-badge">
              <Train size={14} className="badge-icon-cyan" />
              <span>Express Line • Building & Shipping Products</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-name">
              Hello, I'm <span className="hero-name-highlight">Pranavesh N</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-tagline">
              BTECH ECE • AI WEBSITE BUILDER • FULL STACK DEVELOPER
            </motion.p>

            <motion.p variants={itemVariants} className="hero-description">
              Building high-performance web applications and transit solutions to solve real-world problems.
            </motion.p>

            {/* Google Search AI Recognition Pill */}
            <motion.div variants={itemVariants} className="hero-ai-badge">
              <Search size={15} style={{ color: '#22d3ee', flexShrink: 0 }} />
              <span>
                Recognized on <strong>Google Search AI Overview</strong> for{' '}
                <strong style={{ color: '#ea580c' }}>Sikkanam</strong> &{' '}
                <strong style={{ color: '#a855f7' }}>Marakadhey</strong>
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-description-sub">
              Creator of <span className="highlight">ValarchiX</span>,{' '}
              <span className="highlight">Marakadhey-Never Miss Opportunities</span> &{' '}
              <span className="highlight">Sikkanam</span>
            </motion.p>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="hero-stats-grid">
              <div className="hero-stat-card">
                <span className="hero-stat-number">3</span>
                <span className="hero-stat-label">Products Shipped</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-number">2027</span>
                <span className="hero-stat-label">VIT Chennai Grad</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-number">ECE</span>
                <span className="hero-stat-label">Systems Engineer</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-cta-group">
              <a href="#contact" className="btn btn-primary btn-lg btn-glowing" id="hero-contact-btn">
                <Sparkles size={18} />
                <span>Dispatch / Contact</span>
              </a>
              <a href="#projects" className="btn btn-secondary btn-lg" id="hero-projects-btn">
                <span>View Platforms</span>
                <ArrowRight size={16} />
              </a>
              <button onClick={onOpenResume} className="btn btn-tertiary btn-lg" id="hero-resume-btn">
                <FileText size={16} />
                <span>View Resume</span>
              </button>
            </motion.div>

            {/* Social Links Dock */}
            <motion.div variants={itemVariants} style={{ marginTop: '28px', width: '100%' }}>
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Column - 3D Locomotive Canvas & Photo Frame */}
          <motion.div variants={itemVariants} className="hero-visual-col">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-glow" />
              <div className="hero-avatar-ring" />

              {/* Three.js 3D Locomotive Transit Core */}
              <div className="hero-three-wrapper">
                <ThreeScene />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="hero-float-badge badge-top-right"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Code2 size={16} className="badge-icon-cyan" />
                <span>Full-Stack PWAs</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-left"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Cpu size={16} className="badge-icon-purple" />
                <span>ECE @ VIT Chennai</span>
              </motion.div>

              <motion.div
                className="hero-float-badge badge-bottom-right"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Train size={16} className="badge-icon-amber" />
                <span>IRCTC & Transit Tech</span>
              </motion.div>

              {/* Photo Frame Container */}
              <div className="hero-avatar-frame">
                <img
                  src="/pranavesh-photo.jpg"
                  alt="Pranavesh N presenting at VIT Chennai"
                  className="hero-avatar-img"
                  loading="eager"
                />
                <div className="hero-avatar-overlay" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
