// src/components/layout/Footer/Footer.jsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo/logo.png'
import styles from './Footer.module.css'
import { CONTATO, ENDERECO, EMPRESA, AREA_ATENDIMENTO } from '@/lib/constants'
import { WHATSAPP_URLS, trackWhatsApp } from '@/lib/whatsapp'

const NAV_PRINCIPAL = [
  { href: '/',                     label: 'Início' },
  { href: '/produtos-e-servicos',  label: 'Produtos e Serviços' },
  { href: '/sobre',                label: 'Sobre' },
  { href: '/blog',                 label: 'Blog' },
  { href: '/contato',              label: 'Contato' },
]

const NAV_PRODUTOS = [
  { href: '/produtos-e-servicos/cortinas',    label: 'Cortinas' },
  { href: '/produtos-e-servicos/persianas',   label: 'Persianas' },
  { href: '/produtos-e-servicos/motorizacao', label: 'Motorização' },
]

function IconeInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconeFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconeWA() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  const ano = new Date().getFullYear()
  const cidadesDestaque = AREA_ATENDIMENTO.filter((c) => c.highlight)

  return (
    <footer id="footer" className={styles.footer} role="contentinfo">

      {/* ── Faixa de contato ── */}
      <div className={styles.faixa}>
        <div className={styles.container}>
          <div className={styles.faixaGrade}>

            <Link href="/" className={styles.logo} aria-label={`${EMPRESA.nome} — início`}>
              <Image src={logo} alt={EMPRESA.nome} width={150} height={52} className={styles.logoImg} />
            </Link>

            <div className={styles.faixaItem}>
              <span className={styles.faixaLabel}>Sobre</span>
              <span className={styles.faixaValor}>Ateliê especializado em cortinas e persianas desde 2011</span>
            </div>

            <div className={styles.faixaItem}>
              <span className={styles.faixaLabel}>Endereço</span>
              <span className={styles.faixaValor}>
                {ENDERECO.logradouro}, {ENDERECO.bairro}, {ENDERECO.cidade}–{ENDERECO.estado}
              </span>
            </div>

            <div className={styles.faixaItem}>
              <a href={`tel:${CONTATO.telefoneFormatado}`} className={styles.faixaLink}>{CONTATO.telefone}</a>
              <a
                href={WHATSAPP_URLS.geral}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faixaLink}
                onClick={() => trackWhatsApp('footer-faixa')}
              >
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Colunas de navegação ── */}
      <div className={styles.corpo}>
        <div className={styles.container}>
          <div className={styles.grade}>

            <div className={styles.col}>
              <h3 className={styles.colTitulo}>Navegar</h3>
              <ul className={styles.lista}>
                {NAV_PRINCIPAL.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.listaLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h3 className={styles.colTitulo}>Produtos</h3>
              <ul className={styles.lista}>
                {NAV_PRODUTOS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.listaLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h3 className={styles.colTitulo}>Atendemos em</h3>
              <ul className={styles.lista}>
                {cidadesDestaque.map(c => (
                  <li key={c.nome}>
                    <Link href={`/${c.slug}`} className={styles.listaLink}>{c.nome}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h3 className={styles.colTitulo}>Redes</h3>
              <div className={styles.sociais}>
                <a href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className={styles.social} aria-label="Instagram da Maravilha Cortinas">
                  <IconeInstagram />
                </a>
                <a href={CONTATO.facebookUrl} target="_blank" rel="noopener noreferrer"
                  className={styles.social} aria-label="Facebook da Maravilha Cortinas">
                  <IconeFacebook />
                </a>
                <a
                  href={WHATSAPP_URLS.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="WhatsApp da Maravilha Cortinas"
                  onClick={() => trackWhatsApp('footer-social')}
                >
                  <IconeWA />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.copy}>© {ano} {EMPRESA.nome}. Todos os direitos reservados.</p>
            <Link href="/privacidade" className={styles.bottomLink}>Privacidade</Link>
            <p className={styles.cred}>
              Desenvolvido por{' '}
              <a href="https://outvisionxr.com" target="_blank" rel="noopener noreferrer" className={styles.credLink}>
                Outvision XR
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
