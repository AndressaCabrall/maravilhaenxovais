// src/components/ui/Ticker/Ticker.jsx — Maravilha Cortinas
import styles from './Ticker.module.css'

const ITENS = [
  'Cortinas Sob Medida',
  'Persianas Sob Medida',
  'Consultoria Personalizada',
  'Instalação Sob Consulta',
  'Ibitinga · Taquaritinga  · Itapólis · Araraquara · Matão',
  '5 Estrelas no Google',
  '+16 Anos de Experiência',
  'Motorização Disponível',
]

export default function Ticker() {
  const itens = [...ITENS, ...ITENS]

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.inner}>
        {itens.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
