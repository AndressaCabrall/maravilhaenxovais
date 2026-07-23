// src/app/produtos-e-servicos/motorizacao/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import Motorizacao    from '@/components/sections/Motorizacao/Motorizacao'
import HeroPagina     from '@/components/sections/HeroPagina/HeroPagina'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import heroImg        from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Tenho interesse em motorização de cortinas ou persianas. Pode me ajudar?')

export const metadata = {
  title:       'Motorização de Cortinas e Persianas | Ibitinga SP',
  description: 'Cortinas e persianas motorizadas com controle pelo celular, Alexa e Google Home. Automação residencial em Ibitinga e região. Instalação possui custo adicional.',
  keywords:    ['cortinas motorizadas Ibitinga', 'persiana motorizada Ibitinga SP', 'automação residencial Ibitinga', 'cortina motorizada sob medida'],
  alternates:  { canonical: `${DOMINIO}/produtos-e-servicos/motorizacao` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type':    'Service',
  name:       'Motorização de Cortinas e Persianas em Ibitinga SP',
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
  description: 'Motorização de cortinas e persianas com controle pelo celular, Alexa e Google Home em Ibitinga SP.',
}

const faq = [
  { pergunta: 'Vocês fazem motorização de cortinas e persianas?', resposta: 'Sim! Trabalhamos com motorização compatível com controle remoto, Alexa e Google Home. Ideal para pé direito alto e janelas de difícil acesso.' },
  { pergunta: 'A motorização funciona com Alexa e Google Home?', resposta: 'Sim! O sistema é compatível com os principais assistentes de voz, além de controle pelo aplicativo do celular.' },
  { pergunta: 'É possível programar horários automáticos?', resposta: 'Sim! Você pode programar abertura e fechamento por horário, direto pelo aplicativo.' },
  { pergunta: 'O motor faz barulho?', resposta: 'Não. Trabalhamos com motores silenciosos, com operação suave mesmo em ambientes de home office ou quarto.' },
  { pergunta: 'Dá para motorizar uma cortina ou persiana já instalada?', resposta: 'Depende do modelo e do trilho existente — em muitos casos é possível. Consulte pelo WhatsApp e avaliamos o seu caso.' },
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

export default function MotorizacaoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',                 href: '/' },
        { nome: 'Produtos e Serviços',  href: '/produtos-e-servicos' },
        { nome: 'Motorização',          href: '/produtos-e-servicos/motorizacao' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <HeroPagina
          imagem={heroImg}
          alt="Cortina motorizada com trilho automatizado controlada por comando remoto — Maravilha Cortinas Ibitinga SP"
          eyebrow="Cortinas & Persianas Motorizadas"
          titulo="Motorização —"
          tituloEm="seu ambiente mais inteligente"
          sub="Acorde com luz natural entrando aos poucos. Feche tudo com um comando de voz antes de dormir. O detalhe que separa um imóvel comum de um imóvel premium em Ibitinga e região."
          cta="Solicitar orçamento →"
          ctaHref={WA}
        />

        <Motorizacao />

        <div className={styles.pagina} style={{ paddingTop: 0 }}>
          <div className={styles.container}>
            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Perguntas frequentes sobre{' '}
                <em className={styles.secTituloEm}>motorização</em>
              </h2>
              <FaqAccordion items={faq} idPrefix="faq-motorizacao" />
            </section>

            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Leia também no{' '}
                <em className={styles.secTituloEm}>blog da Maravilha</em>
              </h2>
              <div className={styles.blogLinks}>
                <Link href="/blog/cortina-motorizada-vale-a-pena" className={styles.blogCard}>
                  <span className={styles.blogCardTag}>Guia</span>
                  <p className={styles.blogCardTitulo}>Cortina motorizada vale a pena? Prós, contras e para quem é indicada</p>
                  <span className={styles.blogCardLer}>Ler artigo →</span>
                </Link>
              </div>
            </section>

            <div className={styles.ctaFinal}>
              <h2 className={styles.ctaFinalTitulo}>
                Pronta para automatizar seu ambiente?{' '}
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
      <CtaFooterPin />
    </>
  )
}
