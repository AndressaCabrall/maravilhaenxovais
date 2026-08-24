// src/components/layout/Preloader/Preloader.jsx — Maravilha Cortinas
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo/logo.png'
import styles from './Preloader.module.css'

const FADE_DURACAO = 0.8

export default function Preloader() {
  const [porcentagem, setPorcentagem] = useState(0)
  const [saindo, setSaindo]           = useState(false)
  const [visivel, setVisivel]         = useState(true)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const duracao  = isMobile ? 0.6 : 1.6

    let inicio = null
    let rafId
    let timerRemove

    const tick = (agora) => {
      if (inicio === null) inicio = agora // referência tirada do próprio relógio do rAF, evita drift com performance.now()
      const progresso = Math.min(Math.max((agora - inicio) / 1000 / duracao, 0), 1)
      setPorcentagem(Math.round(progresso * 100))
      if (progresso < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        // só começa a sair quando a barra realmente terminou de encher —
        // evita "travar em 0%" e depois sumir de repente se a hidratação atrasar
        setSaindo(true)
        timerRemove = setTimeout(() => setVisivel(false), FADE_DURACAO * 1000)
      }
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timerRemove)
    }
  }, [])

  if (!visivel) return null

  return (
    <div
      className={`${styles.preloader} ${saindo ? styles.saindo : ''}`}
      role="status"
      aria-label="Carregando Maravilha Cortinas"
    >
      <div className={styles.logoWrap}>
        <Image
          src={logo}
          alt="Maravilha Cortinas & Persianas"
          width={200}
          height={80}
          priority
          className={styles.logoImg}
        />
      </div>

      <div className={styles.barraContainer}>
        <div className={styles.barraWrap}>
          <div
            className={styles.barra}
            style={{ transform: `scaleX(${porcentagem / 100})` }}
          />
        </div>
        <span className={styles.porcentagem}>{porcentagem}%</span>
      </div>
    </div>
  )
}

