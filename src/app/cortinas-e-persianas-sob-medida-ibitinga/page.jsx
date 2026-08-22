// src/app/cortinas-e-persianas-sob-medida-ibitinga/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de solicitar um orçamento em Ibitinga.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Ibitinga SP',
  description: 'Cortinas e persianas sob medida em Ibitinga SP — Loja da Fábrica, produção própria, +16 anos de experiência. Instalação não inclusa.',
  keywords:    ['cortinas sob medida Ibitinga', 'persianas Ibitinga SP', 'loja de cortinas Ibitinga', 'cortina wave Ibitinga'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-ibitinga` },
  openGraph: {
    title:       'Cortinas e Persianas Sob Medida em Ibitinga SP',
    description: 'Cortinas e persianas sob medida em Ibitinga SP — Loja da Fábrica, produção própria, +16 anos de experiência. Instalação não inclusa.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-ibitinga`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Ibitinga SP' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Ibitinga',
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
  areaServed:  { '@type': 'City', name: 'Ibitinga' },
  description: 'Cortinas e persianas sob medida em Ibitinga SP — Loja da Fábrica, produção própria, +16 anos de experiência.',
}

const faq = [
  { q: 'Onde fica a loja da Maravilha Cortinas em Ibitinga?', a: 'Estamos na Av. Sete de Setembro, 595, Centro, Ibitinga-SP. Atendimento de segunda a sexta, das 8h às 17h.' },
  { q: 'Como funciona a visita de medição em Ibitinga?', a: 'A visita é agendada pelo WhatsApp no horário que for melhor para você — sem taxa de deslocamento dentro de Ibitinga.' },
  { q: 'A instalação está inclusa no orçamento?', a: 'A instalação possui custo adicional, informado no orçamento. Trabalhamos com instalação profissional em Ibitinga.' },
  { q: 'Quais modelos estão disponíveis?', a: 'Todos os modelos: cortinas wave, blackout, linho, franzida, prega macho e persianas rolô, double vision, blackout, tela solar e motorizadas.' },
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
  { num: '01', titulo: 'Visita de medição', desc: 'Vamos até você em Ibitinga mediante agendamento. Medição profissional antes de qualquer compromisso.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'A instalação possui custo adicional, informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Loja da Fábrica', desc: 'Produção própria em Ibitinga — sem intermediários. Você paga pelo produto, não pela cadeia de distribuição.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Ibitinga e toda a região recomendam.' },
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
        { nome: 'Home',      href: '/' },
        { nome: 'Ibitinga',  href: '/cortinas-e-persianas-sob-medida-ibitinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Ibitinga, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.tituloEm}>em Ibitinga, SP.</em>
            </h1>
            <p className={styles.sub}>
              Somos a Loja da Fábrica em Ibitinga — produção própria, visita técnica e mais de 16 anos de experiência. Instalação possui custo adicional.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Agendar visita em Ibitinga →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Ibitinga.</em>
            </h2>
            <p className={styles.texto}>
              A Maravilha Cortinas é a Loja da Fábrica de cortinas e persianas sob medida em Ibitinga. Produzimos tudo aqui mesmo, sem intermediários — mais de 16 anos cuidando de cada detalhe para quem mora na cidade.
            </p>
            <p className={styles.texto}>
              Trabalhamos com todos os modelos: cortina wave, blackout, linho, prega macho, franzida, persianas rolô, double vision, tela solar e motorização. Do primeiro contato à instalação, cuidamos de tudo.
            </p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Ibitinga.</em>
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
              <em className={styles.secTituloEm}>em Ibitinga.</em>
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
              <em className={styles.ctaFinalEm}>em Ibitinga?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Visita de medição sem compromisso. Nossa equipe vai até você, mede e apresenta as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Agendar visita em Ibitinga →
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
