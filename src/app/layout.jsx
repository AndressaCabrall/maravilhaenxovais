// src/app/layout.jsx
import '@/styles/globals.css'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { EMPRESA, CONTATO, ENDERECO, DOMINIO, AREA_ATENDIMENTO } from '@/lib/constants'
import CookieBanner from '@/components/ui/CookieBanner/CookieBanner'
import SmoothScroll  from '@/components/layout/SmoothScroll/SmoothScroll'
import Navbar from '@/components/layout/Navbar/Navbar'
import HomePreloader from '@/components/layout/Preloader/HomePreloader'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat/WhatsAppFloat'

// ── Fontes ────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display:  'swap',
})

// ── Schema LocalBusiness ─────────────────────────────────────
const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type':    'LocalBusiness',
  name:        EMPRESA.nomeCompleto,
  description: 'Especialistas em cortinas e persianas sob medida em Ibitinga/SP desde 2011. Atendemos Ibitinga, Itápolis, Taquaritinga, Matão, Araraquara, Jaboticabal, Tabatinga, Nova Europa e Borborema. Instalação sob consulta e todo Brasil.',
  url:         DOMINIO,
  areaServed:  AREA_ATENDIMENTO.map((c) => ({ '@type': 'City', name: c.nome })),
  telephone:   CONTATO.telefoneFormatado,
  image:       `${DOMINIO}/images/og-image.jpg`,
  priceRange:  '$$',
  address: {
    '@type':         'PostalAddress',
    streetAddress:   ENDERECO.logradouro,
    addressLocality: ENDERECO.cidade,
    addressRegion:   ENDERECO.estado,
    postalCode:      ENDERECO.cep,
    addressCountry:  'BR',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   ENDERECO.lat,
    longitude:  ENDERECO.lng,
  },
  openingHoursSpecification: [
    {
      '@type':   'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens:     '08:00',
      closes:    '17:00',
    },
  ],
  sameAs: [
    CONTATO.instagramUrl,
    CONTATO.facebookUrl,
  ],
  aggregateRating: {
    '@type':      'AggregateRating',
    ratingValue:  '5.0',
    reviewCount:  7,
    bestRating:   5,
    worstRating:  1,
  },
}

// ── Schema FAQ — único, sem duplicata ─────────────────────────
const schemaFaq = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name:    'Como funciona a consultoria personalizada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'A consultoria é combinada pelo WhatsApp. Atendemos todo o Brasil.',
      },
    },
    {
      '@type': 'Question',
      name:    'Como Funciona a instalação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    ' A Instalação é sob consulta, com valor informado no orçamento. Trabalhamos com instalação profissional e sem surpresas no processo.',
      },
    },
    {
      '@type': 'Question',
      name:    'Quanto tempo leva da consultoria até a instalação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Todos nossos prazos são informados na consultoria personalizada do ateliê, depende do modelo e da quantidade de cortinas ou persianas.',
      },
    },
    {
      '@type': 'Question',
      name:    'Vocês atendem apartamentos e comércios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Sim! Atendemos residências, apartamentos, escritórios e comércios em Ibitinga, e toda a região.',
      },
    },
    {
      '@type': 'Question',
      name:    'Vocês fazem cortinas para pé direito duplo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Sim! Somos especialistas em cortinas sob medida para ambientes com pé direito alto e duplo — com trilho embutido e caimento impecável.',
      },
    },
    {
      '@type': 'Question',
      name:    'Vocês fazem motorização de cortinas e persianas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Sim! Trabalhamos com motorização compatível com controle remoto, Alexa e Google Home. Ideal para pé direito alto e janelas de difícil acesso.',
      },
    },
  ],
}

// ── Metadata global ───────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://www.maravilhaenxovais.com.br'),

  title: {
    default:  'Maravilha Cortinas | Cortinas e Persianas Sob Medida em Ibitinga SP',
    template: '%s | Maravilha Cortinas',
  },

  description: 'Ateliê especializado em cortinas e persianas sob medida em Ibitinga SP — wave, blackout, double vision, linho e motorização. Consultoria personalizada. Mais de 16 anos de experiência. Nota 5,0 no Google.',

  keywords: [
    'cortinas sob medida Ibitinga',
    'persianas sob medida Ibitinga',
    'ateliê de cortinas Ibitinga SP',
    'cortina wave Ibitinga',
    'cortina blackout Ibitinga',
    'persiana rolô Ibitinga',
    'persiana double vision Ibitinga',
    'instalação cortinas Ibitinga',
    'cortinas sob medida Itápolis',
    'cortinas pé direito duplo Ibitinga',
  ],

  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
    },
  },

  openGraph: {
    type:        'website',
    locale:      'pt_BR',
    url:         'https://www.maravilhaenxovais.com.br',
    siteName:    'Maravilha Cortinas',
    title:       'Maravilha Cortinas | Cortinas e Persianas Sob Medida em Ibitinga SP',
    description: 'Ateliê especializado em cortinas e persianas sob medida em Ibitinga SP. Consultoria personalizada. Wave, blackout, double vision e motorização. Mais de 16 anos de experiência.',
    images: [{
      url:    'https://www.maravilhaenxovais.com.br/images/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'Maravilha Cortinas — Cortinas e Persianas Sob Medida em Ibitinga SP',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Maravilha Cortinas | Cortinas e Persianas Sob Medida em Ibitinga SP',
    description: 'Ateliê especializado em cortinas e persianas sob medida em Ibitinga SP. Consultoria personalizada. Mais de 16 anos de experiência.',
    images:      ['https://www.maravilhaenxovais.com.br/images/og-image.jpg'],
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },

  icons: {
    icon:     '/favicon.ico',
    shortcut: '/favicon.ico',
    apple:    '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor:   '#E91E8C',
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Decide o preloader antes do primeiro paint, evitando a corrida com
            a hydration (a hero não chega a aparecer antes do preloader cobrir
            a tela). Grava em data-preloader, e não no className do <html>:
            esse atributo o React não reconcilia, então o valor sobrevive. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(/lighthouse|chrome-lighthouse|bot|crawl|spider/i.test(navigator.userAgent))return;if(sessionStorage.getItem('maravilha-preloader-exibido'))return;if(location.pathname!=='/')return;document.documentElement.setAttribute('data-preloader','ativo');sessionStorage.setItem('maravilha-preloader-exibido','1')}catch(e){}})()`,
          }}
        />

        {/* Geo tags — SEO local Ibitinga */}
        <meta name="geo.region"    content="BR-SP" />
        <meta name="geo.placename" content="Ibitinga" />
        <meta name="geo.position"  content="-21.7574;-48.8289" />
        <meta name="ICBM"          content="-21.7574, -48.8289" />

        {/* Schema LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />

        {/* Schema FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <HomePreloader />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  )
}