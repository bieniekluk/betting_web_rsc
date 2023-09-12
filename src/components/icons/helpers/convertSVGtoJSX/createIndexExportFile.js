/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

// Path to the directory containing the .tsx files
const TSX_FOLDER_PATH = path.resolve(__dirname, '../..', 'tsx')

// Path to the index.ts file
const INDEX_PATH = path.resolve(__dirname, '../..', 'index.ts')

/**
 * Retrieves the .tsx files from the given directory path.
 *
 * @param {string} directoryPath - The path of the directory containing the .tsx files.
 * @returns {string[]} - Array of .tsx file names.
 */
function getTsxFiles(directoryPath) {
  const files = fs.readdirSync(directoryPath)
  return files.filter((file) => path.extname(file) === '.tsx')
}

/**
 * Generates the export statements for the given .tsx files.
 *
 * @param {string[]} tsxFiles - Array of .tsx file names.
 * @returns {string} - Index export string.
 */
function generateExportsString(tsxFiles) {
  return tsxFiles
    .map((file) => {
      const fileNameWithoutExtension = path.basename(file, '.tsx')
      return `export { ${fileNameWithoutExtension} } from "./tsx/${fileNameWithoutExtension}";`
    })
    .join('\n')
}

/**
 * Creates the index.ts export file by reading the .tsx files and generating the export statements.
 * The generated export statements are written to the index.ts file.
 */
function createIndexExportFile() {
  const tsxFiles = getTsxFiles(TSX_FOLDER_PATH)
  const exportsString = generateExportsString(tsxFiles)
  fs.writeFileSync(INDEX_PATH, exportsString)
  console.log('file index.tsx generated.')
}

module.exports = createIndexExportFile
