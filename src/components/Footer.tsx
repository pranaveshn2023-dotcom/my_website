import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer-container">
        {/* Built by Pranavesh Tag with Blue Heart */}
        <div className="footer-built-tag" id="footer-built-tag">
          <span className="footer-built-text">Built by Pranavesh</span>
          <Heart size={14} className="footer-blue-heart" fill="#3b82f6" color="#3b82f6" />
        </div>

        <p className="footer-tagline">
          From ideas to <span className="highlight">products</span>.
        </p>
      </div>
    </motion.footer>
  )
}
