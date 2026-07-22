// src/components/layout/Navbar/Navbar.jsx — Maravilha Cortinas
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'
import { CONTATO, EMPRESA, HORARIO } from '@/lib/constants'
import logo from '@/assets/images/logo/logo.png'

const LINKS = [
  { href: '/',                                 label: 'Início' },
  { href: '/sobre',                            label: 'Sobre nós' },
  { href: '/blog',                             label: 'Blog' },
  { href: '/contato',                          label: 'Contato' },
]

const PRODUTOS = [
  { href: '/#projetos',                        label: 'Projetos' },
  { href: '/produtos-e-servicos/cortinas',     label: 'Cortinas' },
  { href: '/produtos-e-servicos/persianas',    label: 'Persianas' },
  { href: '/produtos-e-servicos/motorizacao',  label: 'Motorização' },
]

function IconeWA() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [naHero, setNaHero] = useState(true)
  const [aberto, setAberto] = useState(false)
  const [montado, setMontado] = useState(false)
  const drawerRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMontado(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const heroEl = document.getElementById('hero-titulo')
    if (heroEl) {
      const obs = new IntersectionObserver(
        ([e]) => setNaHero(e.isIntersecting),
        { threshold: 0.1 }
      )
      obs.observe(heroEl)
    }
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [aberto])

  useEffect(() => {
    if (!aberto) return
    const drawer = drawerRef.current
    if (!drawer) return
    const focusables = drawer.querySelectorAll('a[href], button:not([disabled])')
    const first = focusables[0]
    const last  = focusables[focusables.length - 1]
    const trap  = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }
    drawer.addEventListener('keydown', trap)
    first?.focus()
    return () => drawer.removeEventListener('keydown', trap)
  }, [aberto])

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape' && aberto) fechar() }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [aberto])

  const fechar = () => { setAberto(false); burgerRef.current?.focus() }

  const navClasses = [
    styles.navbar,
    montado ? styles.montado : '',
    scrolled && !naHero ? styles.scrolled : '',
    naHero ? styles.naHero : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={navClasses} role="banner">
        <div className={styles.inner}>

          {/* ── Logo header ── */}
          <a href="/" className={styles.logo} aria-label={`${EMPRESA.nome} — página inicial`} onClick={fechar}>
            <Image
              src={logo}
              alt={EMPRESA.nome}
              width={220}
              height={66}
              priority
              className={styles.logoImg}
            />
          </a>

          <div className={styles.navGroup}>
            <nav className={styles.nav} aria-label="Navegação principal">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`${styles.link} ${naHero ? styles.linkHero : ''}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <nav className={styles.navProdutos} aria-label="Nossos produtos">
              {PRODUTOS.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className={`${styles.linkProduto} ${naHero ? styles.linkHero : ''}`}
                >
                  {p.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href={WHATSAPP_URLS.orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            aria-label="Fale conosco pelo WhatsApp"
            onClick={() => trackWhatsApp('navbar-desktop')}
          >
            <IconeWA />
            Fale conosco
          </a>

          <button
            ref={burgerRef}
            className={[
              styles.burger,
              aberto ? styles.burgerAberto : '',
              naHero ? styles.burgerHero : '',
            ].filter(Boolean).join(' ')}
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-haspopup="dialog"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${aberto ? styles.overlayAberto : ''}`}
        onClick={fechar}
        aria-hidden="true"
      />

      {/* Drawer mobile */}
      <nav
        id="menu-mobile"
        ref={drawerRef}
        className={`${styles.drawer} ${aberto ? styles.drawerAberto : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <button className={styles.drawerClose} onClick={fechar} aria-label="Fechar menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Logo drawer ── */}
        <div className={styles.drawerLogo}>
          <Image
            src={logo}
            alt={EMPRESA.nome}
            width={140}
            height={42}
            className={styles.drawerLogoImg}
          />
        </div>

        <ul className={styles.drawerLista} role="list">
          {LINKS.map((l, i) => (
            <li key={l.href} style={{ '--i': i }}>
              <a href={l.href} className={styles.drawerLink} onClick={fechar}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className={styles.drawerListaProdutos} role="list">
          {PRODUTOS.map((p, i) => (
            <li key={p.href} style={{ '--i': LINKS.length + i }}>
              <a href={p.href} className={styles.drawerLinkProduto} onClick={fechar}>
                {p.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.drawerRodape}>
          <a
              href={WHATSAPP_URLS.orcamento}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerCta}
              onClick={() => { fechar(); trackWhatsApp('navbar-mobile') }}
          >
            <IconeWA />
            Agendar visita de medição
          </a>
          <address className={styles.drawerInfo}>
            <a href={`tel:${CONTATO.telefoneFormatado}`} className={styles.drawerTel}>
              {CONTATO.telefone}
            </a>
            <span className={styles.drawerHorario}>{HORARIO.resumo}</span>
          </address>
          <div className={styles.drawerProof}>
            <span className={styles.drawerStars} aria-hidden="true">★★★★★</span>
            <span className={styles.drawerProofTxt}>
              Nota {EMPRESA.nota} no Google · Ibitinga/SP
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
