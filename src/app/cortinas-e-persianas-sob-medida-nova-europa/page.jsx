// src/app/cortinas-e-persianas-sob-medida-nova-europa/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de uma consultoria personalizada em Nova Europa.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Nova Europa SP',
  description: 'Cortinas e persianas sob medida em Nova Europa SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
  keywords:    ['cortinas sob medida Nova Europa', 'persianas Nova Europa SP', 'cortinas Nova Europa', 'instalação cortinas Nova Europa'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-nova-europa` },
  openGraph: {
    title:       'Cortinas e Persianas Sob Medida em Nova Europa SP',
    description: 'Cortinas e persianas sob medida em Nova Europa SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-nova-europa`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Nova Europa SP' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Nova Europa',
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
  areaServed:  { '@type': 'City', name: 'Nova Europa' },
  description: 'Cortinas e persianas sob medida em Nova Europa SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
}

const faq = [
  { q: 'A Maravilha Cortinas atende em Nova Europa?', a: 'Sim! Nova Europa fica a ~30km de Ibitinga e está na nossa área de atendimento. Consulte disponibilidade e condições de consultoria pelo WhatsApp.' },
  { q: 'Há taxa de deslocamento para Nova Europa?', a: 'As condições de atendimento variam conforme a agenda. Consulte pelo WhatsApp — alinhamos o melhor formato para o seu caso.' },
  { q: 'Quais modelos estão disponíveis em Nova Europa?', a: 'Todos os modelos: cortinas wave, blackout, linho, franzida, prega macho e persianas rolô, double vision, blackout, tela solar e motorizadas.' },
  { q: 'Como funciona a consultoria?', a: 'A consultoria é feita pelo WhatsApp, no horário que for melhor para você. Apresentamos as opções de tecido e modelo mais adequadas pro seu ambiente em Nova Europa.' },
  { q: 'Qual o prazo de entrega para Nova Europa?', a: 'Na consultoria, o ateliê informa todos os prazos — de confecção, entrega e instalação, se houver — de acordo com o modelo e a quantidade de peças do seu projeto.' },
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
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Consultoria personalizada para Nova Europa: ajudamos a escolher o tecido e o modelo certos para o seu ambiente, com orientação de medição profissional.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'Instalação sob consulta, com valor informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Ateliê especializado', desc: 'Cada projeto pensado sob medida em Ibitinga. Você paga por um trabalho de detalhe, não por intermediários.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Nova Europa e toda a região recomendam.' },
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
        { nome: 'Nova Europa', href: '/cortinas-e-persianas-sob-medida-nova-europa' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Nova Europa, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.tituloEm}>em Nova Europa, SP.</em>
            </h1>
            <p className={styles.sub}>
              Um ateliê especializado de Ibitinga — consultoria personalizada em Nova Europa e região. Instalação sob consulta.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Consultoria personalizada em Nova Europa →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Nova Europa.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Nova Europa com toda a linha de cortinas e persianas sob medida. Um ateliê especializado em Ibitinga, a ~30km — mais de 16 anos de consultoria personalizada. A instalação possui custo adicional, informado no orçamento.</p>
            <p className={styles.texto}>Trabalhamos com todos os modelos: cortina wave, blackout, linho, prega macho, persianas rolô, double vision, tela solar e motorização. Do primeiro contato à instalação, cuidamos de tudo.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Nova Europa.</em>
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
              <em className={styles.secTituloEm}>em Nova Europa.</em>
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
              <em className={styles.ctaFinalEm}>em Nova Europa?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Consultoria personalizada com quem é especialista. Entendemos o seu ambiente, orientamos a medição e apresentamos as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Consultoria personalizada em Nova Europa →
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
