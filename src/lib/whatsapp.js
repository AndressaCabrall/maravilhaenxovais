// src/lib/whatsapp.js
// Maravilha Cortinas & Persianas — Ibitinga SP
import { CONTATO } from './constants'

const BASE = `https://wa.me/${CONTATO.whatsapp}`

export const WHATSAPP_URLS = {
  geral:         `${BASE}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento de cortinas ou persianas sob medida.')}`,
  orcamento:     `${BASE}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita de medição.')}`,
  cortinas:      `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em cortinas sob medida. Pode me passar mais informações?')}`,
  persianas:     `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em persianas sob medida. Pode me passar mais informações?')}`,
  motorizacao:   `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em motorização de cortinas ou persianas. Pode me ajudar?')}`,
  blackout:      `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em persiana ou cortina blackout sob medida. Pode me ajudar?')}`,
  wave:          `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em cortina wave sob medida. Pode me passar mais informações?')}`,
  tela_solar:    `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em persiana tela solar sob medida. Pode me ajudar?')}`,
  double_vision: `${BASE}?text=${encodeURIComponent('Olá! Tenho interesse em persiana double vision sob medida. Pode me ajudar?')}`,
  pe_direito:    `${BASE}?text=${encodeURIComponent('Olá! Tenho um ambiente com pé direito duplo e gostaria de orçamento para cortinas sob medida.')}`,
  arquiteto:     `${BASE}?text=${encodeURIComponent('Olá! Sou arquiteto(a) e preciso de um fornecedor de cortinas e persianas para projetos. Podemos conversar?')}`,
  comercial:     `${BASE}?text=${encodeURIComponent('Olá! Tenho um espaço comercial e preciso de cortinas ou persianas sob medida. Pode me ajudar?')}`,
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