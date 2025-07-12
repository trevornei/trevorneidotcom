import { defineCliConfig } from '@sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
  }
})
