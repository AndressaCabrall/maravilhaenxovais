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
  description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
  keywords:    ['cortinas sob medida Taquaritinga', 'persianas Taquaritinga SP', 'cortinas Taquaritinga', 'instalação cortinas Taquaritinga'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-taquaritinga` },
  openGraph: {
    title:       'Cortinas e Persianas Sob Medida em Taquaritinga SP',
    description: 'Cortinas e persianas sob medida em Taquaritinga SP. Instalação sob consulta. Atendimento da Maravilha Cortinas de Ibitinga — ateliê especializado, +16 anos.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-taquaritinga`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Taquaritinga SP' }],
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
  { q: 'A Maravilha Cortinas atende em Taquaritinga?', a: 'Sim! Taquaritinga fica a ~25km de Ibitinga e está dentro da nossa área de atendimento. Consulte disponibilidade e condições de consultoria pelo WhatsApp.' },
  { q: 'Há taxa de deslocamento para Taquaritinga?', a: 'As condições de atendimento variam conforme a agenda. Consulte pelo WhatsApp — respondemos rápido e alinhamos o melhor formato para o seu caso.' },
  { q: 'Quais produtos estão disponíveis em Taquaritinga?', a: 'Todos os produtos: cortinas wave, blackout, linho, prega macho, persianas rolô, double vision, blackout, tela solar e motorização.' },
  { q: 'Como funciona a consultoria?', a: 'A consultoria é feita pelo WhatsApp, no horário que for melhor para você. Apresentamos as opções de tecido e modelo mais adequadas pro seu ambiente em Taquaritinga.' },
  { q: 'Qual o prazo de entrega para Taquaritinga?', a: 'Na consultoria, o ateliê informa todos os prazos — de confecção, entrega e instalação, se houver — de acordo com o modelo e a quantidade de peças do seu projeto.' },
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
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Vamos até você em Taquaritinga e ajudamos a escolher o tecido certo para o seu ambiente. Medição profissional antes de qualquer compromisso.' },
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
              Consultoria personalizada sem compromisso. Nossa equipe vai até você, mede e apresenta as melhores opções.
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
