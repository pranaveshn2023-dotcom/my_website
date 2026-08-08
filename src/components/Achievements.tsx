import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import {
  SiGooglechrome,
  SiProducthunt,
} from 'react-icons/si'

import { FaEdge } from 'react-icons/fa'

import {
  Plane,
  Bell,
  TrendingUp,
  Boxes,
} from 'lucide-react'

const achievements = [
  {
    icon: <SiProducthunt />,
    text: 'Product Hunt Launch',
    type: 'brand',
  },
  {
    icon: <SiGooglechrome />,
    text: 'Marakadhey Published on Chrome Web Store',
    type: 'brand',
  },
  {
    icon: <FaEdge />,
    text: 'Marakadhey Published on Microsoft Edge Add-ons',
    type: 'brand',
  },
  {
    icon: <Plane />,
    text: 'Sikkanam — Tamil Nadu Travel Platform',
    type: 'lucide',
  },
  {
    icon: <Bell />,
    text: 'Marakadhey — Opportunity Reminder',
    type: 'lucide',
  },
  {
    icon: <TrendingUp />,
    text: 'ValarchiX — Personal Finance Platform',
    type: 'lucide',
  },
  {
    icon: <Boxes />,
    text: '3 Live Products Built & Published',
    type: 'lucide',
  },
]

export default function Achievements() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section className="achievements-section">
      <div ref={ref}>

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          <div>Achievements</div>

          <h2>Milestones</h2>

          <p>
            Turning ideas into products.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="achievements-row">
          {achievements.map((item, i) => (
            <motion.div
              key={item.text}
              className="achievement-card"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
            >
              <span
                className={`achievement-icon ${item.type}`}
              >
                {item.icon}
              </span>

              <span className="achievement-text">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Built by Pranavesh */}
        <motion.p
          className="achievements-credit"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Built by Pranavesh
        </motion.p>

      </div>
    </section>
  )
}