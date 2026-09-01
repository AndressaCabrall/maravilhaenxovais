// app/blog/[slug]/page.jsx — Maravilha Cortinas
// App Router · Next.js 14+ · CSS Modules · parser markdown inline

import { notFound }   from 'next/navigation'
import Image          from 'next/image'
import Link           from 'next/link'
import { POSTS, AUTORA, INDICACOES } from '@/data/posts'
import { siteConfig } from '@/lib/config'
import styles         from './slug.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { whatsappUrl } from '@/lib/whatsapp'

// ─────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────
export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }))
}

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title:       post.titulo,
    description: post.resumo,
    keywords:    post.palavrasChave,
    alternates:  { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title:       post.titulo,
      description: post.resumo,
      url:         `${siteConfig.url}/blog/${post.slug}`,
      images:      [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
  return `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${ano}`
}

/**
 * Converte inline markdown em React nodes
 * Suporte: **negrito**, *itálico*, `code`, [texto](url)
 */
function parseInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={i}>{part.slice(1, -1)}</em>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className={styles.code}>{part.slice(1, -1)}</code>
    // Link markdown [texto](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, texto, href] = linkMatch
      const isInterno = href.startsWith('/')
      return isInterno
        ? <Link key={i} href={href} className={styles.linkInterno}>{texto}</Link>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={styles.linkExterno}>{texto}</a>
    }
    return part
  })
}

/**
 * Converte o conteúdo em string para blocos React
 * Suporte:
 *   ## H2
 *   > blockquote (dica)
 *   - item de lista
 *   parágrafo normal
 */
function parseConteudo(conteudo) {
  const blocos = conteudo.trim().split(/\n\n+/)
  const elements = []
  let listaAtual = []

  function flushLista() {
    if (listaAtual.length === 0) return
    elements.push(
      <ul key={`ul-${elements.length}`} className={styles.lista}>
        {listaAtual.map((item, i) => (
          <li key={i} className={styles.listaItem}>
            {parseInline(item)}
          </li>
        ))}
      </ul>
    )
    listaAtual = []
  }

  blocos.forEach((bloco, i) => {
    const linhas = bloco.split('\n')

    // ── H2
    if (bloco.startsWith('## ')) {
      flushLista()
      elements.push(
        <h2 key={`h2-${i}`} className={styles.subtitulo}>
          {parseInline(bloco.replace(/^## /, ''))}
        </h2>
      )
      return
    }

    // ── Blockquote (dica)
    if (bloco.startsWith('> ')) {
      flushLista()
      const texto = bloco.replace(/^> /, '').replace(/\n> /g, '\n')
      elements.push(
        <blockquote key={`bq-${i}`} className={styles.dica}>
          <span className={styles.dicaIcone} aria-hidden="true">💡</span>
          <p className={styles.dicaTexto}>{parseInline(texto)}</p>
        </blockquote>
      )
      return
    }

    // ── Lista de itens (bloco com todas as linhas começando com -)
    const todasLista = linhas.every((l) => l.trimStart().startsWith('- '))
    if (todasLista) {
      flushLista()
      const items = linhas.map((l) => l.replace(/^\s*-\s/, ''))
      elements.push(
        <ul key={`ul-${i}`} className={styles.lista}>
          {items.map((item, j) => (
            <li key={j} className={styles.listaItem}>
              {parseInline(item)}
            </li>
          ))}
        </ul>
      )
      return
    }

    // ── Parágrafo
    flushLista()
    elements.push(
      <p key={`p-${i}`} className={styles.paragrafo}>
        {parseInline(bloco)}
      </p>
    )
  })

  flushLista()
  return elements
}

// ─────────────────────────────────────────────
// COMPONENTE
// ─────────────────────────────────────────────
export default function PostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relacionados = POSTS
    .filter((p) => p.id !== post.id)
    .slice(0, 2)

  const waUrl = whatsappUrl(
    `Olá Mara! Li o artigo "${post.titulo}" e gostaria de fazer uma consultoria personalizada.`
  )

  const postImageUrl = typeof post.imagem === 'object' ? post.imagem.src : post.imagem

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type':    'BlogPosting',
    headline:   post.titulo,
    description: post.resumo,
    image:      `${siteConfig.url}${postImageUrl}`,
    datePublished: post.dataPublicacao,
    dateModified:  post.dataPublicacao,
    author: {
      '@type': 'Person',
      name:    AUTORA.nome,
      jobTitle: AUTORA.cargo,
    },
    publisher: {
      '@type': 'Organization',
      name:    'Maravilha Cortinas',
      logo: {
        '@type': 'ImageObject',
        url:     `${siteConfig.url}/images/logo-maravilhaenxovais.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   `${siteConfig.url}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home', href: '/' },
        { nome: 'Blog', href: '/blog' },
        { nome: post.titulo, href: `/blog/${post.slug}` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          {/* ── Breadcrumb ── */}
          <nav className={styles.breadcrumb} aria-label="Navegação estrutural">
            <Link href="/" className={styles.breadcrumbLink}>Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbAtual}>{post.titulo}</span>
          </nav>

          {/* ── Voltar ── */}
          <Link href="/blog" className={styles.btnVoltar}>
            ← Voltar ao blog
          </Link>

          {/* ── Artigo ── */}
          <article className={styles.artigo}>

            {/* Header */}
            <header className={styles.header}>
              <div className={styles.headerMeta}>
                <span className={styles.categoria}>{post.categoria}</span>
                <span className={styles.metaSep} aria-hidden="true">·</span>
                <time dateTime={post.dataPublicacao} className={styles.data}>
                  {formatarData(post.dataPublicacao)}
                </time>
                <span className={styles.metaSep} aria-hidden="true">·</span>
                <span className={styles.tempo}>{post.tempoLeitura}</span>
              </div>

              <h1 className={styles.titulo}>{post.titulo}</h1>
              <p className={styles.resumo}>{post.resumo}</p>

              {/* Autora */}
              <div className={styles.autora}>
                <div className={styles.autoraAvatar} aria-hidden="true">
                  {AUTORA.avatar
                    ? <Image src={AUTORA.avatar} alt={AUTORA.nome} width={40} height={40} className={styles.autoraImg} />
                    : <span className={styles.autoraIniciais}>M</span>
                  }
                </div>
                <div>
                  <p className={styles.autoraNome}>{AUTORA.nome}</p>
                  <p className={styles.autoraCargo}>{AUTORA.cargo}</p>
                </div>
              </div>
            </header>

            {/* Imagem capa */}
            <div className={styles.imagemCapa}>
              <Image
                src={post.imagem}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className={styles.imagem}
                priority
                fetchPriority="high"
              />
            </div>

            {/* Conteúdo */}
            <div className={styles.conteudo}>
              {parseConteudo(post.conteudo)}
            </div>

            {/* CTA do post */}
            <div className={styles.ctaPost}>
              <p className={styles.ctaTexto}>
                Pronto para transformar o seu ambiente?{' '}
                <em>A Mara vai até você, entende o projeto e cuida de cada detalhe.</em>
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
                aria-label="Fazer consultoria personalizada pelo WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.521 5.857L0 24l6.335-1.521A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.002-1.368l-.357-.213-3.755.901.916-3.653-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Consultoria personalizada
              </a>
            </div>

            {/* Bio da autora */}
            <div className={styles.autoraBio}>
              <div className={styles.autoraBioAvatar} aria-hidden="true">
                {AUTORA.avatar
                  ? <Image src={AUTORA.avatar} alt={AUTORA.nome} width={64} height={64} className={styles.autoraBioImg} />
                  : <span className={styles.autoraBioIniciais}>M</span>
                }
              </div>
              <div className={styles.autoraBioTexto}>
                <p className={styles.autoraBioNome}>{AUTORA.nome}</p>
                <p className={styles.autoraBioCargo}>{AUTORA.cargo}</p>
                <p className={styles.autoraBioDesc}>{AUTORA.bio}</p>
                {AUTORA.instagram && (
                  <a
                    href={AUTORA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.autoraBioIG}
                    aria-label={`Instagram de ${AUTORA.nome}`}
                  >
                   @maravilhaenxovais
                  </a>
                )}
              </div>
            </div>

          </article>

          {/* ── Posts relacionados ── */}
          {relacionados.length > 0 && (
            <aside className={styles.relacionados}>
              <h2 className={styles.relacionadosTitulo}>
                Leia <em>também</em>
              </h2>
              <div className={styles.relacionadosGrid}>
                {relacionados.map((rel) => (
                  <article key={rel.id} className={styles.relCard}>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className={styles.relImgLink}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className={styles.relImagem}>
                        <Image
                          src={rel.imagem}
                          alt={rel.alt}
                          fill
                          sizes="80px"
                          className={styles.relImg}
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className={styles.relBody}>
                      <span className={styles.relCategoria}>{rel.categoria}</span>
                      <h3 className={styles.relTitulo}>
                        <Link href={`/blog/${rel.slug}`} className={styles.relTituloLink}>
                          {rel.titulo}
                        </Link>
                      </h3>
                      <span className={styles.relTempo}>{rel.tempoLeitura}</span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          )}

          {/* ── Indicações regionais ── */}
          <aside className={styles.indicacoes} aria-label="Especialistas em outras regiões">
            <h2 className={styles.indicacoesTitulo}>Especialistas em outras regiões</h2>
            <p className={styles.indicacoesDesc}>
              A Maravilha Cortinas atende Ibitinga e região. Se você está em outra cidade,
              confira estas especialistas indicadas:
            </p>
            <ul className={styles.indicacoesLista}>
              {INDICACOES.map((ind) => (
                <li key={ind.url} className={styles.indicacoesItem}>
                  <a
                    href={ind.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.indicacoesLink}
                  >
                    <span className={styles.indicacoesCidade}>{ind.cidade}</span>
                    <span className={styles.indicacoesNome}>{ind.nome} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}
