import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react'
import Card3D from './3d/Card3D'

const articlesData = [
  {
    title: 'Designing Sikkanam: Building a Custom OSRM Engine with 1.4x Terrain Scaling',
    category: 'Travel Tech & Algorithms',
    readTime: '5 min read',
    date: '2026',
    summary:
      'How we architected custom OSRM matrix routes for 80+ Tamil Nadu cities with dynamic traffic terrain multipliers and AI itinerary orchestration.',
    link: 'https://sikkanam.vercel.app',
    accent: '#ea580c',
    tags: ['OSRM Engine', 'React PWA', 'Gemini AI', 'Tailwind CSS'],
  },
  {
    title: 'Building Marakadhey: Syncing Manifest Chrome  and edge Extension with Google Calendar',
    category: 'Browser Extensions',
    readTime: '4 min read',
    date: '2026',
    summary:
      'Deep dive into background service workers, Chrome Alarms API, and notification sync architecture in Manifest V3 — now published on both Chrome Web Store and Microsoft Edge Add-ons — to help users never miss deadlines.',
    link: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce',
    links: [
      {
        label: 'Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/marakadhey/inidbaohifkncdjnondbkljhoogkhnce',
      },
      {
        label: 'Edge Add-ons',
        url: 'https://microsoftedge.microsoft.com/addons/detail/marakadhey%E2%80%93never-miss-opp/cmndbipcnkkmeojkioajenbckapcfpla',
      },
      {
        label: 'Product Hunt Launch',
        url: 'https://www.producthunt.com/products/marakadhey/marakadhey/launch-day?utm_source=my-products',
      },
    ],
    accent: '#a855f7',
    tags: ['Manifest V3', 'JavaScript', 'Google Calendar API', 'Chrome Web Store', 'Edge Add-ons', 'Product Hunt'],
  },
  {
    title: 'Evidence-Based Investing & Valarchi Vaathi: AI Financial Tutor Architecture',
    category: 'FinTech & AI',
    readTime: '6 min read',
    date: '2026',
    summary:
      'Building privacy-first portfolio simulations and mutual fund analyzers with 100% local storage and GROQ AI tutor integration.',
    link: 'https://valarchix.vercel.app',
    accent: '#10b981',
    tags: ['React', 'TypeScript', 'Valarchi Vaathi', 'Local Privacy'],
  },
]

export default function Articles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="articles">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Featured Articles & Case Studies</p>
          <h2 className="section-title">Engineering Insights</h2>
          <p className="section-subtitle">
            Technical breakdowns of algorithms, PWA architectures, and product design.
          </p>
        </motion.div>

        <div className="articles-grid">
          {articlesData.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Card3D glowColor={`${article.accent}35`}>
                <div className="article-card" style={{ borderColor: `${article.accent}30` }}>
                  <div className="article-top-meta">
                    <span className="article-category" style={{ color: article.accent, backgroundColor: `${article.accent}15` }}>
                      <BookOpen size={12} />
                      {article.category}
                    </span>
                    <span className="article-time">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-summary">{article.summary}</p>

                  <div className="article-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="article-tag">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="article-links">
                    {article.links ? (
                      article.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="article-read-btn"
                          style={{ color: article.accent }}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={16} />
                        </a>
                      ))
                    ) : (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-read-btn"
                        style={{ color: article.accent }}
                      >
                        <span>Read Article / Case Study</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
