// src/app/sitemap.js — gerado automaticamente a partir das rotas reais
import { DOMINIO } from '@/lib/constants'
import { CIDADES } from '@/data/cidades'
import { POSTS } from '@/data/posts'

export default function sitemap() {
  const hoje = new Date().toISOString().split('T')[0]

  const estaticas = [
    { url: `${DOMINIO}`,                              lastModified: hoje, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${DOMINIO}/sobre`,                         lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/produtos-e-servicos`,           lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/produtos-e-servicos/cortinas`,  lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/produtos-e-servicos/persianas`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/produtos-e-servicos/motorizacao`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/contato`,                       lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMINIO}/cortina-wave-ibitinga`,         lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMINIO}/cortina-pe-direito-duplo`,      lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMINIO}/cortina-motorizada-ibitinga`,   lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMINIO}/persiana-blackout-ibitinga`,    lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMINIO}/blog`,                          lastModified: hoje, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${DOMINIO}/privacidade`,                   lastModified: hoje, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const cidades = CIDADES.map((c) => ({
    url:             `${DOMINIO}/${c.slug}`,
    lastModified:    hoje,
    changeFrequency: 'monthly',
    priority:        c.highlight ? 0.9 : 0.7,
  }))

  const posts = POSTS.map((p) => ({
    url:             `${DOMINIO}/blog/${p.slug}`,
    lastModified:    p.dataPublicacao,
    changeFrequency: 'monthly',
    priority:        0.7,
  }))

  return [...estaticas, ...cidades, ...posts]
}
