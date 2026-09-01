// src/lib/whatsapp.js
// Maravilha Cortinas & Persianas — Ibitinga SP
import { CONTATO } from './constants'

const BASE = `https://wa.me/${CONTATO.whatsapp}`

export const WHATSAPP_URLS = {
  geral:         `${BASE}?text=${encodeURIComponent('Olá! Gostaria de fazer uma consultoria personalizada para cortinas ou persianas sob medida.')}`,
  orcamento:     `${BASE}?text=${encodeURIComponent('Olá! Gostaria de fazer uma consultoria personalizada.')}`,
  cortinas:      `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para cortinas sob medida. Pode me ajudar?')}`,
  persianas:     `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para persianas sob medida. Pode me ajudar?')}`,
  motorizacao:   `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada sobre motorização de cortinas ou persianas.')}`,
  blackout:      `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para persiana ou cortina blackout sob medida.')}`,
  wave:          `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para cortina wave sob medida.')}`,
  tela_solar:    `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para persiana tela solar sob medida.')}`,
  double_vision: `${BASE}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria personalizada para persiana double vision sob medida.')}`,
  pe_direito:    `${BASE}?text=${encodeURIComponent('Olá! Tenho um ambiente com pé direito duplo e gostaria de uma consultoria personalizada para cortinas sob medida.')}`,
  arquiteto:     `${BASE}?text=${encodeURIComponent('Olá! Sou arquiteto(a) e gostaria de conhecer o ateliê para projetos de cortinas e persianas. Podemos conversar?')}`,
  comercial:     `${BASE}?text=${encodeURIComponent('Olá! Tenho um espaço comercial e gostaria de uma consultoria personalizada para cortinas ou persianas sob medida.')}`,
  duvida:        `${BASE}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre cortinas ou persianas. Pode me ajudar?')}`,
}

export function whatsappUrl(mensagem) {
  return `${BASE}?text=${encodeURIComponent(mensagem)}`
}

// ── Evento GA4 ────────────────────────────────────────────────
export function trackWhatsApp(label) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'contato',
      event_label:    label,
    })
  }
}