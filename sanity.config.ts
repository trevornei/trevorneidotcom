import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';


// Now create a variable that calls the defineConfig({}) method. 
// Don't forget to add a base-path: this is where your sanity application will
// live on your domain/path...
const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: 'notes',
  apiVersion: '2025-02-19',
  basePath: '/admin',
  plugins: [
      deskTool(), 
      visionTool({
        defaultApiVersion: '2025-02-19',
        defaultDataset: process.env.NEXT_PUBLIC_SANITY_DATASET
      }),
      codeInput()
  ],
  schema: {types: schemas},
});


export default config;


