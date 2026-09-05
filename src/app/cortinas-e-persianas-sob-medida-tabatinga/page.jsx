// src/app/cortinas-e-persianas-sob-medida-tabatinga/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de uma consultoria personalizada em Tabatinga.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Tabatinga SP',
  description: 'Cortinas e persianas sob medida em Tabatinga SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
  keywords:    ['cortinas sob medida Tabatinga', 'persianas Tabatinga SP', 'cortinas Tabatinga', 'instalação cortinas Tabatinga'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-tabatinga` },
  openGraph: {
    type:        'website',
    locale:      'pt_BR',
    siteName:    'Maravilha Cortinas',
    title:       'Cortinas e Persianas Sob Medida em Tabatinga SP',
    description: 'Cortinas e persianas sob medida em Tabatinga SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-tabatinga`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Tabatinga SP' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Cortinas e Persianas Sob Medida em Tabatinga SP',
    description: 'Cortinas e persianas sob medida em Tabatinga SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
    images:      [`${DOMINIO}/images/og-image.jpg`],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Tabatinga',
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
  areaServed:  { '@type': 'City', name: 'Tabatinga' },
  description: 'Cortinas e persianas sob medida em Tabatinga SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
}

const faq = [
  { q: 'Como a consultoria me ajuda com a poeira e o calor forte da região de Tabatinga?', a: 'O clima do interior e a proximidade com o campo exigem escolhas inteligentes de materiais. Na consultoria, ajudamos você a selecionar tecidos nobres com tramas especiais que repelem a poeira e persianas tecnológicas — como as telas solares com tratamento antiestático, indicadas para áreas gourmet. Isso garante o bloqueio dos raios UV, protegendo os seus móveis planejados, além de conforto térmico e facilidade na limpeza.' },
  { q: 'A instalação está inclusa no orçamento em Tabatinga?', a: 'A instalação é sob consulta, com o valor informado no orçamento. Trabalhamos com instalação profissional e você sabe todas as condições antes de fechar.' },
]

const servicos = [
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
]

const diferenciais = [
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Consultoria personalizada para Tabatinga: ajudamos a escolher o tecido e o modelo certos para o seu ambiente.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'Instalação sob consulta, com valor informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Ateliê especializado', desc: 'Cada projeto pensado sob medida em Ibitinga. Você paga por um trabalho de detalhe, não por intermediários.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Tabatinga e toda a região recomendam.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name:    item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',        href: '/' },
        { nome: 'Tabatinga', href: '/cortinas-e-persianas-sob-medida-tabatinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Tabatinga, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Esqueça as soluções comuns.{' '}
              <em className={styles.tituloEm}>Ateliê especializado em cortinas e persianas de alto padrão.</em>
            </h1>
            <p className={styles.sub}>
              Fuja do óbvio com projetos desenhados sob medida para a sua arquitetura, para as residências mais exclusivas de Tabatinga.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Consultoria personalizada em Tabatinga →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Tabatinga.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Tabatinga com toda a linha de cortinas e persianas sob medida. Somos um ateliê especializado em Ibitinga — cada projeto nasce de uma consultoria personalizada há mais de 16 anos. Instalação sob consulta.</p>
            <p className={styles.texto}>Tabatinga fica a aproximadamente 25km de Ibitinga. Trabalhamos com todos os modelos de cortina e persiana sob medida — do clássico ao contemporâneo, do blackout ao double vision motorizado.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Tabatinga.</em>
            </h2>
            <ul className={styles.servicos}>
              {servicos.map((s) => (
                <li key={s} className={styles.servicoItem}>
                  <span className={styles.servicoIco} aria-hidden="true">✦</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Atendimento que{' '}
              <em className={styles.secTituloEm}>faz a diferença.</em>
            </h2>
            <div className={styles.difs}>
              {diferenciais.map((d) => (
                <div key={d.num} className={styles.difCard}>
                  <span className={styles.difNum}>{d.num} —</span>
                  <h3 className={styles.difTitulo}>{d.titulo}</h3>
                  <p className={styles.difDesc}>{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Dúvidas sobre o atendimento{' '}
              <em className={styles.secTituloEm}>em Tabatinga.</em>
            </h2>
            <div className={styles.faqLista}>
              {faq.map(({ q, a }) => (
                <div key={q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{q}</h3>
                  <p className={styles.faqA}>{a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.ctaFinal}>
            <h2 className={styles.ctaFinalTitulo}>
              Pronta para transformar seu ambiente{' '}
              <em className={styles.ctaFinalEm}>em Tabatinga?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Consultoria personalizada com quem é especialista. Entendemos o seu ambiente e apresentamos as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Consultoria personalizada em Tabatinga →
            </a>
          </div>

          <div className={styles.voltar}>
            <Link href="/" className={styles.btnVoltar}>← Voltar ao site</Link>
          </div>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}
