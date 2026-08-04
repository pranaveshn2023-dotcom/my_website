import { motion } from 'framer-motion'
import { ArrowRight, FileText, Cpu, Code2, Sparkles, Search, Briefcase } from 'lucide-react'
import ThreeScene from './3d/ThreeScene'
import SocialLinks from './SocialLinks'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

interface HeroProps {
  onOpenResume: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow" />
      <div className="hero-grid-overlay" />

      <div className="hero-container">
        <motion.div className="hero-grid" variants={container} initial="hidden" animate="show">

          {/* Left Column - Content */}
          <div className="hero-text-col">
            <motion.div variants={item} className="hero-badge">
              <span className="hero-badge-dot" />
              Building & Shipping Live Apps
            </motion.div>

            <motion.h1 variants={item} className="hero-name">
              Hello, I'm <span className="hero-name-highlight">Pranavesh N</span>
            </motion.h1>

            <motion.p variants={item} className="hero-tagline">
              BTech ECE <span>•</span> AI Website Builder <span>•</span> Full Stack Developer
            </motion.p>

            <motion.p variants={item} className="hero-description">
              Building web applications to solve real-world problems.
            </motion.p>

            {/* Google Search AI Overview Recognition Badge */}
            <motion.div variants={item} className="hero-seo-pill">
              <Search size={14} className="hero-seo-icon" />
              <span>Recognized on <strong>Google Search AI Overview</strong> for <strong>Sikkanam</strong> & <strong>Marakadhey</strong></span>
            </motion.div>

            <motion.p variants={item} className="hero-description-sub">
              Creator of <span className="highlight">ValarchiX</span>, <span className="highlight">Marakadhey-Never Miss Opportunities</span> &{' '}
              <span className="highlight">Sikkanam</span>
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div variants={item} className="hero-stats-grid">
              <div className="hero-stat-card">
                <span className="hero-stat-number">3</span>
                <span className="hero-stat-label">Products Built</span>
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

            {/* Call to Action Buttons */}
            <motion.div variants={item} className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-glowing" id="hero-hireme-btn">
                <Briefcase size={16} />
                <span>Contact / Hire Me</span>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <ArrowRight size={16} />
                <span>View My Work</span>
              </a>
              <button onClick={onOpenResume} className="btn btn-secondary" id="hero-resume-btn">
                <FileText size={16} />
                <span>View Resume</span>
              </button>
            </motion.div>

            <motion.div variants={item}>
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Column - 3D Interactive Canvas & Photo Frame */}
          <motion.div variants={item} className="hero-visual-col">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-glow" />
              <div className="hero-avatar-ring" />

              {/* Three.js 3D Scene Overlay */}
              <div className="hero-three-wrapper">
                <ThreeScene />
              </div>

              {/* Floating Tech Chips */}
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
                <Sparkles size={16} className="badge-icon-amber" />
                <span>AI Website Builder</span>
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
