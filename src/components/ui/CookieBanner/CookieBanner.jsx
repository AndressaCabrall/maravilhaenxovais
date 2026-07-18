// src/components/ui/CookieBanner/CookieBanner.jsx — Maravilha Cortinas
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aceito = localStorage.getItem('cookies-aceitos')
    if (!aceito) setVisivel(true)
  }, [])

  function aceitar() {
    localStorage.setItem('cookies-aceitos', 'true')
    setVisivel(false)
  }

  function recusar() {
    localStorage.setItem('cookies-aceitos', 'false')
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
      <div className={styles.conteudo}>
        <p className={styles.texto}>
          Usamos cookies para melhorar sua experiência. Ao continuar navegando,
          você concorda com nossa{' '}
          <Link href="/privacidade" className={styles.link}>
            Política de Privacidade
          </Link>
          .
        </p>
        <div className={styles.acoes}>
          <button onClick={recusar} className={styles.btnRecusar}>
            Recusar
          </button>
          <button onClick={aceitar} className={styles.btnAceitar}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}

