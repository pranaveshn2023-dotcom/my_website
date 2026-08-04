import React, { useRef } from 'react'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  glowColor?: string
}

export default function Card3D({
  children,
  className = '',
  style = {},
  glowColor = 'rgba(168, 85, 247, 0.35)',
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const glareRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * 8
    const rotateY = ((x - centerX) / centerX) * 8

    cardRef.current.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    cardRef.current.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
    cardRef.current.style.setProperty('--glow', glowColor)

    if (glareRef.current) {
      const glareX = ((x / rect.width) * 100).toFixed(1)
      const glareY = ((y / rect.height) * 100).toFixed(1)
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty('--rx', '0deg')
    cardRef.current.style.setProperty('--ry', '0deg')
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`card-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="card-3d-inner">
        <div ref={glareRef} className="card-3d-glare" />
        <div className="card-3d-content">
          {children}
        </div>
      </div>
    </div>
  )
}
