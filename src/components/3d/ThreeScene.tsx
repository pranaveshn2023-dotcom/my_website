import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 300
    const height = container.clientHeight || 300

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 2. Locomotive Wheel & Transit Signal Core
    const group = new THREE.Group()
    scene.add(group)

    // Outer Railway Wheel Rim
    const wheelGeo = new THREE.TorusGeometry(1.4, 0.12, 16, 64)
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4,
    })
    const wheelMesh = new THREE.Mesh(wheelGeo, wheelMat)
    group.add(wheelMesh)

    // Inner Locomotive Signal Ring
    const innerRingGeo = new THREE.TorusGeometry(0.9, 0.08, 16, 48)
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      wireframe: true,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.5,
    })
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat)
    group.add(innerRing)

    // Central Express Signal Headlight Core
    const headlightGeo = new THREE.SphereGeometry(0.5, 32, 32)
    const headlightMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
    })
    const headlightMesh = new THREE.Mesh(headlightGeo, headlightMat)
    group.add(headlightMesh)

    // Locomotive Wheel Spokes
    const spokeCount = 6
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2
      const spokeGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.7, 8)
      const spokeMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true })
      const spoke = new THREE.Mesh(spokeGeo, spokeMat)
      spoke.rotation.z = angle
      group.add(spoke)
    }

    // Floating Signal Particles
    const particlesGeo = new THREE.BufferGeometry()
    const particleCount = 120
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.7,
    })
    const particlePoints = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particlePoints)

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const signalLight1 = new THREE.PointLight(0x06b6d4, 2, 15)
    signalLight1.position.set(4, 4, 4)
    scene.add(signalLight1)

    const signalLight2 = new THREE.PointLight(0x10b981, 2, 15)
    signalLight2.position.set(-4, -4, 4)
    scene.add(signalLight2)

    // 4. Mouse Interactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2
      const windowHalfY = window.innerHeight / 2
      mouse.targetX = (event.clientX - windowHalfX) * 0.001
      mouse.targetY = (event.clientY - windowHalfY) * 0.001
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animationFrameId: number

    const animate = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      group.rotation.z += 0.008
      group.rotation.y += 0.005
      group.rotation.x = mouse.y * 0.8
      scene.rotation.y = mouse.x * 0.8

      particlePoints.rotation.y += 0.002

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      wheelGeo.dispose()
      wheelMat.dispose()
      innerRingGeo.dispose()
      innerRingMat.dispose()
      headlightGeo.dispose()
      headlightMat.dispose()
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
        position: 'relative',
      }}
    />
  )
}
