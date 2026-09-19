import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Rocket, CheckCircle2 } from 'lucide-react'

const projectsData = [
  {
    id: 'valarchix',
    name: 'ValarchiX',
    category: 'Personal Finance Platform',
    accent: '#10B981',
    logo: '/valarchix-logo.png',
    tagline: 'A React, TypeScript, and Tailwind CSS personal finance learning platform featuring portfolio strategy simulations, mutual fund analyzers, retirement calculators, inflation-adjusted financial tools, and Valarchi Vaathi, an AI-powered finance tutor. Promotes evidence-based investing while keeping all user data local and private.',
    liveUrl: 'https://valarchix.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/valarchix',
    metrics: [
      { label: 'AI Tutor', value: 'Valarchi Vaathi' },
      { label: 'FinHealth Score', value: 'Calculates score based on income, expenses, MF & SIP, savings, and spending habits' },
      { label: 'Calculators', value: 'MF & Retirement' },
    ],
    features: [
      'Portfolio Strategy & Asset Allocation Simulations',
      'Mutual Fund & Inflation-Adjusted Retirement Analyzers',
      'Valarchi Vaathi: AI-powered interactive finance tutor',
      'Privacy-First 4 digit PIN lock feature',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GROQ API', 'Vercel'],
  },
  {
    id: 'marakadhey',
    name: 'Marakadhey-Never Miss Opportunities',
    tabLabel: 'Marakadhey',
    category: 'Chrome & Edge Web Store Extension',
    accent: '#A855F7',
    logo: '/marakadhey-logo.jpg',
    tagline: "A live browser extension available on both Chrome Web Store and Microsoft Edge Add-ons that helps users save important webpages and sets automated reminders so they never miss deadlines. Built using JavaScript and Chrome's Manifest V3 architecture, syncing browser notifications with Multiple Calendar integration.",
    liveUrl: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce',
    edgeAddonsUrl: 'https://microsoftedge.microsoft.com/addons/detail/marakadhey%E2%80%93never-miss-opp/cmndbipcnkkmeojkioajenbckapcfpla',
    productHuntUrl: 'https://www.producthunt.com/products/marakadhey/marakadhey/launch-day?utm_source=my-products',
    metrics: [
      { label: 'Chrome Store', value: 'Published Live' },
      { label: 'Edge Add-ons', value: 'Published Live' },
      { label: 'Integration', value: 'Google Calendar,Microsoft Outlook,Yahoo Calendar' },
      { label: 'Users', value: '10+' },
    ],
    features: [
      'Manifest V3 Architecture',
      'Google Calendar Notification Sync',
      'Automated Deadline Reminders',
      'Chrome Web Store & Edge Add-ons Published',
    ],
    techStack: ['JavaScript', 'Chrome Extension API', 'Manifest V3', 'Calendar API'],
  },
  {
    id: 'sikkanam',
    name: 'Sikkanam',
    category: 'TN Budget Travel Planner PWA',
    accent: '#EA580C',
    logo: '/sikkanam-logo.jpg',
    tagline: 'A privacy-first full stack travel PWA for 100 TN Cites built with React, TypeScript, and Tailwind CSS. Features a custom OSRM mapping engine with dynamic 1.25x to 1.40x traffic & terrain scaling, TNSTC/IRCTC transit fare pipelines, Google Gemini & Groq API orchestration, and 100 SEO / 96 Accessibility Lighthouse scores.',
    liveUrl: 'https://sikkanam.vercel.app',
    productHuntUrl: 'https://www.producthunt.com/products/sikkanam',
    metrics: [
      { label: 'Destinations', value: '100 TN Cities' },
      { label: 'Near by places recommendation ', value: 'using KNN' },
      { label: 'Google SEO', value: 'top website' },
    ],
    features: [
      'Custom OSRM Traffic & Terrain Engine',
      'TNSTC & IRCTC Transit Fare Estimation',
      'Google Gemini & Groq API Orchestration',
      'Near By place recommendation using KNN algorithm',
    ],
    techStack: ['React', 'TypeScript', 'OSRM Engine', 'Groq LLaMA', 'Gemini AI'],
  },
  {
    id: 'panampaaru',
    name: 'Panam Paaru',
    tabLabel: 'Panam Paaru',
    category: 'Neo-Brutalist FinTech PWA',
    accent: '#FFE600',
    logo: '/panampaaru-logo.png',
    tagline: 'A real-time Neo-Brutalist personal finance and portfolio tracking PWA. Features live IST stock & mutual fund P/L valuation, double-entry expense ledger, automated CAMS/KFintech statement ingestion, and calendar-aware budget cycles backed by Convex cloud.',
    liveUrl: 'https://panampaaru.vercel.app',
    metrics: [
      { label: 'Trading Engine', value: '35s Live IST' },
      { label: 'Investments P/L', value: 'Stocks CP & MF NAV' },
      { label: 'Expense Tracker', value: 'Double-Entry' },
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
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Products shipped and used by real people.
          </p>
        </motion.div>

        {/* Product Selector Pills */}
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
              <img src={p.logo} alt={p.tabLabel || p.name} className="playground-tab-logo" />
              <span>{p.tabLabel || p.name}</span>
            </button>
          ))}
        </div>

        {/* Product Inspector Container */}
        <motion.div
          key={current.id}
          className="playground-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ borderColor: `${current.accent}40` }}
        >
          <div className="playground-card-header">
            <div className="playground-title-group">
              <img src={current.logo} alt={current.name} className="playground-header-logo" />
              <div>
                <span className="playground-category" style={{ color: current.accent }}>
                  {current.category}
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
        </motion.div>
      </div>
    </section>
  )
}
