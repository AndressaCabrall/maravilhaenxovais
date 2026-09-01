// src/data/hero.js — Maravilha Cortinas & Persianas — Ibitinga/SP
// Palavras fundo de funil: cortinas sob medida instalação, persiana sob medida com instalação,
// medição e instalação sob consulta, cortinas ibitinga, orçamento cortinas

import slide1 from '@/assets/images/hero/webp/cortina-sob-medida-instalacao-ibitinga-sp.webp'
import slide2 from '@/assets/images/hero/webp/cortina-prega-macho-linho-ambiente-ibitinga-sp.webp'
import slide3 from '@/assets/images/hero/webp/cortina-wave-sala-alto-padrao-ibitinga-sp.webp'
import slide4 from '@/assets/images/hero/webp/persiana-tela-solar-cozinha-sob-medida-ibitinga-sp.webp'

export const SLIDES = [
  {
    id:             1,
    eyebrow:        'Consultoria personalizada · Ibitinga · Atendemos Todo o Brasil',
    position:       'center center',
    titulo:         'Ateliê de cortinas e persianas',
    tituloDestaque: 'sob medida, com consultoria em Ibitinga.',
    subtitulo:      'Um projeto pensado pro seu ambiente — da escolha do tecido ideal ao acabamento, com o cuidado de um ateliê especializado. Instalação sob consulta.',
    ctaPrimario: {
      texto: 'Fazer consultoria personalizada',
      wa:    'Olá Mara! Gostaria de fazer uma consultoria personalizada para meu projeto de cortinas sob medida.',
    },
    ctaSecundario: { texto: 'Ver cortinas', href: '/produtos-e-servicos/cortinas' },
    imagem: slide1,
    alt:    'Cortina sob medida com instalação profissional em Ibitinga SP — Maravilha Cortinas e Persianas',
  },
  {
    id:             2,
    eyebrow:        '+500 ambientes transformados · Desde 2011 · Nota 5,0 no Google',
    position:       'center center',
    titulo:         'Cada cortina wave nasce de um projeto',
    tituloDestaque: 'pensado pro seu ambiente.',
    subtitulo:      'Do linho ao blackout — escolhemos com você o tecido certo pra luz, privacidade e decoração da sua sala. O ateliê é em Ibitinga, mas atendemos em todo o Brasil.',
    ctaPrimario: {
      texto: 'Fazer consultoria personalizada',
      wa:    'Olá Mara! Gostaria de fazer uma consultoria personalizada para um projeto de cortina wave sob medida.',
    },
    ctaSecundario: { texto: 'Ver projetos', href: '/#projetos' },
    imagem: slide2,
    alt:    'Cortina wave sob medida instalada em sala de alto padrão em Ibitinga SP — Maravilha Cortinas',
  },
  {
    id:             3,
    eyebrow:        'Cortina Motorizada · Consultoria em Automação · Ibitinga SP',
    position:       'center center',
    titulo:         'Automação pensada pro seu espaço,',
    tituloDestaque: 'não só pela tecnologia.',
    subtitulo:      'Avaliamos o ambiente com você e indicamos onde a motorização realmente faz diferença — controle pelo celular, remoto ou Alexa. Ideal para pé direito alto e janelas de difícil acesso.',
    ctaPrimario: {
      texto: 'Fazer consultoria personalizada',
      wa:    'Olá Mara! Gostaria de fazer uma consultoria personalizada para um projeto de cortina wave motorizada.',
    },
    ctaSecundario: { texto: 'Ver cortinas', href: '/#cortinas' },
    imagem: slide3,
    alt:    'Cortina wave motorizada sob medida instalada em sala — Maravilha Cortinas Ibitinga SP',
  },
  {
    id:             4,
    eyebrow:        'Persianas Sob Medida · Consultoria Personalizada · Atendemos Todo o Brasil',
    position:       'center center',
    titulo:         'A persiana certa depende da luz',
    tituloDestaque: 'que entra na sua janela.',
    subtitulo:      'Analisamos a incidência solar e a privacidade de cada ambiente antes de indicar o modelo — como a tela solar, que filtra o calor sem perder a vista. O ateliê é em Ibitinga, mas atendemos em todo o Brasil.',
    ctaPrimario: {
      texto: 'Fazer consultoria personalizada',
      wa:    'Olá Mara! Gostaria de fazer uma consultoria personalizada para um projeto de persiana tela solar.',
    },
    ctaSecundario: { texto: 'Ver persianas', href: '/produtos-e-servicos/persianas' },
    imagem: slide4,
    alt:    'Persiana tela solar sob medida instalada em cozinha — Maravilha Cortinas Ibitinga SP',
  },
]