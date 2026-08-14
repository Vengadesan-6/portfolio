/* ==========================================================================
   WEB AUDIO API RETRO SYNTHESIZER & SOUND FX
   Warm 90s tape click sounds & generative ambient lo-fi synth chords
   ========================================================================== */

class AudioFxEngine {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = false;
    this.ambientPlaying = false;
    this.ambientTimer = null;
    this.currentChordIndex = 0;

    // Vintage Lo-fi Chord Progression (Frequencies in Hz)
    // Cmaj7 -> Am9 -> Dm7 -> G7sus4
    this.chords = [
      [261.63, 329.63, 392.00, 493.88], // C, E, G, B (Cmaj7)
      [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B (Am9)
      [293.66, 349.23, 440.00, 523.25], // D, F, A, C (Dm7)
      [196.00, 261.63, 293.66, 392.00, 440.00]  // G, C, D, G, A (G9sus)
    ];

    this.initSoundToggle();
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initSoundToggle() {
    const toggleBtn = document.getElementById('sound-toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      this.ensureAudioContext();
      this.soundEnabled = !this.soundEnabled;

      if (this.soundEnabled) {
        toggleBtn.classList.add('sound-on');
        toggleBtn.setAttribute('title', 'Sound Effects: ON');
        this.playClick();
        if (window.showToast) window.showToast('Audio FX: Enabled (90s Analog Mode)');
      } else {
        toggleBtn.classList.remove('sound-on');
        toggleBtn.setAttribute('title', 'Sound Effects: OFF');
        this.stopAmbientTape();
        if (window.showToast) window.showToast('Audio FX: Muted');
      }
    });
  }

  // Play a warm, subtle 90s tape click sound
  playClick() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;

    // Create oscillator for warm thump
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.04);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    gainNode.gain.setValueAtTime(0.12, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Toggle ambient Lo-fi synth chords for the Cassette Deck
  toggleAmbientTape() {
    this.ensureAudioContext();
    if (this.ambientPlaying) {
      this.stopAmbientTape();
      return false;
    } else {
      this.startAmbientTape();
      return true;
    }
  }

  startAmbientTape() {
    this.ambientPlaying = true;
    this.soundEnabled = true;

    const toggleBtn = document.getElementById('sound-toggle-btn');
    if (toggleBtn) toggleBtn.classList.add('sound-on');

    const reels = document.querySelectorAll('.reel');
    reels.forEach(r => r.classList.add('spinning'));

    this.playNextChord();
  }

  stopAmbientTape() {
    this.ambientPlaying = false;
    if (this.ambientTimer) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }

    const reels = document.querySelectorAll('.reel');
    reels.forEach(r => r.classList.remove('spinning'));
  }

  playNextChord() {
    if (!this.ambientPlaying) return;

    const now = this.audioCtx.currentTime;
    const chordNotes = this.chords[this.currentChordIndex];
    const duration = 4.2; // seconds per chord

    chordNotes.forEach(freq => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      // Soft warm tape tone
      osc.type = 'sine';
      // Subtle pitch drift (tape wow & flutter)
      const drift = (Math.random() - 0.5) * 1.5;
      osc.frequency.setValueAtTime(freq + drift, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.Q.setValueAtTime(1.2, now);

      // Smooth envelope attack and release
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 1.2);
      gain.gain.linearRampToValueAtTime(0.025, now + duration - 1.0);
      gain.gain.linearRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });

    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    // Schedule next chord with smooth overlap
    this.ambientTimer = setTimeout(() => {
      if (this.ambientPlaying) {
        this.playNextChord();
      }
    }, (duration - 0.6) * 1000);
  }
}

// Instantiate global audio engine
window.addEventListener('DOMContentLoaded', () => {
  window.audioFx = new AudioFxEngine();
});
