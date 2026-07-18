// src/data/cortinas.js
// Maravilha Cortinas & Persianas — Ibitinga/SP

import peDireito  from '@/assets/images/cortinas/webp/cortina-pe-direito-duplo-linho-sala-ibitinga-sp.webp'
import waveBlackout from '@/assets/images/cortinas/webp/cortina-wave-blackout-70-quarto-ibitinga-sp.webp'
import pregaMacho from '@/assets/images/cortinas/webp/cortina-prega-macho-linho-sala-ibitinga-sp.webp'
import waveTubo   from '@/assets/images/cortinas/webp/cortina-wave-tubo-sob-medida-ibitinga-sp.webp'
import cortineiro from '@/assets/images/cortinas/webp/cortinas-sob-medida-ibitinga-sp.png'
import voalCortineiro from '@/assets/images/cortinas/webp/cortina-voal-cortineiro-quarto-ibitinga-sp.webp'

export const CORTINAS = [
  {
    id:       'pe-direito-duplo',
    slug:     'cortina-pe-direito-duplo',
    nome:     'Cortina Pé Direito Duplo em Linho',
    tagline:  'Para ambientes grandiosos',
    descricao:'Linho natural do teto ao chão em ambientes com pé direito duplo. O tecido certo para valorizar cada centímetro de altura — com trilho estruturado, caimento impecável e instalação especializada.',
    destaque: 'Alto padrão',
    beneficios: [
      'Linho natural com caimento perfeito',
      'Trilhos estruturados para alturas grandes',
      'Medição técnica especializada',
      'Instalação segura com equipe qualificada',
    ],
    imagem: peDireito,
    alt: 'Cortina pé direito duplo em linho sob medida em sala — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse em Cortina Pé Direito Duplo em Linho sob medida. Pode me passar mais informações?',
  },
  {
    id:       'wave-blackout',
    slug:     'cortina-wave-blackout',
    nome:     'Cortina Wave com Blackout 70% no Quarto',
    tagline:  'O queridinho dos arquitetos com privacidade real',
    descricao:'Ondas perfeitas e simétricas em tecido blackout 70% — filtra a luz sem escurecer completamente, criando uma atmosfera suave e aconchegante no quarto. O mais pedido em projetos de alto padrão.',
    destaque: 'Mais pedida',
    beneficios: [
      'Ondas uniformes e simétricas',
      'Blackout 70% — luz filtrada e confortável',
      'Ideal para quartos de casal',
      'Visual contemporâneo e sofisticado',
    ],
    imagem: waveBlackout,
    alt: 'Cortina Wave com blackout 70% instalada em quarto — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Cortina Wave com Blackout 70% sob medida. Pode me passar mais informações?',
  },
  {
    id:       'prega-macho-linho',
    slug:     'cortina-prega-macho-linho',
    nome:     'Cortina Prega Macho em Linho',
    tagline:  'O clássico atemporal em textura natural',
    descricao:'Pregas estruturadas em linho natural — o equilíbrio perfeito entre o clássico e o contemporâneo. Textura orgânica que aquece a sala e combina com qualquer estilo de decoração.',
    destaque: 'Clássica',
    beneficios: [
      'Linho natural com textura orgânica',
      'Caimento firme e uniforme',
      'Combina com qualquer decoração',
      'Ideal para salas de estar e jantar',
    ],
    imagem: pregaMacho,
    alt: 'Cortina Prega Macho em linho sob medida em sala — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Cortina Prega Macho em Linho sob medida. Pode me passar mais informações?',
  },
  {
    id:       'wave-tubo',
    slug:     'cortina-wave-tubo',
    nome:     'Cortina Wave no Tubo',
    tagline:  'Wave com acabamento no tubo',
    descricao:'O modelo wave instalado no tubo — ondas perfeitas com o acabamento do varão aparente como elemento decorativo. Sofisticado, moderno e ideal para quem quer o visual wave sem trilho embutido.',
    destaque: null,
    beneficios: [
      'Ondas wave com varão aparente',
      'Varão como elemento decorativo',
      'Visual moderno e sofisticado',
      'Instalação mais acessível que trilho embutido',
    ],
    imagem: waveTubo,
    alt: 'Cortina Wave no tubo sob medida — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse na Cortina Wave no Tubo sob medida. Pode me passar mais informações?',
  },
  {
    id:       'trilhosuiço',
    slug:     'cortina-trilho-suico',
    nome:     'Cortina Wave em Trilho Suíço',
    tagline:  'Movimento fluido e elegante com trilho aparente',
    descricao: 'Cortina wave instalada em trilho suíço aparente fixado diretamente no teto. As ondas suaves e uniformes são características do sistema wave, criando um visual moderno e sofisticado — muito utilizado em projetos de arquitetura de alto padrão.',
    destaque: 'Premium',
    beneficios: [
      'Trilho suíço aparente fixado no teto',
      'Ondas uniformes e suaves do sistema wave',
      'Visual moderno e sofisticado',
      'Muito utilizado em projetos de arquitetura',
    ],
    imagem: cortineiro,
    alt: 'Cortina wave em trilho suíço aparente fixado no teto — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse em Cortina Wave em Trilho Suíço sob medida. Pode me passar mais informações?',
  },
  
  {
    id:       'voal-cortineiro',
    slug:     'cortina-voal-cortineiro-quarto',
    nome:     'Cortina de Voal dentro do Cortineiro',
    tagline:  'Leveza e privacidade no quarto',
    descricao:'Voal delicado instalado dentro do cortineiro — luz natural filtrada de forma suave criando um ambiente aconchegante e luminoso no quarto. Elegância sem perder a privacidade.',
    destaque: null,
    beneficios: [
      'Voal que filtra a luz suavemente',
      'Instalado dentro do cortineiro',
      'Ambiente luminoso e aconchegante',
      'Ideal para quartos e suítes',
    ],
    imagem: voalCortineiro,
    alt: 'Cortina de voal dentro do cortineiro no quarto — Maravilha Cortinas Ibitinga SP',
    wa: 'Olá Mara! Tenho interesse em Cortina de Voal dentro do Cortineiro sob medida. Pode me passar mais informações?',
  },
]

