import { defineConfig } from '@sanity/cli';

export default defineConfig({
  api: {
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
    apiVersion: '2025-02-19',
  }
})
