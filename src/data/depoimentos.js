// src/data/depoimentos.js — Maravilha Cortinas & Persianas — Ibitinga/SP
// Avaliações reais do Google Meu Negócio

import { GMB } from '@/lib/constants'

export const DEPOIMENTOS = [
  {
    id:    1,
    nome:  'Cilene Da Silva Sanches Busse',
    nota:  5,
    texto: 'Sou apaixonada pelo trabalho desse Ateliê, eu sempre me surpreendo, é tudo impecável, do atendimento à confecção das cortinas que são de alto padrão. Muito obrigada Mara, você arrasa!!',
    data:  '2025',
    via:   'Google',
  },
  {
    id:    2,
    nome:  'Dailiane Pontes',
    nota:  5,
    texto: 'Gostaria de agradecer o excelente atendimento personalizado, mesmo a distância consegui com a assessoria da Mara o resultado que eu queria.',
    data:  '2025',
    via:   'Google',
  },
  {
    id:    3,
    nome:  'Daci Mendes',
    nota:  5,
    texto: 'Atendimento e produtos excelentes. Recomendo muito a Maravilha Enxovais!',
    data:  '2025',
    via:   'Google',
  },
  {
    id:    4,
    nome:  'Camilly Ferreira',
    nota:  5,
    texto: 'Loja maravilhosa, fui muito bem atendida!',
    data:  'out. 2024',
    via:   'Google',
  },
  {
    id:    5,
    nome:  'Pedro Henrique Pavan',
    nota:  5,
    texto: 'Ótimos preços, boa qualidade, excelente instalação e prazo de entrega!',
    data:  'out. 2024',
    via:   'Google',
  },
  {
    id:    6,
    nome:  'Ivani Silva',
    nota:  5,
    texto: 'Excelente! Atendimento ótimo, entrega rápida e produto com acabamento perfeito. Super indico.',
    data:  'out. 2024',
    via:   'Google',
  },
  {
    id:    7,
    nome:  'Rafael Pavan',
    nota:  5,
    texto: 'Ótimo atendimento e produtos de qualidade. Recomendo a Maravilha Enxovais!',
    data:  'out. 2024',
    via:   'Google',
  },
]

export const depoimentosComTexto = DEPOIMENTOS.filter((d) => d.texto.length > 0)

export const RATING = {
  nota:        GMB.nota,
  total:       GMB.avaliacoes,
  linkGoogle:  GMB.reviewsUrl,
  linkAvaliar: GMB.reviewUrl,
}

