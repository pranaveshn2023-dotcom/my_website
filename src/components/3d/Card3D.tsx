import React, { useState, useRef } from 'react'

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
  glowColor = 'rgba(168, 85, 247, 0.3)',
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [rotX, setRotX] = useState(0)
  const [rotY, setRotY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * 12
    const rotateY = ((x - centerX) / centerX) * 12

    setRotX(rotateX)
    setRotY(rotateY)

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 })
  }

  const handleMouseLeave = () => {
    setRotX(0)
    setRotY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      className={`card-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <div
        className="card-3d-inner"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`,
          transition: rotX === 0 && rotY === 0 ? 'transform 0.5s ease' : 'none',
          boxShadow:
            rotX !== 0 || rotY !== 0
              ? `0 20px 40px -15px ${glowColor}, 0 0 25px ${glowColor}`
              : undefined,
          position: 'relative',
          borderRadius: 'inherit',
          height: '100%',
        }}
      >
        {/* Dynamic Specular Glare */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            opacity: glarePos.opacity,
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        />
        {children}
      </div>
    </div>
  )
}
