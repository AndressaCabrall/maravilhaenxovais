// src/app/blog/page.jsx — Maravilha Cortinas & Persianas
import Image          from 'next/image'
import Link           from 'next/link'
import styles         from './blog.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import { POSTS }      from '@/data/posts'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { DOMINIO }    from '@/lib/constants'

export const metadata = {
  title:       'Blog — Dicas e Tendências de Cortinas e Persianas',
  description: 'Guias, comparativos e tendências de cortinas e persianas sob medida. Conteúdo criado pela Mara, especialista com 16 anos de experiência em Ibitinga e região SP.',
  alternates:  { canonical: `${DOMINIO}/blog` },
}

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
  return `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${ano}`
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home', href: '/' },
        { nome: 'Blog', href: '/blog' },
      ]} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          {/* ── Header ── */}
          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Blog · Dicas e tendências</span>
            </div>
            <h1 className={styles.titulo}>
              Antes do seu projeto,{' '}
              <em className={styles.tituloEm}>leia isso.</em>
            </h1>
            <p className={styles.subtitulo}>
              Guias, comparativos e tendências de cortinas e persianas —
              escritos pela Mara com 16 anos de experiência em Ibitinga e região.
            </p>
          </header>

          {/* ── Grid de posts ── */}
          <div className={styles.grid}>
            {POSTS.map((post, i) => (
              <article key={post.id} className={styles.card}>

                {/* Imagem */}
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.cardImgLink}
                  aria-label={`Ler: ${post.titulo}`}
                  tabIndex={-1}
                >
                  <div className={styles.cardImagem}>
                    <Image
                      src={post.imagem}
                      alt={post.alt}
                      fill
                      unoptimized
                      className={styles.imagem}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      priority={i === 0}
                    />
                    <span className={styles.cardCat}>{post.categoria}</span>
                  </div>
                </Link>

                {/* Corpo */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <time dateTime={post.dataPublicacao} className={styles.cardData}>
                      {formatarData(post.dataPublicacao)}
                    </time>
                    <span className={styles.cardSep} aria-hidden="true">·</span>
                    <span className={styles.cardTempo}>{post.tempoLeitura}</span>
                  </div>

                  <h2 className={styles.cardTitulo}>
                    <Link href={`/blog/${post.slug}`} className={styles.cardTituloLink}>
                      {post.titulo}
                    </Link>
                  </h2>

                  <p className={styles.cardResumo}>{post.resumo}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.cardLer}
                    aria-label={`Ler artigo: ${post.titulo}`}
                  >
                    Ler artigo →
                  </Link>
                </div>

              </article>
            ))}
          </div>

          {/* ── Rodapé da página ── */}
          <div className={styles.voltar}>
            <Link href="/" className={styles.btnVoltar}>
              ← Voltar ao site
            </Link>
          </div>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}

