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

        <div className={styles.grid}>
          {PRINCIPAIS.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.cardTitulo}>{item.titulo}</h3>
              <p className={styles.cardDesc}>{item.descricao}</p>
            </div>
          ))}
        </div>

        <div className={styles.rodape}>
          <Link href="/sobre" className={styles.link}>
            Conhecer nossa história e diferenciais →
          </Link>
        </div>

      </div>
    </section>
  )
}
