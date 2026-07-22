// src/app/not-found.jsx — Maravilha Cortinas
import Link           from 'next/link'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import styles         from './not-found.module.css'

export const metadata = {
  title:  'Página não encontrada',
  robots: { index: false, follow: false },
}

const LINKS_UTEIS = [
  { href: '/',                            label: 'Página inicial' },
  { href: '/produtos-e-servicos',         label: 'Produtos e Serviços' },
  { href: '/sobre',                       label: 'Sobre a Maravilha' },
  { href: '/blog',                        label: 'Blog' },
  { href: '/contato',                     label: 'Contato' },
]

export default function NotFound() {
  return (
    <>
      <main className={styles.pagina}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Erro 404</span>
          </div>
          <h1 className={styles.titulo}>
            Essa página{' '}
            <em className={styles.tituloEm}>não existe mais.</em>
          </h1>
          <p className={styles.sub}>
            O link pode estar desatualizado ou a página foi movida. Veja algumas opções para continuar navegando:
          </p>

          <ul className={styles.links}>
            {LINKS_UTEIS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>{l.label} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}
