import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineData = [
  {
    year: '2024',
    text: 'Started exploring web development and building my first projects.',
  },
  {
    year: '2025',
    text: 'Got into AI and travel tech. Started building Sikkanam and Marakadhey.',
  },
  {
    year: '2026',
    text: 'Launched valarchiX (Operating System for Financial Knowledge), Sikkanam on Product Hunt, and Marakadhey on the Chrome Web Store. Three live products shipped.',
  },
  {
    year: 'Next',
    text: 'Keep building. Keep shipping. Keep learning.',
  },
]

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="journey">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">The Timeline</h2>
        </motion.div>

        <div className="timeline">
          {timelineData.map((item, i) => (
            <motion.div
              key={item.year}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <p className="timeline-text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
