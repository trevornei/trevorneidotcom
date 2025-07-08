import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import { schemas } 'sanity/schemas';

// Now create a variable that calls the defineConfig({}) method. 
// Don't forget to add a base-path: this is where your sanity application will
// live on your domain/path...
const config = defineConfig({
  projectId: 'm1aaeqzz',
  dataset: 'production',
  title: 'notes',
  apiVersion: '2025-18-07',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas}
});


export default config;


