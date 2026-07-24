import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Brain, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={20} />,
    iconClass: 'frontend',
    skills: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'PWA Design'],
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    iconClass: 'backend',
    skills: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Languages',
    icon: <Cpu size={20} />,
    iconClass: 'engineering',
    skills: ['Python', 'C', 'C++', 'Java'],
  },
  {
    title: 'Systems & Tools',
    icon: <Brain size={20} />,
    iconClass: 'ai',
    skills: ['Logical Systems Thinking', 'Manifest V3', 'OSRM Engine', 'LLM Orchestration'],
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
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Tools and technologies I work with daily.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <div className={`skill-category-icon ${cat.iconClass}`}>
                {cat.icon}
              </div>
              <h4>{cat.title}</h4>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
