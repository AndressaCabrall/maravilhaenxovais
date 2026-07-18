// src/components/sections/HeroSlider/HeroSlider.jsx — Maravilha Cortinas
'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './HeroSlider.module.css'
import { SLIDES } from '@/data/hero'

export default function HeroSlider() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [entrando, setEntrando] = useState(false)

  const irPara = useCallback((i) => {
    setEntrando(true)
    setAtual(i)
    setTimeout(() => setEntrando(false), 50)
  }, [])

  const proximo = useCallback(() => irPara((atual + 1) % SLIDES.length), [atual, irPara])
  const anterior = useCallback(() => irPara((atual - 1 + SLIDES.length) % SLIDES.length), [atual, irPara])

  // Autoplay
  useEffect(() => {
    if (pausado) return
    const t = setInterval(proximo, 5500)
    return () => clearInterval(t)
  }, [pausado, proximo])

  // Teclado
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'ArrowRight') proximo()
      if (e.key === 'ArrowLeft') anterior()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [proximo, anterior])

  const slide = SLIDES[atual]

  return (
    <section
      className={styles.hero}
      aria-label="Apresentação Maravilha Cortinas"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      {/* Imagem */}
      <div className={`${styles.imgWrap} ${entrando ? '' : styles.imgVisible}`} aria-hidden="true">
        <Image
          key={slide.id}
          src={slide.imagem}
          alt={slide.alt}
          fill
          sizes="100vw"
          priority={atual === 0}
          loading={atual === 0 ? 'eager' : 'lazy'}
          fetchPriority={atual === 0 ? 'high' : 'auto'}
          style={{ objectFit: 'cover', objectPosition: slide.position || 'center center' }}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Conteúdo */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={`${styles.inner} ${entrando ? '' : styles.innerVisible}`}>

            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Ibitinga · SP · Loja da Fábrica</span>
            </div>

            <h1 id="hero-titulo" className={styles.titulo}>
              Cortinas e persianas<br />
              sob medida.
            </h1>

          </div>
        </div>
      </div>

      {/* Controles */}
      <div className={styles.controles}>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={anterior} aria-label="Slide anterior">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className={styles.arrow} onClick={proximo} aria-label="Próximo slide">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollTxt}>scroll</span>
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}

