import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RotateCw, Upload, Eye, RefreshCw, Sparkles, AlertCircle } from 'lucide-react'

export default function Couple3DViewer({ eventId, eventName, colors }) {
  const mountRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasModel, setHasModel] = useState(false)
  const [loadError, setLoadError] = useState(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const [customModelUrl, setCustomModelUrl] = useState(null)
  const fileInputRef = useRef(null)

  // References for Three.js objects
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const controlsRef = useRef(null)
  const mixerRef = useRef(null)
  const currentModelRef = useRef(null)
  const proceduralGroupRef = useRef(null)
  const cameraRef = useRef(null)

  // Model file paths
  const defaultModelPath = `/models/${eventId}.glb`
  const activeModelUrl = customModelUrl || defaultModelPath

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // 1. Scene Setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Soft gradient background feel
    scene.fog = new THREE.FogExp2(0xfaf5ed, 0.08)

    // 2. Camera Setup
    const width = container.clientWidth || 380
    const height = container.clientHeight || 500
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
    camera.position.set(0, 1.4, 3.6)
    cameraRef.current = camera

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.replaceChildren(renderer.domElement)
    rendererRef.current = renderer

    // 4. OrbitControls Setup (360 Degree Drag & Orbit)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.autoRotate = autoRotate
    controls.autoRotateSpeed = 1.8
    controls.minDistance = 1.6
    controls.maxDistance = 5.5
    controls.maxPolarAngle = Math.PI / 2 + 0.05 // Don't go below floor
    controls.target.set(0, 1.0, 0)
    controlsRef.current = controls

    // 5. Opulent Royal Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.2)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0)
    keyLight.position.set(3, 4, 3)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.width = 1024
    keyLight.shadow.mapSize.height = 1024
    keyLight.shadow.bias = -0.001
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xf5e0a3, 1.0)
    fillLight.position.set(-3, 3, 2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xd4af37, 1.5)
    rimLight.position.set(0, 4, -3)
    scene.add(rimLight)

    // 6. Royal Gold & Marble Pedestal
    const pedestalGroup = new THREE.Group()

    // Base Tier
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.28, 0.08, 48)
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
    })
    const baseMesh = new THREE.Mesh(baseGeo, goldMat)
    baseMesh.position.y = 0.04
    baseMesh.receiveShadow = true
    pedestalGroup.add(baseMesh)

    // Marble Platform Top Tier
    const marbleGeo = new THREE.CylinderGeometry(1.12, 1.12, 0.06, 48)
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xfbf8f3,
      metalness: 0.1,
      roughness: 0.35,
    })
    const marbleMesh = new THREE.Mesh(marbleGeo, marbleMat)
    marbleMesh.position.y = 0.1
    marbleMesh.receiveShadow = true
    pedestalGroup.add(marbleMesh)

    // Concentric Inlaid Gold Ring
    const ringGeo = new THREE.TorusGeometry(1.05, 0.015, 16, 48)
    const ringMesh = new THREE.Mesh(ringGeo, goldMat)
    ringMesh.rotation.x = Math.PI / 2
    ringMesh.position.y = 0.132
    pedestalGroup.add(ringMesh)

    scene.add(pedestalGroup)

    // 7. Golden Ambient Floating Sparkles
    const particleCount = 60
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 3
      particlePositions[i * 3 + 1] = Math.random() * 2.5
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Helper: Create Procedural 3D Couple Mannequin Placeholder when no GLB is found
    const createProceduralCouple = () => {
      if (proceduralGroupRef.current) {
        scene.remove(proceduralGroupRef.current)
      }

      const coupleGroup = new THREE.Group()

      // Primary color based on event
      const primaryHex = colors && colors[0] ? colors[0].hex : '#0B3B2C'
      const secondaryHex = colors && colors[1] ? colors[1].hex : '#D4AF37'
      const goldHex = 0xd4af37

      const groomMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(primaryHex),
        roughness: 0.4,
        metalness: 0.2,
      })
      const brideMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(secondaryHex),
        roughness: 0.35,
        metalness: 0.35,
      })
      const skinMat = new THREE.MeshStandardMaterial({
        color: 0xe0b296,
        roughness: 0.6,
      })
      const trimMat = new THREE.MeshStandardMaterial({
        color: goldHex,
        metalness: 0.8,
        roughness: 0.2,
      })

      // GROOM MANNEQUIN (Left side, standing upright)
      const groom = new THREE.Group()
      groom.position.set(-0.35, 0.13, 0)

      // Groom Torso / Sherwani / Tuxedo
      const groomTorsoGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.75, 24)
      const groomTorso = new THREE.Mesh(groomTorsoGeo, groomMat)
      groomTorso.position.y = 1.05
      groomTorso.castShadow = true
      groom.add(groomTorso)

      // Gold Lapel / Collar trim
      const groomCollarGeo = new THREE.TorusGeometry(0.18, 0.015, 12, 24)
      const groomCollar = new THREE.Mesh(groomCollarGeo, trimMat)
      groomCollar.rotation.x = Math.PI / 2
      groomCollar.position.y = 1.42
      groom.add(groomCollar)

      // Groom Legs
      const legGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.65, 16)
      const legLeft = new THREE.Mesh(legGeo, groomMat)
      legLeft.position.set(-0.09, 0.35, 0)
      legLeft.castShadow = true
      groom.add(legLeft)

      const legRight = new THREE.Mesh(legGeo, groomMat)
      legRight.position.set(0.09, 0.35, 0)
      legRight.castShadow = true
      groom.add(legRight)

      // Groom Head
      const headGeo = new THREE.SphereGeometry(0.12, 24, 24)
      const groomHead = new THREE.Mesh(headGeo, skinMat)
      groomHead.position.y = 1.58
      groomHead.castShadow = true
      groom.add(groomHead)

      // Groom Turban / Hair
      const turbanGeo = new THREE.CylinderGeometry(0.13, 0.135, 0.12, 24)
      const groomTurban = new THREE.Mesh(turbanGeo, trimMat)
      groomTurban.position.y = 1.66
      groom.add(groomTurban)

      coupleGroup.add(groom)

      // BRIDE MANNEQUIN (Right side, slightly angled toward groom)
      const bride = new THREE.Group()
      bride.position.set(0.35, 0.13, 0)

      // Flared Lehenga / Saree Skirt
      const skirtGeo = new THREE.ConeGeometry(0.38, 0.78, 32, 1, true)
      const skirt = new THREE.Mesh(skirtGeo, brideMat)
      skirt.position.y = 0.52
      skirt.castShadow = true
      bride.add(skirt)

      // Gold Zari Border on Skirt Base
      const skirtBorderGeo = new THREE.TorusGeometry(0.375, 0.02, 16, 32)
      const skirtBorder = new THREE.Mesh(skirtBorderGeo, trimMat)
      skirtBorder.rotation.x = Math.PI / 2
      skirtBorder.position.y = 0.14
      bride.add(skirtBorder)

      // Bride Choli / Bodice
      const brideTorsoGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.42, 24)
      const brideTorso = new THREE.Mesh(brideTorsoGeo, brideMat)
      brideTorso.position.y = 1.05
      brideTorso.castShadow = true
      bride.add(brideTorso)

      // Bride Head
      const brideHead = new THREE.Mesh(headGeo, skinMat)
      brideHead.position.y = 1.48
      brideHead.castShadow = true
      bride.add(brideHead)

      // Hair Bun & Ornament
      const bunGeo = new THREE.SphereGeometry(0.08, 16, 16)
      const bun = new THREE.Mesh(bunGeo, trimMat)
      bun.position.set(0, 1.55, -0.06)
      bride.add(bun)

      coupleGroup.add(bride)

      proceduralGroupRef.current = coupleGroup
      scene.add(coupleGroup)
    }

    // 8. Load GLTF / GLB Model
    const loader = new GLTFLoader()
    setIsLoading(true)
    setLoadError(null)

    // Remove previous model if exists
    if (currentModelRef.current) {
      scene.remove(currentModelRef.current)
      currentModelRef.current = null
    }

    loader.load(
      activeModelUrl,
      (gltf) => {
        // Remove procedural placeholder if true GLB loaded
        if (proceduralGroupRef.current) {
          scene.remove(proceduralGroupRef.current)
        }

        const model = gltf.scene
        currentModelRef.current = model

        // Enable shadows
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true
            node.receiveShadow = true
          }
        })

        // Auto-Center & Scale Model to perfectly fit our royal podium
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        const targetHeight = 1.6
        const scale = targetHeight / (maxDim || 1)
        model.scale.setScalar(scale)

        // Center on top of pedestal (y = 0.13)
        model.position.x = -center.x * scale
        model.position.y = 0.13 - box.min.y * scale
        model.position.z = -center.z * scale

        scene.add(model)
        setHasModel(true)
        setIsLoading(false)

        // Animation mixer if GLTF has embedded clips
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model)
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
          mixerRef.current = mixer
        }
      },
      undefined,
      (error) => {
        // Fallback gracefully to procedural 3D couple if GLB is not found yet
        setHasModel(false)
        setIsLoading(false)
        setLoadError(`No custom 3D model found at ${activeModelUrl}. Displaying procedural 3D couple.`)
        createProceduralCouple()
      }
    )

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // 10. Animation Loop
    const clock = new THREE.Clock()
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (controlsRef.current) {
        controlsRef.current.update()
      }

      if (mixerRef.current) {
        mixerRef.current.update(delta)
      }

      // Gently animate floating sparkles
      const positions = particleGeo.attributes.position.array
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += delta * 0.15
        if (positions[i] > 2.5) {
          positions[i] = 0.1
        }
      }
      particleGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      renderer.dispose()
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [activeModelUrl, colors, eventId])

  // Handle auto-rotate toggle
  const toggleAutoRotate = () => {
    const next = !autoRotate
    setAutoRotate(next)
    if (controlsRef.current) {
      controlsRef.current.autoRotate = next
    }
  }

  // Reset Camera View
  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(0, 1.4, 3.6)
      controlsRef.current.target.set(0, 1.0, 0)
      controlsRef.current.update()
    }
  }

  // Custom User File Upload for Instant 3D Testing
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setCustomModelUrl(url)
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Three.js Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Top Floating Control Pill */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBF77]/80 text-[#8B6508] text-[10px] font-['Montserrat'] font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>3D Mesh: {hasModel ? 'Custom GLB' : 'Procedural'}</span>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {/* Auto-rotate Toggle */}
          <button
            type="button"
            onClick={toggleAutoRotate}
            title={autoRotate ? 'Pause 360 Rotation' : 'Start 360 Rotation'}
            className={`p-1.5 rounded-full backdrop-blur-md border transition-all ${
              autoRotate
                ? 'bg-[#D4AF37] text-white border-[#FFE8A3] shadow-md'
                : 'bg-white/85 text-[#7A695C] border-[#DFBF77]/60 hover:bg-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          </button>

          {/* Reset Camera */}
          <button
            type="button"
            onClick={handleResetCamera}
            title="Reset Camera View"
            className="p-1.5 rounded-full bg-white/85 hover:bg-white text-[#7A695C] backdrop-blur-md border border-[#DFBF77]/60 transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Custom File Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Upload your own .GLB / .GLTF 3D model"
            className="p-1.5 rounded-full bg-white/85 hover:bg-white text-[#8B6508] backdrop-blur-md border border-[#DFBF77]/60 transition-all shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".glb,.gltf"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#FAF5ED]/80 backdrop-blur-xs flex flex-col items-center justify-center z-20 pointer-events-none">
          <div className="w-10 h-10 rounded-full border-3 border-[#D4AF37] border-t-transparent animate-spin mb-2" />
          <span className="font-['Cinzel'] text-xs text-[#8B6508] font-bold tracking-widest uppercase">
            Loading 3D Model...
          </span>
        </div>
      )}

      {/* Bottom Hint Banner: Drag Orbit Cue */}
      <div className="absolute bottom-2 inset-x-3 pointer-events-none flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBF77]/60 shadow-sm text-[10px] font-['Montserrat'] text-[#7A695C]">
          <RotateCw className="w-3 h-3 text-[#D4AF37]" />
          <span>Drag to rotate 360&deg; &bull; Pinch/Scroll to zoom</span>
        </div>
        {!hasModel && (
          <span className="text-[9px] text-[#A67C24] font-medium mt-1">
            Drop .glb files in <code className="bg-[#FAF2E1] px-1 py-0.5 rounded">/public/models/</code> or use the upload icon above
          </span>
        )}
      </div>
    </div>
  )
}
