/* eslint-disable @typescript-eslint/no-var-requires */
const xml2js = require('xml2js')

class SVGAttributesExtractor {
  constructor(content) {
    this.content = content
    this.parser = new xml2js.Parser()
  }

  async extract() {
    const parsed = await this.parser.parseStringPromise(this.content)
    const svgAttrs = parsed.svg.$
    const colors = this.extractColors(parsed.svg)
    return {
      width: svgAttrs.width,
      height: svgAttrs.height,
      colors: colors,
    }
  }
  /**
   * Extracts unique colors from an SVG object.
   * @param {object} svg - The SVG object to traverse.
   * @returns {object} - An object containing colors extracted from the SVG.
   */
  extractColors(svg) {
    const colors = new Set()

    // Traverses through an object to find colors and add them to the colors Set
    const traverse = (obj) => {
      if (typeof obj === 'object') {
        for (let key in obj) {
          if (key === '$' && obj[key].fill && obj[key].fill !== 'none') {
            colors.add(obj[key].fill)
          } else {
            traverse(obj[key])
          }
        }
      }
    }

    traverse(svg)

    const iconColors = {}
    ;[...colors].forEach((color, index) => {
      iconColors[`color${index + 1}`] = color
    })

    return iconColors
  }
}

module.exports = SVGAttributesExtractor
