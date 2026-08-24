// src/components/layout/Preloader/HomePreloader.jsx — só exibe o Preloader no primeiro carregamento da home
'use client'

import { usePathname } from 'next/navigation'
import Preloader from './Preloader'

export default function HomePreloader() {
  const pathname = usePathname()
  // A decisão real já foi tomada pelo script inline no <head> (antes do
  // primeiro paint, via data-preloader no <html>) — aqui só filtramos
  // fora da home, onde o preloader nunca deve montar.
  if (pathname !== '/') return null
  return <Preloader />
}
