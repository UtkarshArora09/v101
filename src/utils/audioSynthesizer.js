// Pure Web Audio Indian Classical Ambient Synthesizer (Raag Yaman / Bhupali Flute + Tanpura Drone)
// 100% procedural Web Audio API — reliable, soothing, and completely offline.

class AmbientAudioEngine {
  constructor() {
    this.ctx = null
    this.isPlaying = false
    this.masterGain = null
    this.timerId = null
    this.droneGain = null
    this.droneOscs = []
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      this.ctx = new AudioContext()

      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.setValueAtTime(0.32, this.ctx.currentTime)
      this.masterGain.connect(this.ctx.destination)

      // Hall reverb / delay effect
      this.delay = this.ctx.createDelay()
      this.delay.delayTime.setValueAtTime(0.36, this.ctx.currentTime)
      this.feedback = this.ctx.createGain()
      this.feedback.gain.setValueAtTime(0.3, this.ctx.currentTime)
      this.filter = this.ctx.createBiquadFilter()
      this.filter.type = 'lowpass'
      this.filter.frequency.setValueAtTime(1300, this.ctx.currentTime)

      this.delay.connect(this.feedback)
      this.feedback.connect(this.filter)
      this.filter.connect(this.delay)
      this.filter.connect(this.masterGain)
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  // Tanpura drone in Sa-Pa (C#3, G#3, C#4)
  startDrone() {
    if (!this.ctx) return
    const droneFreqs = [138.59, 207.65, 277.18]
    this.droneOscs = []

    this.droneGain = this.ctx.createGain()
    this.droneGain.gain.setValueAtTime(0.01, this.ctx.currentTime)
    this.droneGain.gain.exponentialRampToValueAtTime(0.14, this.ctx.currentTime + 2.5)
    this.droneGain.connect(this.masterGain)

    droneFreqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator()
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null
      if (panner) panner.pan.setValueAtTime(i % 2 === 0 ? -0.25 : 0.25, this.ctx.currentTime)

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
      osc.detune.setValueAtTime((i - 1) * 2.5, this.ctx.currentTime)

      if (panner) {
        osc.connect(panner)
        panner.connect(this.droneGain)
      } else {
        osc.connect(this.droneGain)
      }
      osc.start()
      this.droneOscs.push(osc)
    })
  }

  stopDrone() {
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8)
        setTimeout(() => {
          if (this.droneOscs) {
            this.droneOscs.forEach((osc) => {
              try {
                osc.stop()
              } catch (_) {}
            })
            this.droneOscs = []
          }
        }, 900)
      } catch (_) {}
    }
  }

  // Soft Indian bamboo flute note with vibrato and air envelope
  playFluteNote(freq, duration = 3.2, startTime = 0) {
    if (!this.ctx || !this.isPlaying) return

    const now = this.ctx.currentTime + startTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    // Gentle vibrato (breath LFO)
    const vibrato = this.ctx.createOscillator()
    const vibratoGain = this.ctx.createGain()
    vibrato.frequency.setValueAtTime(5.0, now)
    vibratoGain.gain.setValueAtTime(1.6, now)
    vibrato.connect(osc.frequency)
    vibrato.start(now + 0.3)

    // Flute envelope
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.35)
    gain.gain.setValueAtTime(0.18, now + duration - 0.8)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

    osc.connect(gain)
    gain.connect(this.masterGain)
    gain.connect(this.delay)

    osc.start(now)
    osc.stop(now + duration)
    vibrato.stop(now + duration)
  }

  // Raag Yaman / Bhupali melodic phrase sequence
  startMelodyLoop() {
    const notes = [
      { f: 277.18, d: 2.2 }, // Sa
      { f: 349.23, d: 2.4 }, // Ga
      { f: 415.30, d: 2.8 }, // Pa
      { f: 466.16, d: 2.0 }, // Dha
      { f: 554.37, d: 3.2 }, // Sa'
      { f: 466.16, d: 1.8 }, // Dha
      { f: 415.30, d: 2.5 }, // Pa
      { f: 349.23, d: 2.0 }, // Ga
      { f: 311.13, d: 2.2 }, // Re
      { f: 277.18, d: 3.4 }, // Sa
    ]

    let step = 0
    const playNext = () => {
      if (!this.isPlaying) return
      const current = notes[step % notes.length]
      this.playFluteNote(current.f, current.d)
      step++
      this.timerId = setTimeout(playNext, current.d * 1000 - 200)
    }

    playNext()
  }

  play() {
    this.init()
    if (this.isPlaying) return
    this.isPlaying = true
    this.startDrone()
    setTimeout(() => {
      if (this.isPlaying) {
        this.startMelodyLoop()
      }
    }, 500)
  }

  pause() {
    this.isPlaying = false
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
    this.stopDrone()
  }

  toggle() {
    if (this.isPlaying) {
      this.pause()
      return false
    } else {
      this.play()
      return true
    }
  }
}

export const ambientAudio = new AmbientAudioEngine()
