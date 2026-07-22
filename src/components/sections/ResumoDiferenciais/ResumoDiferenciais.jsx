// src/components/sections/ResumoDiferenciais/ResumoDiferenciais.jsx
import Link from 'next/link'
import styles from './ResumoDiferenciais.module.css'
import { EMPRESA, GMB } from '@/lib/constants'
import { DIFERENCIAIS } from '@/data/diferenciais'

const PRINCIPAIS = DIFERENCIAIS.slice(0, 4)

export default function ResumoDiferenciais() {
  return (
    <section className={styles.sec} aria-labelledby="resumo-dif-titulo">
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Por que a Maravilha?</span>
          </div>
          <h2 id="resumo-dif-titulo" className={styles.titulo}>
            Do projeto à instalação,{' '}
            <em className={styles.tituloEm}>cuidamos de tudo.</em>
          </h2>
          <div className={styles.prova}>
            <span className={styles.provaStars} aria-hidden="true">★★★★★</span>
            <span className={styles.provaTxt}>
              {GMB.nota} no Google · {EMPRESA.anos} anos · {EMPRESA.projetos} ambientes transformados
            </span>
          </div>
        </div>

        <div className={styles.lista}>
          {PRINCIPAIS.map((item, i) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.itemTitulo}>{item.titulo}</h3>
              <span className={styles.itemResumo}>{item.resumo}</span>
            </div>
          ))}
        </div>

        <div className={styles.rodape}>
          <Link href="/sobre" className={styles.link}>
            Conhecer nossa história e diferenciais
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
