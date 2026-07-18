// src/components/ui/FaqAccordion/FaqAccordion.jsx — acordeão de FAQ reutilizável
'use client'

import { useState } from 'react'
import styles from './FaqAccordion.module.css'

export default function FaqAccordion({ items, idPrefix = 'faq' }) {
  const [aberto, setAberto] = useState(0)
  const toggle = (i) => setAberto((prev) => (prev === i ? null : i))

  return (
    <div className={styles.lista} itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => (
        <div
          key={item.pergunta}
          className={`${styles.item} ${aberto === i ? styles.itemAberto : ''}`}
          itemScope
          itemType="https://schema.org/Question"
          itemProp="mainEntity"
        >
          <button
            className={styles.pergunta}
            onClick={() => toggle(i)}
            aria-expanded={aberto === i}
            aria-controls={`${idPrefix}-resp-${i}`}
            id={`${idPrefix}-preg-${i}`}
          >
            <span className={styles.perguntaTxt} itemProp="name">{item.pergunta}</span>
            <span className={`${styles.icone} ${aberto === i ? styles.iconeAberto : ''}`} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>

          <div
            id={`${idPrefix}-resp-${i}`}
            role="region"
            aria-labelledby={`${idPrefix}-preg-${i}`}
            className={`${styles.resposta} ${aberto === i ? styles.respostaAberta : ''}`}
            itemScope
            itemType="https://schema.org/Answer"
            itemProp="acceptedAnswer"
          >
            <div className={styles.respostaInner}>
              <p className={styles.respostaTxt} itemProp="text">{item.resposta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
