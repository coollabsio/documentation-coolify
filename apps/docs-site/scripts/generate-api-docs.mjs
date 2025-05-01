// scripts/generate-api-docs.mjs
import { generateFiles } from 'fumadocs-openapi'

void generateFiles({
  input: ['./openapi.yaml', './openapi.json'],
  output: './content/v5/api/endpoints',
  includeDescription: true,
  addGeneratedComment: true,
  per: 'operation',
  groupBy: 'tag',
  imports: [
    // only import the UI component
    { names: ['APIPage'], from: 'fumadocs-openapi/ui' },
  ],
})
  .then(() => console.log('✅ Generated API MDX into content/v5/api'))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
