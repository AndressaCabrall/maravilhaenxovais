// src/app/produtos-e-servicos/persianas/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import Navbar         from '@/components/layout/Navbar/Navbar'
import Footer         from '@/components/layout/Footer/Footer'
import WhatsAppFloat  from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import Persianas      from '@/components/sections/Persianas/Persianas'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Gostaria de um orçamento de persianas sob medida.')

export const metadata = {
  title:       'Persianas Sob Medida — Rolô, Blackout, Double Vision | Ibitinga SP',
  description: 'Persianas sob medida em Ibitinga SP — rolô, blackout, double vision, tela solar. Visita técnica mediante agendamento. Instalação possui custo adicional.',
  keywords:    ['persianas sob medida Ibitinga', 'persiana blackout Ibitinga', 'persiana double vision Ibitinga', 'persiana rolô Ibitinga SP', 'persiana sob medida preço'],
  alternates:  { canonical: `${DOMINIO}/produtos-e-servicos/persianas` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Persianas Sob Medida em Ibitinga SP',
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
  description: 'Persianas sob medida com instalação profissional em Ibitinga SP.',
}

const faq = [
  { pergunta: 'Qual a diferença entre persiana rolô e double vision?', resposta: 'A rolô é um tecido único que enrola para cima. A double vision tem faixas alternadas opacas e translúcidas que permitem controle preciso de luz — do bloqueio total à máxima luminosidade.' },
  { pergunta: 'Persiana blackout bloqueia 100% da luz?', resposta: 'Tecidos blackout certificados bloqueiam entre 95% e 100% da luz. A instalação correta é fundamental — posicionamos o trilho para minimizar ao máximo as frestas laterais.' },
  { pergunta: 'A tela solar bloqueia calor e mantém a vista?', resposta: 'Sim! A tela solar filtra até 90% da radiação solar e mantém a visibilidade de dentro para fora. Ideal para salas com muito sol.' },
  { pergunta: 'Posso motorizar minha persiana?', resposta: 'Sim! Trabalhamos com motorização para todos os modelos de persiana, com controle remoto ou integração com sistemas de automação.' },
  { pergunta: 'Vocês atendem além de Ibitinga?', resposta: 'Sim! Atendemos Taquaritinga, Araraquara, Matão, Itápolis e toda a região. Consulte pelo WhatsApp.' },
]

const modelos = [
  'Persiana Rolô — prática, clean e versátil',
  'Persiana Blackout — bloqueio total de luz',
  'Persiana Double Vision — controle preciso de luminosidade',
  'Persiana Tela Solar — filtra calor sem perder a vista',
  'Persiana Painel Translúcida — luz filtrada com design sofisticado',
  'Persiana Horizontal 50mm — durável para uso intenso',
  'Persiana Motorizada — automação e conforto',
]

const porAmbiente = [
  'Quarto — blackout para dormir melhor',
  'Sala — double vision ou tela solar',
  'Cozinha — rolô em PVC, fácil de limpar',
  'Home Office — tela solar anti-reflexo',
  'Varanda — tela solar ou painel translúcido',
  'Suíte de alto padrão — double vision motorizado',
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

export default function PersianasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',                 href: '/' },
        { nome: 'Produtos e Serviços',  href: '/produtos-e-servicos' },
        { nome: 'Persianas',            href: '/produtos-e-servicos/persianas' },
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
                <span className={styles.eyebrowText}>Ibitinga — SP — Do rolô ao double vision</span>
              </div>
              <h1 className={styles.titulo}>
                Persianas sob medida —{' '}
                <em className={styles.tituloEm}>controle a luz, transforme o ambiente</em>
              </h1>
              <p className={styles.sub}>
                Todos os modelos de persiana sob medida com visita técnica mediante agendamento. Atendemos Ibitinga e toda a região com mais de 16 anos de experiência. Instalação possui custo adicional.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
                Solicitar orçamento →
              </a>
            </header>
          </div>
        </div>

        <Persianas />

        <div className={styles.pagina} style={{ paddingTop: 0 }}>
          <div className={styles.container}>
            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Modelos de{' '}
                <em className={styles.secTituloEm}>persiana sob medida</em> disponíveis
              </h2>
              <p className={styles.texto}>
                Cada ambiente tem uma necessidade diferente. Trabalhamos com todos os modelos para garantir a solução certa para o seu espaço.
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
                Para cada ambiente,{' '}
                <em className={styles.secTituloEm}>a persiana certa</em>
              </h2>
              <p className={styles.texto}>
                A escolha da persiana depende do ambiente, da orientação solar e do estilo da decoração.
              </p>
              <ul className={styles.lista}>
                {porAmbiente.map((item) => (
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
                <em className={styles.secTituloEm}>persianas sob medida</em>
              </h2>
              <FaqAccordion items={faq} idPrefix="faq-persianas" />
            </section>

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
                <Link href="/blog/persiana-double-vision-o-que-e-como-funciona" className={styles.blogCard}>
                  <span className={styles.blogCardTag}>Produto</span>
                  <p className={styles.blogCardTitulo}>Persiana double vision: o que é, como funciona e por que todo arquiteto indica</p>
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
                Qual persiana é a certa para o seu espaço?{' '}
                <em className={styles.ctaFinalEm}>A gente te ajuda a escolher.</em>
              </h2>
              <p className={styles.ctaFinalSub}>
                Visita técnica mediante agendamento em Ibitinga e região.
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
