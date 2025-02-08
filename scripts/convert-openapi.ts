const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const convertYamlToJson = () => {
  try {
    // Read the YAML file from the public folder
    const yamlPath = path.resolve(__dirname, '../docs/public/openapi.yml')
    const yamlContent = fs.readFileSync(yamlPath, 'utf8')

    // Parse YAML to JSON
    const jsonContent = yaml.load(yamlContent)

    // Write JSON to public folder next to the YAML file
    const jsonPath = path.resolve(__dirname, '../docs/public/openapi.json')
    fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2))

    console.log('Successfully converted YAML to JSON')
    console.log(`Output file: ${jsonPath}`)
  } catch (error) {
    console.error('Error converting YAML to JSON:', error)
  }
}

convertYamlToJson() 