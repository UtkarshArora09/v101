import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react'

export default function CinematicVideoSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleFullscreen = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <span className="text-[11px] font-['Montserrat'] uppercase tracking-[0.35em] text-[#A67C24] font-semibold mb-2 block">
          Our Journey In Motion
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-black text-[#382E28] tracking-wider uppercase">
          The Cinematic Invitation
        </h2>
        <p className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#C57B85] mt-1">
          A glimpse into the love story of Ayushi &amp; Sajal
        </p>
        <div className="w-28 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
      </motion.div>

      {/* Royal Gold Framed Video Player */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-md sm:max-w-lg w-full"
      >
        {/* Ambient Backlight Aura */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#D4AF37]/35 via-[#E8B4BC]/30 to-[#D4AF37]/35 blur-xl pointer-events-none" />

        {/* Video Wrapper */}
        <div
          onClick={togglePlay}
          className="relative rounded-3xl overflow-hidden border-2 border-[#DFBF77] shadow-2xl bg-black group cursor-pointer aspect-[9/16] max-h-[640px] mx-auto"
        >
          <video
            ref={videoRef}
            src="/wedding_video.mp4"
            loop
            playsInline
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Central Play/Pause Big Overlay Indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F5E0A3] via-[#D4AF37] to-[#B8860B] text-[#2C241E] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1 text-[#2C241E]" />
              </div>
              <span className="mt-4 font-['Cinzel'] text-xs font-bold tracking-[0.25em] text-white uppercase drop-shadow-md">
                Click To Watch Invitation
              </span>
            </div>
          )}

          {/* Floating Controls Bar at Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <span className="font-['Cinzel'] text-[10px] tracking-widest uppercase text-white/90">
              Ayushi &bull; Sajal
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={handleFullscreen}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
