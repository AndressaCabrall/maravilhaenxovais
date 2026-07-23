'use client'

import { useState } from 'react'
import Image                from 'next/image'
import Lightbox             from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles               from './Projetos.module.css'
import { CORTINAS }  from '@/data/cortinas'
import { PERSIANAS } from '@/data/persianas'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

function Marquee({ itens, direcao, onOpen, offset = 0 }) {
  // Duplica a lista para o loop infinito ficar contínuo
  const loop = [...itens, ...itens]
  const [tocando, setTocando] = useState(false)

  return (
    <div
      className={`${styles.marqueeWrap} ${tocando ? styles.marqueeWrapTocando : ''}`}
      onTouchStart={() => setTocando(true)}
      onTouchEnd={() => setTocando(false)}
      onTouchCancel={() => setTocando(false)}
    >
      <div
        className={`${styles.marqueeTrack} ${direcao === 'reversa' ? styles.marqueeReversa : ''}`}
      >
        {loop.map((item, i) => (
          <article key={`${item.id}-${i}`} className={styles.item}>
            <button
              className={styles.imgWrap}
              onClick={() => onOpen(offset + (i % itens.length))}
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

      </div>

      {/* Carrossel infinito — Cortinas */}
      <div className={styles.marqueeGrupo}>
        <Marquee itens={CORTINAS} direcao="normal" onOpen={setIndex} offset={0} />
      </div>

      {/* Carrossel infinito — Persianas */}
      <div className={styles.marqueeGrupo}>
        <Marquee itens={PERSIANAS} direcao="reversa" onOpen={setIndex} offset={CORTINAS.length} />
      </div>

      <div className={styles.container}>
        <div className={styles.rodape}>
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
