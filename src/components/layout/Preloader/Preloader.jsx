// src/components/layout/Preloader/Preloader.jsx — Maravilha Cortinas
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo/logo.png'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [porcentagem, setPorcentagem] = useState(0)
  const [saindo, setSaindo]           = useState(false)
  const [visivel, setVisivel]         = useState(true)

  useEffect(() => {
    let atual = 0
    const intervalo = setInterval(() => {
      atual += 1
      setPorcentagem(Math.min(atual, 100))
      if (atual >= 100) clearInterval(intervalo)
    }, 26)

    const timerSair   = setTimeout(() => setSaindo(true), 2800)
    const timerRemove = setTimeout(() => setVisivel(false), 3600)

    return () => {
      clearInterval(intervalo)
      clearTimeout(timerSair)
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

