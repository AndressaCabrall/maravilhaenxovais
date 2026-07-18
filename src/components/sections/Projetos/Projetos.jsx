'use client'

import { useState, useRef } from 'react'
import Image                from 'next/image'
import Lightbox             from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles               from './Projetos.module.css'
import { PROJETOS, CATEGORIAS } from '@/data/projetos'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'


export default function Projetos() {
  const [catAtiva, setCatAtiva] = useState('Todos')
  const [index,    setIndex]    = useState(-1)
  const trackRef = useRef(null)

  const filtrados = catAtiva === 'Todos'
    ? PROJETOS
    : PROJETOS.filter(p => p.cat.toLowerCase() === catAtiva.toLowerCase())

  const slides = filtrados.map((p) => ({
    src: typeof p.imagem === 'object' ? p.imagem.src : p.imagem,
    alt: p.alt,
  }))

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const w = (card?.offsetWidth || 300) + 24
    track.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section id="projetos" className={styles.sec} aria-labelledby="projetos-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Projetos realizados</span>
          </div>
          <h2 id="projetos-titulo" className={styles.titulo}>
            Cada janela tem{' '}
            <em className={styles.tituloEm}>uma história.</em>
          </h2>
          <p className={styles.sub}>
            Projetos reais em Ibitinga, Itápolis, Tabatinga e região.
            Transformações que falam por si.
          </p>
        </div>

        <div className={styles.filtros} role="tablist" aria-label="Filtrar por categoria">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={catAtiva === cat}
              className={`${styles.filtro} ${catAtiva === cat ? styles.filtroAtivo : ''}`}
              onClick={() => setCatAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carrossel */}
        <div className={styles.carrosselWrap}>
          <div className={styles.track} ref={trackRef}>
            {filtrados.map((projeto, i) => (
              <article key={projeto.id} className={styles.item} data-card>
                <button
                  className={styles.imgWrap}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver imagem ampliada — ${projeto.cat}`}
                >
                  <Image
                    src={projeto.imagem}
                    alt={projeto.alt}
                    fill
                    unoptimized
                    loading="lazy"
                    className={styles.img}
                  />
                  <div className={styles.overlay} aria-hidden="true" />
                  <span className={styles.zoom} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                  </span>
                </button>
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

        <div className={styles.rodape}>
          <p className={styles.rodapeTxt}>Quer seu ambiente nessa galeria?</p>
          <a
            href={WHATSAPP_URLS.orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rodapeBtn}
            aria-label="Agendar visita de medição  pelo WhatsApp"
            onClick={() => trackWhatsApp('projetos-falar-sobre-projetos')}
          >
            Agendar visita  →
          </a>
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

