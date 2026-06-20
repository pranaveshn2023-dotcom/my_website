import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p>
            Got an idea, a question, or just want to say hello? 
            Feel free to reach out — I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:pranaveshnandakumar@gmail.com" className="contact-link" id="contact-email">
              <Mail size={16} />
              Email Me
            </a>
            <a href="tel:+916374161918" className="contact-link" id="contact-phone">
              <Phone size={16} />
              +91 6374161918
            </a>
            <a href="https://wa.me/916374161918" className="contact-link" target="_blank" rel="noopener noreferrer" id="contact-whatsapp">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/pranaveshn" className="contact-link" target="_blank" rel="noopener noreferrer" id="contact-linkedin">
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
