// src/app/cortinas-e-persianas-sob-medida-jaboticabal/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de uma consultoria personalizada em Jaboticabal.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Jaboticabal SP',
  description: 'Cortinas e persianas sob medida em Jaboticabal SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
  keywords:    ['cortinas sob medida Jaboticabal', 'persianas Jaboticabal SP', 'cortinas Jaboticabal', 'instalação cortinas Jaboticabal'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-jaboticabal` },
  openGraph: {
    title:       'Cortinas e Persianas Sob Medida em Jaboticabal SP',
    description: 'Cortinas e persianas sob medida em Jaboticabal SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-jaboticabal`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Jaboticabal SP' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Jaboticabal',
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
  areaServed:  { '@type': 'City', name: 'Jaboticabal' },
  description: 'Cortinas e persianas sob medida em Jaboticabal SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
}

const faq = [
  { q: 'A Maravilha Cortinas atende em Jaboticabal?', a: 'Sim! Jaboticabal fica a ~40km de Ibitinga e está na nossa área de atendimento. Consulte disponibilidade e condições de visita pelo WhatsApp.' },
  { q: 'Quais modelos estão disponíveis em Jaboticabal?', a: 'Todos os modelos: cortinas wave, blackout, linho, franzida, prega macho e persianas rolô, double vision, blackout, tela solar e motorizadas.' },
  { q: 'A instalação está inclusa?', a: 'Instalação sob consulta, com valor informado no orçamento. Trabalhamos com instalação profissional em Jaboticabal.' },
  { q: 'Como entro em contato?', a: 'Pelo WhatsApp — respondemos rápido e alinhamos disponibilidade de agenda para Jaboticabal.' },
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
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Vamos até você em Jaboticabal e ajudamos a escolher o tecido certo para o seu ambiente. Medição profissional antes de qualquer compromisso.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'Instalação sob consulta, com valor informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Ateliê especializado', desc: 'Cada projeto pensado sob medida em Ibitinga. Você paga por um trabalho de detalhe, não por intermediários.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Jaboticabal e toda a região recomendam.' },
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
        { nome: 'Jaboticabal', href: '/cortinas-e-persianas-sob-medida-jaboticabal' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Jaboticabal, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.tituloEm}>em Jaboticabal, SP.</em>
            </h1>
            <p className={styles.sub}>
              Um ateliê especializado de Ibitinga — consultoria personalizada em Jaboticabal e região. Instalação sob consulta.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Consultoria personalizada em Jaboticabal →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Jaboticabal.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Jaboticabal com toda a linha de cortinas e persianas sob medida. Um ateliê especializado em Ibitinga, a ~40km — mais de 16 anos de consultoria personalizada. A instalação possui custo adicional, informado no orçamento.</p>
            <p className={styles.texto}>Trabalhamos com todos os modelos: cortina wave, blackout, linho, prega macho, persianas rolô, double vision, tela solar e motorização. Do primeiro contato à instalação, cuidamos de tudo.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Jaboticabal.</em>
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
              <em className={styles.secTituloEm}>em Jaboticabal.</em>
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
              <em className={styles.ctaFinalEm}>em Jaboticabal?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Consultoria personalizada sem compromisso. Nossa equipe vai até você, mede e apresenta as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Consultoria personalizada em Jaboticabal →
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
