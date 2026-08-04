import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  { emoji: '🚀', text: 'Product Hunt Launch' },
  { emoji: '✅', text: 'Chrome Web Store Published' },
  { emoji: '🏗️', text: '3 Live Products Built' },
  { emoji: '🎓', text: 'VIT Chennai Student' },
  { emoji: '🤖', text: 'AI Travel Platform Creator' },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="achievements">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Milestones</h2>
          <p className="section-subtitle">
            Key moments in the building journey.
          </p>
        </motion.div>

        <div className="achievements-row">
          {achievements.map((item, i) => (
            <motion.div
              key={item.text}
              className="achievement-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <span className="achievement-emoji">{item.emoji}</span>
              <span className="achievement-text">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
