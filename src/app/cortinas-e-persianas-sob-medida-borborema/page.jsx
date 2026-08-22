// src/app/cortinas-e-persianas-sob-medida-borborema/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de solicitar um orçamento em Borborema.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Borborema SP',
  description: 'Cortinas e persianas sob medida em Borborema SP. Instalação não inclusa. Atendimento da Maravilha Cortinas de Ibitinga — +16 anos de experiência.',
  keywords:    ['cortinas sob medida Borborema', 'persianas Borborema SP', 'cortinas Borborema', 'instalação cortinas Borborema'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-borborema` },
  openGraph: {
    title:       'Cortinas e Persianas Sob Medida em Borborema SP',
    description: 'Cortinas e persianas sob medida em Borborema SP. Instalação não inclusa. Atendimento da Maravilha Cortinas de Ibitinga — +16 anos de experiência.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-borborema`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Borborema SP' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Borborema',
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
  areaServed:  { '@type': 'City', name: 'Borborema' },
  description: 'Cortinas e persianas sob medida em Borborema SP. Instalação não inclusa. Atendimento da Maravilha Cortinas de Ibitinga — +16 anos de experiência.',
}

const faq = [
  { q: 'A Maravilha Cortinas atende em Borborema?', a: 'Sim! Borborema fica a ~25km de Ibitinga e está dentro da nossa área de atendimento. Consulte disponibilidade e condições de visita pelo WhatsApp.' },
  { q: 'Há taxa de deslocamento para Borborema?', a: 'As condições de atendimento variam conforme a agenda. Consulte pelo WhatsApp — alinhamos o melhor formato para o seu caso.' },
  { q: 'Quais produtos estão disponíveis em Borborema?', a: 'Todos os produtos: cortinas wave, blackout, linho, prega macho, persianas rolô, double vision, blackout, tela solar e motorização.' },
  { q: 'Como faço para agendar?', a: 'Pelo WhatsApp — respondemos rápido e alinhamos disponibilidade de agenda para Borborema.' },
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
  { num: '01', titulo: 'Visita de medição', desc: 'Vamos até você em Borborema mediante agendamento. Medição profissional antes de qualquer compromisso.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'A instalação possui custo adicional, informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Loja da Fábrica', desc: 'Produção própria em Ibitinga — sem intermediários. Você paga pelo produto, não pela cadeia de distribuição.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Borborema e toda a região recomendam.' },
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
        { nome: 'Borborema', href: '/cortinas-e-persianas-sob-medida-borborema' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Borborema, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.tituloEm}>em Borborema, SP.</em>
            </h1>
            <p className={styles.sub}>
              Atendimento da Maravilha Cortinas de Ibitinga — instalação profissional disponível em Borborema e região. Instalação possui custo adicional.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Agendar visita em Borborema →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Borborema.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Borborema com toda a linha de cortinas e persianas sob medida. Somos Loja da Fábrica em Ibitinga — produzimos sob medida sem intermediários há mais de 16 anos. Instalação sob consulta.</p>
            <p className={styles.texto}>Borborema fica a aproximadamente 25km de Ibitinga. Trabalhamos com todos os modelos de cortina e persiana sob medida — do clássico ao contemporâneo, do blackout ao double vision motorizado.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Borborema.</em>
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
              <em className={styles.secTituloEm}>em Borborema.</em>
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
              <em className={styles.ctaFinalEm}>em Borborema?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Visita de medição sem compromisso. Nossa equipe vai até você, mede e apresenta as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Agendar visita em Borborema →
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
