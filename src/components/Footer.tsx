import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <p className="footer-name">Built by Pranavesh N</p>
        <p className="footer-tagline">
          From ideas to <span>products</span>.
        </p>
      </div>
    </motion.footer>
  )
}
