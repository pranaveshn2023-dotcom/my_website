import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Rocket, CheckCircle2, Train } from 'lucide-react'
import Project3DCard from './3d/Project3DCard'

const projectsData = [
  {
    id: 'valarchix',
    platform: 'Platform 01',
    name: 'ValarchiX',
    category: 'Personal Finance Platform',
    accent: '#10B981',
    logo: '/valarchix-logo.png',
    tagline: 'A React, TypeScript, and Tailwind CSS personal finance learning platform featuring portfolio strategy simulations, mutual fund analyzers, retirement calculators, inflation-adjusted financial tools, and Valarchi Vaathi, an AI-powered finance tutor. Promotes evidence-based investing while keeping all user data local and private.',
    liveUrl: 'https://valarchix.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/valarchix',
    metrics: [
      { label: 'AI Tutor', value: 'Valarchi Vaathi' },
      { label: 'Data Privacy', value: '100% Local' },
      { label: 'Calculators', value: 'MF & Retirement' },
    ],
    features: [
      'Portfolio Strategy & Asset Allocation Simulations',
      'Mutual Fund & Inflation-Adjusted Retirement Analyzers',
      'Valarchi Vaathi: AI-powered interactive finance tutor',
      'Privacy-First Local Data Storage',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GROQ API', 'Vercel'],
  },
  {
    id: 'marakadhey',
    platform: 'Platform 02',
    name: 'Marakadhey-Never Miss Opportunities',
    tabLabel: 'Marakadhey',
    category: 'Chrome Web Store Extension',
    accent: '#A855F7',
    logo: '/marakadhey-logo.jpg',
    tagline: "A live Google Chrome extension that helps users save important webpages and sets automated reminders so they never miss deadlines. Built using JavaScript and Chrome's Manifest V3 architecture, syncing browser notifications with Google Calendar.",
    liveUrl: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce',
    productHuntUrl: 'https://www.producthunt.com/products/marakadhey/marakadhey/launch-day?utm_source=my-products',
    metrics: [
      { label: 'Store Status', value: 'Published Live' },
      { label: 'Architecture', value: 'Manifest V3' },
      { label: 'Integration', value: 'Google Calendar' },
    ],
    features: [
      'Manifest V3 Architecture',
      'Google Calendar Notification Sync',
      'Automated Deadline Reminders',
      'Chrome Web Store Published',
    ],
    techStack: ['JavaScript', 'Chrome Extension API', 'Manifest V3', 'Google Calendar API'],
  },
  {
    id: 'sikkanam',
    platform: 'Platform 03',
    name: 'Sikkanam',
    category: 'TN Budget Travel Planner PWA',
    accent: '#EA580C',
    logo: '/sikkanam-logo.jpg',
    tagline: 'A privacy-first full stack travel PWA for 80+ destinations built with React, TypeScript, and Tailwind CSS. Features a custom OSRM mapping engine with dynamic 1.25x to 1.40x traffic & terrain scaling, TNSTC/IRCTC transit fare pipelines, Google Gemini & Groq API orchestration, and 100 SEO / 96 Accessibility Lighthouse scores.',
    liveUrl: 'https://sikkanam.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/sikkanam',
    metrics: [
      { label: 'Destinations', value: '80+ TN Cities' },
      { label: 'Lighthouse SEO', value: '100 Score' },
      { label: 'Accessibility', value: '96 Score' },
    ],
    features: [
      'Custom OSRM Traffic & Terrain Engine',
      'TNSTC & IRCTC Transit Fare Estimation',
      'Google Gemini & Groq API Orchestration',
      '100 SEO & 96 Accessibility Lighthouse Benchmark',
    ],
    techStack: ['React', 'TypeScript', 'OSRM Engine', 'Groq LLaMA', 'Gemini AI'],
  },
]

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string>(projectsData[0].id)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const current = projectsData.find((p) => p.id === selectedId) || projectsData[0]

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
          <p className="section-label">Product Platforms</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Products shipped and available to use by public with 100% free
          </p>
        </motion.div>

        {/* Railway Platform Selector Tabs */}
        <div className="playground-tabs">
          {projectsData.map((p) => (
            <button
              key={p.id}
              className={`playground-tab ${p.id === selectedId ? 'active' : ''}`}
              onClick={() => setSelectedId(p.id)}
              style={{
                borderColor: p.id === selectedId ? p.accent : 'var(--border)',
                color: p.id === selectedId ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              <div className="platform-tag" style={{ color: p.accent }}>
                <Train size={12} />
                <span>{p.platform}</span>
              </div>
              <img src={p.logo} alt={p.tabLabel || p.name} className="playground-tab-logo" />
              <span>{p.tabLabel || p.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Interactive Product Inspector Container */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Project3DCard accentColor={current.accent}>
            <div className="playground-card" style={{ borderColor: `${current.accent}50` }}>
              <div className="playground-card-header">
                <div className="playground-title-group">
                  <img src={current.logo} alt={current.name} className="playground-header-logo" />
                  <div>
                    <span className="playground-category" style={{ color: current.accent }}>
                      {current.platform} • {current.category}
                    </span>
                    <h3 className="playground-name">{current.name}</h3>
                  </div>
                </div>

                <div className="playground-actions">
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    id={`btn-visit-${current.id}`}
                  >
                    <ExternalLink size={14} />
                    Visit Product
                  </a>
                  {current.productHuntUrl && (
                    <a
                      href={current.productHuntUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      id={`btn-ph-${current.id}`}
                    >
                      <Rocket size={14} />
                      Product Hunt
                    </a>
                  )}
                </div>
              </div>

              <p className="playground-tagline">{current.tagline}</p>

              {/* Metrics Grid */}
              <div className="playground-metrics-grid">
                {current.metrics.map((m) => (
                  <div key={m.label} className="playground-metric-card" style={{ borderColor: `${current.accent}25` }}>
                    <span className="playground-metric-val" style={{ color: current.accent }}>
                      {m.value}
                    </span>
                    <span className="playground-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Feature Breakdown */}
              <div className="playground-features-box">
                <h4>Key Features & Highlights:</h4>
                <div className="playground-features-list">
                  {current.features.map((feat) => (
                    <div key={feat} className="playground-feature-item">
                      <CheckCircle2 size={16} style={{ color: current.accent }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="playground-tech-row">
                <span className="playground-tech-label">Built with:</span>
                <div className="playground-tech-tags">
                  {current.techStack.map((tech) => (
                    <span key={tech} className="playground-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Project3DCard>
        </motion.div>
      </div>
    </section>
  )
}
