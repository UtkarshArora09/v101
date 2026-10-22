import React from 'react'
import { motion } from 'framer-motion'
import { Train, Car, Hotel, CloudSun, MapPin, Compass, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react'

export default function TravelAccommodation() {
  const resortMapsUrl = 'https://maps.app.goo.gl/uf8Ca31iGcVvXivm7'

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-2 block">
          Guest Logistics &amp; Hospitality
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#382E28] tracking-wider uppercase">
          Travel &amp; Stay Guide
        </h2>
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mt-1">
          From Sangam City to the Corbett Forest
        </p>
        <div className="w-28 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
      </motion.div>

      {/* Visual Journey Route Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#FAF5ED] rounded-3xl p-6 sm:p-8 border border-[#DFBF77]/80 shadow-[0_10px_35px_rgba(201,151,56,0.1)] mb-12"
      >
        <span className="text-[10px] font-['Montserrat'] uppercase tracking-[0.3em] text-[#8B6508] font-bold block text-center mb-6">
          The Wedding Pilgrimage Route
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center text-center">
          {/* Step 1: Prayagraj */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border-2 border-[#D4AF37] flex items-center justify-center shadow-md mb-3">
              <MapPin className="w-6 h-6 text-[#C57B85]" />
            </div>
            <h4 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#382E28]">
              PRAYAGRAJ (PRYJ)
            </h4>
            <p className="text-xs text-[#7A6A5E] font-['Montserrat'] mt-1">
              Bride's Hometown &bull; Origin
            </p>
          </div>

          {/* Connection Indicator */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-semibold mb-1">
              Via Delhi / Moradabad
            </span>
            <div className="w-full flex items-center justify-center gap-2">
              <span className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-[#E8B4BC]" />
              <ArrowRight className="w-4 h-4 text-[#8B6508]" />
              <span className="h-[2px] w-24 bg-gradient-to-r from-[#E8B4BC] to-[#D4AF37]" />
            </div>
            <span className="text-[11px] text-[#A67C24] mt-1 font-medium">Overnight Train or Chauffeured Road Trip</span>
          </div>

          {/* Step 3: Jim Corbett */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5E0A3] to-[#D4AF37] border-2 border-[#FFE8A3] flex items-center justify-center shadow-md mb-3">
              <Hotel className="w-6 h-6 text-[#2C241E]" />
            </div>
            <h4 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#382E28]">
              THE JUNGLE TRAIL
            </h4>
            <p className="text-xs text-[#7A6A5E] font-['Montserrat'] mt-1">
              Jim Corbett, Ramnagar &bull; Destination
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Accommodation Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#FFFDF9]/95 rounded-3xl p-8 sm:p-12 border-2 border-[#DFBF77] shadow-[0_15px_40px_rgba(201,151,56,0.12)] mb-12 overflow-hidden"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#FAF2E1] border-2 border-[#D4AF37] flex items-center justify-center shrink-0 shadow-lg">
            <Hotel className="w-10 h-10 sm:w-12 sm:h-12 text-[#8B6508]" />
          </div>

          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF2E1] border border-[#DFBF77] text-[10px] font-['Montserrat'] uppercase tracking-[0.25em] text-[#8B6508] font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
              Guest Sanctuary &bull; Rooms Reserved
            </div>

            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-black text-[#382E28] tracking-wide my-1">
              The Jungle Trail Resort
            </h3>

            <p className="font-['Montserrat'] text-sm sm:text-base text-[#524136] leading-relaxed max-w-3xl mt-2">
              "We have secured beautiful rooms for our family and guests at <strong className="text-[#8B6508] font-semibold">The Jungle Trail</strong>. Your comfort is our priority from the moment you arrive."
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#7A695C]">
              <a
                href={resortMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#8B6508] bg-[#FAF5ED] px-4 py-2 rounded-xl border border-[#DFBF77]/70 hover:bg-[#F2E5D0] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C57B85]" /> View Resort on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
              <span className="inline-flex items-center gap-2 font-medium text-[#382E28] bg-[#FAF5ED] px-4 py-2 rounded-xl border border-[#DFBF77]/50">
                <Compass className="w-4 h-4 text-[#C57B85]" /> Check-in: 13 March 2027, 11:00 AM
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Transport Cards (Flight Removed as requested — Only Train, Road/Cab & Weather) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: By Train */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative bg-[#FFFDF9]/95 rounded-3xl p-7 border border-[#DFBF77]/70 shadow-[0_10px_30px_rgba(201,151,56,0.07)] hover:border-[#D4AF37] hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF2E1] border border-[#DFBF77] flex items-center justify-center">
                <Train className="w-6 h-6 text-[#8B6508]" />
              </div>
              <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-bold bg-[#FAF5ED] px-2.5 py-1 rounded-full border border-[#DFBF77]/40">
                Overnight Rail
              </span>
            </div>

            <h4 className="font-['Cinzel'] text-xl font-bold text-[#382E28] mb-1">
              By Train
            </h4>
            <p className="font-['Alex_Brush'] text-xl text-[#C57B85] mb-3">
              Direct connection to Ramnagar Station
            </p>

            <p className="font-['Montserrat'] text-xs sm:text-sm text-[#665549] leading-relaxed">
              The most convenient route from Prayagraj is via overnight train to Delhi or Moradabad, connecting directly to <strong className="text-[#382E28]">Ramnagar Railway Station (RMR)</strong>, just 20 minutes from the resort.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFBF77]/40">
            <a
              href="https://www.irctc.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6508] group-hover:text-[#523A06] transition-colors"
            >
              Check Indian Railways <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 2: By Road / Cab (Replaces flight option) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative bg-[#FFFDF9]/95 rounded-3xl p-7 border border-[#DFBF77]/70 shadow-[0_10px_30px_rgba(201,151,56,0.07)] hover:border-[#D4AF37] hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF2E1] border border-[#DFBF77] flex items-center justify-center">
                <Car className="w-6 h-6 text-[#8B6508]" />
              </div>
              <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-bold bg-[#FAF5ED] px-2.5 py-1 rounded-full border border-[#DFBF77]/40">
                Scenic Drive
              </span>
            </div>

            <h4 className="font-['Cinzel'] text-xl font-bold text-[#382E28] mb-1">
              By Road / Cab
            </h4>
            <p className="font-['Alex_Brush'] text-xl text-[#C57B85] mb-3">
              Scenic forest highways into Corbett
            </p>

            <p className="font-['Montserrat'] text-xs sm:text-sm text-[#665549] leading-relaxed">
              A serene highway drive from Prayagraj / Delhi via Moradabad and Kashipur. Cabs are readily available for a direct journey through lush Kumaon sal forest trails.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFBF77]/40">
            <a
              href={resortMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6508] group-hover:text-[#523A06] transition-colors"
            >
              Get Highway Driving Directions <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Card 3: Weather & Packing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group relative bg-[#FFFDF9]/95 rounded-3xl p-7 border border-[#DFBF77]/70 shadow-[0_10px_30px_rgba(201,151,56,0.07)] hover:border-[#D4AF37] hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF2E1] border border-[#DFBF77] flex items-center justify-center">
                <CloudSun className="w-6 h-6 text-[#8B6508]" />
              </div>
              <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#C57B85] font-bold bg-[#FCECEE] px-2.5 py-1 rounded-full border border-[#E8B4BC]">
                Weather Guide
              </span>
            </div>

            <h4 className="font-['Cinzel'] text-xl font-bold text-[#382E28] mb-1">
              March Weather
            </h4>
            <p className="font-['Alex_Brush'] text-xl text-[#C57B85] mb-3">
              Pleasant sunshine &amp; cool evenings
            </p>

            <p className="font-['Montserrat'] text-xs sm:text-sm text-[#665549] leading-relaxed">
              Jim Corbett in March features warm, sunny days and cool, breezy nights. Don't forget to pack a <strong className="text-[#C57B85] font-semibold">light shawl or stole</strong> for the evening festivities under the stars.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFBF77]/40 flex items-center justify-between text-xs text-[#8B6508] font-semibold">
            <span>Day: 24°C - 28°C</span>
            <span>Night: 12°C - 15°C</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
