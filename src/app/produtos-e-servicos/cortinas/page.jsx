// src/app/produtos-e-servicos/cortinas/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import Image           from 'next/image'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import Cortinas       from '@/components/sections/Cortinas/Cortinas'
import HeroPagina     from '@/components/sections/HeroPagina/HeroPagina'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import heroImg        from '@/assets/images/cortinas/webp/cortina-wave-blackout-70-quarto-ibitinga-sp.webp'
import { CORTINAS }   from '@/data/cortinas'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Vim pelo site e gostaria de uma consultoria personalizada para cortinas sob medida.')

export const metadata = {
  title:       'Cortinas Sob Medida — Wave, Blackout, Linho e Mais | Ibitinga SP — Atendemos Todo o Brasil',
  description: 'Cortinas sob medida com consultoria personalizada — o ateliê é em Ibitinga, mas atendemos em todo o Brasil. Wave, blackout, linho, prega macho, franzida e pé direito duplo. Instalação sob consulta.',
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
  areaServed:  'BR',
  description: 'Cortinas sob medida com consultoria personalizada — o ateliê é em Ibitinga, mas atendemos em todo o Brasil. Instalação sob consulta.',
}

const faq = [
  { pergunta: 'Como funciona a consultoria?', resposta: 'Todo o início e levantamento da sua consultoria é feito através de uma conversa pelo WhatsApp, no horário mais conveniente para você. A partir daí, vamos até o seu ambiente, medimos com precisão e apresentamos as opções de tecido e modelo mais adequadas.' },
  { pergunta: 'Qual é a diferença entre a cortina wave e os modelos tradicionais?', resposta: 'A cortina wave (ou efeito onda) possui um sistema de cordões e deslizantes que mantém as dobras do tecido sempre alinhadas, retas e simétricas, mesmo quando a cortina é aberta ou fechada. Ela oferece um visual clean e moderno, sendo ideal para trilhos suíços ou varões específicos. Já modelos como a prega macho ou franzida trazem um visual mais clássico e volumoso.' },
  { pergunta: 'Quais tipos de cortina vocês fazem?', resposta: 'Trabalhamos com cortina wave, franzido, blackout, linho, voil, duplex e muito mais — todos os modelos sob medida.' },
  { pergunta: 'Quero uma cortina de alto padrão para a minha sala. Quais são os tecidos mais procurados em Ibitinga?', resposta: 'Hoje, os tecidos nobres campeões de pedidos para projetos de alto padrão são a Gaze de Linho (pelo caimento fluido e elegante), o Flam (que imita a textura rústica do linho, mas oferece excelente praticidade na lavagem), e o Jacquard (para quem busca texturas encorpadas e clássicas). Na Maravilha Enxovais, combinamos esses tecidos com os sistemas de prega Wave para criar aquele efeito de ondas perfeitas no ambiente.' },
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
  { titulo: 'Consultoria personalizada',    legenda: 'Sob consulta de agenda' },
  { titulo: 'Instalação profissional',      legenda: 'Sob consulta' },
  { titulo: 'Mais de 16 anos',              legenda: 'De experiência' },
  { titulo: '5,0 no Google',                legenda: 'Avaliações verificadas' },
  { titulo: 'Atendimento pela Mara',        legenda: 'Personalizado' },
  { titulo: 'Projeto sob medida',           legenda: 'Controle de qualidade' },
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
      <main>
        <HeroPagina
          imagem={heroImg}
          alt="Cortina Wave com blackout instalada em quarto — Maravilha Cortinas Ibitinga SP"
          eyebrow="Ibitinga — SP — Atendemos Todo o Brasil"
          titulo="Cortinas de tecido sob medida:"
          tituloEm="sofisticação e caimento impecável"
          sub="Modelos Wave, Prega Macho e Blackout, com tecidos em linho e tecidos nobres escolhidos em consultoria pro seu ambiente."
          cta="Consultoria personalizada →"
          ctaHref={WA}
        />

        <div className={styles.pagina}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <h2 className={styles.introTitulo}>Vista cada janela do seu lar</h2>
                <p className={styles.introTexto}>
                  Wave, Prega Macho, Blackout e muito mais. Escolhemos com você o modelo e o tecido certos para cada ambiente. Consultoria personalizada — o ateliê é em Ibitinga, mas atendemos em todo o Brasil. Instalação sob consulta.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
                  Fale conosco →
                </a>
              </div>
              <div className={styles.introImgWrap}>
                <Image
                  src={CORTINAS[0].imagem}
                  alt={CORTINAS[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Por que escolher a Maravilha{' '}
                <em className={styles.secTituloEm}>para suas cortinas?</em>
              </h2>
              <p className={styles.texto}>
                Cada projeto nasce em Ibitinga a partir de uma consultoria personalizada. Você tem acesso a um catálogo completo de tecidos e modelos e conta com instalação profissional sob consulta.
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
                Consultoria personalizada — o ateliê é em Ibitinga, mas atendemos em todo o Brasil. Instalação sob consulta.
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
