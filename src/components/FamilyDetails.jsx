import React from 'react'
import { motion } from 'framer-motion'

export default function FamilyDetails() {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Decorative Traditional Ganesha / Auspicious Invocation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center mb-16"
      >
        {/* Sacred Om / Ganesha Motif */}
        <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#FAF5ED] shadow-md mb-3">
          <span className="font-['Cinzel'] text-2xl text-[#8B6508] font-bold">&#2384;</span>
        </div>
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] tracking-wide">
          || Shri Ganeshay Namah ||
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFBF77] to-[#D4AF37]" />
          <span className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37]" />
          <span className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFBF77] to-[#D4AF37]" />
        </div>
      </motion.div>

      {/* SECTION 1: THE BRIDE'S FAMILY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative bg-[#FFFDF9]/95 rounded-3xl p-8 sm:p-14 border-2 border-[#DFBF77] shadow-[0_15px_40px_rgba(201,151,56,0.1)] mb-14"
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-bold mb-2">
            The Bride's Family
          </span>

          <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mb-2">
            With the heavenly blessings of
          </p>

          <p className="font-['Montserrat'] text-sm sm:text-base font-semibold text-[#4A3E38] tracking-wider mb-6">
            Late Smt. Sushila Devi &amp; Late Shri Rameshwar Prasad
          </p>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />

          <p className="font-['Montserrat'] text-base sm:text-xl text-[#332A24] font-medium leading-relaxed max-w-lg mb-3">
            Mr. Rajesh Sharma &amp; Mrs. Sunita Sharma
          </p>

          <p className="font-['Montserrat'] text-xs sm:text-sm text-[#7D6B5D] italic tracking-wide max-w-md mb-8">
            joyfully invite you to celebrate the marriage of their beloved daughter
          </p>

          {/* Bride Name Highlight */}
          <div className="relative py-2 px-8">
            <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider text-gold-gradient uppercase drop-shadow-sm">
              AYUSHI
            </h2>
            <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
          </div>
        </div>
      </motion.div>

      {/* CONNECTING SACRED KNOT MOTIF WITH PURE A&S MONOGRAM */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center my-8"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#FFFDF9] to-[#F5EDE0] flex items-center justify-center shadow-lg">
            <span className="font-['Alex_Brush'] text-3xl sm:text-4xl text-[#C57B85] font-bold">
              &amp;
            </span>
          </div>
        </div>
        <span className="font-['Montserrat'] text-[10px] uppercase tracking-[0.35em] text-[#9E8B79] mt-3 font-semibold">
          Two souls &bull; One sacred bond
        </span>
      </motion.div>

      {/* SECTION 2: THE GROOM'S FAMILY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        className="relative bg-[#FFFDF9]/95 rounded-3xl p-8 sm:p-14 border-2 border-[#DFBF77] shadow-[0_15px_40px_rgba(201,151,56,0.1)] mt-6"
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-bold mb-2">
            The Groom's Family
          </span>

          <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mb-2">
            With the warm blessings of
          </p>

          <p className="font-['Montserrat'] text-sm sm:text-base font-semibold text-[#4A3E38] tracking-wider mb-6">
            Smt. Kamla Devi &amp; Shri Kailash Nath Verma
          </p>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />

          <p className="font-['Montserrat'] text-base sm:text-xl text-[#332A24] font-medium leading-relaxed max-w-lg mb-3">
            Mr. Alok Verma &amp; Mrs. Rekha Verma
          </p>

          <p className="font-['Montserrat'] text-xs sm:text-sm text-[#7D6B5D] italic tracking-wide max-w-md mb-8">
            request the honor of your presence at the wedding of their beloved son
          </p>

          {/* Groom Name Highlight */}
          <div className="relative py-2 px-8">
            <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider text-gold-gradient uppercase drop-shadow-sm">
              SAJAL
            </h2>
            <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
