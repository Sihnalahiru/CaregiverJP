// Zero-dependency Web Audio API synthesizer for crisp mobile study sound effects

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled = true;

  setEnabled(value: boolean) {
    this.enabled = value;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  private getContext(): AudioContext | null {
    if (!this.enabled || typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private playTone(
    freq: number,
    duration: number,
    options: {
      type?: OscillatorType;
      gain?: number;
      delay?: number;
      endFreq?: number;
    } = {}
  ) {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + (options.delay ?? 0);
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();

    osc.type = options.type ?? 'sine';
    osc.frequency.setValueAtTime(freq, now);
    if (options.endFreq) {
      osc.frequency.exponentialRampToValueAtTime(options.endFreq, now + duration);
    }

    const peak = options.gain ?? 0.08;
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(peak, now + 0.012);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(amp);
    amp.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  /** Subtle tactile tap/select tick */
  playTap() {
    this.playTone(620, 0.045, { type: 'triangle', gain: 0.045, endFreq: 420 });
  }

  /** Crisp uplifting chime for a correct answer */
  playCorrect() {
    this.playTone(587.33, 0.14, { type: 'sine', gain: 0.075, delay: 0 }); // D5
    this.playTone(880.0, 0.22, { type: 'sine', gain: 0.085, delay: 0.075 }); // A5
  }

  /** Gentle low double-thud for an incorrect answer */
  playWrong() {
    this.playTone(230, 0.13, { type: 'triangle', gain: 0.075, delay: 0, endFreq: 185 });
    this.playTone(175, 0.18, { type: 'triangle', gain: 0.07, delay: 0.1, endFreq: 140 });
  }

  /** Sparkling ascending fanfare for achievement unlock */
  playAchievement() {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, idx) => {
      this.playTone(freq, idx === 3 ? 0.36 : 0.14, {
        type: 'triangle',
        gain: idx === 3 ? 0.095 : 0.07,
        delay: idx * 0.075,
      });
    });
  }

  /** Warm resolved major-9th chord on paper completion */
  playPaperComplete() {
    const chord = [523.25, 659.25, 783.99, 987.77, 1174.66]; // C5 E5 G5 B5 D6
    chord.forEach((freq, idx) => {
      this.playTone(freq, 0.48, {
        type: 'sine',
        gain: 0.055,
        delay: idx * 0.055,
      });
    });
  }
}

export const soundEngine = new SoundEngine();
