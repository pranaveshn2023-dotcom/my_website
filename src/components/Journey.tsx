import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Train, Navigation, CheckCircle2, Zap } from 'lucide-react'

const stationRoute = [
  {
    station: 'Station 01 • Shree Niketan Junction',
    year: '2023',
    status: 'Departed',
    accent: '#06b6d4',
    text: 'Completed HSC at Shree Niketan Patasala (90.2%) and boarded BTech ECE at VIT Chennai.',
  },
  {
    station: 'Station 02 • Sikkanam Travel Express',
    year: '2025',
    status: 'Completed Stop',
    accent: '#ea580c',
    text: 'Built and shipped Sikkanam, a privacy-first TN travel PWA with custom OSRM mapping engine and IRCTC/TNSTC fare pipelines.',
  },
  {
    station: 'Station 03 • Marakadhey V3 & ValarchiX Platform',
    year: '2026',
    status: 'Completed Stop',
    accent: '#a855f7',
    text: 'Published Marakadhey Chrome Extension on Chrome Web Store and shipped ValarchiX personal finance platform featuring Valarchi Vaathi AI tutor.',
  },
  {
    station: 'Station 04 • Danfoss Industry Depot',
    year: '2026',
    status: 'Completed Stop',
    accent: '#10b981',
    text: 'Completed Student Internship at Danfoss Industries Pvt Ltd, engineering Power Apps timesheet automation and Power BI analytics.',
  },
  {
    station: 'Station 05 • VIT Chennai Terminus',
    year: '2027 Express Arrival',
    status: 'On Track',
    accent: '#f59e0b',
    text: 'Applying systems thinking and full-stack architecture to build high-performance products.',
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
          <p className="section-label">Station Route & Timetable</p>
          <h2 className="section-title">Engineering Journey</h2>
          <p className="section-subtitle">
            Express stops across education, product launches, and industry experience.
          </p>
        </motion.div>

        <div className="railway-timetable">
          {stationRoute.map((item, i) => (
            <motion.div
              key={item.station}
              className="railway-station-card"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ borderColor: `${item.accent}35` }}
            >
              <div className="railway-station-header">
                <div className="station-badge" style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                  <Train size={16} />
                  <span>{item.station}</span>
                </div>
                <div className="station-year-badge">
                  <Navigation size={12} />
                  <span>{item.year}</span>
                </div>
              </div>

              <p className="station-desc">{item.text}</p>

              <div className="station-footer">
                <span className="station-status-pill" style={{ color: item.accent }}>
                  {i === stationRoute.length - 1 ? <Zap size={12} /> : <CheckCircle2 size={12} />}
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
