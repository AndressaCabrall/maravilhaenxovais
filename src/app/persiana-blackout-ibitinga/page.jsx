// src/app/persiana-blackout-ibitinga/page.jsx
import Link          from 'next/link'
import styles        from '@/app/seo-page.module.css'
import Navbar        from '@/components/layout/Navbar/Navbar'
import Footer        from '@/components/layout/Footer/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Gostaria de um orçamento de persiana blackout em Ibitinga.')

export const metadata = {
  title:       'Persiana Blackout Sob Medida em Ibitinga SP — Bloqueio Total de Luz',
  description: 'Persiana blackout sob medida em Ibitinga SP. Bloqueio total de luz para quarto, suíte e home office. Visita técnica mediante agendamento. Instalação possui custo adicional.',
  keywords:    ['persiana blackout Ibitinga', 'persiana blackout quarto', 'persiana bloquear luz Ibitinga', 'persiana blackout sob medida', 'persianas sob medida Ibitinga'],
  alternates:  { canonical: `${DOMINIO}/persiana-blackout-ibitinga` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Persiana Blackout Sob Medida em Ibitinga SP',
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
  description: 'Persiana blackout sob medida com bloqueio total de luz e instalação profissional em Ibitinga SP.',
}

const faq = [
  {
    q: 'A persiana blackout bloqueia 100% da luz?',
    a: 'Tecidos blackout certificados bloqueiam entre 95% e 100% da luz. A instalação correta é fundamental — posicionamos o trilho para minimizar ao máximo as frestas laterais.',
  },
  {
    q: 'Qual a diferença entre persiana blackout e cortina blackout?',
    a: 'A persiana blackout tem visual mais clean e minimalista, ocupa menos espaço quando aberta e é mais fácil de limpar. A cortina blackout cria mais volume e aconchego. A escolha depende da decoração.',
  },
  {
    q: 'A persiana blackout serve para home office?',
    a: 'Sim! Além de bloquear luz para dormir, o blackout elimina reflexo em telas — ótimo para home office e salas de reunião.',
  },
  {
    q: 'É possível motorizar a persiana blackout?',
    a: 'Sim! Trabalhamos com motorização para persiana blackout com controle remoto ou app — ideal para quem quer abrir sem sair da cama.',
  },
  {
    q: 'Como limpar a persiana blackout?',
    a: 'Limpe com pano úmido e sabão neutro. Não lave completamente com frequência — o tecido tem camada interna sensível. Com os cuidados certos dura muitos anos.',
  },
]

const quemPrecisa = [
  'Quem acorda cedo demais por causa do sol',
  'Profissionais que trabalham à noite e dormem de dia',
  'Pais com bebês e crianças pequenas',
  'Quem tem quarto voltado para o leste ou norte',
  'Home office com reflexo de tela',
  'Suítes de alto padrão com decoração clean',
  'Imóveis para temporada e Airbnb',
  'Salas de cinema em casa',
]

const modelos = [
  'Persiana Rolô Blackout — clean, minimalista, versátil',
  'Persiana Double Vision Blackout — controle de luz e privacidade',
  'Persiana Blackout com textura de linho — naturalidade e função',
  'Persiana Blackout Motorizada — abre do celular ou controle',
  'Cortina Blackout Wave — sofisticação e bloqueio de luz',
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
        { nome: 'Persianas',            href: '/produtos-e-servicos/persianas' },
        { nome: 'Persiana Blackout',    href: '/persiana-blackout-ibitinga' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Ibitinga — SP — Bloqueio total de luz</span>
            </div>
            <h1 className={styles.titulo}>
              Persiana blackout em Ibitinga —{' '}
              <em className={styles.tituloEm}>durma melhor, acorde quando quiser</em>
            </h1>
            <p className={styles.sub}>
              Persiana blackout sob medida com bloqueio real de luz — não apenas tecido escuro. Visita técnica mediante agendamento em Ibitinga e região. Instalação possui custo adicional.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
              Solicitar orçamento →
            </a>
          </header>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Quem mais precisa de{' '}
              <em className={styles.secTituloEm}>persiana blackout</em>
            </h2>
            <p className={styles.texto}>
              A persiana blackout resolve problemas reais do dia a dia — não é luxo. Veja quem mais se beneficia.
            </p>
            <ul className={styles.lista}>
              {quemPrecisa.map((item) => (
                <li key={item} className={styles.listaItem}>
                  <span className={styles.listaIco} aria-hidden="true">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sec}>
            <h2 className={styles.secTitulo}>
              Modelos de{' '}
              <em className={styles.secTituloEm}>persiana blackout</em> disponíveis
            </h2>
            <p className={styles.texto}>
              Trabalhamos com diferentes modelos de persiana blackout para atender cada estilo de decoração e necessidade.
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
              <em className={styles.secTituloEm}>persiana blackout em Ibitinga</em>
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
              <Link href="/blog/persiana-blackout-quarto-como-dormir-melhor" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Produto</span>
                <p className={styles.blogCardTitulo}>Persiana blackout no quarto: como dormir melhor e bloquear a luz de verdade</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/cortina-ou-persiana-qual-escolher-por-ambiente" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Guia</span>
                <p className={styles.blogCardTitulo}>Cortina ou persiana: qual é a melhor opção para cada ambiente?</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
              <Link href="/blog/persiana-double-vision-o-que-e-como-funciona" className={styles.blogCard}>
                <span className={styles.blogCardTag}>Produto</span>
                <p className={styles.blogCardTitulo}>Persiana double vision: o que é, como funciona e por que todo arquiteto indica</p>
                <span className={styles.blogCardLer}>Ler artigo →</span>
              </Link>
            </div>
          </section>

          <div className={styles.ctaFinal}>
            <h2 className={styles.ctaFinalTitulo}>
              Chega de acordar antes da hora.{' '}
              <em className={styles.ctaFinalEm}>A gente resolve isso.</em>
            </h2>
            <p className={styles.ctaFinalSub}>
              Visita técnica mediante agendamento em Ibitinga e região. Instalação possui custo adicional.
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
