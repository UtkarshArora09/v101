import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Send, Check } from 'lucide-react'

export default function FooterSignOff() {
  const [blessing, setBlessing] = useState('')
  const [senderName, setSenderName] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSendBlessing = (e) => {
    e.preventDefault()
    if (!blessing.trim() || !senderName.trim()) return
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      setBlessing('')
      setSenderName('')
    }, 4000)
  }

  // Exact Google Maps location URL provided by the user
  const resortGoogleMapsUrl = 'https://maps.app.goo.gl/uf8Ca31iGcVvXivm7'

  return (
    <footer className="relative pt-16 pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* SECTION 7: VENUE DETAILS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#FFFDF9]/95 rounded-3xl p-8 sm:p-14 border-2 border-[#DFBF77] shadow-[0_15px_40px_rgba(201,151,56,0.1)] mb-14"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-3 block">
          The Wedding Venue
        </span>

        {/* Venue Name & Address */}
        <h3 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-[#332A24] leading-relaxed uppercase">
          THE JUNGLE TRAIL,<br />
          JIM CORBETT RAMNAGAR,<br />
          UTTARAKHAND
        </h3>

        {/* Google Maps Link with Map Pin */}
        <div className="mt-6 flex flex-col items-center">
          <a
            href={resortGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#C99738] text-[#2C241E] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4 text-[#2C241E] group-hover:scale-110 transition-transform" />
            <span>Open in Google Maps</span>
            <Navigation className="w-3.5 h-3.5 text-[#2C241E]" />
          </a>
          <span className="text-[11px] text-[#8C7A6B] mt-2.5 font-['Montserrat']">
            Jim Corbett National Park Foothills &bull; Ramnagar
          </span>
        </div>
      </motion.div>

      {/* GUEST BLESSINGS FORM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto bg-[#FFFDF9]/90 rounded-2xl p-6 sm:p-8 border border-[#DFBF77]/50 shadow-md mb-14"
      >
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mb-1">
          Send Your Blessings
        </p>
        <p className="font-['Montserrat'] text-xs text-[#7D6B5D] mb-4">
          Leave a warm message for Ayushi &amp; Sajal as they begin their sacred journey.
        </p>

        {isSent ? (
          <div className="p-4 rounded-xl bg-[#F0F8F1] border border-[#A5D6A7] text-[#2E7D32] flex items-center justify-center gap-2 text-xs font-medium animate-fade-in">
            <Check className="w-4 h-4" /> Thank you! Your warm blessings have been received.
          </div>
        ) : (
          <form onSubmit={handleSendBlessing} className="space-y-3">
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name (e.g. Sharma Family)"
              className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DFBF77]/50 text-xs sm:text-sm text-[#382E28] placeholder-[#9E8E80] focus:outline-none focus:border-[#C99738]"
              required
            />
            <textarea
              value={blessing}
              onChange={(e) => setBlessing(e.target.value)}
              placeholder="Write your heartfelt blessing..."
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DFBF77]/50 text-xs sm:text-sm text-[#382E28] placeholder-[#9E8E80] focus:outline-none focus:border-[#C99738] resize-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Send Blessings
            </button>
          </form>
        )}
      </motion.div>

      {/* REGISTRY NOTE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <p className="font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-[#6B5A4E] max-w-md mx-auto leading-relaxed">
          "Your presence is our biggest present. Please, no boxed gifts."
        </p>
      </motion.div>

      {/* SIGN-OFF TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#9C7420] mb-2">
          With Warm Regards,
        </p>
        <p className="font-['Cinzel'] text-base sm:text-xl font-bold tracking-widest text-[#382E28] uppercase">
          The Sharma &amp; Verma Families
        </p>
        <span className="font-['Montserrat'] text-[11px] text-[#8C7A6B] tracking-wider mt-1 block">
          (The Bride &amp; Groom Families)
        </span>
      </motion.div>

      {/* Decorative Gold Filigree Divider */}
      <div className="flex items-center justify-center gap-4 my-8">
        <span className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#DFBF77]" />
        <span className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-[#FAF5ED]" />
        <span className="w-20 sm:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#DFBF77]" />
      </div>

      {/* CINEMATIC FOOTER TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mt-6"
      >
        <p className="font-['Cinzel'] text-base sm:text-lg tracking-[0.35em] text-[#8B6508] uppercase font-bold">
          Two hearts &bull; One journey &bull; Forever
        </p>
        <p className="font-['Montserrat'] text-[11px] text-[#A8988B] tracking-widest uppercase mt-3">
          Ayushi &amp; Sajal
        </p>
      </motion.div>
    </footer>
  )
}
