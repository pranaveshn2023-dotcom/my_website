import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Code2, Terminal, Award, Cpu } from 'lucide-react'
import Card3D from './3d/Card3D'

const profiles = [
  {
    name: 'GitHub',
    handle: '@pranaveshnandakumar-cmyk',
    url: 'https://github.com/pranaveshnandakumar-cmyk',
    badge: '3+ Open Source Apps',
    accent: '#22d3ee',
    icon: <Terminal size={22} />,
    description: 'Repositories for ValarchiX, Sikkanam PWA, Marakadhey Extension, and full stack projects.',
  },
  {
    name: 'LeetCode',
    handle: 'Pranavesh N',
    url: 'https://leetcode.com',
    badge: 'Problem Solving',
    accent: '#f59e0b',
    icon: <Code2 size={22} />,
    description: 'Data structures, algorithms, and logical problem solving in Python, C++, and JavaScript.',
  },
  {
    name: 'SkillRack',
    handle: 'Pranavesh N',
    url: 'https://www.skillrack.com',
    badge: 'Automated Coding Benchmarks',
    accent: '#a855f7',
    icon: <Award size={22} />,
    description: 'Daily programming challenges, speed coding, and core algorithmic benchmarks.',
  },
  {
    name: 'CSC Certificate',
    handle: 'C, C++, Python, Java',
    url: '#about',
    badge: 'Certified',
    accent: '#10b981',
    icon: <Cpu size={22} />,
    description: 'Certified 4 program covering core languages, object-oriented programming, and systems logic.',
  },
]

export default function CodingProfiles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="coding-profiles">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Coding Profiles & Credentials</p>
          <h2 className="section-title">Algorithmic & Code Hub</h2>
          <p className="section-subtitle">
            Platforms where I hone problem solving, algorithm design, and code benchmarks.
          </p>
        </motion.div>

        <div className="profiles-grid">
          {profiles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Card3D glowColor={`${p.accent}40`}>
                <div className="profile-card" style={{ borderColor: `${p.accent}35` }}>
                  <div className="profile-card-header">
                    <div className="profile-icon" style={{ color: p.accent, backgroundColor: `${p.accent}15` }}>
                      {p.icon}
                    </div>
                    <span className="profile-badge" style={{ color: p.accent, borderColor: `${p.accent}30` }}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="profile-title">{p.name}</h3>
                  <p className="profile-handle">{p.handle}</p>
                  <p className="profile-desc">{p.description}</p>

                  <a
                    href={p.url}
                    target={p.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="profile-link"
                    style={{ color: p.accent }}
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
