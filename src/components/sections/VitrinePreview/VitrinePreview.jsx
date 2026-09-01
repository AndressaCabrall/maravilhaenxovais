// src/components/sections/VitrinePreview/VitrinePreview.jsx
'use client'

import { useState, useCallback, useEffect } from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import styles from './VitrinePreview.module.css'
import cortinaImg  from '@/assets/images/cortinas/webp/cortina-wave-blackout-70-quarto-ibitinga-sp.webp'
import persianaImg from '@/assets/images/hero/webp/persiana-tela-solar-cozinha-sob-medida-ibitinga-sp.webp'
import motorImg     from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'

const PRODUTOS = [
  {
    href: '/produtos-e-servicos/cortinas',
    imagem: cortinaImg,
    alt: 'Cortina wave sob medida — Ibitinga SP',
    titulo: 'Cortinas sob medida',
    descricao: 'Wave, blackout, linho e prega macho sob medida para o seu vão.',
  },
  {
    href: '/produtos-e-servicos/persianas',
    imagem: persianaImg,
    alt: 'Persiana double vision sob medida — Ibitinga SP',
    titulo: 'Persianas sob medida',
    descricao: 'Rolô, blackout, double vision e tela solar para cada ambiente.',
    posicao: 'right',
    posicaoTablet: '85% center',
  },
  {
    href: '/produtos-e-servicos/motorizacao',
    imagem: motorImg,
    alt: 'Cortina motorizada com trilho automatizado — Ibitinga SP',
    titulo: 'Motorização de cortinas e persianas',
    descricao: 'Controle pelo celular, Alexa e Google Home.',
    posicao: 'right top',
  },
]

export default function VitrinePreview() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)

  const proximo = useCallback(() => setAtual((i) => (i + 1) % PRODUTOS.length), [])

  useEffect(() => {
    if (pausado) return
    const t = setInterval(proximo, 4800)
    return () => clearInterval(t)
  }, [pausado, proximo])

  const produto = PRODUTOS[atual]

  return (
    <section id="produtos" className={styles.sec} aria-labelledby="vitrine-titulo">
      <div className={styles.container}>
        <div className={styles.editorial}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Nossos Produtos e serviços</span>
            </div>
            <h2 id="vitrine-titulo" className={styles.titulo}>
              Cortinas, persianas sob medida{' '}
              <em className={styles.tituloEm}>e motorização.</em>
            </h2>
            <p className={styles.sub}>
              Cada projeto pensado sob medida para o seu ambiente, com consultoria
              especializada e prazo cumprido. Instalação sob consulta.
            </p>
          </div>

          <Link
            href={produto.href}
            className={styles.fotoWrap}
            aria-label={`Ver ${produto.titulo}`}
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            <Image
              key={produto.href}
              src={produto.imagem}
              alt={produto.alt}
              fill
              sizes="(max-width: 768px) 100vw, 570px"
              className={styles.img}
              style={{
                objectPosition: produto.posicao || 'center',
                '--pos-tablet': produto.posicaoTablet || produto.posicao || 'center',
              }}
            />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.conteudo}>
              <div className={styles.infoBase}>
                <div className={styles.textoBase}>
                  <h3 className={styles.tituloVazado}>{produto.titulo}</h3>
                  <p className={styles.desc}>{produto.descricao}</p>
                  <span className={styles.cta}>
                    Explorar {produto.titulo.toLowerCase()} →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.rodape}>
          <Link href="/produtos-e-servicos" className={styles.link}>
            Ver todos os produtos e serviços
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
