// src/app/cortina-motorizada-ibitinga/page.jsx
import Link          from 'next/link'
import styles        from '@/app/seo-page.module.css'
import CtaFooterPin  from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Tenho interesse em cortina motorizada sob medida. Gostaria de um orçamento.')

export const metadata = {
  title:       'Cortina Motorizada Sob Medida em Ibitinga SP',
  description: 'Cortina motorizada sob medida em Ibitinga SP. Controle remoto, app ou automação residencial. Visita técnica mediante agendamento. Instalação possui custo adicional.',
  keywords:    ['cortina motorizada Ibitinga', 'cortina motorizada sob medida', 'cortina automatizada Ibitinga SP', 'cortina com motor Ibitinga', 'cortinas sob medida Ibitinga SP'],
  alternates:  { canonical: `${DOMINIO}/cortina-motorizada-ibitinga` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortina Motorizada Sob Medida em Ibitinga SP',
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
  areaServed:  ['Ibitinga', 'Itápolis', 'Taquaritinga', 'Araraquara', 'Matão'],
  description: 'Cortina motorizada sob medida com instalação profissional em Ibitinga SP e região.',
}

const faq = [
  {
    q: 'O que é cortina motorizada?',
    a: 'Cortina motorizada é qualquer modelo de cortina equipado com um motor elétrico que permite abrir e fechar sem esforço — por controle remoto, aplicativo de celular ou integrado à automação residencial.',
  },
  {
    q: 'Vale a pena investir em cortina motorizada?',
    a: 'Sim, especialmente em janelas de difícil acesso, pé direito alto ou para quem tem mobilidade reduzida. O motor prolonga a vida útil do trilho e do tecido por eliminar o esforço manual.',
  },
  {
    q: 'Qual modelo de cortina aceita motor?',
    a: 'Wave, prega macho e rolô são os modelos mais compatíveis com motorização. A escolha do motor depende do peso do tecido e do comprimento do trilho.',
  },
  {
    q: 'A cortina motorizada funciona sem internet?',
    a: 'Sim. A maioria dos modelos funciona com controle remoto sem necessidade de internet. A conexão com app ou automação é opcional.',
  },
  {
    q: 'Vocês instalam o motor junto com a cortina?',
    a: 'Sim. A instalação do motor faz parte do serviço — configuramos o motor, programamos os limites de curso e entregamos tudo funcionando.',
  },
]

const beneficios = [
  'Abre e fecha sem esforço — controle remoto ou app',
  'Ideal para pé direito alto e janelas de difícil acesso',
  'Prolonga a vida útil do tecido e do trilho',
  'Compatível com automação residencial — Alexa e Google Home',
  'Silencioso e de operação suave',
  'Programação de horários automáticos',
  'Instalação e configuração completas disponíveis (custo adicional)',
]

const modelos = [
  'Cortina Wave motorizada — o mais pedido em projetos premium',
  'Cortina Prega Macho motorizada — clássico com conforto moderno',
  'Persiana Rolô motorizada — minimalismo com praticidade total',
  'Persiana Double Vision motorizada — regulagem precisa sem esforço',
  'Persiana Blackout motorizada — escuridão total com um toque',
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
        { nome: 'Home',                 href: '/' },
        { nome: 'Produtos e Serviços',  href: '/produtos-e-servicos' },
        { nome: 'Motorização',          href: '/produtos-e-servicos/motorizacao' },
        { nome: 'Cortina Motorizada',   href: '/cortina-motorizada-ibitinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Automação · Conforto e praticidade</span>
            </div>
            <h1 className={styles.titulo}>
              Cortina motorizada sob medida em Ibitinga —{' '}
              <em className={styles.tituloEm}>abre e fecha com um toque</em>
            </h1>
            <p className={styles.sub}>
              Controle suas cortinas pelo controle remoto, aplicativo ou automação residencial. Fabricamos cortinas motorizadas sob medida em Ibitinga e região — com motor configurado. Instalação sob consulta.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Solicitar orçamento →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Por que escolher{' '}
              <em className={styles.secTituloEm}>cortina motorizada</em>
            </h2>
            <p className={styles.texto}>
              A motorização transforma qualquer cortina em um item de conforto e praticidade. Ideal para janelas grandes, pé direito alto ou qualquer ambiente onde o acesso manual é difícil.
            </p>
            <ul className={styles.lista}>
              {beneficios.map((item) => (
                <li key={item} className={styles.listaItem}>
                  <span className={styles.listaIco} aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Modelos compatíveis com{' '}
              <em className={styles.secTituloEm}>motorização em Ibitinga</em>
            </h2>
            <p className={styles.texto}>
              Trabalhamos com motorização para os principais modelos de cortinas e persianas, todos produzidos sob medida na nossa fábrica em Ibitinga.
            </p>
            <ul className={styles.lista}>
              {modelos.map((item) => (
                <li key={item} className={styles.listaItem}>
                  <span className={styles.listaIco} aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Perguntas sobre{' '}
              <em className={styles.secTituloEm}>cortina motorizada em Ibitinga</em>
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

          {/* ── LEIA TAMBÉM NO BLOG ── */}
          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Leia também no{' '}
              <em className={styles.secTituloEm}>blog da Maravilha</em>
            </h2>
            <div className={styles.blogLinks}>
              <Link href="/blog/cortina-motorizada-vale-a-pena" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Tendências</span>
                <p className={styles.blogCardTitulo}>Cortina motorizada vale a pena? Tudo que você precisa saber antes de comprar</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/cortina-ou-persiana-qual-escolher-por-ambiente" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Guia</span>
                <p className={styles.blogCardTitulo}>Cortina ou persiana: qual é a melhor opção para cada ambiente?</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/como-saber-se-cortina-foi-bem-instalada" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Dicas</span>
                <p className={styles.blogCardTitulo}>Como saber se sua cortina foi bem instalada: 5 sinais que não mentem</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
            </div>
          </section>

          <div className={styles.ctaFinal}>
            <h2 className={styles.ctaFinalTitulo}>
              Quer praticidade no seu ambiente?{' '}
              <em className={styles.ctaFinalEm}>A gente instala e configura tudo.</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Visita técnica mediante agendamento em Ibitinga e região.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
              Falar no WhatsApp →
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
