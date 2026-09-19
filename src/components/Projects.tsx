import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Rocket, CheckCircle2, Train, Download, Smartphone, Monitor } from 'lucide-react'
import Project3DCard from './3d/Project3DCard'

const projectsData = [
  {
    id: 'valarchix',
    platform: 'Platform 01',
    name: 'ValarchiX',
    category: 'Inflation adjusted calculators, portfolio simulations & AI tutor',
    accent: '#10B981',
    logo: '/valarchix-logo.png',
    tagline: 'A personal finance learning platform featuring portfolio strategy simulations, mutual fund analyzers, retirement calculators, inflation tools, and Valarchi Vaathi, an AI-powered interactive finance tutor.',
    liveUrl: 'https://valarchix.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/valarchix',
    metrics: [
      { label: 'AI Tutor', value: 'Valarchi Vaathi' },
      { label: 'FinHealth Score', value: 'Income, Expenses & Habits' },
      { label: 'Calculators', value: 'MF & Retirement' },
    ],
    features: [
      'Portfolio Strategy & Asset Allocation Simulations',
      'Mutual Fund & Inflation-Adjusted Retirement Analyzers',
      'Valarchi Vaathi: AI Interactive Finance Tutor',
      'Privacy-First 4-Digit PIN Lock Feature',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GROQ API', 'Vercel'],
  },
  {
    id: 'marakadhey',
    platform: 'Platform 02',
    name: 'Marakadhey-Never Miss Opportunities',
    tabLabel: 'Marakadhey',
    category: 'Never Miss your Opportunities',
    accent: '#A855F7',
    logo: '/marakadhey-logo.jpg',
    tagline: "A live browser extension on Chrome Web Store & Edge Add-ons alongside an Android mobile app with background alarms, syncing browser notifications with Multiple Calendar integration so you never miss deadlines.",
    liveUrl: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce',
    edgeAddonsUrl: 'https://microsoftedge.microsoft.com/addons/detail/marakadhey%E2%80%93never-miss-opp/cmndbipcnkkmeojkioajenbckapcfpla',
    productHuntUrl: 'https://www.producthunt.com/products/marakadhey/marakadhey/launch-day?utm_source=my-products',
    apkUrl: '/marakadhey_mobile.apk',
    metrics: [
      { label: 'Chrome Store', value: 'Published Live' },
      { label: 'Edge Add-ons', value: 'Published Live' },
      { label: 'Integration', value: 'Google, Outlook, Yahoo' },
      { label: 'Active Users', value: '10+' },
    ],
    features: [
      'Manifest V3 Architecture & Browser Notifications',
      'Standalone Android Mobile App with Background Alarms',
      'Multiple Calendar Integration (Google, Outlook, Yahoo)',
      'Automated Reminder Engine Before Opportunity Deadlines',
    ],
    techStack: ['JavaScript', 'Chrome Extension API', 'Manifest V3', 'Calendar API'],
  },
  {
    id: 'sikkanam',
    platform: 'Platform 03',
    name: 'Sikkanam',
    category: 'TN Budget Travel Planner ',
    accent: '#EA580C',
    logo: '/sikkanam-logo.jpg',
    tagline: 'A privacy-first full stack travel PWA for 100 TN Cities built with React, TypeScript, and Tailwind CSS. Features a custom OSRM mapping engine with dynamic 1.25x to 1.40x traffic & terrain scaling, TNSTC/IRCTC transit fare pipelines, Google Gemini & Groq API orchestration, and 100 SEO / 96 Accessibility Lighthouse scores.',
    liveUrl: 'https://sikkanam.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/sikkanam',
    metrics: [
      { label: 'Destinations', value: '100 TN Cities' },
      { label: 'Nearby Places', value: 'KNN ML Engine' },
      { label: 'Google SEO', value: 'Top Website' },
    ],
    features: [
      'Custom OSRM Traffic & Terrain Engine',
      'TNSTC & IRCTC Transit Fare Estimation',
      'Google Gemini & Groq API Orchestration',
      'Nearby Place Recommendation using KNN Algorithm',
    ],
    techStack: ['React', 'TypeScript', 'OSRM Engine', 'Groq LLaMA', 'Gemini AI'],
  },
  {
    id: 'panampaaru',
    platform: 'Platform 04',
    name: 'Panam Paaru',
    tabLabel: 'Panam Paaru',
    category: 'See Your Money and Control Your Spendings',
    accent: '#FFE600',
    logo: '/panampaaru-logo.png',
    tagline: 'A real-time Neo-Brutalist Style Personal Finance & Portfolio Tracking . Features live IST stock & mutual fund P/L valuation, database-backed caching to prevent unwanted API calls, double-entry expense ledger, and 1 click statement ingestion.',
    liveUrl: 'https://panampaaru.vercel.app',
    metrics: [
      { label: 'Trading Engine', value: '35s Live IST' },
      { label: 'Investments P/L', value: 'Stocks CP & MF NAV' },
      { label: 'API Optimization', value: 'DB Cache Engine' },
      { label: 'Expense Tracker', value: 'Recurring Expenses & One-Time Costs' },
    ],
    features: [
      'Live 35s IST Market Valuation & Nightly AMFI NAV Sync',
      'Database-Backed Cache Engine to Prevent Unwanted API Calls',
      'Atomic Multi-Account Expense Tracker & Cashflow Ledger',
      'Universal Statement Ingestion for CAMS, KFintech & Brokers',
    ],
    techStack: ['React 19', 'TypeScript', 'Convex DB Cache', 'Tailwind CSS', 'PWA'],
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
                  {current.edgeAddonsUrl ? (
                    <>
                      <a
                        href={current.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        id={`btn-visit-${current.id}`}
                      >
                        <ExternalLink size={14} />
                        <span>Chrome Web Store (PC)</span>
                      </a>
                      <a
                        href={current.edgeAddonsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        id={`btn-edge-${current.id}`}
                      >
                        <ExternalLink size={14} />
                        <span>Edge Add-ons (PC)</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      id={`btn-visit-${current.id}`}
                    >
                      <ExternalLink size={14} />
                      <span>Visit Product</span>
                    </a>
                  )}

                  {'apkUrl' in current && current.apkUrl && (
                    <a
                      href={current.apkUrl}
                      download="marakadhey_mobile.apk"
                      className="btn btn-secondary btn-sm"
                      id={`btn-apk-${current.id}`}
                      title="1-Click Download Marakadhey Mobile (Android Only)"
                      style={{
                        borderColor: `${current.accent}80`,
                        backgroundColor: `${current.accent}20`,
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                      }}
                    >
                      <Download size={14} style={{ color: current.accent }} />
                      <span>Download Android APK</span>
                    </a>
                  )}
                  {current.productHuntUrl && (
                    <a
                      href={current.productHuntUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      id={`btn-ph-${current.id}`}
                    >
                      <Rocket size={14} />
                      <span>Product Hunt</span>
                    </a>
                  )}
                </div>
              </div>

              {'apkUrl' in current && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.08)',
                    border: `1px solid ${current.accent}40`,
                    fontSize: '0.84rem',
                    lineHeight: '1.45',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Smartphone size={16} style={{ color: current.accent, flexShrink: 0 }} />
                    <span>
                      <strong style={{ color: 'var(--text-primary)' }}>📱 For Mobile (Android Only):</strong> Click <strong>Download Android APK</strong> to get the 1-click APK installer.
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Monitor size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <span>
                      <strong style={{ color: 'var(--text-primary)' }}>💻 For PC / Laptop Users:</strong> Add the extension to your desktop browser via <strong>Chrome Web Store</strong> or <strong>Edge Add-ons</strong>.
                    </span>
                  </div>
                </div>
              )}

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
