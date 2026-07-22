// src/components/layout/SmoothScroll/SmoothScroll.jsx — scroll suave global via GSAP ScrollSmoother
'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null)

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

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}
