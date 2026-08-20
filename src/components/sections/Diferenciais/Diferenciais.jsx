'use client'

import { useRef } from 'react'
import styles from './Diferenciais.module.css'
import { DIFERENCIAIS } from '@/data/diferenciais'
import Ticker from '@/components/ui/Ticker/Ticker'

const ICONES = {
  visita: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  regua: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  instalacao: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  estrela: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  pessoa: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  prazo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
}

export default function Diferenciais() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const w = (card?.offsetWidth || 300) + 24
    track.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <>
      <Ticker />

      <section className={styles.sec} aria-labelledby="diferenciais-titulo">
        <div className={styles.container}>

          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Por que a Maravilha?</span>
            </div>
            <h2 id="diferenciais-titulo" className={styles.titulo}>
              Do projeto à instalação,{' '}
              <em className={styles.tituloEm}>cuidamos de tudo.</em>
            </h2>
            <p className={styles.sub}>
              Somos de Ibitinga. Medimos, produzimos e entregamos
              sob medida, sem intermediários — do projeto
              à entrega final, cuidamos de cada detalhe.
            </p>
          </div>

          <div className={styles.carrosselWrap}>
            <div className={styles.track} ref={trackRef}>
              {DIFERENCIAIS.map((item, i) => (
                <div key={item.id} className={styles.card} data-card>
                  <div className={styles.cardNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')} —
                  </div>
                  <div className={styles.cardIcone} aria-hidden="true">
                    {ICONES[item.icone]}
                  </div>
                  <h3 className={styles.cardTitulo}>{item.titulo}</h3>
                  <p className={styles.cardDesc}>{item.descricao}</p>
                </div>
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

        </div>
      </section>
    </>
  )
}

