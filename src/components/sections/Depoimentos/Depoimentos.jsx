'use client'

import { useRef } from 'react'
import styles from './Depoimentos.module.css'
import { DEPOIMENTOS, RATING } from '@/data/depoimentos'
import { GMB } from '@/lib/constants'

function Estrelas({ nota }) {
  return (
    <div className={styles.estrelas} aria-label={`Nota ${nota} de 5`}>
      {Array.from({ length: nota }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

function Iniciais({ nome }) {
  const partes = nome.split(' ')
  const iniciais = partes.length >= 2
    ? `${partes[0][0]}${partes[partes.length - 1][0]}`
    : nome.slice(0, 2)
  return <span className={styles.avatar}>{iniciais.toUpperCase()}</span>
}

export default function Depoimentos() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const w = (card?.offsetWidth || 300) + 24
    track.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section className={styles.sec} aria-labelledby="depoimentos-titulo">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Avaliações reais</span>
          </div>
          <h2 id="depoimentos-titulo" className={styles.titulo}>
            Clientes que confiam{' '}
            <em className={styles.tituloEm}>e recomendam.</em>
          </h2>
          <a
            href={GMB.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ratingGeral}
            aria-label={`Ver ${RATING.total} avaliações no Google — nota ${RATING.nota}`}
          >
            <span className={styles.ratingNum}>{RATING.nota}</span>
            <div className={styles.ratingInfo}>
              <div className={styles.ratingStars} aria-hidden="true">★★★★★</div>
              <span className={styles.ratingTxt}>{RATING.total} avaliações no Google</span>
            </div>

          </a>
        </div>

        {/* Carrossel */}
        <div className={styles.carrosselWrap}>
          <div className={styles.track} ref={trackRef}>
            {DEPOIMENTOS.map((dep) => (
              <article key={dep.id} className={styles.card} data-card>
                <span className={styles.aspas} aria-hidden="true">"</span>
                <Estrelas nota={dep.nota} />
                <blockquote className={styles.texto}>
                  <p>"{dep.texto}"</p>
                </blockquote>
                <footer className={styles.autor}>
                  <Iniciais nome={dep.nome} />
                  <div className={styles.autorInfo}>
                    <cite className={styles.autorNome}>{dep.nome}</cite>
                    <span className={styles.autorVia}>{dep.via} · {dep.data}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          <div className={styles.controles}>
            <button className={styles.arrow} onClick={() => scroll('prev')} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className={styles.arrow} onClick={() => scroll('next')} aria-label="Próximo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Rodapé */}
        <div className={styles.rodape}>
          <a
            href={GMB.linkMaps}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rodapeBtn}
            aria-label="Ver todas as avaliações no Google"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Ver todas as avaliações no Google
          </a>
        </div>

      </div>
    </section>
  )
}

