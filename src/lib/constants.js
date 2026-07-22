// src/lib/constants.js
// Maravilha Cortinas & Persianas — Ibitinga/SP

export const EMPRESA = {
  nome: 'Maravilha Cortinas',
  nomeCompleto: 'Maravilha Enxovais Cortinas e Persianas Ibitinga',
  nomeAbreviado: 'Maravilha',
  cnpj: '15.100.963/0001-34',
  anos: '+16',
  avaliacoes: 8,
  nota: '5,0',
  projetos: '500+',
  slogan: 'Cortinas e persianas sob medida com visita técnica e instalação incluídas. Do clássico ao moderno — transformamos ambientes em Ibitinga e região.',
  bio: 'Loja da Fábrica especializada em cortinas e persianas sob medida em Ibitinga/SP desde 2011. Da medição à instalação, cuidamos de tudo para transformar seu ambiente.',
}

export const CONTATO = {
  telefone: '(16) 99610-3132',
  telefoneFormatado: '+5516996103132',
  whatsapp: '5516996103132',
  instagram: '@maravilhaenxovais',
  instagramUrl: 'https://www.instagram.com/maravilhaenxovais',
  facebookUrl: 'https://www.facebook.com/maravilhaenxovaisibitinga',
  gmbUrl: 'https://www.google.com/maps/place/Maravilha+Enxovais+Cortinas+e+Persianas+em+Ibitinga+SP/@-21.7565608,-48.8347167,17z/data=!3m1!4b1!4m6!3m5!1s0x94bf29d72a7008a5:0xe3afce58b579ea14!8m2!3d-21.7565608!4d-48.8321418!16s%2Fg%2F11w9flj6ll',
}

export const ENDERECO = {
  logradouro: 'Av. Sete de Setembro, 595',
  bairro: 'Centro',
  cidade: 'Ibitinga',
  estado: 'SP',
  cep: '14940-157',
  completo: 'Av. Sete de Setembro, 595 — Centro, Ibitinga/SP — CEP 14940-157',
  lat: -21.7565608,
  lng: -48.8321418,
  mapsUrl: 'https://www.google.com/maps/place/Maravilha+Enxovais+Cortinas+e+Persianas+em+Ibitinga+SP/@-21.7565608,-48.8347167,17z/data=!3m1!4b1!4m6!3m5!1s0x94bf29d72a7008a5:0xe3afce58b579ea14!8m2!3d-21.7565608!4d-48.8321418!16s%2Fg%2F11w9flj6ll',
}

export const HORARIO = {
  semana: 'Seg–Sex: 08h00 – 17h00',
  sabado: 'Sáb: Fechado',
  domingo: 'Dom: Fechado',
  resumo: 'Seg–Sex 08h00–17h00',
}

export const GMB = {
  nota: '5,0',
  avaliacoes: 7,
  linkMaps: 'https://www.google.com/maps/place/Maravilha+Enxovais+Cortinas+e+Persianas+em+Ibitinga+SP/@-21.7565608,-48.8347167,17z/data=!3m1!4b1!4m6!3m5!1s0x94bf29d72a7008a5:0xe3afce58b579ea14!8m2!3d-21.7565608!4d-48.8321418!16s%2Fg%2F11w9flj6ll',
  placeId: 'ChIJpQhwKtcpv5QRFOp5tVjOr-M',
  reviewUrl: 'https://g.page/r/COPqebhYzq_jEAE/review',
  reviewsUrl: 'https://www.google.com/maps/place/Cortinas+e+Persianas+sob+Medida%7C+Maravilha+Enxovais+em+Ibitinga+e+Regi%C3%A3o+SP/@-21.7565558,-48.8347167,17z/data=!4m8!3m7!1s0x94bf29d72a7008a5:0xe3afce58b579ea14!8m2!3d-21.7565608!4d-48.8321418!9m1!1b1!16s%2Fg%2F11w9flj6ll',
}

export const DOMINIO = 'https://www.maravilhaenxovais.com.br'

export const AREA_ATENDIMENTO = [
  { nome: 'Ibitinga', slug: 'cortinas-ibitinga', dist: 'Sede', highlight: true },
  { nome: 'Itápolis', slug: 'cortinas-itapolis', dist: '~20 km', highlight: true },
  { nome: 'Tabatinga', slug: 'cortinas-tabatinga', dist: '~25 km', highlight: true },
  { nome: 'Nova Europa', slug: 'cortinas-nova-europa', dist: '~30 km', highlight: true },
  { nome: 'Borborema', slug: 'cortinas-borborema', dist: '~25 km', highlight: false },
  { nome: 'Matão', slug: 'cortinas-matao', dist: '~35 km', highlight: true },
  { nome: 'Taquaritinga', slug: 'cortinas-taquaritinga', dist: '~25 km', highlight: true },
  { nome: 'Araraquara', slug: 'cortinas-araraquara', dist: '~60 km', highlight: false },
  { nome: 'Jaboticabal', slug: 'cortinas-jaboticabal', dist: '~40 km', highlight: false },
]

export const MODELO_NEGOCIO = {
  visitaTecnica: true,
  instalacao: true,
  instalacaoNota: 'Realizamos visita técnica e instalação profissional in loco.',
  entrega: true,
  entregaRegiao: 'Ibitinga e região — envio para todo o Brasil sob consulta',
}

export const IDENTIDADE_VISUAL = {
  cores: {
    // — Paleta Atelier Blanc
    white: '#FFFFFF',
    linho: '#F7F4F0',
    areia: '#EDE8E1',
    areiaD: '#D9D2C8',
    grafite: '#2C2C2A',
    grafiteSoft: '#4A4A47',
    taupe: '#7A746E',
    taupeLight: '#A09A93',
    // — Pink marca — usar com parcimônia
    pink: '#E91E8C',
    pinkHover: '#C2185B',
    pinkSoft: '#FCE4EC',
    pinkBorder: '#F8BBD0',
  },
  fontes: {
    display: 'Libre Baskerville',
    corpo: 'Outfit',
  },
}