// src/components/sections/Cortinas/Cortinas.jsx
'use client'

import { useState, useRef } from 'react'
import Image                from 'next/image'
import Lightbox             from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles               from './Cortinas.module.css'
import { CORTINAS }         from '@/data/cortinas'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

export default function Cortinas() {
  const [index,  setIndex]  = useState(-1)
  const trackRef = useRef(null)

  const slides = CORTINAS.map((c) => ({
    src: typeof c.imagem === 'object' ? c.imagem.src : c.imagem,
    alt: c.alt,
    title: c.nome,
  }))

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const w = (card?.offsetWidth || 300) + 24
    track.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section id="cortinas" className={styles.sec} aria-labelledby="cortinas-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Cortinas sob medida</span>
          </div>
          <h2 id="cortinas-titulo" className={styles.titulo}>
            Tecido certo.{' '}
            <em className={styles.tituloEm}>Ambiente transformado.</em>
          </h2>
          <p className={styles.sub}>
            Do linho natural ao blackout — escolhemos com você o trilho, tecido e acabamento certos pra luz e privacidade do ambiente. Consultoria personalizada. Instalação sob consulta.
          </p>
        </div>

        <div className={styles.carrosselWrap}>
          <div className={styles.track} ref={trackRef}>
            {CORTINAS.map((cortina) => (
              <article key={cortina.id} className={styles.card} data-card>
                <button
                  className={styles.imgWrap}
                  onClick={() => setIndex(CORTINAS.indexOf(cortina))}
                  aria-label={`Ver imagem ampliada de ${cortina.nome}`}
                >
                  <Image
                    src={cortina.imagem}
                    alt={cortina.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 375px"
                    loading="lazy"
                    className={styles.img}
                  />

                  {cortina.destaque && (
                    <span className={styles.badge}>{cortina.destaque}</span>
                  )}

                  <span className={styles.zoom} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </button>

                <div className={styles.info}>
                  <h3 className={styles.infoNome}>{cortina.nome}</h3>
                  <p className={styles.infoDesc}>{cortina.descricao}</p>
                </div>
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

        <div className={styles.ctaWrap}>
          <a
           href={WHATSAPP_URLS.cortinas}
           target="_blank"
           rel="noopener noreferrer"
           className={styles.ctaBtn}
           onClick={() => trackWhatsApp('cortinas-orcamento')}
          >
            Consultoria personalizada de cortinas →
          </a>
        </div>

        <div className={styles.rodape}>
          <p className={styles.rodapeTxt}>
            Não encontrou o modelo ideal?{' '}
            <a
             href={WHATSAPP_URLS.duvida}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.rodapeLink}
             onClick={() => trackWhatsApp('cortinas-duvida')}
            >
              Fale pelo WhatsApp
            </a>{' '}
            e encontramos a solução certa para o seu ambiente.
          </p>
        </div>

      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(44,44,42,0.97)' } }}
      />
    </section>
  )
}
