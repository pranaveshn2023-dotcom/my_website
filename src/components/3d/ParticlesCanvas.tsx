import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  speed: number
  color: string
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const colors = ['#06b6d4', '#f59e0b', '#10b981', '#a855f7']
    const particles: Particle[] = []
    const particleCount = 140

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 2,
        y: Math.random() * height,
        z: Math.random() * width,
        speed: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const mouse = { x: width / 2, y: height / 2 }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    let trackOffset = 0

    const render = () => {
      ctx.fillStyle = 'rgba(7, 12, 24, 0.4)'
      ctx.fillRect(0, 0, width, height)

      // Perspective Railway Track Lines Background Effect
      trackOffset = (trackOffset + 1.5) % 40
      const centerX = width / 2 + (mouse.x - width / 2) * 0.05
      const vanishY = height * 0.25

      ctx.save()
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)'
      ctx.lineWidth = 1.5

      // Left Track Rail Line
      ctx.beginPath()
      ctx.moveTo(centerX - 10, vanishY)
      ctx.lineTo(centerX - width * 0.7, height)
      ctx.stroke()

      // Right Track Rail Line
      ctx.beginPath()
      ctx.moveTo(centerX + 10, vanishY)
      ctx.lineTo(centerX + width * 0.7, height)
      ctx.stroke()

      // Center Track Rail Line
      ctx.beginPath()
      ctx.moveTo(centerX, vanishY)
      ctx.lineTo(centerX, height)
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.08)'
      ctx.stroke()

      // Horizontal Railway Sleepers / Ties
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.08)'
      for (let y = vanishY + trackOffset; y < height; y += 40) {
        const progress = (y - vanishY) / (height - vanishY)
        const trackWidth = progress * width * 1.4
        ctx.beginPath()
        ctx.moveTo(centerX - trackWidth / 2, y)
        ctx.lineTo(centerX + trackWidth / 2, y)
        ctx.stroke()
      }
      ctx.restore()

      // Speed Particle Stars
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.z -= p.speed * 1.5

        if (p.z <= 0) {
          p.z = width
          p.x = (Math.random() - 0.5) * width * 2
          p.y = Math.random() * height
        }

        const k = 250 / p.z
        const px = p.x * k + width / 2
        const py = p.y * k + height / 2

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.8, (1 - p.z / width) * 3)
          const alpha = (1 - p.z / width) * 0.75

          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = alpha
          ctx.shadowBlur = 6
          ctx.shadowColor = p.color
          ctx.fill()
          ctx.globalAlpha = 1
          ctx.shadowBlur = 0
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
