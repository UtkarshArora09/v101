import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Calendar, Sparkles, CheckCircle2, Eye } from 'lucide-react'

export default function ScratchCardDate() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [scratchPercent, setScratchPercent] = useState(0)
  const [isDrawing, setIsDrawing] = useState(false)

  // Initialize and paint digital gold foil onto canvas
  const initGoldFoil = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    ctx.globalCompositeOperation = 'source-over'

    // 1. Rich Metallic Gold Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#B8860B')
    gradient.addColorStop(0.2, '#D4AF37')
    gradient.addColorStop(0.4, '#FDF2B5')
    gradient.addColorStop(0.6, '#AA7A1E')
    gradient.addColorStop(0.85, '#E5C158')
    gradient.addColorStop(1, '#91630B')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // 2. Sparkling flecks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * width
      const ry = Math.random() * height
      const r = Math.random() * 1.6
      ctx.beginPath()
      ctx.arc(rx, ry, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // 3. Ornate gold foil border lines
    ctx.strokeStyle = 'rgba(255, 240, 180, 0.5)'
    ctx.lineWidth = 2
    ctx.strokeRect(12, 12, width - 24, height - 24)

    ctx.strokeStyle = 'rgba(120, 80, 15, 0.4)'
    ctx.lineWidth = 1
    ctx.strokeRect(16, 16, width - 32, height - 32)

    // Center instruction label
    ctx.font = 'bold 14px Montserrat, sans-serif'
    ctx.fillStyle = '#3E2A08'
    ctx.textAlign = 'center'
    ctx.fillText('✨ SCRATCH WITH MOUSE OR TOUCH ✨', width / 2, height / 2)
  }, [])

  // Canvas setup on mount & resize
  useEffect(() => {
    const setupCanvas = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (canvas && container) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
        if (!isRevealed) {
          initGoldFoil()
        }
      }
    }

    setupCanvas()
    window.addEventListener('resize', setupCanvas)
    return () => window.removeEventListener('resize', setupCanvas)
  }, [initGoldFoil, isRevealed])

  // Trigger reveal function
  const triggerReveal = useCallback(() => {
    setIsRevealed(true)
    setScratchPercent(100)

    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    // Celebratory confetti explosion
    try {
      confetti({
        particleCount: 85,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#F5E0A3', '#C57B85', '#E8B4BC', '#FFDF79'],
      })
    } catch (_) {}
  }, [])

  // Real-time calculation of scratched area percentage
  const calculateScratchPercent = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || isRevealed) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const stride = 8
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data
    let transparentCount = 0
    let totalSamples = 0

    for (let y = 0; y < height; y += stride) {
      for (let x = 0; x < width; x += stride) {
        const index = (y * width + x) * 4
        if (data[index + 3] < 128) {
          transparentCount++
        }
        totalSamples++
      }
    }

    const currentPercent = Math.round((transparentCount / totalSamples) * 100)
    setScratchPercent(currentPercent)

    if (currentPercent >= 55) {
      triggerReveal()
    }
  }, [isRevealed, triggerReveal])

  // Scratch action handler
  const scratch = (clientX, clientY) => {
    if (isRevealed) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 26, 0, Math.PI * 2)
    ctx.fill()

    calculateScratchPercent()
  }

  // Mouse Handlers
  const handleMouseDown = (e) => {
    setIsDrawing(true)
    scratch(e.clientX, e.clientY)
  }

  const handleMouseMove = (e) => {
    if (!isDrawing) return
    scratch(e.clientX, e.clientY)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  // Touch Handlers for Mobile
  const handleTouchStart = (e) => {
    setIsDrawing(true)
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e) => {
    if (!isDrawing) return
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchEnd = () => {
    setIsDrawing(false)
  }

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Ayushi & Sajal's Royal Wedding")
    const details = encodeURIComponent(
      "You are cordially invited to celebrate the wedding of Ayushi & Sajal at The Jungle Trail, Jim Corbett, Uttarakhand."
    )
    const location = encodeURIComponent("The Jungle Trail, Jim Corbett Ramnagar, Uttarakhand")
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270313T073000Z/20270315T043000Z&details=${details}&location=${location}`
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="relative py-20 px-4 max-w-3xl mx-auto text-center">
      {/* Header text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-2 block">
          Auspicious Dates
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-black text-[#382E28] tracking-wide">
          Scratch to reveal our big days!
        </h2>
        <p className="font-['Montserrat'] text-xs sm:text-sm text-[#7D6B5D] mt-2 max-w-md mx-auto">
          Rub across the gold foil card below with your finger or cursor to uncover the wedding dates.
        </p>
      </motion.div>

      {/* Prominent Gold Framed Scratch Container */}
      <div className="relative mx-auto max-w-lg w-full">
        {/* Frame Outer Gold Shadow Aura */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#DFBF77]/40 via-[#E8B4BC]/30 to-[#DFBF77]/40 blur-lg" />

        {/* Outer Ornamental Frame */}
        <div className="relative p-3 sm:p-4 bg-gradient-to-br from-[#FDF9EE] via-[#F4E6C3] to-[#D9AC4A] rounded-3xl shadow-2xl border-2 border-[#DFBF77]">
          {/* Inner Card Content */}
          <div
            ref={containerRef}
            className="relative h-60 sm:h-68 bg-[#FFFDF9] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 border border-[#DFBF77]/60 scratch-container"
          >
            {/* UNDERNEATH CONTENT (The Big Reveal) */}
            <div className="flex flex-col items-center justify-center text-center select-none z-0">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#C99738] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85]">
                  Save Our Date
                </span>
                <Sparkles className="w-5 h-5 text-[#C99738] animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Large Elegant Gold Font Date */}
              <h3 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-wider my-1 drop-shadow-sm">
                13TH &amp; 14TH MARCH 2027
              </h3>

              <p className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-[0.25em] text-[#5A483D] uppercase mt-1">
                The Jungle Trail &bull; Jim Corbett
              </p>

              <span className="text-[11px] text-[#8C7A6B] mt-1 font-['Montserrat']">
                Ramnagar, Uttarakhand
              </span>

              {/* Add to Calendar Button */}
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={handleAddToCalendar}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add to Calendar
              </motion.button>
            </div>

            {/* OVERLAY: HTML5 Canvas Digital Gold Foil */}
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ display: isRevealed ? 'none' : 'block' }}
              className="absolute inset-0 w-full h-full cursor-crosshair z-10"
            />
          </div>
        </div>

        {/* Scratch Progress & Instant Reveal Button */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8C7A6B] px-2 font-['Montserrat']">
          <div className="flex items-center gap-2">
            {isRevealed ? (
              <span className="inline-flex items-center gap-1.5 text-[#2E7D32] font-bold">
                <CheckCircle2 className="w-4 h-4" /> Unveiled!
              </span>
            ) : (
              <span>Scratched: {scratchPercent}%</span>
            )}
          </div>

          {!isRevealed && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                triggerReveal()
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF5ED] border border-[#DFBF77] text-[#8B6508] font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5D0] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#C99738]" />
              Click here to reveal instantly
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
