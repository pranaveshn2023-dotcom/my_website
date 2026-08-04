import React, { useRef } from 'react'

interface Project3DCardProps {
  children: React.ReactNode
  accentColor: string
}

export default function Project3DCard({ children, accentColor }: Project3DCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const glareRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * 7
    const rotateY = ((x - centerX) / centerX) * 7

    containerRef.current.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`
    containerRef.current.style.boxShadow = `0 25px 60px -15px ${accentColor}40, 0 0 30px ${accentColor}25`

    if (glareRef.current) {
      const glareX = ((x / rect.width) * 100).toFixed(1)
      const glareY = ((y / rect.height) * 100).toFixed(1)
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, ${accentColor}30 0%, transparent 60%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    containerRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    containerRef.current.style.boxShadow = `0 10px 30px -10px ${accentColor}20`
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={containerRef}
      className="project-3d-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <div ref={glareRef} className="project-3d-glare" />
      <div className="project-3d-content">
        {children}
      </div>
    </div>
  )
}
