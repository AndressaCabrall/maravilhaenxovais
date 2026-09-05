// src/app/cortinas-e-persianas-sob-medida-taquaritinga/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de uma consultoria personalizada em Taquaritinga.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Taquaritinga SP',
  description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
  keywords:    ['cortinas sob medida Taquaritinga', 'persianas Taquaritinga SP', 'cortinas Taquaritinga', 'instalação cortinas Taquaritinga'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-taquaritinga` },
  openGraph: {
    type:        'website',
    locale:      'pt_BR',
    siteName:    'Maravilha Cortinas',
    title:       'Cortinas e Persianas Sob Medida em Taquaritinga SP',
    description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-taquaritinga`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Taquaritinga SP' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Cortinas e Persianas Sob Medida em Taquaritinga SP',
    description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
    images:      [`${DOMINIO}/images/og-image.jpg`],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Taquaritinga',
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
  areaServed:  { '@type': 'City', name: 'Taquaritinga' },
  description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
}

const faq = [
  { q: 'A Maravilha Cortinas atende Taquaritinga?', a: 'Sim. Taquaritinga fica a cerca de 25 km de Ibitinga e faz parte da nossa área de atendimento. O contato começa pela consultoria personalizada no WhatsApp.' },
  { q: 'Vocês fazem cortina para sala com pé direito duplo em Taquaritinga?', a: 'Sim, é uma das nossas especialidades. Ambientes com pé direito alto pedem trilho adequado, tecido com o caimento certo e medição precisa — e a motorização costuma ser a melhor solução para janelas de difícil acesso.' },
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
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Consultoria personalizada para Taquaritinga: ajudamos a escolher o tecido e o modelo certos para o seu ambiente, com orientação de medição profissional.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'Instalação sob consulta, com valor informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Ateliê especializado', desc: 'Cada projeto pensado sob medida em Ibitinga. Você paga por um trabalho de detalhe, não por intermediários.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Taquaritinga e toda a região recomendam.' },
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
        { nome: 'Taquaritinga', href: '/cortinas-e-persianas-sob-medida-taquaritinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Taquaritinga, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.tituloEm}>em Taquaritinga, SP.</em>
            </h1>
            <p className={styles.sub}>
              Um ateliê especializado de Ibitinga — consultoria personalizada em Taquaritinga e toda a região. Instalação sob consulta.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Consultoria personalizada em Taquaritinga →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Taquaritinga.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Taquaritinga com o mesmo padrão de qualidade que oferece em Ibitinga há mais de 16 anos. Somos um ateliê especializado — oferecemos consultoria personalizada e cuidamos de tudo: escolha do tecido, produção sob medida e instalação profissional.</p>
            <p className={styles.texto}>Taquaritinga fica a aproximadamente 25km de Ibitinga. Fazemos a consultoria personalizada no seu espaço, apresentamos as opções de tecido e modelo — sem surpresas no orçamento. Instalação sob consulta.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Taquaritinga.</em>
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
              <em className={styles.secTituloEm}>em Taquaritinga.</em>
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
              <em className={styles.ctaFinalEm}>em Taquaritinga?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Consultoria personalizada com quem é especialista. Entendemos o seu ambiente, orientamos a medição e apresentamos as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Consultoria personalizada em Taquaritinga →
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
