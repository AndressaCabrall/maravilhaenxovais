// src/components/seo/BreadcrumbSchema.jsx — injeta schema BreadcrumbList
import { DOMINIO } from '@/lib/constants'

export default function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      item.nome,
      item:      `${DOMINIO}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
