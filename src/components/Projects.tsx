import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'ValarchiX',
    tag: 'OS for Financial Knowledge',
    tagClass: 'project-tag-valarchix',
    description:
      'An interactive, educational platform designed to build deep financial knowledge. Empowering users to evaluate business models, assess mutual funds, calculate compounding, and compare tax regimes through dynamic data models.',
    features: [
      'AMFI NAV Sourcing & Screener',
      'Broker Statement Parser (PDF/Excel)',
      'Personal Finance Calculators'
    ],
    buttons: [
      { label: 'Visit ValarchiX', href: 'https://valarchix.vercel.app', icon: 'external' },
    ],
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.06) 100%)',
    logo: '/valarchix-logo.png',
  },
  {
    title: 'Sikkanam',
    tag: 'AI Travel Planner',
    tagClass: 'project-tag-sikkanam',
    description:
      'An AI-powered Tamil Nadu travel planning platform that provides intelligent itineraries, route intelligence, hotel recommendations, budget transparency, railway journey assistance, and travel insights.',
    features: [
      'AI Trip Planning',
      'Budget Intelligence',
      'Route Verification',
      'Hotel Recommendations',
      'Launched on Product Hunt',
    ],
    buttons: [
      { label: 'Visit Sikkanam', href: 'https://sikkanam.vercel.app', icon: 'external' },
      { label: 'Product Hunt', href: 'https://www.producthunt.com/products/sikkanam', icon: 'rocket' },
    ],
    gradient: 'linear-gradient(135deg, rgba(234, 88, 12, 0.12) 0%, rgba(249, 115, 22, 0.06) 100%)',
    logo: '/sikkanam-logo.jpg',
  },
  {
    title: 'Marakadhey',
    tag: 'Chrome Extension',
    tagClass: 'project-tag-marakadhey',
    description:
      'A productivity-focused Chrome Extension that helps users capture opportunities, save reminders, and organize important tasks before they are forgotten.',
    features: [
      'Smart Reminders',
      'Opportunity Tracking',
      'Published on Chrome Web Store',
    ],
    buttons: [
      { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce', icon: 'external' },
    ],
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(139, 92, 246, 0.06) 100%)',
    logo: '/marakadhey-logo.jpg',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Products shipped and used by real people.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="project-card-inner">
                <div className="project-card-content">
                  <span className={`project-tag ${project.tagClass}`}>
                    {project.tag}
                  </span>
                  <h3>{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>

                  <div className="project-features">
                    {project.features.map((feat) => (
                      <span key={feat} className="project-feature">
                        <span className="project-feature-icon">✦</span>
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    {project.buttons.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.href}
                        className="btn btn-secondary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`btn-${project.title.toLowerCase()}-${btn.label.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        {btn.icon === 'rocket' ? <Rocket size={14} /> : <ExternalLink size={14} />}
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="project-card-visual">
                  <div className="project-card-visual-bg" style={{ background: project.gradient }} />
                  <div className="project-card-visual-content">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="project-logo-img"
                    />
                    <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                      {project.title}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
