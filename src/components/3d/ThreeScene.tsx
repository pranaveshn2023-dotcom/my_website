import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 400
    const height = container.clientHeight || 400

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 2. Geometries & Materials
    // A. Main TorusKnot
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32)
    const material = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    })
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    // B. Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.7, 2)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    scene.add(coreMesh)

    // C. Floating Particles Starfield
    const particlesGeo = new THREE.BufferGeometry()
    const particleCount = 200
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x10b981,
      transparent: true,
      opacity: 0.8,
    })
    const particlePoints = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particlePoints)

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x22d3ee, 2, 20)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 20)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // 4. Mouse Interactivity & Motion Loop
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2
      const windowHalfY = window.innerHeight / 2
      mouse.targetX = (event.clientX - windowHalfX) * 0.001
      mouse.targetY = (event.clientY - windowHalfY) * 0.001
    }

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    let animationFrameId: number

    const animate = () => {
      // Smooth Damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      torusKnot.rotation.x += 0.005
      torusKnot.rotation.y += 0.008
      torusKnot.rotation.z += mouse.x * 0.5

      coreMesh.rotation.x -= 0.008
      coreMesh.rotation.y -= 0.005

      particlePoints.rotation.y += 0.0015

      scene.rotation.y = mouse.x * 0.8
      scene.rotation.x = mouse.y * 0.8

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      particlesGeo.dispose()
      particlesMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="three-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '320px',
        position: 'relative',
      }}
    />
  )
}
