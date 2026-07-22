// src/app/cortina-pe-direito-duplo/page.jsx
import Link          from 'next/link'
import styles        from '@/app/seo-page.module.css'
import CtaFooterPin  from '@/components/sections/Cta/CtaFooterPin'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Tenho um ambiente com pé direito duplo e gostaria de um orçamento de cortinas sob medida.')

export const metadata = {
  title:       'Cortina para Pé Direito Duplo em Ibitinga SP',
  description: 'Especialistas em cortina para pé direito duplo sob medida em Ibitinga SP. Trilho embutido, cortina wave e linho. Visita técnica mediante agendamento. Instalação possui custo adicional.',
  keywords:    ['cortina pé direito duplo', 'cortina pé direito alto Ibitinga', 'cortina wave pé direito duplo', 'trilho embutido gesso cortina', 'cortinas sob medida Ibitinga'],
  alternates:  { canonical: `${DOMINIO}/cortina-pe-direito-duplo` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortina para Pé Direito Duplo sob Medida',
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
  description: 'Cortina sob medida especializada para ambientes com pé direito duplo e alto em Ibitinga SP.',
}

const faq = [
  {
    q: 'Qual modelo de cortina é melhor para pé direito duplo?',
    a: 'A cortina wave é a mais indicada — as ondas uniformes valorizam cada centímetro da altura. O linho encorpado também funciona muito bem.',
  },
  {
    q: 'O trilho embutido é obrigatório no pé direito duplo?',
    a: 'Não é obrigatório, mas é o acabamento mais indicado. O trilho embutido na sanca faz a cortina parecer nascer diretamente do teto, criando um visual muito mais sofisticado.',
  },
  {
    q: 'Como vocês medem a cortina no pé direito duplo?',
    a: 'Com equipamento adequado e medição milimétrica. Determinamos o ponto exato de fixação do trilho e a altura precisa da cortina antes de fabricar — sem margem de erro.',
  },
  {
    q: 'Quanto tecido é necessário para pé direito duplo?',
    a: 'Em modelos wave, o tecido precisa ter entre 2x e 2,5x a largura do vão para criar o volume certo. Calculamos isso no orçamento.',
  },
  {
    q: 'Atendem casas com pé direito duplo fora de Ibitinga?',
    a: 'Sim! Atendemos residências e apartamentos em Taquaritinga, Araraquara, Matão e toda a região.',
  },
]

const beneficios = [
  'Medição milimétrica do teto ao chão',
  'Trilho nivelado a laser — sem desvios',
  'Trilho embutido em sanca de gesso disponível',
  'Cálculo preciso da quantidade de tecido',
  'Cortina do teto ao chão sem vãos',
  'Ondas uniformes em toda a extensão — modelo wave',
  'Tecidos com estrutura para alturas extremas',
  'Equipe com experiência em projetos de alto padrão',
]

const modelos = [
  'Cortina Wave — ondas que valorizam a altura',
  'Cortina em Linho Natural — textura e elegância',
  'Cortina Blackout Wave — beleza e funcionalidade',
  'Cortina Duplex — voil e blackout em pé direito alto',
  'Cortina com Trilho Embutido em Sanca',
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
        { nome: 'Home',                     href: '/' },
        { nome: 'Produtos e Serviços',      href: '/produtos-e-servicos' },
        { nome: 'Cortinas',                 href: '/produtos-e-servicos/cortinas' },
        { nome: 'Pé Direito Duplo',         href: '/cortina-pe-direito-duplo' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Especialidade — Pé direito alto e duplo</span>
            </div>
            <h1 className={styles.titulo}>
              Cortina para pé direito duplo{' '}
              <em className={styles.tituloEm}>sob medida em Ibitinga</em>
            </h1>
            <p className={styles.sub}>
              Somos especialistas em cortinas para ambientes com pé direito alto e duplo. Trilho embutido, caimento perfeito — do projeto à entrega. Instalação possui custo adicional.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Solicitar orçamento →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              O que faz a diferença em um{' '}
              <em className={styles.secTituloEm}>pé direito duplo</em>
            </h2>
            <p className={styles.texto}>
              Pé direito alto magnifica tudo — inclusive os erros. Uma cortina mal instalada em um ambiente de 4 metros fica evidente de longe. Por isso, a instalação profissional especializada é fundamental.
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
              Modelos recomendados para{' '}
              <em className={styles.secTituloEm}>pé direito alto</em>
            </h2>
            <p className={styles.texto}>
              Não é qualquer modelo que funciona bem em pé direito duplo. Esses são os que melhor valorizam ambientes com altura elevada.
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
              <em className={styles.secTituloEm}>cortina em pé direito duplo</em>
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
              <Link href="/blog/cortina-pe-direito-duplo-como-escolher-sem-errar" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Dicas</span>
                <p className={styles.blogCardTitulo}>Como escolher cortina para pé direito duplo sem errar na medida e no modelo</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/como-saber-se-cortina-foi-bem-instalada" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Dicas</span>
                <p className={styles.blogCardTitulo}>Como saber se sua cortina foi bem instalada: 5 sinais que não mentem</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/cortina-ou-persiana-qual-escolher-por-ambiente" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Guia</span>
                <p className={styles.blogCardTitulo}>Cortina ou persiana: qual é a melhor opção para cada ambiente?</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
            </div>
          </section>

          <div className={styles.ctaFinal}>
            <h2 className={styles.ctaFinalTitulo}>
              Seu pé direito duplo merece uma cortina à altura.{' '}
              <em className={styles.ctaFinalEm}>Literalmente.</em>
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
