import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Brain, Cpu } from 'lucide-react'
import Card3D from './3d/Card3D'

const skillCategories = [
  {
    title: 'Frontend & PWA',
    icon: <Code2 size={20} />,
    accent: '#22d3ee',
    skills: [
      { name: 'ReactJS', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'PWA & Service Workers', level: 88 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <Server size={20} />,
    accent: '#a855f7',
    skills: [
      { name: 'Node.js & Express', level: 85 },
      { name: 'MongoDB & MERN', level: 84 },
      { name: 'REST APIs', level: 90 },
      { name: 'Vite & Build Tools', level: 88 },
    ],
  },
  {
    title: 'Languages & Engineering',
    icon: <Cpu size={20} />,
    accent: '#10b981',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'C / C++', level: 82 },
      { name: 'Java', level: 80 },
      { name: 'ECE Systems', level: 85 },
    ],
  },
  {
    title: 'Systems & Architecture',
    icon: <Brain size={20} />,
    accent: '#f59e0b',
    skills: [
      { name: 'Systems Thinking', level: 92 },
      { name: 'Chrome Manifest V3', level: 90 },
      { name: 'OSRM Route Engine', level: 86 },
      { name: 'LLM Orchestration', level: 88 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Skills & Technical Proficiency</p>
          <h2 className="section-title">Tech Stack & Mastery</h2>
          <p className="section-subtitle">
            Tools, programming languages, and architecture patterns I build with daily.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Card3D glowColor={`${cat.accent}35`}>
                <div className="skill-category-card" style={{ borderColor: `${cat.accent}30` }}>
                  <div className="skill-category-header">
                    <div className="skill-icon-wrapper" style={{ color: cat.accent, backgroundColor: `${cat.accent}15` }}>
                      {cat.icon}
                    </div>
                    <h4>{cat.title}</h4>
                  </div>

                  <div className="skill-bars-list">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="skill-bar-item">
                        <div className="skill-bar-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage" style={{ color: cat.accent }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar-track">
                          <motion.div
                            className="skill-bar-fill"
                            style={{ backgroundColor: cat.accent }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
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
