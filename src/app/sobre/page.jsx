// src/app/sobre/page.jsx — Maravilha Cortinas
import Image          from 'next/image'
import Footer         from '@/components/layout/Footer/Footer'
import WhatsAppFloat  from '@/components/ui/WhatsAppFloat/WhatsAppFloat'
import Diferenciais   from '@/components/sections/Diferenciais/Diferenciais'
import ComoFunciona   from '@/components/sections/ComoFunciona/ComoFunciona'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import seoStyles      from '@/app/seo-page.module.css'
import styles         from './sobre.module.css'
import sobreImg       from '@/assets/images/sobre/webp/cortina-wave-perfil-mara-pavan-maravilha-ibitinga-sp.webp'
import { CONTATO, GMB, DOMINIO, EMPRESA } from '@/lib/constants'
import { WHATSAPP_URLS } from '@/lib/whatsapp'

const FAQ_GERAL = [
  { pergunta: 'Vocês trazem as amostras de tecido na visita?', resposta: 'Sim! Na visita de medição levamos nossos books com todas as opções de tecido, cor e modelo disponíveis. Você pode ver, tocar e comparar as amostras no próprio ambiente antes de decidir — sem precisar ir até a loja.' },
  { pergunta: 'Vocês atendem apartamentos, casas e comércios?', resposta: 'Atendemos residências, apartamentos, escritórios, lojas e qualquer ambiente comercial em Ibitinga, Taquaritinga, Araraquara, Matão e toda a região.' },
  { pergunta: 'Quais formas de pagamento vocês aceitam?', resposta: 'Aceitamos cartão de crédito, cartão de débito, PIX e dinheiro. As condições de parcelamento são informadas no momento do orçamento.' },
  { pergunta: 'Quanto tempo leva da visita até a instalação?', resposta: 'A partir de 20 dias úteis após a confirmação do pedido, dependendo do modelo e da quantidade de peças. O prazo exato é informado no orçamento.' },
]

export const metadata = {
  title:       'Sobre a Maravilha Cortinas — Loja da Fábrica em Ibitinga SP',
  description: 'Conheça a história da Maravilha Cortinas: fundada por Mara Pavan em 2011, produção própria em Ibitinga sem intermediários, mais de 16 anos transformando ambientes.',
  keywords:    ['Maravilha Cortinas Ibitinga', 'loja da fábrica cortinas Ibitinga SP', 'Mara Pavan cortinas', 'história Maravilha Cortinas'],
  alternates:  { canonical: `${DOMINIO}/sobre` },
}

const NUMEROS = [
  { num: '+16', label: 'anos de experiência' },
  { num: '500+', label: 'ambientes transformados' },
  { num: '5,0', label: 'estrelas no Google' },
  { num: `${GMB.avaliacoes}`, label: 'avaliações verificadas' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: FAQ_GERAL.map((item) => ({
    '@type': 'Question',
    name:    item.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: item.resposta },
  })),
}

export default function SobrePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',  href: '/' },
        { nome: 'Sobre', href: '/sobre' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <section className={styles.hero} aria-labelledby="sobre-h1">
          <div className={styles.container}>
            <div className={styles.inner}>

              <div className={styles.imgCol}>
                <div className={styles.imgWrap}>
                  <Image
                    src={sobreImg}
                    alt="Cortina Wave para pé direito duplo na sala — Ibitinga SP"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                    className={styles.img}
                  />
                  <div className={styles.imgOverlay} aria-hidden="true" />
                </div>
                <div className={styles.imgBadge} aria-hidden="true">
                  <span className={styles.imgBadgeStars}>★★★★★</span>
                  <span className={styles.imgBadgeNota}>5,0 no Google</span>
                  <span className={styles.imgBadgeAval}>{GMB.avaliacoes} avaliações verificadas</span>
                </div>
              </div>

              <div className={styles.copy}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} aria-hidden="true" />
                  <span className={styles.eyebrowText}>Nossa história</span>
                </div>

                <h1 id="sobre-h1" className={styles.titulo}>
                  Por trás de cada cortina,{' '}
                  <em className={styles.tituloEm}>tem a Mara.</em>
                </h1>

                <p className={styles.desc}>
                  A Maravilha Cortinas e Persianas nasceu em Ibitinga, em 2011, com um propósito simples:
                  oferecer cortinas e persianas sob medida com o cuidado que só quem é da região consegue entregar.
                  Mara Pavan fundou a empresa com a convicção de que atendimento de verdade começa por conhecer
                  o cliente e o ambiente antes de vender qualquer coisa.
                </p>
                <p className={styles.desc}>
                  Somos Loja da Fábrica: produzimos tudo aqui mesmo, sem intermediários.
                  Isso significa mais qualidade, prazo garantido e preço justo para quem
                  mora ou decora em Ibitinga, Itápolis, Taquaritinga, Araraquara, Matão e região.
                  Da escolha do tecido ao último ponto da instalação, cada etapa passa pelas mesmas mãos
                  que fundaram a empresa.
                </p>
                <p className={styles.desc}>
                  Nada de atendimento genérico. Nada de cortina que chega e não encaixa.
                  Cada detalhe é tratado com a atenção que o seu espaço merece — por isso, depois de
                  mais de 16 anos, a maioria dos nossos clientes chega por indicação.
                </p>

                <div className={styles.numeros}>
                  {NUMEROS.map((n, i) => (
                    <div key={i} className={styles.numero}>
                      <span className={styles.numeroNum}>{n.num}</span>
                      <span className={styles.numeroLabel}>{n.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.acoes}>
                  <a
                    href={WHATSAPP_URLS.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaPrimario}
                  >
                    Falar com a equipe
                  </a>
                  <a
                    href={CONTATO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaSecundario}
                  >
                    Ver no Instagram →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Diferenciais />
        <ComoFunciona />

        <div className={seoStyles.pagina} style={{ paddingTop: 0 }}>
          <div className={seoStyles.container}>
            <section className={seoStyles.sec} style={{ borderBottom: 'none' }}>
              <h2 className={seoStyles.secTitulo}>
                Perguntas frequentes{' '}
                <em className={seoStyles.secTituloEm}>sobre a Maravilha</em>
              </h2>
              <FaqAccordion items={FAQ_GERAL} idPrefix="faq-sobre" />
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
