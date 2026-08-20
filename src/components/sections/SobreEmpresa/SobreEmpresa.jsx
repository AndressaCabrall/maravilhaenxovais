// src/components/sections/SobreEmpresa/SobreEmpresa.jsx — Maravilha Cortinas
'use client'

import { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './SobreEmpresa.module.css'
import imgGrande from '@/assets/images/projetos/webp/persiana-horizontal-50mm-comercial-ibitinga-sp.webp'
import imgPequena from '@/assets/images/persianas/webp/persiana-rolo-blackout-caixa-box-sob-medida-ibitinga-sp.webp'
gsap.registerPlugin(ScrollTrigger)

export default function SobreEmpresa() {
  const secRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const triggers = []

      // Imagem pequena — zoom no scroll (sem parallax de posição)
      secRef.current.querySelectorAll('[data-zoom]').forEach((img) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })

        tl.fromTo(img, { scale: 1.15 }, { scale: 1.3, ease: 'none' }, 0)

        triggers.push(tl)
      })

      return () => triggers.forEach((t) => t.scrollTrigger?.kill())
    })

    return () => mm.revert()
  }, [])

  return (
    <section className={styles.sec} ref={secRef} aria-labelledby="sobre-titulo">
      <div className={styles.container}>
        <div className={styles.inner}>

          <div className={styles.imagens}>
            <div className={styles.imgGrandeWrap}>
              <div className={styles.imgClipStatico}>
                <Image
                  src={imgGrande}
                  alt="Ambiente com cortina wave sob medida instalada pela Maravilha Cortinas"
                  fill
                  sizes="(max-width: 1024px) 70vw, 570px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  data-zoom
                />
              </div>
            </div>

            <div className={styles.imgPequenaWrap}>
              <div className={styles.imgClip}>
                <Image
                  src={imgPequena}
                  alt="Cortina wave blackout em quarto decorado, Maravilha Cortinas"
                  fill
                  sizes="(max-width: 1024px) 45vw, 285px"
                  style={{ objectFit: 'cover', objectPosition: '45% 0%' }}
                  data-zoom
                />
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Nossa história</span>
            </div>

            <h2 id="sobre-titulo" className={styles.titulo}>
              Por trás de cada cortina,{' '}
              <em className={styles.tituloEm}>tem a Mara.</em>
            </h2>

            <p className={styles.desc}>
              A Maravilha Cortinas e Persianas nasceu em Ibitinga, em 2011, com um
              propósito simples: oferecer cortinas e persianas sob medida com o
              cuidado que só quem é da região consegue entregar. Somos Loja da
              Fábrica: produzimos tudo aqui mesmo, sem intermediários — mais
              qualidade, prazo garantido e preço justo, do projeto à instalação.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
