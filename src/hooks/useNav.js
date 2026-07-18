// hooks/useNav.js
// Maravilha Cortinas — estado do scroll para a Navbar
import { useEffect, useState } from 'react'

export function useNav() {
  const [scrolled, setScrolled] = useState(false)
  const [naHero, setNaHero]     = useState(true)

  useEffect(() => {
    // Scroll
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Hero visível
    const heroEl = document.getElementById('hero-titulo')
    if (heroEl) {
      const observer = new IntersectionObserver(
        ([entry]) => setNaHero(entry.isIntersecting),
        { threshold: 0.1 }
      )
      observer.observe(heroEl)
      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', onScroll)
      }
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled, naHero }
}

