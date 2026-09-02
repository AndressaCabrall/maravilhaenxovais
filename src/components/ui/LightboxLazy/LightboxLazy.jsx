// src/components/ui/LightboxLazy/LightboxLazy.jsx — Maravilha Cortinas
// Wrapper que junta o componente e o CSS da lib num só chunk, carregado
// via next/dynamic — assim o CSS também só baixa quando o lightbox abre.
'use client'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function LightboxLazy(props) {
  return <Lightbox {...props} />
}
