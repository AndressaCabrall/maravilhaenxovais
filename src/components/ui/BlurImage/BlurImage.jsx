'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './BlurImage.module.css'

export default function BlurImage({
  src,
  alt,
  fill,
  sizes,
  priority,
  index,
  className,
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority ?? index < 3}
      loading={priority || index < 3 ? undefined : 'lazy'}
      className={`${className ?? ''} ${loaded ? styles.loaded : styles.loading}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

