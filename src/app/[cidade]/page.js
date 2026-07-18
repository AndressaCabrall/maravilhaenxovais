// src/app/[cidade]/page.jsx — Maravilha Cortinas & Persianas
// Páginas SEO local — cidades da região de Ibitinga/SP
import { notFound } from 'next/navigation'
import Link         from 'next/link'
import styles       from './cidade.module.css'
import { CIDADES }  from '@/data/cidades'
import { CONTATO, DOMINIO } from '@/lib/constants'
import Navbar        from '@/components/layout/Navbar/Navbar'
import Footer        from '@/components/layout/Footer/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { ENDERECO }  from '@/lib/constants'

export async function generateStaticParams() {
  return CIDADES.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({ params }) {
  const cidade = CIDADES.find((c) => c.slug === params.cidade)
  if (!cidade) return {}
  return {
    title:       cidade.titulo,
    description: cidade.descricao,
    keywords:    cidade.palavrasChave,
    alternates:  { canonical: `${DOMINIO}/${cidade.slug}` },
    openGraph: {
      title:       cidade.titulo,
      description: cidade.descricao,
      url:         `${DOMINIO}/${cidade.slug}`,
      images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: cidade.titulo }],
    },
  }
}

export default function CidadePage({ params }) {
  const cidade = CIDADES.find((c) => c.slug === params.cidade)
  if (!cidade) notFound()

  const outrasCidades = CIDADES.filter((c) => c.slug !== cidade.slug && c.highlight)
  const waUrl = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(`Olá! Vi o site e gostaria de solicitar um orçamento em ${cidade.nome}.`)}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       `Cortinas e Persianas Sob Medida em ${cidade.nome}`,
    provider: {
      '@type':    'LocalBusiness',
      name:       'Maravilha Cortinas',
      telephone:  CONTATO.telefoneFormatado,
      address: {
        '@type':         'PostalAddress',
        streetAddress:   ENDERECO.logradouro,
        addressLocality: ENDERECO.cidade,
        addressRegion:   ENDERECO.estado,
        postalCode:      ENDERECO.cep,
        addressCountry:  'BR',
      },
    },
    areaServed: { '@type': 'City', name: cidade.nome },
    description: cidade.descricao,
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home', href: '/' },
        { nome: cidade.nome, href: `/${cidade.slug}` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main className={styles.pagina}>
        <div className={styles.container}>

          {/* ── Hero / H1 ── */}
          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Atendemos {cidade.nome}, {cidade.estado}</span>
            </div>
            <h1 className={styles.titulo}>
              {cidade.hero.titulo}{' '}
              <em className={styles.tituloEm}>{cidade.hero.tituloDestaque}</em>
            </h1>
            <p className={styles.sub}>{cidade.hero.subtitulo}</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaHero}
              aria-label={`Agendar visita de medição  em ${cidade.nome}`}
            >
              Agendar visita  em {cidade.nome} →
            </a>
          </header>

          {/* ── Intro ── */}
          <section className={styles.sec} aria-labelledby={`intro-${cidade.slug}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Atendimento local</span>
            </div>
            <h2 id={`intro-${cidade.slug}`} className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em {cidade.nome}.</em>
            </h2>
            {cidade.intro.trim().split('\n\n').map((p, i) => (
              <p key={i} className={styles.texto}>{p.trim()}</p>
            ))}
          </section>

          {/* ── Serviços ── */}
          <section className={styles.sec} aria-labelledby={`servicos-${cidade.slug}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>O que oferecemos</span>
            </div>
            <h2 id={`servicos-${cidade.slug}`} className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em {cidade.nome}.</em>
            </h2>
            <ul className={styles.servicos} aria-label="Lista de serviços">
              {[
                'Cortina Wave sob medida',
                'Cortina Prega Macho sob medida',
                'Cortina Franzida sob medida',
                'Cortina Blackout sob medida',
                'Cortina em Linho Natural',
                'Cortina para Pé Direito Duplo',
                'Persiana Tela Solar',
                'Persiana Blackout',
                'Persiana Double Vision',
                'Persiana Rolô',
                'Persiana Romana',
                'Motorização de cortinas e persianas',
              ].map((s) => (
                <li key={s} className={styles.servicoItem}>
                  <span className={styles.servicoIco} aria-hidden="true">✦</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Diferenciais ── */}
          <section className={styles.sec} aria-labelledby={`dif-${cidade.slug}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Por que escolher a Maravilha</span>
            </div>
            <h2 id={`dif-${cidade.slug}`} className={styles.secTitulo}>
              Atendimento que{' '}
              <em className={styles.secTituloEm}>faz a diferença.</em>
            </h2>
            <div className={styles.difs}>
              {[
                { num: '01', titulo: 'Visita de medição', desc: `Vamos até você em ${cidade.nome} mediante agendamento. Medição profissional antes de qualquer compromisso.` },
                { num: '02', titulo: 'Instalação profissional', desc: 'A instalação possui custo adicional, informado no orçamento. Sem surpresas no processo.' },
                { num: '03', titulo: 'Loja da Fábrica', desc: 'Produção própria em Ibitinga — sem intermediários. Você paga pelo produto, não pela cadeia de distribuição.' },
                { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Ibitinga e toda a região recomendam.' },
              ].map((d) => (
                <div key={d.num} className={styles.difCard}>
                  <span className={styles.difNum}>{d.num} —</span>
                  <h3 className={styles.difTitulo}>{d.titulo}</h3>
                  <p className={styles.difDesc}>{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section
            className={styles.sec}
            aria-labelledby={`faq-${cidade.slug}`}
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Perguntas frequentes</span>
            </div>
            <h2 id={`faq-${cidade.slug}`} className={styles.secTitulo}>
              Dúvidas sobre o atendimento{' '}
              <em className={styles.secTituloEm}>em {cidade.nome}.</em>
            </h2>
            <div className={styles.faqLista}>
              {cidade.faq.map((item) => (
                <div
                  key={item.pergunta}
                  className={styles.faqItem}
                  itemScope
                  itemType="https://schema.org/Question"
                  itemProp="mainEntity"
                >
                  <h3 className={styles.faqQ} itemProp="name">{item.pergunta}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className={styles.faqA} itemProp="text">{item.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Final ── */}
          <section className={styles.ctaFinal} aria-label="Solicitar orçamento">
            <h2 className={styles.ctaFinalTitulo}>
              Pronta para transformar seu ambiente{' '}
              <em className={styles.ctaFinalEm}>em {cidade.nome}?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Visita de medição , sem compromisso. Nossa equipe vai até você, mede e apresenta as melhores opções.
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Agendar visita em {cidade.nome} →
            </a>
          </section>

          {/* ── Outras cidades ── */}
          {outrasCidades.length > 0 && (
            <section className={styles.sec} aria-label="Outras cidades atendidas">
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span className={styles.eyebrowText}>Também atendemos</span>
              </div>
              <div className={styles.cidadesGrid}>
                {outrasCidades.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className={styles.cidadeLink}>
                    <span className={styles.cidadeNome}>{c.nome}</span>
                    <span className={styles.cidadeDist}>{c.dist} →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className={styles.voltar}>
            <Link href="/" className={styles.btnVoltar}>← Voltar ao site</Link>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
