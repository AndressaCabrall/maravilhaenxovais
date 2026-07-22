// src/components/sections/VitrinePreview/VitrinePreview.jsx
'use client'

import { useState, useCallback, useEffect } from 'react'
import Link  from 'next/link'
import Image from 'next/image'
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
    dado1Label: 'Modelos',
    dado1Valor: '8+',
    dado2Label: 'Prazo',
    dado2Valor: '20 dias',
  },
  {
    href: '/produtos-e-servicos/persianas',
    imagem: persianaImg,
    alt: 'Persiana double vision sob medida — Ibitinga SP',
    titulo: 'Persianas',
    descricao: 'Rolô, blackout, double vision e tela solar para cada ambiente.',
    dado1Label: 'Modelos',
    dado1Valor: '5+',
    dado2Label: 'Prazo',
    dado2Valor: '20 dias',
  },
  {
    href: '/produtos-e-servicos/motorizacao',
    imagem: motorImg,
    alt: 'Cortina motorizada com trilho automatizado — Ibitinga SP',
    titulo: 'Motorização',
    descricao: 'Controle pelo celular, Alexa e Google Home.',
    dado1Label: 'Controle',
    dado1Valor: 'App/Voz',
    dado2Label: 'Prazo',
    dado2Valor: 'Sob consulta',
  },
]

export default function VitrinePreview() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)

  const proximo = useCallback(() => setAtual((i) => (i + 1) % PRODUTOS.length), [])

  useEffect(() => {
    if (pausado) return
    const t = setInterval(proximo, 5500)
    return () => clearInterval(t)
  }, [pausado, proximo])

  const produto = PRODUTOS[atual]

  return (
    <section id="produtos" className={styles.sec} aria-labelledby="vitrine-titulo">
      <div className={styles.container}>
        <div className={styles.editorial}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Produtos e serviços</span>
            </div>
            <h2 id="vitrine-titulo" className={styles.titulo}>
              Cortinas, persianas{' '}
              <em className={styles.tituloEm}>e motorização.</em>
            </h2>
            <p className={styles.sub}>
              Tudo produzido sob medida na nossa própria fábrica em Ibitinga —
              sem intermediários, com prazo cumprido e instalação profissional disponível.
            </p>
          </div>

          <Link
            href={produto.href}
            className={styles.fotoWrap}
            aria-label={`Ver ${produto.titulo}`}
            data-speed="0.92"
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
            />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.conteudo}>
              <h3 className={styles.tituloVazado}>{produto.titulo}</h3>

              <div className={styles.infoBase}>
                <div className={styles.dados}>
                  <div className={styles.dado}>
                    <span className={styles.dadoLabel}>{produto.dado1Label}</span>
                    <span className={styles.dadoValor}>{produto.dado1Valor}</span>
                  </div>
                  <div className={styles.dado}>
                    <span className={styles.dadoLabel}>{produto.dado2Label}</span>
                    <span className={styles.dadoValor}>{produto.dado2Valor}</span>
                  </div>
                </div>

                <div className={styles.textoBase}>
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
