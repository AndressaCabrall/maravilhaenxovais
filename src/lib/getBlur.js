// src/lib/getBlur.js
// Maravilha Cortinas & Persianas — blur placeholder para imagens
import { getPlaiceholder } from 'plaiceholder'
import fs from 'fs'
import path from 'path'

export async function getBlurData(imagePath) {
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), 'public/images', imagePath)
    )
    const { base64 } = await getPlaiceholder(file)
    return base64
  } catch {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  }
}

