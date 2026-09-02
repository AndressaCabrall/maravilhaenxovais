// src/components/sections/Cta/Cta.jsx — Maravilha Cortinas
'use client'

import Image             from 'next/image'
import ctaImg            from '@/assets/images/hero/webp/cortina-prega-macho-atendimento-Brasil-online.jpeg'
import styles            from './Cta.module.css'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

export default function Cta() {
  return (
    <section id="cta" className={styles.sec} aria-labelledby="cta-titulo">

      <div className={styles.picture} aria-hidden="true">
        <Image
          src={ctaImg}
          alt="cortina wave sob medida em sala de alto padrão — Maravilha Cortinas Ibitinga SP"
          width={1920}
          height={1080}
          sizes="100vw"
          className={styles.imagem}
          loading="lazy"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.inner}>

          <h2 id="cta-titulo" className={styles.titulo}>
            Especialista de Ibitinga e região{' '}
            <em className={styles.tituloEm}>em cortinas elegantes, atemporais e sob medida.</em>
          </h2>

          <a
             href={WHATSAPP_URLS.orcamento}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.ctaPrimario}
             aria-label="Fazer consultoria personalizada pelo WhatsApp"
             onClick={() => trackWhatsApp('cta-consultoria')}
          >
            Consultoria personalizada
            <span aria-hidden="true">+</span>
          </a>

        </div>
      </div>
    </section>
  )
}
