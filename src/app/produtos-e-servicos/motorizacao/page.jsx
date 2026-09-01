// src/app/produtos-e-servicos/motorizacao/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import Image           from 'next/image'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import Motorizacao    from '@/components/sections/Motorizacao/Motorizacao'
import HeroPagina     from '@/components/sections/HeroPagina/HeroPagina'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import heroImg        from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'
import introImg       from '@/assets/images/cortinas/webp/cortina-wave-blackout-70-quarto-ibitinga-sp.webp'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Gostaria de uma consultoria personalizada sobre motorização de cortinas ou persianas.')

export const metadata = {
  title:       'Motorização de Cortinas e Persianas | Ibitinga SP — Atendemos Todo o Brasil',
  description: 'Cortinas e persianas motorizadas com controle pelo celular, Alexa e Google Home. Automação residencial do ateliê em Ibitinga, atendemos todo o Brasil. Instalação sob consulta.',
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
  areaServed:  'BR',
  description: 'Consultoria personalizada em motorização de cortinas e persianas com controle pelo celular, Alexa e Google Home. Ateliê em Ibitinga SP, atendemos todo o Brasil.',
}

const faq = [
  { pergunta: 'Qual é a diferença real entre uma persiana motorizada e uma persiana automatizada?', resposta: 'Uma persiana motorizada é aquela que possui um motor interno acionado individualmente por um controle remoto via radiofrequência. Já a persiana automatizada vai além: ela é conectada a uma central Wi-Fi (Hub ou Gateway). Isso permite que ela se integre ao seu smartphone e assistentes de voz (Alexa/Google), possibilitando que ela funcione de forma 100% autônoma através de agendamentos de horários e rotinas inteligentes.' },
  { pergunta: 'A motorização funciona com Alexa e Google Home?', resposta: 'Sim! O sistema é compatível com os principais assistentes de voz, além de controle pelo aplicativo do celular.' },
  { pergunta: 'Posso programar as persianas para abrirem ou fecharem sozinhas em horários específicos?', resposta: 'Sim, essa é uma das grandes vantagens da automação. Através do aplicativo instalado no seu celular (ou pelo sistema da Alexa/Google Home), você pode criar agendamentos automáticos. É possível programar as persianas para abrirem 30% logo cedo para o despertar diurno, fecharem totalmente ao meio-dia para proteger os móveis do sol forte, ou descerem ao anoitecer para garantir total privacidade.' },
  { pergunta: 'As persianas motorizadas duram mais tempo do que as persianas manuais?', resposta: 'Sim, os modelos motorizados possuem uma vida útil superior. Isso acontece porque o motor realiza uma subida e descida com velocidade constante, força controlada e sem trancos. Nas persianas manuais, o usuário costuma puxar a corda com intensidades diferentes, inclinações incorretas ou força excessiva, o que acelera o desgaste das engrenagens, desalinhamento do tecido e quebras do cordão.' },
  { pergunta: 'Quanto custa motorizar uma cortina ou persiana sob medida?', resposta: 'O preço de um projeto automatizado varia de acordo com o tamanho do vão (janela), o peso do tecido escolhido (que define a potência necessária do motor) e o tipo de acionamento (bateria, fiação direta, controle remoto ou integração Wi-Fi). Hoje, a tecnologia se tornou muito mais acessível. Na Maravilha Enxovais, nós desenvolvemos orçamentos sob medida a partir de uma consultoria personalizada, garantindo o melhor custo-benefício para o seu bolso.' },
]

const beneficios = [
  { titulo: 'Consultoria personalizada',    legenda: 'Sob consulta de agenda' },
  { titulo: 'Instalação profissional',      legenda: 'Sob consulta' },
  { titulo: 'Mais de 16 anos',              legenda: 'De experiência' },
  { titulo: '5,0 no Google',                legenda: 'Avaliações verificadas' },
  { titulo: 'Alexa e Google Home',          legenda: 'Integração por voz' },
  { titulo: 'Motores silenciosos',          legenda: 'Operação suave' },
  { titulo: 'Prazo garantido',              legenda: 'Informado no orçamento' },
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
          tituloEm="automação pensada pro seu ambiente"
          sub="Em consultoria, avaliamos onde a motorização faz diferença: da luz natural que entra aos poucos ao comando de voz antes de dormir. O detalhe que separa um imóvel comum de um imóvel premium — ateliê em Ibitinga, atendemos todo o Brasil."
          cta="Consultoria personalizada →"
          ctaHref={WA}
        />

        <div className={styles.pagina}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <h2 className={styles.introTitulo}>Controle total na palma da mão</h2>
                <p className={styles.introTexto}>
                  Motorize cortinas e persianas com consultoria sobre onde a automação faz diferença no seu ambiente. Controle remoto, smartphone ou voz — integração com Alexa e Google Home. Ateliê em Ibitinga, atendemos todo o Brasil. Instalação sob consulta.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
                  Fale conosco →
                </a>
              </div>
              <div className={styles.introImgWrap}>
                <Image
                  src={introImg}
                  alt="Cortina wave motorizada instalada em quarto — Maravilha Cortinas Ibitinga SP"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Por que escolher a Maravilha{' '}
                <em className={styles.secTituloEm}>para motorizar seu ambiente?</em>
              </h2>
              <p className={styles.texto}>
                Trabalhamos com motores silenciosos de alta qualidade, configurados por profissionais especializados. O sistema é integrado de forma discreta ao seu ambiente. Instalação profissional sob consulta.
              </p>

              <ul className={styles.listaNum}>
                {beneficios.map((item, i) => (
                  <li key={item.titulo} className={styles.listaNumItem}>
                    <div className={styles.listaNumEsquerda}>
                      <span className={styles.listaNumIndice}>{String(i + 1).padStart(2, '0')}</span>
                      <h3 className={styles.listaNumTitulo}>{item.titulo}</h3>
                    </div>
                    <span className={styles.listaNumLegenda}>{item.legenda}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

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
                Consultoria personalizada do ateliê em Ibitinga, atendemos todo o Brasil. Instalação sob consulta.
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
