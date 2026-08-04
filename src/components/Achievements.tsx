import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Card3D from './3d/Card3D'

const achievements = [
  { emoji: '🚀', text: 'Product Hunt Launch', accent: '#da552f' },
  { emoji: '✅', text: 'Chrome Web Store Published', accent: '#a855f7' },
  { emoji: '🏗️', text: '3 Live Products Built', accent: '#22d3ee' },
  { emoji: '🎓', text: 'VIT Chennai Student', accent: '#10b981' },
  { emoji: '🤖', text: 'AI Travel Platform Creator', accent: '#ea580c' },
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Card3D glowColor={`${item.accent}35`}>
                <div className="achievement-card">
                  <span className="achievement-emoji">{item.emoji}</span>
                  <span className="achievement-text">{item.text}</span>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
