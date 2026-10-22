import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * HeroScene — Full-Canvas Autonomous Three.js 3D Navigation
 * Expansively covers the entire viewport width & height with smooth, elegant celestial drift.
 * Runs autonomously without mouse dependency, at a refined, graceful pace.
 */
export default function HeroScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const THREE_LIB = window.THREE || THREE
    if (!THREE_LIB || !THREE_LIB.Scene) return

    const width  = container.clientWidth  || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    const scene  = new THREE_LIB.Scene()
    const camera = new THREE_LIB.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5.5

    const renderer = new THREE_LIB.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.pointerEvents = 'none'
    container.appendChild(renderer.domElement)

    // Luxury palette
    const nudeCream = new THREE_LIB.Color(0xF3E4D6)
    const pureWhite = new THREE_LIB.Color(0xFFFFFF)
    const blushPink = new THREE_LIB.Color(0xD77A91)
    const gold      = new THREE_LIB.Color(0xD4A13A)

    // Ambient light
    const ambientLight = new THREE_LIB.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    // Point lights for highlights across the full scene
    const pointLight1 = new THREE_LIB.PointLight(gold, 1.8, 50)
    pointLight1.position.set(6, 4, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE_LIB.PointLight(pureWhite, 1.4, 50)
    pointLight2.position.set(-6, -4, 3)
    scene.add(pointLight2)

    const pointLight3 = new THREE_LIB.PointLight(blushPink, 1.2, 45)
    pointLight3.position.set(0, 6, 2)
    scene.add(pointLight3)

    // Main group
    const group = new THREE_LIB.Group()
    scene.add(group)

    // ─── ELEMENT 1: Primary Nude Cream Sphere (Left & Upper Drift) ───
    const sphereGeo = new THREE_LIB.SphereGeometry(0.85, 32, 32)
    const sphereMat = new THREE_LIB.MeshPhongMaterial({
      color: nudeCream,
      specular: pureWhite,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    })
    const sphere = new THREE_LIB.Mesh(sphereGeo, sphereMat)
    group.add(sphere)

    // ─── ELEMENT 2: Secondary Blush Pink Sphere (Far Right Drift) ───
    const sphere2Geo = new THREE_LIB.SphereGeometry(0.5, 32, 32)
    const sphere2Mat = new THREE_LIB.MeshPhongMaterial({
      color: blushPink,
      specular: pureWhite,
      shininess: 90,
      transparent: true,
      opacity: 0.85,
    })
    const sphere2 = new THREE_LIB.Mesh(sphere2Geo, sphere2Mat)
    group.add(sphere2)

    // ─── ELEMENT 3: Gold Cylinder Rod (Right & Upper Sweep) ───
    const rodGeo = new THREE_LIB.CylinderGeometry(0.09, 0.09, 3.2, 32)
    const rodMat = new THREE_LIB.MeshPhongMaterial({ color: gold, shininess: 150 })
    const rod = new THREE_LIB.Mesh(rodGeo, rodMat)
    group.add(rod)

    // ─── ELEMENT 4: Primary Gold Torus Ring (Center & Lower Orbit) ───
    const ringGeo = new THREE_LIB.TorusGeometry(1.25, 0.05, 16, 100)
    const ringMat = new THREE_LIB.MeshPhongMaterial({ color: gold, shininess: 120 })
    const ring = new THREE_LIB.Mesh(ringGeo, ringMat)
    group.add(ring)

    // ─── ELEMENT 5: Secondary Blush Pink Ring (Upper Left Orbit) ───
    const ring2Geo = new THREE_LIB.TorusGeometry(0.85, 0.04, 16, 80)
    const ring2Mat = new THREE_LIB.MeshPhongMaterial({ color: blushPink, shininess: 110 })
    const ring2 = new THREE_LIB.Mesh(ring2Geo, ring2Mat)
    group.add(ring2)

    // ─── ELEMENT 6: Celestial Starlight Particle Dust (White, Nude Cream, Blush Pink, Gold) ───
    const particleCount = 100
    const particleGeo = new THREE_LIB.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const colorsPalette = [
      new THREE_LIB.Color(0xFFFFFF), // Pure white
      new THREE_LIB.Color(0xF3E4D6), // Nude cream
      new THREE_LIB.Color(0xD77A91), // Blush pink
      new THREE_LIB.Color(0xD4A13A), // Gold
    ]

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3]     = (Math.random() - 0.5) * 20
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10

      const c = colorsPalette[i % colorsPalette.length]
      particleColors[i * 3]     = c.r
      particleColors[i * 3 + 1] = c.g
      particleColors[i * 3 + 2] = c.b
    }

    particleGeo.setAttribute('position', new THREE_LIB.BufferAttribute(particlePositions, 3))
    particleGeo.setAttribute('color', new THREE_LIB.BufferAttribute(particleColors, 3))

    const particleMat = new THREE_LIB.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })
    const particlePoints = new THREE_LIB.Points(particleGeo, particleMat)
    scene.add(particlePoints)

    // Resize handler
    const onResize = () => {
      if (!container) return
      const newW = container.clientWidth  || window.innerWidth
      const newH = container.clientHeight || window.innerHeight
      camera.aspect = newW / newH
      camera.updateProjectionMatrix()
      renderer.setSize(newW, newH)
    }
    window.addEventListener('resize', onResize, { passive: true })

    // Autonomous animation loop across the FULL screen canvas
    let frameId
    let running = true

    function animate() {
      if (!running) return
      frameId = requestAnimationFrame(animate)

      const time = Date.now() * 0.001

      // Expansive panoramic camera/group sway
      group.position.x = Math.sin(time * 0.25) * 1.2
      group.position.y = Math.cos(time * 0.2) * 0.6
      group.rotation.y += 0.003
      group.rotation.x += 0.0015

      // Starlight dust drift
      if (particlePoints) {
        particlePoints.rotation.y = time * 0.02
        particlePoints.rotation.x = time * 0.01
      }

      // 1. Primary Sphere — navigates wide across the left quadrant
      sphere.position.x = -3.8 + Math.sin(time * 0.6) * 1.8
      sphere.position.y =  1.2 + Math.cos(time * 0.7) * 1.4
      sphere.position.z = -0.5 + Math.sin(time * 0.4) * 1.0

      // 2. Secondary Sphere — navigates wide across the right/lower quadrant
      sphere2.position.x =  4.2 + Math.cos(time * 0.55) * 1.6
      sphere2.position.y = -1.5 + Math.sin(time * 0.65) * 1.2
      sphere2.position.z = -1.2 + Math.cos(time * 0.45) * 0.8

      // 3. Gold Rod — graceful diagonal tumble across the right & upper hemisphere
      rod.position.x =  3.2 + Math.sin(time * 0.5) * 2.0
      rod.position.y =  0.6 + Math.cos(time * 0.6) * 1.6
      rod.position.z = -0.8 + Math.sin(time * 0.35) * 1.2
      rod.rotation.y += 0.015
      rod.rotation.z += 0.008
      rod.rotation.x += 0.004

      // 4. Primary Ring — wide sweeping orbit across center & lower canvas
      ring.position.x =  0.2 + Math.cos(time * 0.45) * 2.8
      ring.position.y = -1.4 + Math.sin(time * 0.5) * 1.5
      ring.position.z = -1.8 + Math.cos(time * 0.3) * 1.0
      ring.rotation.x += 0.008
      ring.rotation.y += 0.012
      ring.rotation.z += 0.005

      // 5. Secondary Ring — floating across the top-left canvas
      ring2.position.x = -4.5 + Math.sin(time * 0.5) * 1.5
      ring2.position.y =  2.0 + Math.cos(time * 0.45) * 1.0
      ring2.position.z = -1.5 + Math.sin(time * 0.3) * 0.8
      ring2.rotation.x += 0.01
      ring2.rotation.z += 0.007

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      running = false
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      sphereGeo.dispose()
      sphereMat.dispose()
      sphere2Geo.dispose()
      sphere2Mat.dispose()
      rodGeo.dispose()
      rodMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
