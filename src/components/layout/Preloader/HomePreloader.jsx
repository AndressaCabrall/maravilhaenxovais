// src/components/layout/Preloader/HomePreloader.jsx — só exibe o Preloader no primeiro carregamento da home
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Preloader from './Preloader'

const CHAVE = 'maravilha-preloader-exibido'

export default function HomePreloader() {
  const pathname = usePathname()
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    if (pathname !== '/') return
    if (sessionStorage.getItem(CHAVE)) return
    sessionStorage.setItem(CHAVE, '1')
    setMostrar(true)
  }, [pathname])

  if (!mostrar) return null
  return <Preloader />
}
