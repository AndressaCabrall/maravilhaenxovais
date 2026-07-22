// src/app/produtos-e-servicos/page.jsx — Maravilha Cortinas
import CtaFooterPin   from '@/components/sections/Cta/CtaFooterPin'
import ProductCard    from '@/components/ui/ProductCard/ProductCard'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import styles         from './produtos.module.css'
import { DOMINIO }    from '@/lib/constants'
import cortinaImg     from '@/assets/images/cortinas/webp/cortina-wave-tubo-sob-medida-ibitinga-sp.webp'
import persianaImg    from '@/assets/images/persianas/webp/persiana-double-vision-sob-medida-ibitinga-sp.webp'
import motorImg       from '@/assets/images/motorizacao/webp/cortina-motorizada-trilho-automatizado-maravilha-ibitinga-sp.webp'

export const metadata = {
  title:       'Produtos e Serviços — Cortinas, Persianas e Motorização | Ibitinga SP',
  description: 'Conheça toda a linha da Maravilha Cortinas: cortinas sob medida, persianas sob medida e motorização para cortinas e persianas em Ibitinga e região.',
  keywords:    ['produtos Maravilha Cortinas', 'cortinas e persianas Ibitinga', 'motorização cortinas Ibitinga'],
  alternates:  { canonical: `${DOMINIO}/produtos-e-servicos` },
}

const PRODUTOS = [
  {
    href: '/produtos-e-servicos/cortinas',
    imagem: cortinaImg,
    alt: 'Cortina wave sob medida — Ibitinga SP',
    eyebrow: 'Do clássico ao contemporâneo',
    titulo: 'Cortinas',
    descricao: 'Wave, blackout, linho, prega macho e mais — cada cortina produzida sob medida para o seu vão.',
  },
  {
    href: '/produtos-e-servicos/persianas',
    imagem: persianaImg,
    alt: 'Persiana double vision sob medida — Ibitinga SP',
    eyebrow: 'Controle de luz sob medida',
    titulo: 'Persianas',
    descricao: 'Rolô, blackout, double vision, tela solar e painel translúcida — controle de luz para cada ambiente.',
  },
  {
    href: '/produtos-e-servicos/motorizacao',
    imagem: motorImg,
    alt: 'Cortina motorizada com trilho automatizado — Ibitinga SP',
    eyebrow: 'Automação residencial',
    titulo: 'Motorização',
    descricao: 'Automatize cortinas e persianas com controle pelo celular, Alexa e Google Home.',
  },
]

export default function ProdutosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { nome: 'Home',                 href: '/' },
        { nome: 'Produtos e Serviços',  href: '/produtos-e-servicos' },
      ]} />
      <main className={styles.pagina}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Produtos e serviços</span>
            </div>
            <h1 className={styles.titulo}>
              Cada janela pede{' '}
              <em className={styles.tituloEm}>uma solução diferente.</em>
            </h1>
            <p className={styles.sub}>
              Do tecido ao motor, toda a nossa linha é produzida sob medida em Ibitinga.
              Escolha abaixo o que você procura para ver modelos, diferenciais e perguntas frequentes.
            </p>
          </header>

          <div className={styles.grid}>
            {PRODUTOS.map((p) => (
              <ProductCard key={p.href} {...p} />
            ))}
          </div>

        </div>
      </main>
      <CtaFooterPin />
    </>
  )
}
