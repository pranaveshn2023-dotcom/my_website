import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineData = [
  {
    year: '2023',
    text: 'Completed HSC at Shree Niketan Patasala (90.2%) and started BTech ECE at VIT Chennai.',
  },
  {
    year: '2025',
    text: 'Designed and shipped Sikkanam, a privacy-first travel PWA with custom OSRM mapping and AI itinerary orchestration.',
  },
  {
    year: '2026',
    text: 'Published Marakadhey Chrome Extension on Chrome Web Store and launched ValarchiX personal finance learning platform featuring Valarchi Vaathi AI tutor.',
  },
  {
    year: '2026',
    text: 'Completed a Student Internship at Danfoss Industries Pvt Ltd, building Power Apps timesheet systems and Power BI dashboards.',
  },
  {
    year: 'Present',
    text: 'Applying logical systems thinking to build high-performance PWAs and full stack products.',
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
