// src/app/produtos-e-servicos/persianas/page.jsx — Maravilha Cortinas
import Link           from 'next/link'
import Image           from 'next/image'
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import Persianas      from '@/components/sections/Persianas/Persianas'
import HeroPagina     from '@/components/sections/HeroPagina/HeroPagina'
import FaqAccordion   from '@/components/ui/FaqAccordion/FaqAccordion'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from '@/app/seo-page.module.css'
import heroImg        from '@/assets/images/hero/webp/persiana-tela-solar-cozinha-sob-medida-ibitinga-sp.webp'
import { PERSIANAS }  from '@/data/persianas'
import { CONTATO, DOMINIO, ENDERECO } from '@/lib/constants'
import { whatsappUrl } from '@/lib/whatsapp'

const WA = whatsappUrl('Olá! Gostaria de uma consultoria personalizada para persianas sob medida.')

export const metadata = {
  title:       'Persianas Sob Medida — Rolô, Blackout, Double Vision | Ibitinga SP',
  description: 'Persianas sob medida em Ibitinga SP — rolô, blackout, double vision, tela solar. Consultoria personalizada. Instalação sob consulta.',
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
  description: 'Persianas sob medida com consultoria personalizada em Ibitinga SP. Instalação sob consulta.',
}

const faq = [
  { pergunta: 'Qual é a diferença entre a persiana Rolô e a Persiana Double Vision?', resposta: 'A persiana Rolô tradicional é feita com uma única folha de tecido que se enrola completamente no tubo superior quando aberta, oferecendo um visual totalmente clean e minimalista. Já a Double Vision (ou persiana rolô noite e dia) possui faixas alternadas de tecido opaco e tela translúcida em duas camadas. Conforme você movimenta a persiana, essas faixas se sobrepõem, permitindo controlar perfeitamente a privacidade e a entrada de luz sem precisar recolher a peça inteira.' },
  { pergunta: 'Como funciona a persiana de Tela Solar (Screen) e onde ela é indicada?', resposta: 'A persiana de Tela Solar é fabricada com uma composição de PVC e poliéster (ou fibra de vidro) que funciona como um filtro de proteção solar. Ela reduz significativamente o calor e bloqueia até 99% dos raios UV — protegendo seus móveis, pisos e estofados do sol —, mas sem tirar a visibilidade externa ou escurecer o ambiente. É o modelo mais indicado para cozinhas, varandas gourmet, escritórios e salas de estar com alta incidência de sol.' },
  { pergunta: 'Qual é o melhor modelo de persiana para quarto e para a cozinha?', resposta: 'Para o quarto, o modelo mais recomendado é a Persiana Rolô Blackout ou a Persiana Romana Blackout, pois elas vedam a claridade e garantem o escurinho necessário para o descanso. Para a cozinha e lavanderia, a melhor opção é a Persiana Rolô de Tela Solar ou as persianas horizontais de alumínio/PVC. Esses materiais não retêm gordura, não mofam com a umidade e são extremamente fáceis de limpar no dia a dia.' },
  { pergunta: 'Como deve ser feita a limpeza e manutenção das persianas?', resposta: 'A limpeza rotineira é simples: basta usar um espanador ou o bocal de escova macia do aspirador de pó uma vez por semana para remover a poeira superficial. Para manchas leves em modelos de tecido ou tela solar, utilize um pano branco levemente umedecido em água e sabão neutro, sem esfregar com força. Atenção: persianas de tecido (como Rolô e Romana) nunca devem ser lavadas na máquina ou mergulhadas na água. Para uma higienização profunda anual, recomendamos serviços profissionais de lavagem de persianas.' },
  { pergunta: 'Posso instalar persianas em janelas com cortineiro de gesso?', resposta: 'Sim, com certeza! O cortineiro de gesso dá um acabamento impecável para as persianas, escondendo o tubo superior e o suporte de fixação. É ideal que o cortineiro tenha pelo menos 15 cm de profundidade livre para que a persiana (principalmente se for Double Vision ou Romana) consiga subir e descer livremente sem raspar no gesso. Na Maravilha Enxovais, também oferecemos a opção de acabamento com bandô (barra de alumínio) para cobrir o rolo da persiana caso você não tenha cortineiro de gesso na sua casa.' },
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

const beneficios = [
  { titulo: 'Consultoria personalizada',    legenda: 'Sob consulta de agenda' },
  { titulo: 'Instalação profissional',      legenda: 'Sob consulta' },
  { titulo: 'Mais de 16 anos',              legenda: 'De experiência' },
  { titulo: '5,0 no Google',                legenda: 'Avaliações verificadas' },
  { titulo: 'Atendimento pela Mara',        legenda: 'Personalizado' },
  { titulo: 'Projeto sob medida',           legenda: 'Controle de qualidade' },
  { titulo: 'Prazo garantido',              legenda: 'Informado no orçamento' },
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
      <main>
        <HeroPagina
          imagem={heroImg}
          alt="Persiana tela solar sob medida em cozinha — Maravilha Cortinas Ibitinga SP"
          eyebrow="Ibitinga — SP — Do rolô ao double vision"
          titulo="Persianas sob medida —"
          tituloEm="a luz certa pro seu ambiente"
          sub="Todos os modelos de persiana sob medida, indicados em consultoria personalizada. Atendemos Ibitinga e toda a região com mais de 16 anos de experiência."
          cta="Consultoria personalizada →"
          ctaHref={WA}
        />

        <div className={styles.pagina}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <h2 className={styles.introTitulo}>Controle de luz com sofisticação</h2>
                <p className={styles.introTexto}>
                  Rolô, Double Vision, Blackout, Tela Solar e muito mais. Indicamos o modelo certo pra luz e privacidade de cada ambiente. Consultoria personalizada em Ibitinga SP. Instalação sob consulta.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaHero}>
                  Fale conosco →
                </a>
              </div>
              <div className={styles.introImgWrap}>
                <Image
                  src={PERSIANAS[0].imagem}
                  alt={PERSIANAS[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <section className={styles.sec}>
              <h2 className={styles.secTitulo}>
                Por que escolher a Maravilha{' '}
                <em className={styles.secTituloEm}>para suas persianas?</em>
              </h2>
              <p className={styles.texto}>
                Cada projeto nasce em Ibitinga a partir de uma consultoria personalizada. Você tem acesso a um catálogo completo de modelos e conta com instalação profissional sob consulta.
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
                Consultoria personalizada em Ibitinga e região.
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
