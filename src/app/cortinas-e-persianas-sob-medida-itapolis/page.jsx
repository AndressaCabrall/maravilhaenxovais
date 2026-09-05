// src/app/cortinas-e-persianas-sob-medida-itapolis/page.jsx
import Link          from 'next/link'
import styles         from '@/app/seo-page.module.css'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vi o site e gostaria de falar com a consultora especializada sobre um projeto em Itápolis.')

export const metadata = {
  title:       'Cortinas e Persianas Sob Medida em Itápolis SP',
  description: 'Cortinas e persianas sob medida em Itápolis SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
  keywords:    ['cortinas sob medida Itápolis', 'persianas Itápolis SP', 'cortinas Itápolis', 'instalação cortinas Itápolis'],
  alternates:  { canonical: `${DOMINIO}/cortinas-e-persianas-sob-medida-itapolis` },
  openGraph: {
    type:        'website',
    locale:      'pt_BR',
    siteName:    'Maravilha Cortinas',
    title:       'Cortinas e Persianas Sob Medida em Itápolis SP',
    description: 'Cortinas e persianas sob medida em Itápolis SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
    url:         `${DOMINIO}/cortinas-e-persianas-sob-medida-itapolis`,
    images: [{ url: `${DOMINIO}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Cortinas e Persianas Sob Medida em Itápolis SP' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Cortinas e Persianas Sob Medida em Itápolis SP',
    description: 'Cortinas e persianas sob medida em Itápolis SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
    images:      [`${DOMINIO}/images/og-image.jpg`],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas e Persianas Sob Medida em Itápolis',
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
  areaServed:  { '@type': 'City', name: 'Itápolis' },
  description: 'Cortinas e persianas sob medida em Itápolis SP, de alto padrão. Consultoria personalizada, ateliê especializado, +16 anos. Instalação sob consulta.',
}

const faq = [
  { q: 'Como funciona a Consultoria Personalizada da Maravilha Enxovais?', a: 'Diferente de lojas comuns, que apenas vendem produtos, nós funcionamos como um ateliê especializado. Nossa consultoria analisa a arquitetura da sua casa, a incidência de luz em Itápolis e o estilo do seu mobiliário. Guiamos você na escolha técnica dos tecidos — como linhos puros e gazes de alta gramatura —, dos sistemas (wave, motorização) e dos caimentos, para que o resultado final seja digno de revista.' },
  { q: 'Quais cortinas e persianas vocês fazem para Itápolis?', a: 'Toda a linha sob medida: cortinas wave, blackout, linho, prega macho e franzida, e persianas rolô, double vision, tela solar e horizontal. Também fazemos motorização com controle remoto, celular, Alexa e Google Home.' },
  { q: 'Como posso ver os tecidos disponíveis em Itápolis?', a: 'Na consultoria personalizada apresentamos nosso mostruário exclusivo, com as últimas tendências de tecidos, texturas e sistemas de automação compatíveis com assistentes virtuais (Alexa e Google Home). Tudo pensado para quem busca conforto, privacidade e sofisticação.' },
  { q: 'Como funciona a instalação em Itápolis?', a: 'A instalação é sob consulta, com as condições informadas junto com o orçamento — sem surpresa depois. Trabalhamos com instalação profissional.' },
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
  { num: '01', titulo: 'Consultoria personalizada', desc: 'Consultoria personalizada para Itápolis: ajudamos a escolher o tecido e o modelo certos para o seu ambiente.' },
  { num: '02', titulo: 'Instalação profissional', desc: 'Instalação sob consulta, com valor informado no orçamento. Sem surpresas no processo.' },
  { num: '03', titulo: 'Ateliê especializado', desc: 'Cada projeto pensado sob medida em Ibitinga. Você paga por um trabalho de detalhe, não por intermediários.' },
  { num: '04', titulo: '5,0 no Google', desc: 'Nota máxima com avaliações verificadas. Clientes de Itápolis e toda a região recomendam.' },
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
        { nome: 'Itápolis', href: '/cortinas-e-persianas-sob-medida-itapolis' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowText}>Atendemos Itápolis, SP</span>
            </div>
            <h1 className={styles.titulo}>
              Vista a sua casa com a alta costura.{' '}
              <em className={styles.tituloEm}>Cortinas e persianas sob medida para os projetos mais exigentes de Itápolis.</em>
            </h1>
            <p className={styles.sub}>
              Esqueça as soluções genéricas. No nosso ateliê especializado, transformamos seus ambientes através de uma consultoria personalizada, selecionando os tecidos mais nobres e as tecnologias mais modernas para harmonizar perfeitamente com a arquitetura do seu lar.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Quero falar com a consultora especializada →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Cortinas e persianas sob medida{' '}
              <em className={styles.secTituloEm}>em Itápolis.</em>
            </h2>
            <p className={styles.texto}>A Maravilha Cortinas atende Itápolis com um ateliê especializado — cada projeto começa com uma consultoria personalizada. Nossa fundadora mora em Itápolis — você tem acesso direto a quem projeta e produz o seu projeto. Instalação sob consulta.</p>
            <p className={styles.texto}>Trabalhamos com todos os modelos de cortina e persiana sob medida: wave, blackout, linho, prega macho, rolô, double vision, tela solar e motorização. Do primeiro contato à instalação, cuidamos de tudo com mais de 16 anos de experiência. Instalação sob consulta.</p>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Serviços disponíveis{' '}
              <em className={styles.secTituloEm}>em Itápolis.</em>
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
              <em className={styles.secTituloEm}>em Itápolis.</em>
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
              <em className={styles.ctaFinalEm}>em Itápolis?</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Consultoria personalizada com quem é especialista. Entendemos o seu ambiente e apresentamos as melhores opções.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Consultoria personalizada em Itápolis →
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
