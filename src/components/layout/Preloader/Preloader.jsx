// src/components/layout/Preloader/Preloader.jsx — Maravilha Cortinas
'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo/logo.png'
import styles from './Preloader.module.css'

const ATTR = 'data-preloader'
const FADE_DURACAO = 0.8

function limpar() {
  document.documentElement.removeAttribute(ATTR)
}

export default function Preloader() {
  const [porcentagem, setPorcentagem] = useState(0)
  const [saindo, setSaindo]           = useState(false)
  // Lê a decisão já tomada pelo script inline do <head>, em vez de decidir
  // aqui — o script roda antes do paint, este componente só depois da hydration.
  const [visivel, setVisivel]         = useState(false)

  const concluido = useRef(false) // true só quando a animação terminou de verdade (evita o cleanup de StrictMode limpar cedo demais)

  useLayoutEffect(() => {
    if (document.documentElement.getAttribute(ATTR) !== 'ativo') return
    setVisivel(true)
  }, [])

  useEffect(() => {
    if (!visivel) return

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
        timerRemove = setTimeout(() => {
          concluido.current = true
          limpar()
          setVisivel(false)
        }, FADE_DURACAO * 1000)
      }
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timerRemove)
    }
  }, [visivel])

  // Garante que o conteúdo volte a aparecer se o componente for desmontado
  // antes da saída natural — mas só nesse caso. Sem o guard `concluido`,
  // este cleanup também disparava no double-invoke de effects do
  // StrictMode (mount → cleanup → mount), apagando o atributo ~200ms
  // depois do primeiro paint e revelando a hero por baixo do preloader
  // ainda rodando a barra de progresso.
  useEffect(() => () => {
    if (!concluido.current) limpar()
  }, [])

  if (!visivel) return null

  return (
    <div
      className={`${styles.preloader} ${saindo ? styles.saindo : ''}`}
      role="status"
      aria-label="Carregando Maravilha Cortinas"
      data-preloader
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
