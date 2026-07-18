const sharp = require('sharp')
const fs    = require('fs')
const path  = require('path')

const pastaArg = process.argv[2]

const pastas = pastaArg ? [pastaArg] : [
  './src/assets/images/hero',
  './src/assets/images/footer',
  './src/assets/images/cortinas',
  './src/assets/images/persianas',
  './src/assets/images/pingentes',
  './src/assets/images/projetos',
  './src/assets/images/blog',
]

pastas.forEach(inputDir => {
  const outputDir = path.join(inputDir, 'webp')

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const files = fs.readdirSync(inputDir).filter(file =>
    /\.(png|jpg|jpeg)$/i.test(file)
  )

  console.log(`Convertendo ${inputDir} — ${files.length} imagens`)

  files.forEach(async (file) => {
    const inputPath  = path.join(inputDir, file)
    const outputFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
    const outputPath = path.join(outputDir, outputFile)

    try {
      await sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath)
      console.log(`OK: ${file} → ${outputFile}`)
    } catch (err) {
      console.error(`ERRO em ${file}:`, err.message)
    }
  })
})