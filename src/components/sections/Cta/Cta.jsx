// src/components/sections/Cta/Cta.jsx — Maravilha Cortinas
'use client'

import Image             from 'next/image'
import ctaImg            from '@/assets/images/footer/webp/cta-cortinas-persianas-sob-medida-maravilha-ibitinga-sp.webp'
import styles            from './Cta.module.css'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

export default function Cta() {
  return (
    <section id="cta" className={styles.sec} aria-labelledby="cta-titulo">

      <div className={styles.picture} aria-hidden="true">
        <Image
          src={ctaImg}
          alt="persianas-sob-medida-tela-solar-na-cozinha-ibitinga-sp"
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
            Sua cortina ideal{' '}
            <em className={styles.tituloEm}>começa com uma visita.</em>
          </h2>

          <a
             href={WHATSAPP_URLS.orcamento}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.ctaPrimario}
             aria-label="Marcar horário de visita pelo WhatsApp"
             onClick={() => trackWhatsApp('cta-agendar')}
          >
            Marcar horário
            <span aria-hidden="true">+</span>
          </a>

        </div>
      </div>
    </section>
  )
}
