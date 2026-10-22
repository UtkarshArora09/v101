import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function HeroEnvelope({ onStartAudio, onComplete, onOpenEnvelope }) {
  // Stages: 'sealed' -> 'opening' (card slides out) -> 'fading' (smooth fade out into website)
  const [stage, setStage] = useState('sealed')

  const handleOpen = () => {
    if (stage !== 'sealed') {
      // If tapped while card is already out, fast-forward smoothly to full website
      if (stage === 'opening') {
        setStage('fading')
        setTimeout(() => {
          if (onComplete) onComplete()
          else if (onOpenEnvelope) onOpenEnvelope()
        }, 600)
      }
      return
    }

    setStage('opening')

    // 1. Start classical ambient music immediately on touch
    if (onStartAudio) {
      onStartAudio()
    }

    // 2. Celebratory royal gold & dusty-rose sparkle confetti
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.52 },
        colors: ['#D4AF37', '#F5E0A3', '#C57B85', '#E8B4BC', '#FFFDF9'],
        ticks: 240,
        gravity: 0.7,
      })
    } catch (_) {}

    // 3. Keep the opened card visible for ~2.2 seconds for the user to admire, then smoothly fade out
    setTimeout(() => {
      setStage('fading')
    }, 2400)

    // 4. Complete the transition into the main celebration website
    setTimeout(() => {
      if (onComplete) {
        onComplete()
      } else if (onOpenEnvelope) {
        onOpenEnvelope()
      }
    }, 3300)
  }

  return (
    <motion.div
      key="hero-envelope-modal"
      initial={{ opacity: 1 }}
      animate={
        stage === 'fading'
          ? { opacity: 0, scale: 1.05, filter: 'blur(10px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 bg-[#16120E]/92 backdrop-blur-lg overflow-y-auto select-none"
    >
      {/* Soft Radial Warm Gold & Rose Ambient Backlight */}
      <div className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-[#D4AF37]/25 via-[#E8B4BC]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative my-auto flex flex-col items-center max-w-sm sm:max-w-md w-full pt-4 pb-2">
        {/* Top Royal Header (Always fully visible with comfortable top clearance) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2.5 sm:mb-3"
        >
          <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#F5E0A3] tracking-wide drop-shadow-sm leading-normal">
            Shubh Vivah
          </p>
          <h1 className="font-['Cinzel'] text-[10px] sm:text-xs tracking-[0.3em] text-[#FFFDF9] uppercase font-semibold mt-0.5">
            The Royal Wedding Invitation
          </h1>
        </motion.div>

        {/* 100% Vector Couture Envelope & Sliding Invitation Card */}
        <div
          onClick={handleOpen}
          className="relative cursor-pointer group w-[280px] xs:w-[320px] sm:w-[360px] h-[min(52vh,450px)] max-h-[460px] min-h-[360px] rounded-3xl overflow-visible transition-transform duration-500"
          style={{ perspective: 1200 }}
        >
          {/* THE ENVELOPE BACK & POCKET */}
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#DFBF77] bg-[#FAF5ED]"
            style={{
              boxShadow:
                '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 45px rgba(212, 175, 55, 0.3)',
            }}
          >
            {/* Linen Paper Texture & Subtle Warm Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5ED] to-[#F2E5D0]" />

            {/* Double Gold Hairline Border with Inset Filigree */}
            <div className="absolute inset-4 sm:inset-5 border border-[#DFBF77]/80 rounded-2xl pointer-events-none" />
            <div className="absolute inset-6 sm:inset-7 border border-[#DFBF77]/40 rounded-xl pointer-events-none" />

            {/* Handcrafted Botanical Corners */}
            <FloralCornerSvg className="top-2 left-2" />
            <FloralCornerSvg className="top-2 right-2 scale-x-[-1]" />
            <FloralCornerSvg className="bottom-2 left-2 scale-y-[-1]" />
            <FloralCornerSvg className="bottom-2 right-2 scale-x-[-1] scale-y-[-1]" />

            {/* Envelope Pocket Geometry (Crisp SVG Folds) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 400 580"
              fill="none"
            >
              {/* Lower Flaps */}
              <polygon points="0,580 200,320 400,580" fill="#F3E7D3" fillOpacity="0.45" />
              <line x1="0" y1="580" x2="200" y2="320" stroke="#DFBF77" strokeWidth="1" strokeOpacity="0.7" />
              <line x1="400" y1="580" x2="200" y2="320" stroke="#DFBF77" strokeWidth="1" strokeOpacity="0.7" />

              {/* Side Folds */}
              <polygon points="0,0 200,320 0,580" fill="#EFE0C9" fillOpacity="0.35" />
              <polygon points="400,0 200,320 400,580" fill="#EAD7BD" fillOpacity="0.4" />
            </svg>

            {/* Top Flap (Lifts open with smooth 3D perspective fold) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={
                stage === 'opening' || stage === 'fading'
                  ? { rotateX: -160, opacity: 0.3 }
                  : { rotateX: 0, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center' }}
              className="absolute top-0 inset-x-0 h-1/2 z-20 pointer-events-none"
            >
              <svg viewBox="0 0 400 290" className="w-full h-full" preserveAspectRatio="none" fill="none">
                <polygon points="0,0 400,0 200,290" fill="#FAF2E1" fillOpacity="0.9" />
                <line x1="0" y1="0" x2="200" y2="290" stroke="#DFBF77" strokeWidth="1.2" />
                <line x1="400" y1="0" x2="200" y2="290" stroke="#DFBF77" strokeWidth="1.2" />
              </svg>
            </motion.div>

            {/* Inner Sliding Royal Invitation Card (Smoothly slides UPWARD without clipping) */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={
                stage === 'opening' || stage === 'fading'
                  ? { y: -75, opacity: 1, scale: 1.02 }
                  : { y: 0, opacity: 0, scale: 1 }
              }
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute inset-x-3.5 sm:inset-x-5 top-8 bottom-10 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5ED] to-[#F5EBDC] border-2 border-[#D4AF37] p-4 sm:p-5 flex flex-col items-center justify-between text-center z-15 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              {/* Top Crest Monogram */}
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#FAF5ED] flex items-center justify-center shadow-xs">
                <span className="font-['Cinzel'] font-black text-xs sm:text-sm text-[#8B6508]">A&amp;S</span>
              </div>

              {/* Invitation Typography */}
              <div className="my-auto">
                <p className="font-['Alex_Brush'] text-xl sm:text-2xl text-[#C57B85] leading-tight">
                  With the blessings of our families
                </p>
                <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold tracking-wider text-[#382E28] my-1 uppercase">
                  AYUSHI &amp; SAJAL
                </h3>
                <div className="w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-1.5" />
                <p className="font-['Montserrat'] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#7A695C] font-medium">
                  Cordially Invite You
                </p>
                <p className="font-['Cinzel'] text-[11px] sm:text-xs font-bold text-[#8B6508] tracking-widest mt-1.5 uppercase">
                  13 &bull; 14 March 2027
                </p>
                <p className="font-['Montserrat'] text-[9px] sm:text-[10px] text-[#8C7A6B] mt-0.5 font-medium">
                  The Jungle Trail, Jim Corbett
                </p>
              </div>

              {/* Bottom Subtle Status Prompt */}
              <div className="w-full pt-1.5 border-t border-[#DFBF77]/40 flex items-center justify-center gap-1.5 text-[9px] font-['Montserrat'] uppercase tracking-[0.2em] text-[#A67C24] font-semibold">
                <span>Entering Celebrations</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              </div>
            </motion.div>

            {/* Central 3D Embossed Gold Wax Seal with "A & S" */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={
                stage === 'opening' || stage === 'fading'
                  ? { scale: [1, 1.25, 0.15], opacity: [1, 1, 0], y: [0, -20, 20] }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                {/* Golden Pulsing Halo */}
                <div className="absolute -inset-4 rounded-full bg-[#E5A83B]/35 blur-xl animate-pulse" />

                {/* Melted Wax Disc with Natural Edge Scallops */}
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full gold-wax-seal flex items-center justify-center cursor-pointer border-2 border-[#FFE8A3] shadow-xl">
                  {/* Outer Concentric Grooves */}
                  <div className="absolute inset-1 rounded-full border border-[#7A4B0A]/35" />
                  <div className="absolute inset-2.5 rounded-full border border-[#FFF0B8]/40 border-dashed" />

                  {/* Embossed Monogram */}
                  <div className="flex items-center justify-center">
                    <span
                      className="font-['Cinzel'] font-black text-xl sm:text-2xl tracking-widest text-[#FFF2B8]"
                      style={{
                        textShadow:
                          '0 2px 4px rgba(0,0,0,0.7), 0 -1px 1px rgba(255,255,255,0.5)',
                      }}
                    >
                      A&amp;S
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pulsing "Tap to Open" CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={
            stage === 'sealed'
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 15, transition: { duration: 0.4 } }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={handleOpen}
          className="mt-3 sm:mt-4 flex flex-col items-center cursor-pointer group"
        >
          <div className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#C99738] text-[#2C241E] shadow-[0_4px_25px_rgba(212,175,55,0.45)] group-hover:brightness-110 active:scale-95 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#2C241E]" />
            <span className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              Tap to Open Invitation
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#2C241E]" />
          </div>
          <p className="text-[10px] sm:text-[11px] text-[#E8C593]/80 tracking-wider mt-1.5 font-['Montserrat']">
            Click anywhere to unseal with ambient music
          </p>
        </motion.div>

        {/* Fast-forward Skip link if card is already sliding */}
        {stage === 'opening' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={handleOpen}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-['Cinzel'] font-bold text-[#F5E0A3] uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
          >
            <span>Tap anywhere to enter website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

function FloralCornerSvg({ className }) {
  return (
    <div className={`absolute ${className} w-24 h-24 sm:w-28 sm:h-28 pointer-events-none opacity-85`}>
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Eucalyptus Leaves */}
        <path d="M10 20 C25 25 35 45 30 65 C20 50 15 35 10 20Z" fill="#7E9A82" opacity="0.8" />
        <path d="M20 10 C25 25 45 35 65 30 C50 20 35 15 20 10Z" fill="#6B8870" opacity="0.85" />
        <path d="M30 40 C45 50 55 70 45 85 C35 70 30 55 30 40Z" fill="#90A994" opacity="0.75" />

        {/* Blush & Dusty Rose Garden Peonies */}
        <circle cx="48" cy="48" r="24" fill="#F4D3D8" />
        <circle cx="46" cy="46" r="19" fill="#E8B4BC" />
        <circle cx="45" cy="45" r="14" fill="#C57B85" opacity="0.75" />
        <circle cx="43" cy="43" r="8" fill="#FFF2F4" opacity="0.8" />

        {/* Secondary Delicate Bud */}
        <circle cx="80" cy="28" r="14" fill="#F9DEE2" />
        <circle cx="78" cy="27" r="10" fill="#E8B4BC" />
        <circle cx="28" cy="80" r="14" fill="#F9DEE2" />
        <circle cx="27" cy="78" r="10" fill="#E8B4BC" />

        {/* Golden Berries & Twigs */}
        <circle cx="75" cy="55" r="3.5" fill="#D4AF37" />
        <circle cx="85" cy="62" r="3" fill="#D4AF37" />
        <circle cx="55" cy="75" r="3.5" fill="#D4AF37" />
        <circle cx="62" cy="85" r="3" fill="#D4AF37" />
        <path d="M48 48 Q 70 60 85 62" stroke="#B8860B" strokeWidth="1" />
        <path d="M48 48 Q 60 70 62 85" stroke="#B8860B" strokeWidth="1" />
      </svg>
    </div>
  )
}
