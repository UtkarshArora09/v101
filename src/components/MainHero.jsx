import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react'

export default function MainHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 overflow-hidden">
      {/* Top Auspicious Monogram Crest (PURE A&S, NO 2027) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <div className="relative inline-flex items-center justify-center p-3.5 rounded-full border-2 border-[#D4AF37] bg-[#FAF5ED] shadow-[0_4px_30px_rgba(212,175,55,0.35)]">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#D4AF37]/70 flex items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-[#FAF5ED] to-[#F5EDE0] shadow-inner">
            <span className="font-['Cinzel'] font-black text-3xl sm:text-4xl text-[#8B6508] tracking-widest drop-shadow-sm">
              A&amp;S
            </span>
          </div>
        </div>
      </motion.div>

      {/* Auspicious Shubh Vivah Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-['Alex_Brush'] text-3xl sm:text-5xl md:text-6xl text-[#C57B85] tracking-wide mb-2"
      >
        We are getting married
      </motion.p>

      {/* Grand Couple Names in Royal Gold Typography */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="my-3"
      >
        <h1 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-gold-gradient uppercase drop-shadow-md">
          AYUSHI &amp; SAJAL
        </h1>
      </motion.div>

      {/* Sacred Shubh Vivah Verse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-md mx-auto my-3"
      >
        <p className="font-['Cormorant_Garamond'] italic text-lg sm:text-xl text-[#7A695C]">
          "Two souls bound by love, two families joined in celebration"
        </p>
      </motion.div>

      {/* Date & Location Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-['Montserrat'] tracking-widest uppercase text-[#5A4B40] font-semibold my-6"
      >
        <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF5ED] border border-[#DFBF77] shadow-sm">
          <Calendar className="w-4 h-4 text-[#C99738]" /> 13 &bull; 14 March 2027
        </span>
        <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF5ED] border border-[#DFBF77] shadow-sm">
          <MapPin className="w-4 h-4 text-[#C99738]" /> The Jungle Trail, Jim Corbett
        </span>
      </motion.div>

      {/* Royal Ornamental Flourish */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-center gap-3 my-4"
      >
        <span className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#DFBF77]" />
        <Sparkles className="w-4 h-4 text-[#C99738]" />
        <span className="w-20 sm:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#DFBF77]" />
      </motion.div>

      {/* Scroll Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 flex flex-col items-center gap-1.5 text-[#8C7A6B] cursor-pointer group"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
        }}
      >
        <span className="font-['Montserrat'] text-[11px] uppercase tracking-[0.3em] text-[#A67C24] font-semibold group-hover:text-[#694807] transition-colors">
          Scroll to explore celebrations
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C99738]" />
      </motion.div>
    </section>
  )
}
