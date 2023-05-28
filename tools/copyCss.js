const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, '..', 'src', 'style')
const destinationDir = path.join(__dirname, '..', 'dist', 'style')

const isWatchMode = process.argv[2] === '--watch'

function copySync() {
  const cssFiles = fs
    .readdirSync(sourceDir)
    .filter((file) => file.endsWith('.css'))

  cssFiles.forEach((file) => {
    const sourcePath = path.join(sourceDir, file)
    const destinationPath = path.join(destinationDir, file)
    fs.copyFileSync(sourcePath, destinationPath)
  })
}

fs.mkdirSync(destinationDir, { recursive: true })
copySync()

if (isWatchMode) {
  console.log(`watching for ${sourceDir} files change...`)

  fs.watch(sourceDir, { recursive: true }, (eventType, filename) => {
    if (eventType === 'change' || eventType === 'rename') {
      const sourcePath = path.join(sourceDir, filename)
      const destinationPath = path.join(destinationDir, filename)
      fs.copyFileSync(sourcePath, destinationPath)
      console.log(`${filename} has changed ... Copying into ${destinationDir}`)
    }
  })
}
