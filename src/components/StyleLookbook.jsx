import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, User, Heart, Wand2 } from 'lucide-react'

// Tab definitions and wardrobe suggestions for guests attending the celebrations
const lookbookData = [
  {
    id: 'ring-ceremony',
    name: 'Ring Ceremony',
    vibe: 'Glamorous & Suave',
    tagline: 'Evening starlight, velvets, metallic sheens & structured silhouettes',
    image: '/assets/lookbook/ring_ceremony.jpg',
    colors: [
      { name: 'Deep Emerald', hex: '#0B3B2C' },
      { name: 'Midnight Navy', hex: '#162540' },
      { name: 'Metallic Gold', hex: '#D4AF37' },
    ],
    him: {
      attire: 'Emerald Green Tuxedo / Dark Suit',
      role: 'For Him',
      guestTag: 'Gentlemen & Male Guests',
      description:
        'A tailored deep emerald green or midnight navy velvet tuxedo/suit with silk-satin peak lapels, crisp white dress shirt, and black bowtie or tie.',
      fabrics: 'Italian Velvet, Superfine Wool & Silk Satin',
      accessories: 'Gold Lapel Pin, Silk Pocket Square, Cufflinks & Patent Dress Shoes',
    },
    her: {
      attire: 'Metallic Gold Saree / Evening Gown',
      role: 'For Her',
      guestTag: 'Ladies & Female Guests',
      description:
        'A shimmering metallic gold draped saree gown or embellished cocktail gown featuring fine sequin clusters, structured drape, and elegant silhouette.',
      fabrics: 'Metallic Tissue Chiffon, Sequin Mesh & Organza',
      accessories: 'Emerald Drop Earrings, Polki Choker, Sleek Evening Potli & Stilettos',
    },
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    vibe: 'Breezy & Euphoric',
    tagline: 'Vibrant florals, twirling silks & kaleidoscope celebrations',
    image: '/assets/lookbook/mehendi.jpg',
    colors: [
      { name: 'Fuchsia Pink', hex: '#D81B60' },
      { name: 'Sunset Orange', hex: '#EF6C00' },
      { name: 'Peacock Teal', hex: '#00897B' },
    ],
    him: {
      attire: 'Floral Kurta with Teal Nehru Jacket',
      role: 'For Him',
      guestTag: 'Gentlemen & Male Guests',
      description:
        'An orange floral motif kurta paired with an embroidered peacock teal or bright Nehru jacket, gold buttons, and comfortable churidar.',
      fabrics: 'Chanderi Silk, Cotton-Silk Weaves & Raw Silk',
      accessories: 'Printed Pocket Square, Tan Leather Mojaris & Classic Aviator Shades',
    },
    her: {
      attire: 'Fuchsia Mirror-Work Lehenga / Sharara',
      role: 'For Her',
      guestTag: 'Ladies & Female Guests',
      description:
        'A vibrant fuchsia pink lehenga or sharara adorned with authentic mirror-work, gota-patti borders, and an ethereal sheer dupatta perfect for celebration and dancing.',
      fabrics: 'Georgette, Bandhani, Mirror-Embroidered Organza',
      accessories: 'Floral Jewelry, Hathphool, Colorful Glass Bangles & Embellished Juttis',
    },
  },
  {
    id: 'haldi',
    name: 'Haldi',
    vibe: 'Joyful & Sun-Kissed',
    tagline: 'Marigold yellow shades, raw silks & breezy poolside comfort',
    image: '/assets/lookbook/haldi.jpg',
    colors: [
      { name: 'Lemon Yellow', hex: '#FFF176' },
      { name: 'Marigold Ochre', hex: '#F9A825' },
      { name: 'Ivory White', hex: '#FFFFF0' },
    ],
    him: {
      attire: 'Lemon Yellow Pathani / Kurta Set',
      role: 'For Him',
      guestTag: 'Gentlemen & Male Guests',
      description:
        'A comfortable lemon yellow or marigold silk/cotton pathani kurta suit tailored for outdoor poolside festivities, turmeric blessings, and effortless movement.',
      fabrics: 'Mulmul Silk, Breathable Linen-Cotton',
      accessories: 'Classic Kolhapuri Chappals, Saffron Stole & Sunglasses',
    },
    her: {
      attire: 'Ivory & Yellow Sharara / Anarkali',
      role: 'For Her',
      guestTag: 'Ladies & Female Guests',
      description:
        'An airy ivory white and sunshine yellow georgette sharara suit or lightweight anarkali highlighted with subtle floral embroidery and a featherlight dupatta.',
      fabrics: 'Pure Georgette, Kota Doria & Chanderi',
      accessories: 'Yellow Tagar Floral Jewelry, Haathphool & Delicate Jhumkis',
    },
  },
  {
    id: 'wedding',
    name: 'Wedding',
    vibe: 'Traditional Elegance',
    tagline: 'Palatial opulence, antique zari & sacred Vedic rituals',
    image: '/assets/lookbook/wedding.jpg',
    colors: [
      { name: 'Crimson Red', hex: '#880E4F' },
      { name: 'Warm Cream', hex: '#FAF0E6' },
      { name: 'Palace Gold', hex: '#D4AF37' },
    ],
    him: {
      attire: 'Cream Silk Sherwani / Royal Kurta Set',
      role: 'For Him',
      guestTag: 'Gentlemen & Male Guests',
      description:
        'An elegant cream, ivory or royal gold silk sherwani or bandhgala kurta set with tonal embroidery, churidar, and traditional wedding safa.',
      fabrics: 'Banarasi Brocade, Raw Silk Weave',
      accessories: 'Traditional Safa, Pearl Mala & Handcrafted Juttis',
    },
    her: {
      attire: 'Crimson Silk Saree / Heritage Lehenga',
      role: 'For Her',
      guestTag: 'Ladies & Female Guests',
      description:
        'A rich crimson red, rani pink or deep maroon Banarasi silk saree or heritage lehenga woven with antique gold zari motifs and traditional jewellery.',
      fabrics: 'Banarasi Katan Silk, Pure Gold Zari Weave',
      accessories: 'Heritage Polki/Kundan Jewelry, Maang Tikka & Embroidered Potli',
    },
  },
]

export default function StyleLookbook() {
  const [activeTabId, setActiveTabId] = useState('ring-ceremony')
  const activeTab = lookbookData.find((tab) => tab.id === activeTabId) || lookbookData[0]

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-2 block">
          Section 6 &bull; Guest Attire Lookbook
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#382E28] tracking-wider uppercase">
          The Lookbook
        </h2>
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mt-1">
          Suggested Attire &amp; Color Palette Guide for Our Honored Guests
        </p>
        <div className="w-28 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
      </motion.div>

      {/* 1. Pill-Shaped Navigation Menu at the Top */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 sm:p-2 rounded-full bg-[#FAF5ED] border-2 border-[#DFBF77]/80 shadow-[0_4px_25px_rgba(212,175,55,0.18)] max-w-full overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {lookbookData.map((tab) => {
              const isSelected = activeTabId === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-['Cinzel'] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none ${
                    isSelected
                      ? 'text-[#2C241E] shadow-sm'
                      : 'text-[#7D6B5D] hover:text-[#382E28] hover:bg-white/40'
                  }`}
                >
                  {/* Sliding Golden Pill Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="lookbookActivePill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#C99738] shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 2. Large Elegant Cream Card with Subtle Gold Border */}
      <div className="relative">
        {/* Soft Golden Backlight Ambient Glow */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#DFBF77]/30 via-[#E8B4BC]/25 to-[#DFBF77]/30 blur-2xl pointer-events-none" />

        <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#DFBF77] shadow-[0_20px_50px_rgba(201,151,56,0.15)] overflow-hidden">
          {/* Top Metadata Header with Vibe & Event Palette */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DFBF77]/40">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85]">
                  {activeTab.vibe}
                </span>
                <span className="text-[10px] uppercase font-['Montserrat'] tracking-widest px-2.5 py-0.5 rounded-full bg-[#FAF2E1] border border-[#DFBF77] text-[#8B6508] font-bold">
                  Guest Dress Code
                </span>
              </div>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-black text-[#382E28] tracking-wider uppercase mt-0.5">
                {activeTab.name}
              </h3>
              <p className="font-['Montserrat'] text-xs text-[#7A695C] mt-1">
                {activeTab.tagline}
              </p>
            </div>

            {/* Event Color Swatches Palette */}
            <div className="flex items-center gap-3 bg-[#FAF5ED] px-4 py-2 rounded-2xl border border-[#DFBF77]/60">
              <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest text-[#8B6508] font-bold">
                Suggested Palette:
              </span>
              <div className="flex items-center gap-2">
                {activeTab.colors.map((c, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-sm transform group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2C241E] text-white text-[9px] font-['Montserrat'] px-1.5 py-0.5 rounded whitespace-nowrap z-20 pointer-events-none">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. 2-Column Grid (50/50 Split on Desktop, Stacking Vertically on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: THE VISUALS (Fixed Aspect Ratio with Single <img /> & Cross-Fade) */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3.5 sm:p-4 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5ED] to-[#F5EBDC] border-2 border-[#DFBF77] shadow-xl">
                {/* Decorative Double Gold Inset Hairline */}
                <div className="absolute inset-2 border border-[#DFBF77]/40 rounded-2xl pointer-events-none" />

                {/* Filter Lens Badge at Top */}
                <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBF77]/70 text-[#8B6508] text-[10px] font-['Montserrat'] font-bold uppercase tracking-wider shadow-sm">
                    <Wand2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>Suggested Attire: {activeTab.name}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBF77]/70 flex items-center justify-center text-[#8B6508] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Fixed Aspect Ratio Framed Container (3:4 ratio guarantees no layout shift) */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#DFBF77]/60 shadow-inner flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab.id}
                      src={activeTab.image}
                      alt={`${activeTab.name} - Suggested Guest Attire`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                      className="w-full h-full object-cover object-top select-none"
                    />
                  </AnimatePresence>

                  {/* Bottom Vignette with Clean Guest Attire Tag (No Names) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none flex items-center justify-between text-white">
                    <span className="font-['Cinzel'] text-[11px] font-bold tracking-[0.2em] uppercase drop-shadow">
                      Suggested Guest Styling
                    </span>
                    <span className="font-['Montserrat'] text-[10px] text-[#F5E0A3] uppercase tracking-wider drop-shadow font-semibold">
                      {activeTab.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: THE DETAILS (Divided into "For Him" and "For Her") */}
            <div className="flex flex-col gap-6">
              {/* FOR HIM SECTION */}
              <motion.div
                key={`him-${activeTab.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-7 border border-[#DFBF77]/80 shadow-sm relative overflow-hidden"
              >
                {/* Subtle Corner Filigree Indicator */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#DFBF77]/30 to-transparent rounded-bl-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EEDBBD] border border-[#DFBF77] flex items-center justify-center text-[#8B6508]">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#382E28] uppercase tracking-wider">
                        {activeTab.him.role}
                      </h4>
                      <span className="text-[10px] font-['Montserrat'] text-[#8C7A6B]">
                        {activeTab.him.guestTag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFFDF9] border border-[#DFBF77]/60 text-[#8B6508] font-bold">
                    Gentlemen
                  </span>
                </div>

                <div className="space-y-3 font-['Montserrat'] text-xs text-[#524136]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8B6508] font-bold block">
                      Recommended Ensemble
                    </span>
                    <p className="font-['Cinzel'] font-bold text-[#382E28] text-sm sm:text-base mt-0.5">
                      {activeTab.him.attire}
                    </p>
                  </div>

                  <p className="text-[#635347] leading-relaxed">
                    {activeTab.him.description}
                  </p>

                  <div className="pt-2 border-t border-[#DFBF77]/40 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="font-bold text-[#8B6508] block text-[10px] uppercase tracking-wider">
                        Fabrics:
                      </span>
                      <span className="text-[#4A3D34]">{activeTab.him.fabrics}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#8B6508] block text-[10px] uppercase tracking-wider">
                        Key Accessories:
                      </span>
                      <span className="text-[#4A3D34]">{activeTab.him.accessories}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FOR HER SECTION */}
              <motion.div
                key={`her-${activeTab.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="bg-[#FFF9FA] rounded-2xl p-6 sm:p-7 border border-[#E8B4BC] shadow-sm relative overflow-hidden"
              >
                {/* Subtle Corner Filigree Indicator */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#E8B4BC]/40 to-transparent rounded-bl-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FCECEE] border border-[#E8B4BC] flex items-center justify-center text-[#C57B85]">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#382E28] uppercase tracking-wider">
                        {activeTab.her.role}
                      </h4>
                      <span className="text-[10px] font-['Montserrat'] text-[#8C7A6B]">
                        {activeTab.her.guestTag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-['Montserrat'] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFFDF9] border border-[#E8B4BC] text-[#C57B85] font-bold">
                    Ladies
                  </span>
                </div>

                <div className="space-y-3 font-['Montserrat'] text-xs text-[#524136]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C57B85] font-bold block">
                      Recommended Ensemble
                    </span>
                    <p className="font-['Cinzel'] font-bold text-[#382E28] text-sm sm:text-base mt-0.5">
                      {activeTab.her.attire}
                    </p>
                  </div>

                  <p className="text-[#635347] leading-relaxed">
                    {activeTab.her.description}
                  </p>

                  <div className="pt-2 border-t border-[#E8B4BC]/40 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="font-bold text-[#C57B85] block text-[10px] uppercase tracking-wider">
                        Fabrics:
                      </span>
                      <span className="text-[#4A3D34]">{activeTab.her.fabrics}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#C57B85] block text-[10px] uppercase tracking-wider">
                        Key Accessories:
                      </span>
                      <span className="text-[#4A3D34]">{activeTab.her.accessories}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
