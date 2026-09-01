'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles from './Persianas.module.css'
import { PERSIANAS } from '@/data/persianas'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

export default function Persianas() {
  const [index, setIndex] = useState(-1)
  const trackRef = useRef(null)

  const slides = PERSIANAS.map((p) => ({
    src: typeof p.imagem === 'object' ? p.imagem.src : p.imagem,
    alt: p.alt,
    title: p.nome,
  }))

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const w = (card?.offsetWidth || 300) + 24
    track.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  return (
    <section id="persianas" className={styles.sec} aria-labelledby="persianas-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Persianas sob medida</span>
          </div>
          <h2 id="persianas-titulo" className={styles.titulo}>
            A luz certa.{' '}
            <em className={styles.tituloEm}>O ambiente certo.</em>
          </h2>
          <p className={styles.sub}>
            Blackout, tela solar, double vision e muito mais — indicados em consultoria pra cada janela. Instalação sob consulta. Desde 2011 cuidando de cada detalhe em Ibitinga e região.
          </p>
        </div>

        <div className={styles.carrosselWrap}>
          <div className={styles.track} ref={trackRef}>
            {PERSIANAS.map((persiana) => (
              <article key={persiana.id} className={styles.card} data-card>
                <button
                  className={styles.imgWrap}
                  onClick={() => setIndex(PERSIANAS.indexOf(persiana))}
                  aria-label={`Ver imagem ampliada de ${persiana.nome}`}
                >
                  <Image
                    src={persiana.imagem}
                    alt={persiana.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 375px"
                    loading="lazy"
                    className={styles.img}
                  />
                  {persiana.destaque && (
                    <span className={styles.badge}>{persiana.destaque}</span>
                  )}
                  <span className={styles.zoom} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </button>

                <div className={styles.info}>
                  <h3 className={styles.infoNome}>{persiana.nome}</h3>
                  <p className={styles.infoDesc}>{persiana.descricao}</p>
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
           href={WHATSAPP_URLS.persianas}
           target="_blank"
           rel="noopener noreferrer"
           className={styles.ctaBtn}
           onClick={() => trackWhatsApp('persianas-orcamento')}
          >
            Solicitar orçamento de persianas →
          </a>
        </div>

        <div className={styles.rodape}>
          <p className={styles.rodapeTxt}>
            Atendemos com consultoria personalizada em Ibitinga, Taquaritinga,
            Araraquara, Matão e toda a região.{' '}
            <a
             href={WHATSAPP_URLS.orcamento}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.rodapeLink}
             onClick={() => trackWhatsApp('persianas-consultoria')}
            >
              Fale sobre sua consultoria personalizada
            </a>
            .
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
