// src/components/ui/SectionHeader/SectionHeader.jsx — Maravilha Cortinas
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import styles  from './SectionHeader.module.css'

export default function SectionHeader({
  eyebrow,
  titulo,
  tituloDestaque,
  subtitulo,
  centralizado = false,
  className = '',
}) {
  return (
    <div
      className={`${styles.header} ${centralizado ? styles.centro : ''} ${className}`}
      data-animate="fade-up"
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2 className={styles.titulo}>
        {titulo}{' '}
        {tituloDestaque && (
          <em className={styles.destaque}>{tituloDestaque}</em>
        )}
      </h2>

      {subtitulo && (
        <p className={styles.subtitulo}>{subtitulo}</p>
      )}
    </div>
  )
}

