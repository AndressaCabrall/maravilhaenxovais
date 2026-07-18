// src/components/ui/RevealWrapper/RevealWrapper.jsx — Maravilha Cortinas
// Animação via CSS puro com IntersectionObserver — sem Framer Motion
'use client'

import { useEffect, useRef } from 'react'
import styles from './RevealWrapper.module.css'

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`
          el.classList.add(styles.visivel)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </Tag>
  )
}

