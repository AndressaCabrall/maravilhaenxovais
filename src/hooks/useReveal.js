// hooks/useReveal.js
// Maravilha Cortinas — IntersectionObserver para animações de entrada
import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.unobserve(el)
        }
      },
      {
        threshold:  options.threshold  ?? 0.12,
        rootMargin: options.rootMargin ?? '-60px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visivel }
}

