import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText } from 'lucide-react'

const interests = [
  { label: 'AI Applications', icon: '🤖' },
  { label: 'Travel Technology', icon: '✈️' },
  { label: 'Web Development', icon: '🌐' },
  { label: 'Chrome Extensions', icon: '🧩' },
  { label: 'Financial Technology', icon: '💰' },
  { label: 'Product Building', icon: '🚀' },
]

interface AboutProps {
  onOpenResume: () => void
}

export default function About({ onOpenResume }: AboutProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Who Am I?</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p>
              I'm an ECE Engineer at VIT Chennai (CGPA: 7.53) with a strong focus on Product Development.
              I specialize in building full-stack PWA websites and applying logical systems thinking to solve real-world logistics problems.
            </p>
            <p>
              From creating financial OS tools (ValarchiX) to smart Chrome Extensions (Marakadhey) and PWA budget travel planners (Sikkanam), I focus on shipping practical, privacy-first software that solves real user challenges.
            </p>

            <div className="about-interests">
              {[
                { label: 'Reading Mutual Funds Factsheet', icon: '📊' },
                { label: 'Exploring New Places', icon: '✈️' },
                { label: 'Web Development', icon: '🌐' },
                { label: 'Product Design & PWAs', icon: '📱' },
              ].map((interest, i) => (
                <motion.span
                  key={interest.label}
                  className="about-interest-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <span>{interest.icon}</span>
                  {interest.label}
                </motion.span>
              ))}
            </div>

            <motion.div
              style={{ marginTop: '24px' }}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <button onClick={onOpenResume} className="btn btn-secondary" id="about-resume-btn">
                <FileText size={16} />
                <span>View Full Resume (PDF)</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {[
              { value: '7.53', label: 'VIT Chennai CGPA' },
              { value: '90.2%', label: 'HSC Academic Record' },
              { value: 'IITM BS', label: 'Foundation Level 1' },
              { value: 'CSC Cert', label: 'C, C++, Python, Java' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about-stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

