import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import AudioPlayer from './components/AudioPlayer'
import HeroEnvelope from './components/HeroEnvelope'
import MainHero from './components/MainHero'
import FamilyDetails from './components/FamilyDetails'
import ScratchCardDate from './components/ScratchCardDate'
import TimelineFestivities from './components/TimelineFestivities'
import StyleLookbook from './components/StyleLookbook'
import TravelAccommodation from './components/TravelAccommodation'
import CinematicVideoSection from './components/CinematicVideoSection'
import FooterSignOff from './components/FooterSignOff'
import { ambientAudio } from './utils/audioSynthesizer'

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  // Start procedural Indian classical flute ambient synthesizer on first envelope tap
  const handleStartAudio = () => {
    ambientAudio.play()
    setIsAudioPlaying(true)
  }

  // Smooth unmounting after card reveals and fades into main page
  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpened(true)
  }

  // Floating button audio toggle
  const handleToggleAudio = () => {
    const playing = ambientAudio.toggle()
    setIsAudioPlaying(playing)
  }

  useEffect(() => {
    return () => {
      ambientAudio.pause()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#2C241E] selection:bg-[#E8C593] selection:text-[#3A2A1A] overflow-x-hidden font-['Montserrat']">
      {/* 1. Rich Layered Background: Mandalas, Floating Sparkles, Lanterns, Petals */}
      <BackgroundEffects />

      {/* 2. Floating Gold Audio Button (Top Right) */}
      <AudioPlayer
        isPlaying={isAudioPlaying}
        onToggle={handleToggleAudio}
      />

      {/* 3. The 3D Digital Envelope Interaction (Silky-Smooth Card Sliding & Unsealing) */}
      <AnimatePresence mode="wait">
        {!isEnvelopeOpened && (
          <HeroEnvelope
            onStartAudio={handleStartAudio}
            onComplete={handleEnvelopeComplete}
          />
        )}
      </AnimatePresence>

      {/* 4. Main Royal Wedding Invitation Website with Gentle Fade-In */}
      <motion.main
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* Grand Hero Section with Monogram & Typography */}
        <MainHero />

        {/* The Bride & Groom Family Scroll Reveals */}
        <FamilyDetails />

        {/* Interactive Scratch Card Date Reveal (HTML5 Canvas + Bulletproof Instant Reveal) */}
        <ScratchCardDate />

        {/* The Festivities (Interactive Ceremonial Spotlight Showcase) */}
        <TimelineFestivities />

        {/* Curated Wardrobe (Couple Attire Model & Styling Guide) */}
        <StyleLookbook />

        {/* Travel & Accommodation (Train & Road Route to The Jungle Trail) */}
        <TravelAccommodation />

        {/* The Full Video Section (Embedded as Last Main Feature) */}
        <CinematicVideoSection />

        {/* Venue Details, Google Maps Link, Blessings Form & Cinematic Sign-Off */}
        <FooterSignOff />
      </motion.main>
    </div>
  )
}
