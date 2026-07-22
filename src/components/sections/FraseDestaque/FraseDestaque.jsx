// src/components/sections/FraseDestaque/FraseDestaque.jsx — Maravilha Cortinas
import styles from './FraseDestaque.module.css'

const PALAVRA = 'elegância'

export default function FraseDestaque() {
  const palavras = Array(8).fill(PALAVRA)

  return (
    <section className={styles.sec} aria-hidden="true">
      <div className={styles.tickerWrap}>
        <div className={styles.tickerTrack}>
          {[...palavras, ...palavras].map((p, i) => (
            <span key={i} className={styles.tickerItem}>{p}</span>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <span className={styles.aspas} aria-hidden="true">&rdquo;</span>
        <p className={styles.frase}>
          Seja sua casa ou local de trabalho, estamos preparados para{' '}
          <strong>transformar</strong> seu espaço em um ambiente{' '}
          <strong>elegante</strong> e <strong>convidativo</strong>.
        </p>
      </div>
    </section>
  )
}
