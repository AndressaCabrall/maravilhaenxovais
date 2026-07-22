// src/components/ui/ProductCard/ProductCard.jsx — card de produto/serviço reutilizável
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductCard.module.css'

export default function ProductCard({ href, imagem, alt, eyebrow, titulo, descricao }) {
  return (
    <Link href={href} className={styles.card}>
      <Image
        src={imagem}
        alt={alt}
        fill
        sizes="100vw"
        loading="lazy"
        className={styles.img}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.conteudo}>
        {eyebrow && (
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {eyebrow}
          </span>
        )}

        <div className={styles.linha}>
          <h3 className={styles.titulo}>{titulo}</h3>
        </div>

        {descricao && <p className={styles.desc}>{descricao}</p>}
      </div>
    </Link>
  )
}
