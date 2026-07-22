// src/components/sections/Cta/CtaFooterPin.jsx — pina o CTA e revela o Footer por cima via GSAP
'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cta    from './Cta'
import Footer from '@/components/layout/Footer/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function CtaFooterPin() {
  const wrapRef   = useRef(null)
  const ctaRef    = useRef(null)
  const footerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger:      ctaRef.current,
        start:        'top top',
        endTrigger:   footerRef.current,
        end:          'top top',
        pin:          true,
        pinSpacing:   false,
      })
      return () => st.kill()
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef}>
      <div ref={ctaRef}>
        <Cta />
      </div>
      <div ref={footerRef} style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  )
}
