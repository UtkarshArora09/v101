import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'

export default function HeroEnvelope({ onOpenEnvelope }) {
  const [stage, setStage] = useState('sealed') // 'sealed' | 'opening' | 'opened'

  const handleOpen = () => {
    if (stage !== 'sealed') return
    setStage('opening')

    // 1. Play the ambient flute audio
    if (onOpenEnvelope) {
      onOpenEnvelope()
    }

    // 2. Celebratory gold & dusty-rose confetti
    try {
      confetti({
        particleCount: 70,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#F5E0A3', '#C57B85', '#E8B4BC', '#FFFDF9'],
        ticks: 250,
        gravity: 0.75,
      })
    } catch (_) {}

    // 3. Smooth transition to full website
    setTimeout(() => {
      setStage('opened')
    }, 2000)
  }

  if (stage === 'opened') return null

  return (
    <AnimatePresence>
      <motion.div
        key="hero-envelope-modal"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] } }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16120E]/85 backdrop-blur-md overflow-hidden select-none"
      >
        {/* Soft Radial Backlight */}
        <div className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-[#D4AF37]/20 via-[#E8B4BC]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-md w-full">
          {/* Top Royal Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#F5E0A3] tracking-wide drop-shadow-sm">
              Shubh Vivah
            </p>
            <h1 className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.35em] text-[#FFFDF9] uppercase font-semibold">
              The Royal Wedding Invitation
            </h1>
          </motion.div>

          {/* 100% Vector & Procedural Couture Envelope */}
          <div
            onClick={handleOpen}
            className="relative cursor-pointer group w-[310px] xs:w-[350px] sm:w-[400px] h-[480px] xs:h-[530px] sm:h-[580px] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#DFBF77] bg-[#FAF5ED] transition-transform duration-300 hover:scale-[1.01]"
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.25)',
            }}
          >
            {/* Linen Paper Texture & Subtle Warm Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5ED] to-[#F2E5D0]" />

            {/* Double Gold Hairline Border with Inset Filigree */}
            <div className="absolute inset-4 sm:inset-5 border border-[#DFBF77]/80 rounded-2xl pointer-events-none" />
            <div className="absolute inset-6 sm:inset-7 border border-[#DFBF77]/40 rounded-xl pointer-events-none" />

            {/* Handcrafted Vector Botanical Rose Clusters in Corners */}
            <FloralCornerSvg className="top-2 left-2" />
            <FloralCornerSvg className="top-2 right-2 scale-x-[-1]" />
            <FloralCornerSvg className="bottom-2 left-2 scale-y-[-1]" />
            <FloralCornerSvg className="bottom-2 right-2 scale-x-[-1] scale-y-[-1]" />

            {/* Envelope Flap Creases (Crisp Vector SVG Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 580" fill="none">
              {/* Lower Flaps */}
              <polygon points="0,580 200,320 400,580" fill="#F3E7D3" fillOpacity="0.4" />
              <line x1="0" y1="580" x2="200" y2="320" stroke="#DFBF77" strokeWidth="1" strokeOpacity="0.6" />
              <line x1="400" y1="580" x2="200" y2="320" stroke="#DFBF77" strokeWidth="1" strokeOpacity="0.6" />

              {/* Side Folds */}
              <polygon points="0,0 200,320 0,580" fill="#EFE0C9" fillOpacity="0.3" />
              <polygon points="400,0 200,320 400,580" fill="#EAD7BD" fillOpacity="0.35" />

              {/* Top Flap Triangular Outline */}
              <polygon points="0,0 400,0 200,290" fill="#FAF2E1" fillOpacity="0.6" />
              <line x1="0" y1="0" x2="200" y2="290" stroke="#DFBF77" strokeWidth="1.2" />
              <line x1="400" y1="0" x2="200" y2="290" stroke="#DFBF77" strokeWidth="1.2" />
            </svg>

            {/* Inner Sliding Royal Invitation Card (Revealed on Open) */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={
                stage === 'opening'
                  ? { y: -80, opacity: 1, scale: 1.02 }
                  : { y: 0, opacity: 0 }
              }
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute inset-x-5 top-8 bottom-12 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5ED] to-[#F5EBDC] border-2 border-[#D4AF37] p-6 flex flex-col items-center justify-between text-center z-10 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] bg-[#FAF5ED] flex items-center justify-center shadow-sm">
                <span className="font-['Cinzel'] font-black text-sm text-[#8B6508]">A&amp;S</span>
              </div>

              <div>
                <p className="font-['Alex_Brush'] text-2xl text-[#C57B85]">
                  With the blessings of our families
                </p>
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold tracking-wider text-[#382E28] my-1">
                  AYUSHI &amp; SAJAL
                </h3>
                <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto my-2" />
                <p className="font-['Montserrat'] text-[11px] uppercase tracking-widest text-[#7A695C]">
                  Cordially Invite You
                </p>
                <p className="font-['Cinzel'] text-xs font-semibold text-[#8B6508] tracking-widest mt-2 uppercase">
                  13 &bull; 14 March 2027
                </p>
                <p className="font-['Montserrat'] text-[10px] text-[#8C7A6B] mt-0.5">
                  The Jungle Trail, Jim Corbett
                </p>
              </div>

              <div className="w-full pt-2 border-t border-[#DFBF77]/40 text-[10px] font-['Montserrat'] uppercase tracking-[0.25em] text-[#A67C24]">
                Entering Royal Celebration...
              </div>
            </motion.div>

            {/* Central 3D Embossed Gold Wax Seal with "A & S" (PURE MONOGRAM, NO 2027) */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={
                stage === 'opening'
                  ? { scale: [1, 1.35, 0.1], opacity: [1, 1, 0], y: [0, -30, 30] }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                {/* Golden Pulsing Halo */}
                <div className="absolute -inset-4 rounded-full bg-[#E5A83B]/35 blur-xl animate-pulse" />

                {/* Melted Wax Disc with Natural Edge Scallops */}
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full gold-wax-seal flex items-center justify-center cursor-pointer border-2 border-[#FFE8A3]">
                  {/* Outer Concentric Grooves */}
                  <div className="absolute inset-1.5 rounded-full border border-[#7A4B0A]/35" />
                  <div className="absolute inset-3 rounded-full border border-[#FFF0B8]/40 border-dashed" />

                  {/* Embossed Monogram */}
                  <div className="flex items-center justify-center">
                    <span
                      className="font-['Cinzel'] font-black text-2xl sm:text-3xl tracking-widest text-[#FFF2B8]"
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

          {/* Pulsing "Tap to Open" CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={stage === 'sealed' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={handleOpen}
            className="mt-6 flex flex-col items-center cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#C99738] text-[#2C241E] shadow-[0_4px_25px_rgba(212,175,55,0.45)] group-hover:brightness-110 active:scale-95 transition-all">
              <Sparkles className="w-4 h-4 text-[#2C241E]" />
              <span className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                Tap to Open Invitation
              </span>
              <Sparkles className="w-4 h-4 text-[#2C241E]" />
            </div>
            <p className="text-[11px] text-[#E8C593]/80 tracking-wider mt-2.5 font-['Montserrat']">
              Click anywhere to unseal with ambient music
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
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
