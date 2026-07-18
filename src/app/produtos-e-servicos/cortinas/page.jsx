// src/app/produtos-e-servicos/cortinas/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import Navbar         from '@/components/layout/Navbar/Navbar'
import Footer         from '@/components/layout/Footer/Footer'
import WhatsAppFloat  from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import Cortinas       from '@/components/sections/Cortinas/Cortinas'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vim pelo site e gostaria de um orçamento de cortinas sob medida.')

export const metadata = {
  title:       'Cortinas Sob Medida — Wave, Blackout, Linho e Mais | Ibitinga SP',
  description: 'Cortinas sob medida em Ibitinga SP com visita técnica. Wave, blackout, linho, prega macho, franzida e pé direito duplo. Instalação possui custo adicional.',
  keywords:    ['cortinas sob medida Ibitinga', 'cortina wave Ibitinga', 'cortina blackout Ibitinga', 'cortina linho Ibitinga', 'orçamento cortinas sob medida'],
  alternates:  { canonical: `${DOMINIO}/produtos-e-servicos/cortinas` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Cortinas Sob Medida em Ibitinga SP',
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
  description: 'Cortinas sob medida com visita técnica em Ibitinga SP. Instalação possui custo adicional.',
}

const faq = [
  { pergunta: 'Como funciona a visita de medição?', resposta: 'A visita técnica é agendada pelo WhatsApp no horário mais conveniente para você. Nossa equipe vai até o seu ambiente, mede com precisão e apresenta as opções de tecido e modelo.' },
  { pergunta: 'A instalação está inclusa no preço?', resposta: 'A instalação possui custo adicional, informado no orçamento. Trabalhamos com instalação profissional — sem surpresas no processo.' },
  { pergunta: 'Quais tipos de cortina vocês fazem?', resposta: 'Trabalhamos com cortina wave, franzido, blackout, linho, voil, duplex e muito mais — todos os modelos sob medida.' },
  { pergunta: 'Atendem cidades próximas de Ibitinga?', resposta: 'Sim! Atendemos Taquaritinga, Araraquara, Matão, Itápolis, Tabatinga, Nova Europa, Borborema e toda a região — consulte disponibilidade pelo WhatsApp.' },
  { pergunta: 'Quanto tempo leva para ficar pronto?', resposta: 'A partir de 20 dias úteis após confirmação do pedido. O prazo exato é informado no orçamento.' },
  { pergunta: 'Vocês fazem cortinas para pé direito duplo?', resposta: 'Sim, somos especialistas! Atendemos ambientes com pé direito alto e duplo — com trilho embutido em sanca de gesso, tecidos adequados para cada altura e instalação com caimento perfeito.' },
]

const modelos = [
  'Cortina Wave — ondas uniformes, ideal para pé direito alto',
  'Cortina Blackout — bloqueio total de luz para quarto',
  'Cortina em Linho Natural — elegância atemporal',
  'Cortina Franzida — volume e aconchego',
  'Cortina Duplex — voil e blackout em um só trilho',
  'Cortina Voil — leveza e luminosidade filtrada',
  'Cortina com Trilho Embutido — acabamento premium',
  'Cortina Motorizada — conforto com automação',
]

const beneficios = [
  'Loja da Fábrica — sem intermediários',
  'Visita técnica mediante agendamento em Ibitinga e região',
  'Instalação profissional disponível (custo adicional)',
  'Mais de 16 anos de experiência',
  'Nota 5,0 no Google',
  'Atendimento personalizado pela Mara',
  'Produção própria com controle de qualidade',
  'Prazo garantido no orçamento',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name:    item.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: item.resposta },
  })),
}

export default function CortinasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',                 href: '/' },
        { nome: 'Produtos e Serviços',  href: '/produtos-e-servicos' },
        { nome: 'Cortinas',             href: '/produtos-e-servicos/cortinas' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <div className={styles.pagina}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span className={styles.eyebrowText}>Ibitinga — SP — Loja da Fábrica</span>
              </div>
              <h1 className={styles.titulo}>
                Cortinas sob medida —{' '}
                <em className={styles.tituloEm}>tecido certo, ambiente transformado</em>
              </h1>
              <p className={styles.sub}>
                Somos a Loja da Fábrica de cortinas sob medida em Ibitinga/SP. Fabricamos e medimos com mais de 16 anos de experiência — sem intermediários, com preço justo e resultado impecável. Instalação sob consulta.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
                Solicitar orçamento →
              </a>
            </header>

            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Por que escolher a Maravilha{' '}
                <em className={styles.secTituloEm}>para suas cortinas?</em>
              </h2>
              <p className={styles.texto}>
                Fabricamos nossas próprias cortinas aqui em Ibitinga. Isso significa que você não paga o custo de um intermediário, tem acesso a um catálogo completo de tecidos e modelos, e conta com instalação profissional disponível (sob consulta).
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
          </div>
        </div>

        <Cortinas />

        <div className={styles.pagina} style={{ paddingTop: 0 }}>
          <div className={styles.container}>
            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Modelos de{' '}
                <em className={styles.secTituloEm}>cortinas sob medida</em> disponíveis
              </h2>
              <p className={styles.texto}>
                Trabalhamos com todos os modelos de cortina sob medida — do clássico ao contemporâneo.
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
                Perguntas frequentes sobre{' '}
                <em className={styles.secTituloEm}>cortinas sob medida</em>
              </h2>
              <FaqAccordion items={faq} idPrefix="faq-cortinas" />
            </section>

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
                  <p className={styles.blogCardTitulo}>Como escolher cortina para pé direito duplo sem errar</p>
                  <span className={styles.blogCardLer}>Ler artigo →</span>
                </Link>
              </div>
            </section>

            <div className={styles.ctaFinal}>
              <h2 className={styles.ctaFinalTitulo}>
                Pronta para transformar seu ambiente?{' '}
                <em className={styles.ctaFinalEm}>A gente cuida de tudo.</em>
              </h2>
              <p className={styles.ctaFinalSub}>
                Visita técnica mediante agendamento em Ibitinga e toda a região. Instalação possui custo adicional.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaFinalBtn}>
                Falar no WhatsApp →
              </a>
            </div>

            <div className={styles.voltar}>
              <Link href="/produtos-e-servicos" className={styles.btnVoltar}>← Ver todos os produtos</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
