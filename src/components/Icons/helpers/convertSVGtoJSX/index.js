/* eslint-disable @typescript-eslint/no-var-requires */
const SVGtoJSXConverter = require('./SVGtoJSXConverter')

const processConversion = async () => {
  try {
    const processor = new SVGtoJSXConverter()
    await processor.processFiles()
    console.log('All files have been processed!')
  } catch (error) {
    console.error('An error occurred while processing the files:', error)
  }
}

processConversion()
