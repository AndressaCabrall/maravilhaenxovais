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

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const smoother = ScrollSmoother.create({
        wrapper:        '#smooth-wrapper',
        content:        '#smooth-content',
        smooth:         1.2,
        effects:        true,
        smoothTouch:    0.1,
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
