// src/components/ui/Button/Button.jsx — Maravilha Cortinas
import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({
  children,
  href,
  onClick,
  variante = 'primary',  // primary | dark | ghost | wpp | outline
  tamanho  = 'md',       // sm | md | lg
  full     = false,
  externo  = false,
  className = '',
  type     = 'button',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variante],
    styles[tamanho],
    full ? styles.full : '',
    className,
  ].filter(Boolean).join(' ')

  if (href && externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

