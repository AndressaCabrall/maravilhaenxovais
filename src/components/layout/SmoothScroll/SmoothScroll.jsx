// src/components/layout/SmoothScroll/SmoothScroll.jsx — scroll suave global via GSAP ScrollSmoother
'use client'

import { useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null)
  const pathname = usePathname()

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    // Só em desktop: no touch, o sistema já entrega scroll suave nativo
    // (momentum scrolling, direto no compositor/GPU) — o ScrollSmoother
    // reimplementa isso em JS na main thread, o que em mobile só piora o
    // INP sem ganho visual que compense. Em desktop o efeito de inércia/
    // parallax é real (mouse não tem isso de graça), então mantemos.
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
      const smoother = ScrollSmoother.create({
        wrapper:        '#smooth-wrapper',
        content:        '#smooth-content',
        smooth:         1.2,
        effects:        true,
        normalizeScroll: true,
      })
      return () => smoother.kill()
    })

    return () => mm.revert()
  }, [])

  // Recalcula alturas/triggers ao trocar de rota — páginas com menos ou
  // mais seções deixavam o ScrollSmoother com medições da página anterior.
  useLayoutEffect(() => {
    ScrollSmoother.get()?.scrollTo(0, false)

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}
