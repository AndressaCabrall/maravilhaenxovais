// src/lib/utils.js
// Maravilha Cortinas & Persianas — utilitários gerais

export function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  const meses = [
    'jan','fev','mar','abr','mai','jun',
    'jul','ago','set','out','nov','dez'
  ]
  return `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${ano}`
}

export function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function truncar(texto, limite = 120) {
  if (texto.length <= limite) return texto
  return texto.slice(0, limite).trim() + '...'
}

