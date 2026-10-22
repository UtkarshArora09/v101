import React, { useState } from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

export default function AudioPlayer({ isPlaying, onToggle }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div 
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Delicate floating tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-full bg-[#FAF5ED]/95 backdrop-blur-md border border-[#DFBF77]/60 text-[#8B6508] text-xs font-medium shadow-md transition-all animate-fade-in">
          {isPlaying ? 'Pause Ambient Flute' : 'Play Ambient Flute'}
        </div>
      )}

      {/* Floating Gold Audio Button */}
      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
        className={`relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg ${
          isPlaying 
            ? 'bg-gradient-to-br from-[#F5E0A3] via-[#D4AF37] to-[#996515] text-[#2C241E] ring-2 ring-[#DFBF77]/80 shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
            : 'bg-[#FAF5ED]/90 backdrop-blur-md text-[#8B6508] border border-[#DFBF77]/70 hover:border-[#D4AF37]'
        }`}
      >
        {/* Animated aura ring when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/50 animate-ping opacity-60 pointer-events-none" />
        )}

        {/* Dynamic sound wave bars or volume icon */}
        <div className="flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end justify-center gap-0.5 h-4 w-4">
              <span className="w-0.5 bg-[#2C241E] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-0.5 bg-[#2C241E] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s] h-4" />
              <span className="w-0.5 bg-[#2C241E] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.4s] h-2.5" />
              <span className="w-0.5 bg-[#2C241E] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.1s] h-3.5" />
            </div>
          ) : (
            <VolumeX className="w-5 h-5 text-[#8B6508]" />
          )}
        </div>
      </button>
    </div>
  )
}
