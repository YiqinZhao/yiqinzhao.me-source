import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: '**/*',
      schema: z.object({
        title: z.string(),
        hideTitle: z.boolean(),
        disableFancyImage: z.boolean(),
        leadingImage: z.string()
      })
    }),
    project: defineCollection({
      type: 'page',
      source: "project/*",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        previewCardDirection: z.string(),
        previewRedirectLink: z.string(),
        thumbnail: z.string(),
        tag: z.string()
      })
    })
  },
})