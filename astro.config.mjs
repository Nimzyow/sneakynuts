// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  content: {
    collections: {
      blog: {
        type: 'content',
        schema: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            author: { type: 'string' },
            pubDate: { type: 'string', format: 'date' },
            tags: { type: 'array', items: { type: 'string' } },
            emoji: { type: 'string' },
            featured: { type: 'boolean' }
          },
          required: ['title', 'description', 'author', 'pubDate']
        }
      }
    }
  }
});
