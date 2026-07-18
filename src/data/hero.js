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
    eyebrow:        'Visita técnica mediante agendamento · Ibitinga e Região',
    position:       'center center',
    titulo:         'Cortinas sob medida',
    tituloDestaque: 'com instalação profissional disponível.',
    subtitulo:      'A Mara vai até você, mede e apresenta as opções. Instalação sob consulta — sem surpresa no preço, sem dor de cabeça.',
    ctaPrimario: {
      texto: 'Agendar visita agora',
      wa:    'Olá Mara! Gostaria de agendar uma visita para orçamento de cortinas sob medida.',
    },
    ctaSecundario: { texto: 'Ver cortinas', href: '/produtos-e-servicos/cortinas' },
    imagem: slide1,
    alt:    'Cortina sob medida com instalação profissional em Ibitinga SP — Maravilha Cortinas e Persianas',
  },
  {
    id:             2,
    eyebrow:        '+500 ambientes transformados · Desde 2011 · Nota 5,0 no Google',
    position:       'center center',
    titulo:         'Cortina wave sob medida',
    tituloDestaque: 'entregue a partir de 20 dias úteis.',
    subtitulo:      'Do linho ao blackout — cada cortina produzida na medida exata da sua janela, com trilho e instalação profissional disponível. Atendemos Ibitinga, Itápolis, Tabatinga e região.',
    ctaPrimario: {
      texto: 'Pedir orçamento pelo WhatsApp',
      wa:    'Olá Mara! Tenho interesse em cortina wave sob medida. Pode me passar um orçamento?',
    },
    ctaSecundario: { texto: 'Ver projetos', href: '/#projetos' },
    imagem: slide2,
    alt:    'Cortina wave sob medida instalada em sala de alto padrão em Ibitinga SP — Maravilha Cortinas',
  },
  {
    id:             3,
    eyebrow:        'Cortina Motorizada · Automação Residencial · Ibitinga SP',
    position:       'center center',
    titulo:         'Cortina wave motorizada.',
    tituloDestaque: 'Abra e feche sem sair do lugar.',
    subtitulo:      'Controle pelo celular, controle remoto ou Alexa — cortinas motorizadas sob medida com instalação profissional disponível. Ideal para pé direito alto e janelas de difícil acesso.',
    ctaPrimario: {
      texto: 'Pedir orçamento pelo WhatsApp',
      wa:    'Olá Mara! Tenho interesse em cortina wave motorizada sob medida. Pode me passar um orçamento?',
    },
    ctaSecundario: { texto: 'Ver cortinas', href: '/#cortinas' },
    imagem: slide3,
    alt:    'Cortina wave motorizada sob medida instalada em sala — Maravilha Cortinas Ibitinga SP',
  },
  {
    id:             4,
    eyebrow:        'Persianas Sob Medida · Visita Técnica · Ibitinga SP',
    position:       'center center',
    titulo:         'Persiana tela solar sob medida.',
    tituloDestaque: 'Filtra o calor sem perder a vista.',
    subtitulo:      'Persiana sob medida para cada janela — visita técnica mediante agendamento, instalação profissional disponível e prazo cumprido. Ibitinga, Itápolis, Tabatinga e toda a região.',
    ctaPrimario: {
      texto: 'Pedir orçamento pelo WhatsApp',
      wa:    'Olá Mara! Tenho interesse em persiana tela solar sob medida. Pode me passar um orçamento?',
    },
    ctaSecundario: { texto: 'Ver persianas', href: '/produtos-e-servicos/persianas' },
    imagem: slide4,
    alt:    'Persiana tela solar sob medida instalada em cozinha — Maravilha Cortinas Ibitinga SP',
  },
]