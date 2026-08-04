import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Card3D from './3d/Card3D'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

interface ContactProps {
  onOpenResume: () => void
}

export default function Contact({ onOpenResume }: ContactProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Full name is required'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required'
    if (!formData.message.trim()) {
      errs.message = 'Message content is required'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long'
    }
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate interactive send
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you're looking to collaborate on high-impact projects, explore product partnerships, or discuss engineering solutions — feel free to connect. I am always open to meaningful technical conversations and opportunities.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Card3D glowColor="rgba(34, 211, 238, 0.3)">
              <div className="contact-info-card">
                <h3>Direct Channels</h3>
                <p>Feel free to reach out directly via email or LinkedIn, or inspect my complete resume.</p>

                <div className="contact-links">
                  <button onClick={onOpenResume} className="contact-link" id="contact-resume" style={{ cursor: 'pointer' }}>
                    <FileText size={16} />
                    <span>View Resume (PDF)</span>
                  </button>
                  <a href="mailto:pranavesh.n2023@vitstudent.ac.in" className="contact-link" id="contact-email">
                    <Mail size={16} />
                    <span>pranavesh.n2023@vitstudent.ac.in</span>
                  </a>
                  <a href="https://www.linkedin.com/in/pranaveshn" className="contact-link" target="_blank" rel="noopener noreferrer" id="contact-linkedin">
                    <LinkedInIcon />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                <div className="contact-availability">
                  <span className="availability-dot" />
                  <span>Available for Full-Stack & AI Product Collaborations</span>
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Card3D glowColor="rgba(168, 85, 247, 0.35)">
              <div className="contact-form-card">
                <h3>Send a Message</h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      className="contact-success-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 size={48} className="success-icon" />
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. I have received your message and will respond promptly.</p>
                      <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }}>
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="form-group">
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && (
                          <span className="field-error">
                            <AlertCircle size={12} /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email-input">Your Email</label>
                        <input
                          type="email"
                          id="contact-email-input"
                          name="email"
                          placeholder="e.g. alex@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && (
                          <span className="field-error">
                            <AlertCircle size={12} /> {errors.email}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-subject">Subject</label>
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          placeholder="e.g. Project Inquiry / Collaboration"
                          value={formData.subject}
                          onChange={handleChange}
                          className={errors.subject ? 'input-error' : ''}
                        />
                        {errors.subject && (
                          <span className="field-error">
                            <AlertCircle size={12} /> {errors.subject}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <div className="form-label-row">
                          <label htmlFor="contact-message">Message</label>
                          <span className="char-count">{formData.message.length} chars</span>
                        </div>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Write your message details here..."
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? 'input-error' : ''}
                        />
                        {errors.message && (
                          <span className="field-error">
                            <AlertCircle size={12} /> {errors.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-full contact-submit-btn"
                        id="contact-submit-button"
                      >
                        {isSubmitting ? (
                          <span className="spinner-text">Sending Message...</span>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
