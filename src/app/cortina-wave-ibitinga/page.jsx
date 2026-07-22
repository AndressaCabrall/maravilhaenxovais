// src/app/cortina-wave-ibitinga/page.jsx
import Link          from 'next/link'
import styles        from '@/app/seo-page.module.css'
import Footer        from '@/components/layout/Footer/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Tenho interesse em cortina wave sob medida. Gostaria de um orçamento.')

export const metadata = {
  title:       'Cortina Wave Sob Medida em Ibitinga SP',
  description: 'Cortina wave sob medida em Ibitinga SP. O modelo mais pedido por arquitetos — ondas perfeitas, visual contemporâneo. Visita técnica mediante agendamento. Instalação possui custo adicional.',
  keywords:    ['cortina wave Ibitinga', 'cortina wave sob medida', 'cortina wave arquitetos Ibitinga', 'cortina wave sob medida Ibitinga', 'cortinas sob medida Ibitinga SP'],
  alternates:  { canonical: `${DOMINIO}/cortina-wave-ibitinga` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortina Wave Sob Medida em Ibitinga SP',
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
  areaServed:  ['Ibitinga', 'Taquaritinga', 'Araraquara', 'Matão'],
  description: 'Cortina wave sob medida com instalação profissional em Ibitinga SP e região.',
}

const faq = [
  {
    q: 'O que é a cortina wave?',
    a: 'A cortina wave tem dobras uniformes e simétricas ao longo de todo o tecido, criando ondas perfeitas do teto ao chão. É o modelo mais pedido em projetos de arquitetura e decoração contemporânea.',
  },
  {
    q: 'A cortina wave funciona com qualquer tecido?',
    a: 'Sim! Wave funciona com blackout, linho, voil, duplex e veludo. Cada tecido cria uma sensação diferente, mas as ondas mantêm a sofisticação em todos os casos.',
  },
  {
    q: 'Por que arquitetos preferem a cortina wave?',
    a: 'Porque ela tem visual limpo que complementa o projeto sem disputar atenção. As ondas uniformes criam elegância sem exagero — atemporal e sofisticada.',
  },
  {
    q: 'Precisa de trilho especial para a wave?',
    a: 'Sim. A wave exige trilho com ganchos em espaçamento preciso para que as ondas fiquem uniformes. Trabalhamos com trilhos específicos, inclusive embutidos em sanca.',
  },
  {
    q: 'A instalação da wave é diferente das outras?',
    a: 'Sim, exige mais precisão. O trilho precisa estar perfeitamente nivelado e os ganchos no espaçamento correto. Uma instalação mal feita resulta em ondas irregulares.',
  },
]

const beneficios = [
  'Ondas uniformes e simétricas — visual sempre limpo',
  'Atemporal — projetos de 5 anos atrás ainda parecem modernos',
  'Valoriza o pé direito alto — continuidade vertical',
  'Funciona com qualquer tecido — blackout, linho, voil',
  'Visual clean que complementa o projeto',
  'Disponível com trilho embutido em sanca de gesso',
  'Ideal para sala, quarto, suíte e home office',
  'Pode ser motorizada com controle remoto',
]

const combinacoes = [
  'Wave em Linho Natural — elegância orgânica e atemporal',
  'Wave em Blackout — sofisticação e bloqueio de luz',
  'Wave em Voil — leveza e luminosidade filtrada',
  'Wave em Duplex — voil e blackout em um só trilho',
  'Wave em Veludo — presença e luxo para suítes',
  'Wave em Tela Solar — filtra calor sem perder a vista',
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
        { nome: 'Cortinas',             href: '/produtos-e-servicos/cortinas' },
        { nome: 'Cortina Wave',         href: '/cortina-wave-ibitinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Tendência — O modelo favorito dos arquitetos</span>
            </div>
            <h1 className={styles.titulo}>
              Cortina wave sob medida em Ibitinga —{' '}
              <em className={styles.tituloEm}>ondas perfeitas, visual impecável</em>
            </h1>
            <p className={styles.sub}>
              A cortina wave é o modelo mais pedido em projetos de arquitetura e alto padrão. Fabricamos sob medida em Ibitinga e região — ondas uniformes garantidas pela instalação profissional. Instalação sob consulta.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Solicitar orçamento →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Por que a cortina wave é a{' '}
              <em className={styles.secTituloEm}>mais escolhida por arquitetos</em>
            </h2>
            <p className={styles.texto}>
              Arquitetos e designers de interiores têm razões técnicas e estéticas para preferir a wave. É o modelo que mais valoriza ambientes contemporâneos sem competir com a decoração.
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
              Combinações de{' '}
              <em className={styles.secTituloEm}>tecido para cortina wave</em>
            </h2>
            <p className={styles.texto}>
              O tecido muda completamente o resultado final da wave. Veja as combinações mais pedidas em Ibitinga e região.
            </p>
            <ul className={styles.lista}>
              {combinacoes.map((item) => (
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
              <em className={styles.secTituloEm}>cortina wave em Ibitinga</em>
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
              <Link href="/blog/cortina-pe-direito-duplo-como-escolher-sem-errar" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Dicas</span>
                <p className={styles.blogCardTitulo}>Como escolher cortina para pé direito duplo sem errar na medida e no modelo</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
            </div>
          </section>

          <div className={styles.ctaFinal}>
            <h2 className={styles.ctaFinalTitulo}>
              Quer ondas perfeitas no seu ambiente?{' '}
              <em className={styles.ctaFinalEm}>Agende sua visita técnica.</em>
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
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
