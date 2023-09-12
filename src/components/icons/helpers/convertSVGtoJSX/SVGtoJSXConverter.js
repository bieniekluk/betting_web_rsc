/* eslint-disable @typescript-eslint/no-var-requires */
const fsPromise = require('fs').promises
const { transform } = require('@svgr/core')
const fs = require('fs')
const path = require('path')
const SVGAttributesExtractor = require('./SVGAttributesExtractor')
const prettier = require('prettier')
const createIndexExportFile = require('./createIndexExportFile')

class SVGtoJSXConverter {
  constructor(
    svgDirectory = '../svg',
    outputDirectory = path.join(__dirname, '../..', 'tsx')
  ) {
    this.svgDirectory = svgDirectory
    this.outputDirectory = outputDirectory
  }

  /**
   * Convert a file name to camelCase.
   * @param {string} fileName - the name of the file to be converted.
   * @returns {string} - The camel case version of the file name, with 'Icon' prefix.
   */
  fileNameToCamelCase(fileName) {
    // Check if the file is an SVG file
    if (!fileName.endsWith('.svg')) {
      return `${fileName} is not svg file`
    }

    // Remove the file extension
    const baseName = path.basename(fileName, path.extname(fileName))

    // Remove special characters and convert to camelCase
    let camelCaseName = baseName
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join('')

    // Adding Icon at the beginning of the component name for clarity
    if (camelCaseName.startsWith('Icon')) {
      camelCaseName = camelCaseName
    } else {
      camelCaseName = 'Icon' + camelCaseName
    }

    return camelCaseName
  }

  /**
   * Converts an SVG file to JSX format.
   * @param {string} file - The name of the SVG file.
   * @returns {Promise<Object>} - An object containing the converted JSX content and extracted attributes.
   */
  async convertSVGToJSX(file) {
    // Read the content of the SVG file
    const content = await fsPromise.readFile(
      path.join(this.svgDirectory, file),
      'utf-8'
    )

    // Transform the SVG content to JSX format
    const jsxContent = await transform(content)

    // Extract attributes from the SVG content
    const attrsExtractor = new SVGAttributesExtractor(content)
    const attrs = await attrsExtractor.extract()

    // Replace 'width' and 'height' attributes with variables
    let newContent = jsxContent
      .replace(`width="${attrs.width}"`, `width={iconWidth}`)
      .replace(`height="${attrs.height}"`, `height={iconHeight}`)

    // Replace 'fill' attributes with predefined color variables
    Object.keys(attrs.colors).forEach((colorKey) => {
      newContent = newContent.replace(
        new RegExp(`fill="${attrs.colors[colorKey]}"`, 'g'),
        `fill={IconColors.${colorKey}}`
      )
    })

    return {
      name: this.fileNameToCamelCase(file),
      content: newContent,
      ...attrs,
    }
  }

  /**
   * Function to generate a component file based on the provided icon object.
   * @param {Object} icon - The icon object containing the necessary information for generating the component file.
   */
  async generateComponentFile(icon) {
    // Define the component template
    const componentTemplate = `
      interface ${icon.name}Props {
        iconWidth?: string;
        iconHeight?: string;
        IconColors?: ${JSON.stringify(icon.colors)};
      }
      
      export const ${icon.name}: React.FC<${icon.name}Props> = ({
        iconWidth = '${icon.width}',
        iconHeight = '${icon.height}',
        IconColors = ${JSON.stringify(icon.colors)}
      }) => {
        return (${icon.content});
      };
    `

    // Format the component template using prettier
    const formattedComponent = await prettier.format(componentTemplate, {
      parser: 'typescript',
      // Możesz dodać więcej opcji konfiguracyjnych dla prettier tutaj, jeśli chcesz
    })

    // Check if the output directory exists, and create it if it doesn't
    if (!fs.existsSync(this.outputDirectory)) {
      fs.mkdirSync(this.outputDirectory)
    }

    // Write the formatted component file to the output directory.
    fs.writeFileSync(
      path.join(this.outputDirectory, `${icon.name}.tsx`),
      formattedComponent
    )

    // Log a message indicating that the component file has been generated.
    console.log(`Component ${icon.name}.tsx generated.`)
  }

  async processFiles() {
    try {
      // Read the contents of the SVG director
      const files = await fsPromise.readdir(this.svgDirectory)

      // Filter out only the SVG files from the list of files
      const svgFiles = files.filter((file) => file.endsWith('.svg'))

      // Convert each SVG file to JSX
      const icons = await Promise.all(
        svgFiles.map((file) => this.convertSVGToJSX(file))
      )

      // Generate a component file for each icon
      await Promise.all(icons.map((icon) => this.generateComponentFile(icon)))

      // Call createIndexExportFile after all component files have been generated
      createIndexExportFile()
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error while processing SVG files:', error)
    }
  }
}

module.exports = SVGtoJSXConverter
