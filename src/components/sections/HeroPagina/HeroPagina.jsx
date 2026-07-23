// src/components/sections/HeroPagina/HeroPagina.jsx — Maravilha Cortinas
import Image from 'next/image'
import styles from './HeroPagina.module.css'

export default function HeroPagina({ imagem, alt, eyebrow, titulo, tituloEm, sub, cta, ctaHref }) {
  return (
    <section className={styles.hero} aria-label={typeof titulo === 'string' ? titulo : undefined}>
      <div className={styles.imgWrap} aria-hidden="true">
        <Image
          src={imagem}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={styles.img}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>{eyebrow}</span>
          </div>

          <h1 className={styles.titulo}>
            {titulo} <em className={styles.tituloEm}>{tituloEm}</em>
          </h1>

          <p className={styles.sub}>{sub}</p>

          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}
