import { useEffect, useRef } from 'react'

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

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const mouse = { x: width / 2, y: height / 2 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Railway Speed Particles
    const sparkCount = 100
    const sparks = Array.from({ length: sparkCount }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: Math.random() * height,
      z: Math.random() * width,
      speed: Math.random() * 4 + 2,
      color: ['#06b6d4', '#f59e0b', '#10b981', '#ef4444', '#a855f7'][Math.floor(Math.random() * 5)],
    }))

    let trackOffset = 0

    const render = () => {
      ctx.fillStyle = 'rgba(5, 8, 17, 0.45)'
      ctx.fillRect(0, 0, width, height)

      trackOffset = (trackOffset + 3.5) % 50

      const vanishX = width / 2 + (mouse.x - width / 2) * 0.08
      const vanishY = height * 0.28

      ctx.save()

      // 1. Overhead Railway Catenary Power Wires
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(vanishX - 8, vanishY - 20)
      ctx.lineTo(0, 40)
      ctx.moveTo(vanishX + 8, vanishY - 20)
      ctx.lineTo(width, 40)
      ctx.stroke()

      // Catenary Support Poles
      for (let y = vanishY + trackOffset * 0.4; y < height * 0.9; y += 90) {
        const p = (y - vanishY) / (height - vanishY)
        const poleWidth = p * width * 1.2
        const poleLeft = vanishX - poleWidth / 2
        const poleRight = vanishX + poleWidth / 2

        ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)'
        ctx.lineWidth = 1 + p * 1.5

        // Crossbar
        ctx.beginPath()
        ctx.moveTo(poleLeft, y - 25 * p)
        ctx.lineTo(poleRight, y - 25 * p)
        ctx.stroke()

        // Vertical Mast Posts
        ctx.beginPath()
        ctx.moveTo(poleLeft, y - 25 * p)
        ctx.lineTo(poleLeft, y + 40 * p)
        ctx.moveTo(poleRight, y - 25 * p)
        ctx.lineTo(poleRight, y + 40 * p)
        ctx.stroke()
      }

      // 2. 3D Perspective Railway Tracks (Left & Right Steel Rails)
      ctx.lineWidth = 2.5
      const trackGradientLeft = ctx.createLinearGradient(vanishX, vanishY, 0, height)
      trackGradientLeft.addColorStop(0, 'rgba(6, 182, 212, 0.2)')
      trackGradientLeft.addColorStop(1, 'rgba(6, 182, 212, 0.8)')
      ctx.strokeStyle = trackGradientLeft

      // Left Outer Rail
      ctx.beginPath()
      ctx.moveTo(vanishX - 15, vanishY)
      ctx.lineTo(vanishX - width * 0.65, height)
      ctx.stroke()

      // Left Inner Rail
      ctx.beginPath()
      ctx.moveTo(vanishX - 10, vanishY)
      ctx.lineTo(vanishX - width * 0.61, height)
      ctx.stroke()

      // Right Outer Rail
      const trackGradientRight = ctx.createLinearGradient(vanishX, vanishY, width, height)
      trackGradientRight.addColorStop(0, 'rgba(6, 182, 212, 0.2)')
      trackGradientRight.addColorStop(1, 'rgba(6, 182, 212, 0.8)')
      ctx.strokeStyle = trackGradientRight

      ctx.beginPath()
      ctx.moveTo(vanishX + 15, vanishY)
      ctx.lineTo(vanishX + width * 0.65, height)
      ctx.stroke()

      // Right Inner Rail
      ctx.beginPath()
      ctx.moveTo(vanishX + 10, vanishY)
      ctx.lineTo(vanishX + width * 0.61, height)
      ctx.stroke()

      // 3. Concrete Railway Sleepers / Ties
      for (let y = vanishY + trackOffset; y < height; y += 45) {
        const progress = (y - vanishY) / (height - vanishY)
        const trackWidth = progress * width * 1.25
        const tieX1 = vanishX - trackWidth / 2
        const tieX2 = vanishX + trackWidth / 2

        ctx.strokeStyle = `rgba(168, 85, 247, ${0.05 + progress * 0.2})`
        ctx.lineWidth = 1.5 + progress * 3

        ctx.beginPath()
        ctx.moveTo(tieX1, y)
        ctx.lineTo(tieX2, y)
        ctx.stroke()
      }

      // 4. Moving Railway Speed Sparks & Signal Beams
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i]
        s.z -= s.speed * 2

        if (s.z <= 0) {
          s.z = width
          s.x = (Math.random() - 0.5) * width * 2
          s.y = Math.random() * height
        }

        const k = 280 / s.z
        const px = s.x * k + width / 2
        const py = s.y * k + height / 2

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(1, (1 - s.z / width) * 4)
          const alpha = (1 - s.z / width) * 0.85

          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fillStyle = s.color
          ctx.globalAlpha = alpha
          ctx.shadowBlur = 8
          ctx.shadowColor = s.color
          ctx.fill()
          ctx.globalAlpha = 1
          ctx.shadowBlur = 0
        }
      }

      ctx.restore()

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
