import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'Danfoss Industries Pvt Ltd',
    role: 'Student Intern',
    location: 'Oragadam, Chennai',
    period: '05/2026 – 07/2026',
    description:
      'Worked on internal tools and data solutions to streamline business operations and support data-driven decision-making.',
    highlights: [
      'Developed a Power Apps Timesheet Management System integrated with SharePoint for efficient timesheet submission and validation.',
      'Designed interactive Power BI dashboards to visualize business data and support data-driven decision-making.',
    ],
    gradient: 'linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, rgba(14, 165, 233, 0.06) 100%)',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            Professional internships and industry exposure.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="experience-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="experience-card-bg" style={{ background: exp.gradient }} />
              <div className="experience-card-content">
                <div className="experience-header">
                  <div className="experience-icon-wrapper">
                    <img
                      src="/logos/danfoss-logo.svg"
                      alt="Danfoss logo"
                      className="experience-logo-img"
                    />
                  </div>
                  <div className="experience-header-text">
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                </div>

                <div className="experience-meta">
                  <span className="experience-meta-item">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="experience-meta-item">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((item) => (
                    <li key={item} className="experience-highlight-item">
                      <span className="experience-highlight-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}