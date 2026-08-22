// src/app/sitemap.js — gerado automaticamente a partir das rotas reais
import { DOMINIO } from '@/lib/constants'
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
    { url: `${DOMINIO}/blog`,                          lastModified: hoje, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${DOMINIO}/privacidade`,                   lastModified: hoje, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-itapolis`,     lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-taquaritinga`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-matao`,        lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-araraquara`,   lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-jaboticabal`,  lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-tabatinga`,    lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-nova-europa`,  lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMINIO}/cortinas-e-persianas-sob-medida-borborema`,    lastModified: hoje, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const posts = POSTS.map((p) => ({
    url:             `${DOMINIO}/blog/${p.slug}`,
    lastModified:    p.dataPublicacao,
    changeFrequency: 'monthly',
    priority:        0.7,
  }))

  return [...estaticas, ...posts]
}
