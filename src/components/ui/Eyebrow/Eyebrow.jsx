// src/components/ui/Eyebrow/Eyebrow.jsx — Maravilha Cortinas
import styles from './Eyebrow.module.css'

export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`${styles.eyebrow} ${className}`}>
      {children}
    </p>
  )
}

