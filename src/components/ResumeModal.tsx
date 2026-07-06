import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="resume-modal-overlay" onClick={onClose} id="resume-modal-backdrop">
          <motion.div
            className="resume-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <FileText size={20} className="resume-icon" />
                <div>
                  <h3>Pranavesh N — Resume</h3>
                  <p>BTech ECE • Product Developer & Full-Stack Engineer</p>
                </div>
              </div>

              <div className="resume-modal-actions">
                <a
                  href="/resume.pdf"
                  download="Pranavesh_N_Resume.pdf"
                  className="resume-modal-btn secondary"
                  title="Download PDF"
                  id="resume-modal-download-btn"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-modal-btn primary"
                  title="Open in new tab"
                  id="resume-modal-opentab-btn"
                >
                  <ExternalLink size={16} />
                  <span>Open PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="resume-modal-close"
                  aria-label="Close modal"
                  id="resume-modal-close-btn"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="resume-modal-body">
              <iframe
                src="/resume.pdf#toolbar=1"
                title="Pranavesh N Resume PDF"
                className="resume-iframe"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
