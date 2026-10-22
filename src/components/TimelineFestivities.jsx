import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Sparkles, ChevronRight, ChevronLeft, Calendar, Heart, Music, Sun, Flame, Wine, Gem } from 'lucide-react'

const events = [
  {
    id: 0,
    title: 'The Welcome Lunch',
    subtitle: 'A Warm Welcome to Corbett',
    day: 'Day 01',
    date: 'Saturday, 13th March 2027',
    time: '1:00 PM Onwards',
    venue: 'The Palm Courtyard',
    shloka: 'अतिथि देवो भव • Welcome with Folded Hands & Pure Hearts',
    theme: 'Warm Hospitality & Forest Breeze',
    attire: 'Smart Casuals & Soft Pastel Hues',
    palette: ['#F5D0D6', '#E8C593', '#FAF5ED'],
    icon: Wine,
    description:
      'Arrive, unwind, and kick off the festivities amidst the serene Corbett wilderness. Guests are welcomed with fragrant rose garlands, chilled botanical coolers, and an indulgent afternoon feast celebrating royal Awadhi and authentic Kumaoni flavors.',
    highlights: ['Garland Welcome & Tilak', 'Kumaoni & Awadhi Feasting', 'Acoustic Flute Welcome'],
  },
  {
    id: 1,
    title: 'The Ring Ceremony',
    subtitle: 'When Two Souls Promise Forever',
    day: 'Day 01',
    date: 'Saturday, 13th March 2027',
    time: '5:00 PM Onwards',
    venue: 'The Royal Verandah',
    shloka: 'यदेतद्धृदयं तव तदस्तु हृदयं मम • May your heart be mine forever',
    theme: 'Sunset Romance & Glamour',
    attire: 'Cocktail Couture, Evening Gowns & Velvet Tuxedos',
    palette: ['#0B3B2C', '#162540', '#D4AF37'],
    icon: Gem,
    description:
      'An intimate golden-hour gathering overlooking the forest valley where Ayushi and Sajal exchange rings, raise celebratory toasts with family and friends, and mark the auspicious beginning of their lifelong journey.',
    highlights: ['Golden Hour Ring Exchange', 'Champagne & Mocktail Toasts', 'Sunset String Quartet'],
  },
  {
    id: 2,
    title: 'Mehendi & Sangeet Euphoria',
    subtitle: 'Henna, High Spirits & Endless Dancing',
    day: 'Day 01',
    date: 'Saturday, 13th March 2027',
    time: '8:30 PM Onwards',
    venue: 'Amphitheatre Under The Stars',
    shloka: 'मेहंदी राचेगी सजेगी रात • Music Under The Himalayan Constellations',
    theme: 'Bohemian Glamour & High Energy',
    attire: 'Vibrant Lehengas, Mirror-work Kurtas & Twirling Silks',
    palette: ['#D81B60', '#EF6C00', '#00897B'],
    icon: Music,
    description:
      'An electric night of intricate bridal henna artistry, artisanal cocktails, spirited family dance face-offs, and live dhol beats echoing under the starry Himalayan night sky as we dance till late.',
    highlights: ['Master Henna Artists', 'Family Choreography Face-offs', 'Live Punjabi Dhol & DJ'],
  },
  {
    id: 3,
    title: 'Haldi & Chooda Rasam',
    subtitle: 'Sunlit Laughter & Turmeric Blessings',
    day: 'Day 02',
    date: 'Sunday, 14th March 2027',
    time: '10:00 AM Onwards',
    venue: 'Poolside Marigold Lawns',
    shloka: 'हल्दी का रंग खुशियों का संग • Auspicious Turmeric & Maternal Love',
    theme: 'Sun-drenched Playfulness & Marigolds',
    attire: 'Sunshine Yellows, White Linens & Organza Drapes',
    palette: ['#FFF176', '#F9A825', '#FFFFF0'],
    icon: Sun,
    description:
      'A joyful, playful morning drenched in golden turmeric paste, fragrant marigold petal showers, playful splashes of water, traditional wedding folk geet, and the heartfelt maternal chooda & kaleere blessing ceremony.',
    highlights: ['Marigold Petal Showers', 'Traditional Folk Geet', 'Chooda & Kaleere Blessings'],
  },
  {
    id: 4,
    title: 'The Royal Baraat & Vedic Phere',
    subtitle: 'The Seven Sacred Vows Around The Holy Agni',
    day: 'Day 02',
    date: 'Sunday, 14th March 2027',
    time: '5:30 PM Onwards',
    venue: 'The Forest Mandap',
    shloka: 'ॐ सप्ताभ्याम् पदभ्याम् सखा भव • Together taking seven steps into eternity',
    theme: 'Timeless Royal Indian Heritage',
    attire: 'Royal Traditional Finery, Heritage Silks & Turbans',
    palette: ['#C57B85', '#880E4F', '#FAF0E6'],
    icon: Flame,
    description:
      "Join Sajal's grand groom procession at twilight, followed by the enchanting varmala exchange, holy Vedic chants by the pandits, and the seven sacred vows around the holy agni amidst the tranquil Corbett forest canopy.",
    highlights: ['Grand Baraat Procession', 'Twilight Varmala', 'Vedic Phere & Dinner Feast'],
  },
]

export default function TimelineFestivities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = events[activeIndex]
  const Icon = current.icon

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-2 block">
          Order of Celebrations
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#382E28] tracking-wider uppercase">
          The Festivities
        </h2>
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mt-1">
          Select a ceremony to explore the celebrations
        </p>
        <div className="w-28 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
      </motion.div>

      {/* Horizontal Interactive Ceremony Stepper / Navigation */}
      <div className="relative mb-10 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex items-center justify-between min-w-[620px] px-4 sm:px-8 relative">
          {/* Background Connecting Gold Track Line */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#DFBF77]/40 via-[#D4AF37] to-[#DFBF77]/40 z-0" />

          {events.map((evt, idx) => {
            const isSelected = activeIndex === idx
            const EvtIcon = evt.icon

            return (
              <button
                key={evt.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Node Disc */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#F5E0A3] via-[#D4AF37] to-[#996515] text-[#2C241E] ring-4 ring-[#D4AF37]/40 scale-110'
                      : 'bg-[#FFFDF9] text-[#8B6508] border-2 border-[#DFBF77] group-hover:border-[#D4AF37] group-hover:scale-105'
                  }`}
                >
                  <EvtIcon className="w-5 h-5" />
                </div>

                {/* Event Name & Day Label */}
                <span
                  className={`mt-2.5 text-xs font-['Cinzel'] font-bold tracking-wider uppercase transition-colors text-center ${
                    isSelected ? 'text-[#8B6508]' : 'text-[#7D6B5D] group-hover:text-[#382E28]'
                  }`}
                >
                  {evt.title.replace('The ', '')}
                </span>

                <span className="text-[10px] font-['Montserrat'] text-[#9E8E80] font-medium">
                  {evt.day}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Opulent Ceremonial Feature Spotlight Card */}
      <div className="relative">
        {/* Soft Golden Backing Aura */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#DFBF77]/30 via-[#E8B4BC]/25 to-[#DFBF77]/30 blur-xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative bg-[#FFFDF9] rounded-3xl p-7 sm:p-12 border-2 border-[#DFBF77] shadow-[0_15px_45px_rgba(201,151,56,0.12)] overflow-hidden"
          >
            {/* Top Bar: Day Badge, Time, and Venue */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DFBF77]/40">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#FAF2E1] border border-[#DFBF77] text-xs font-['Montserrat'] font-bold text-[#8B6508] uppercase tracking-widest">
                  {current.day} &bull; {current.date.split(',')[1]}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A4B40] font-['Montserrat']">
                  <Clock className="w-4 h-4 text-[#C99738]" />
                  {current.time}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF5ED] border border-[#DFBF77]/60 text-xs font-medium text-[#8B6508]">
                <MapPin className="w-3.5 h-3.5 text-[#C57B85]" />
                {current.venue}
              </div>
            </div>

            {/* Central Ceremony Details */}
            <div className="my-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF2E1] border border-[#D4AF37] flex items-center justify-center text-[#8B6508]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-2xl sm:text-4xl font-black text-[#382E28] tracking-wide">
                    {current.title}
                  </h3>
                  <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85]">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Auspicious Shloka / Blessing Banner */}
              <div className="my-5 px-5 py-3 rounded-2xl bg-[#FAF5ED] border border-[#DFBF77]/50 text-center">
                <p className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#8B6508] font-semibold">
                  "{current.shloka}"
                </p>
              </div>

              {/* Ceremony Narrative */}
              <p className="font-['Montserrat'] text-sm sm:text-base text-[#524136] leading-relaxed mt-4">
                {current.description}
              </p>

              {/* Highlights & Attire Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-[#DFBF77]/40">
                {/* Ritual Highlights */}
                <div>
                  <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-bold block mb-3">
                    Ceremony Highlights
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A3D34] font-medium font-['Montserrat']">
                    {current.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggested Attire & Palette */}
                <div>
                  <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-bold block mb-2">
                    Suggested Attire &amp; Mood
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#382E28] mb-3">
                    {current.attire}
                  </p>
                  <div className="flex items-center gap-2.5">
                    {current.palette.map((hex, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border border-white shadow-md"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stepper Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#DFBF77]/40 text-xs">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : events.length - 1))}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF5ED] border border-[#DFBF77] text-[#8B6508] font-bold uppercase tracking-wider hover:bg-[#F2E5D0] active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Ritual</span>
              </button>

              <span className="font-['Montserrat'] text-xs font-semibold text-[#8C7A6B]">
                {activeIndex + 1} of {events.length}
              </span>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>Next Ritual</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
