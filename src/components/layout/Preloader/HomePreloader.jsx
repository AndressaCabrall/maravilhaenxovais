// src/components/layout/Preloader/HomePreloader.jsx — só exibe o Preloader na home
'use client'

import { usePathname } from 'next/navigation'
import Preloader from './Preloader'

export default function HomePreloader() {
  const pathname = usePathname()
  if (pathname !== '/') return null
  return <Preloader />
}
