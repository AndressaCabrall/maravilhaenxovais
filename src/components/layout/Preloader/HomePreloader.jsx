// src/components/layout/Preloader/HomePreloader.jsx — só exibe o Preloader no primeiro carregamento da home
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Preloader from './Preloader'

const CHAVE = 'maravilha-preloader-exibido'

export default function HomePreloader() {
  const pathname = usePathname()
  // Decide já na primeira renderização (sem useEffect) para não deixar
  // a hero aparecer por um instante antes do preloader montar.
  const [mostrar, setMostrar] = useState(() => {
    if (typeof window === 'undefined') return pathname === '/'
    if (pathname !== '/') return false
    return !sessionStorage.getItem(CHAVE)
  })

  useEffect(() => {
    if (mostrar) sessionStorage.setItem(CHAVE, '1')
  }, [mostrar])

  if (!mostrar) return null
  return <Preloader />
}
