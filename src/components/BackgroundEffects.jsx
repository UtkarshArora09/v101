import React, { useMemo } from 'react'

export default function BackgroundEffects() {
  // 1. Continuous falling rose petals
  const petals = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: `petal-${i}`,
      left: `${(i * 4.2 + (i % 3) * 5) % 96}%`,
      animationDuration: `${7.5 + (i % 6) * 1.5}s`,
      animationDelay: `${(i * 0.45) % 8}s`,
      size: 15 + (i % 4) * 5,
      rotateStart: `${(i * 45) % 360}deg`,
      opacity: 0.65 + (i % 3) * 0.15,
    }))
  }, [])

  // 2. Shimmering Golden Sparkles / Fireflies
  const sparkles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: `sparkle-${i}`,
      left: `${(i * 5.7 + 3) % 94}%`,
      top: `${(i * 7.2 + 8) % 90}%`,
      size: 3 + (i % 3) * 2,
      duration: `${4 + (i % 4) * 1.5}s`,
      delay: `${(i * 0.6) % 5}s`,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Background Radial Light Pools */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#FAF0E1]/80 to-transparent rounded-full blur-3xl opacity-70" />
      <div className="absolute top-[40%] right-[-150px] w-[700px] h-[700px] bg-gradient-to-br from-[#FCECEE]/70 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[10%] left-[-150px] w-[700px] h-[700px] bg-gradient-to-tr from-[#FAF2E4]/80 to-transparent rounded-full blur-3xl opacity-70" />

      {/* Slowly Rotating Sacred Mandalas in Background */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] opacity-[0.06] animate-[spin_160s_linear_infinite] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full stroke-[#B8860B]">
          <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="160" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="200" cy="200" r="90" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="50" strokeWidth="1" />
          {Array.from({ length: 16 }).map((_, idx) => (
            <path
              key={idx}
              d="M200 10 C215 90 230 110 200 130 C170 110 185 90 200 10 Z"
              strokeWidth="1"
              transform={`rotate(${idx * 22.5} 200 200)`}
            />
          ))}
        </svg>
      </div>

      {/* Floating Shimmering Golden Sparkles / Fireflies */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="absolute rounded-full bg-[#FFE28A] animate-pulse"
          style={{
            left: sp.left,
            top: sp.top,
            width: sp.size,
            height: sp.size,
            boxShadow: '0 0 10px 3px rgba(230,175,60,0.65)',
            animationDuration: sp.duration,
            animationDelay: sp.delay,
          }}
        />
      ))}

      {/* Falling Rose Petals with Organic Sway */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-12"
          style={{
            left: petal.left,
            animation: `petalFall ${petal.animationDuration} cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            className="transform transition-transform drop-shadow-[0_2px_5px_rgba(197,123,133,0.3)]"
            style={{ transform: `rotate(${petal.rotateStart})` }}
          >
            <path
              d="M12 2C16 8 22 14 22 22C22 27.5 17.5 30 12 30C6.5 30 2 27.5 2 22C2 14 8 8 12 2Z"
              fill="url(#petalGradientRich)"
            />
            <defs>
              <linearGradient id="petalGradientRich" x1="2" y1="2" x2="22" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBD6DB" />
                <stop offset="0.45" stopColor="#E08F9B" />
                <stop offset="1" stopColor="#B35F6B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Hanging Moroccan Brass Lanterns */}
      <div className="hidden lg:block absolute top-12 left-6 animate-lantern pointer-events-none z-10">
        <HangingLantern />
      </div>

      <div className="hidden lg:block absolute top-20 right-8 animate-lantern pointer-events-none z-10" style={{ animationDelay: '2.5s' }}>
        <HangingLantern />
      </div>

      {/* Lateral Gold Framing Lines on Desktop */}
      <div className="hidden xl:block absolute left-8 top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#DFBF77]/40 to-transparent" />
      <div className="hidden xl:block absolute right-8 top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#DFBF77]/40 to-transparent" />
    </div>
  )
}

function HangingLantern() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-[1px] h-32 bg-gradient-to-b from-[#C99738]/30 via-[#E8C779]/80 to-[#C99738]" />
      <div className="w-5 h-2.5 bg-[#8C5E14] rounded-t-sm" />
      <div
        className="relative w-8 h-15 rounded-md flex items-center justify-center border border-[#FFE494]/70"
        style={{
          background: 'linear-gradient(180deg, #FDECB3 0%, #F5C768 40%, #B8791A 90%)',
          boxShadow: '0 0 35px 12px rgba(245, 199, 104, 0.5), 0 0 70px 25px rgba(212, 175, 55, 0.3)',
        }}
      >
        <div className="w-3.5 h-6 bg-white/95 rounded-full blur-[1.5px] animate-pulse" />
      </div>
      <div className="w-2 h-3.5 bg-[#8C5E14] rounded-b-full mt-0.5" />
    </div>
  )
}
