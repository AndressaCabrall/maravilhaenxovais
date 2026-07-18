// src/components/sections/VitrinePreview/VitrinePreview.jsx
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import styles from './VitrinePreview.module.css'
import cortinaImg  from '@/assets/images/cortinas/webp/cortina-wave-tubo-sob-medida-ibitinga-sp.webp'
import persianaImg from '@/assets/images/persianas/webp/persiana-double-vision-sob-medida-ibitinga-sp.webp'
import motorImg     from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'

const PRODUTOS = [
  {
    href: '/produtos-e-servicos/cortinas',
    imagem: cortinaImg,
    alt: 'Cortina wave sob medida — Ibitinga SP',
    titulo: 'Cortinas',
    descricao: 'Wave, blackout, linho e prega macho sob medida para o seu vão.',
  },
  {
    href: '/produtos-e-servicos/persianas',
    imagem: persianaImg,
    alt: 'Persiana double vision sob medida — Ibitinga SP',
    titulo: 'Persianas',
    descricao: 'Rolô, blackout, double vision e tela solar para cada ambiente.',
  },
  {
    href: '/produtos-e-servicos/motorizacao',
    imagem: motorImg,
    alt: 'Cortina motorizada com trilho automatizado — Ibitinga SP',
    titulo: 'Motorização',
    descricao: 'Controle pelo celular, Alexa e Google Home.',
  },
]

export default function VitrinePreview() {
  return (
    <section id="produtos" className={styles.sec} aria-labelledby="vitrine-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Produtos e serviços</span>
          </div>
          <h2 id="vitrine-titulo" className={styles.titulo}>
            Cortinas, persianas{' '}
            <em className={styles.tituloEm}>e motorização.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {PRODUTOS.map((p) => (
            <ProductCard key={p.href} {...p} />
          ))}
        </div>

        <div className={styles.rodape}>
          <Link href="/produtos-e-servicos" className={styles.link}>
            Ver todos os produtos e serviços →
          </Link>
        </div>

      </div>
    </section>
  )
}
