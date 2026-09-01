'use client'

import { useEffect, useRef, useState } from 'react'
import Image                from 'next/image'
import Lightbox             from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles               from './Projetos.module.css'
import { CORTINAS }  from '@/data/cortinas'
import { PERSIANAS } from '@/data/persianas'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

function Slider({ itens, onOpen, offset = 0 }) {
  const trackRef = useRef(null)
  const [pausado, setPausado] = useState(false)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector(`.${styles.item}`)
    const largura = card ? card.offsetWidth + 16 : 300

    // Loop: se já está no fim/início, volta pro outro extremo
    const noFim   = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    const noInicio = track.scrollLeft <= 4
    if (dir > 0 && noFim) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (dir < 0 && noInicio) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: dir * largura, behavior: 'smooth' })
    }
  }

  // Avanço automático leve, pausa em hover/toque
  useEffect(() => {
    if (pausado) return
    const id = setInterval(() => scrollByCard(1), 3200)
    return () => clearInterval(id)
  }, [pausado])

  return (
    <div
      className={styles.sliderWrap}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}
      onTouchEnd={() => setPausado(false)}
    >
      <div ref={trackRef} className={styles.sliderTrack}>
        {itens.map((item, i) => (
          <article key={item.id} className={styles.item}>
            <button
              className={styles.imgWrap}
              onClick={() => onOpen(offset + i)}
              aria-label={`Ver imagem ampliada de ${item.nome}`}
            >
              <Image
                src={item.imagem}
                alt={item.alt}
                fill
                sizes="375px"
                loading="lazy"
                className={styles.img}
              />
            </button>

            <div className={styles.info}>
              <h3 className={styles.infoNome}>{item.nome}</h3>
              <p className={styles.infoDesc}>{item.descricao}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.navPrev}`}
        onClick={() => scrollByCard(-1)}
        aria-label="Ver anterior"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navNext}`}
        onClick={() => scrollByCard(1)}
        aria-label="Ver próximo"
      >
        ›
      </button>
    </div>
  )
}

export default function Projetos() {
  const [index, setIndex] = useState(-1)

  const slides = [...CORTINAS, ...PERSIANAS].map((p) => ({
    src: typeof p.imagem === 'object' ? p.imagem.src : p.imagem,
    alt: p.alt,
  }))

  return (
    <section id="projetos" className={styles.sec} aria-labelledby="projetos-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
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

      </div>

      {/* Slider — Cortinas */}
      <div className={styles.marqueeGrupo}>
        <Slider itens={CORTINAS} onOpen={setIndex} offset={0} />
      </div>

      {/* Slider — Persianas */}
      <div className={styles.marqueeGrupo}>
        <Slider itens={PERSIANAS} onOpen={setIndex} offset={CORTINAS.length} />
      </div>

      <div className={styles.container}>
        <div className={styles.rodape}>
          <a
            href={WHATSAPP_URLS.orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rodapeBtn}
            aria-label="Fazer consultoria personalizada pelo WhatsApp"
            onClick={() => trackWhatsApp('projetos-falar-sobre-projetos')}
          >
            Consultoria personalizada →
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
