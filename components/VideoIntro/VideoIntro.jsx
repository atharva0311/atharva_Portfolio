'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './VideoIntro.module.css';

const CinematicLayer = dynamic(() => import('../CinematicLayer/CinematicLayer'), { ssr: false });

export default function VideoIntro() {
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const subtitleRef = useRef(null);
  const controlsRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // GSAP entrance animations
  useEffect(() => {
    let gsap, ctx;
    const initGsap = async () => {
      const mod = await import('gsap');
      gsap = mod.gsap || mod.default;

      // Fade in hero
      gsap.set(heroRef.current, { opacity: 0 });
      gsap.to(heroRef.current, { opacity: 1, duration: 1.8, ease: 'power2.inOut', delay: 0.2 });

      // Stagger text entrance
      gsap.set([taglineRef.current, titleRef.current, subtitleRef.current, controlsRef.current], {
        opacity: 0, y: 40,
      });
      gsap.to(taglineRef.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.9 });
      gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out', delay: 1.15 });
      gsap.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 1.4 });
      gsap.to(controlsRef.current, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 1.65 });
    };
    initGsap();
  }, [loaded]);

  // Auto-hide sound hint
  useEffect(() => {
    const t = setTimeout(() => setShowSoundHint(false), 4500);
    return () => clearTimeout(t);
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    const bg = bgVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (bg) bg.muted = true; // bg always muted
    setMuted(v.muted);
    setShowSoundHint(false);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const scrollToNext = () => {
    const next = document.getElementById('next-section');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className={styles.hero}>

      {/* Ambient blurred background video */}
      <video
        ref={bgVideoRef}
        className={styles.bgVideo}
        src="/vid.mp4"
        autoPlay loop muted playsInline
        aria-hidden="true"
      />

      {/* Cinematic gradient overlays */}
      <div className={styles.gradientBottom} />
      <div className={styles.gradientTop} />
      <div className={styles.gradientLeft} />
      <div className={styles.vignette} />

      {/* Foreground video */}
      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.fgVideo}
          src="/vid.mp4"
          autoPlay loop muted playsInline
          onCanPlay={() => setLoaded(true)}
        />
        {/* Subtle bottom fade on fg video */}
        <div className={styles.videoFade} />
      </div>

      {/* Three.js cinematic particle layer */}
      <CinematicLayer />

      {/* Content overlay */}
      <div className={styles.content}>
        <p ref={taglineRef} className={styles.tagline}>
          <span className={styles.taglineDot} />
          Computer Engineer · AI/ML · Full Stack
        </p>

        <h1 ref={titleRef} className={styles.title}>
          <span className={styles.firstName}>Atharva</span>
          <span className={styles.lastName}>.</span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Building advanced AI &amp; ML systems,<br />
          scalable applications &amp; impactful products.
        </p>
      </div>

      {/* Controls */}
      <div ref={controlsRef} className={styles.controls}>
        <button className={styles.glassBtn} onClick={togglePlay} aria-label="Play/Pause">
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <button className={styles.glassBtn} onClick={toggleMute} aria-label="Mute/Unmute">
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Sound hint badge */}
      {showSoundHint && (
        <div className={styles.soundBadge}>
          <span className={styles.soundPulse} />
          Tap for sound
        </div>
      )}

      {/* Scroll indicator */}
      <button className={styles.scrollIndicator} onClick={scrollToNext} aria-label="Scroll down">
        <span className={styles.scrollLine} />
      </button>

    </section>
  );
}
