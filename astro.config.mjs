// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    gfm: true,
    smartypants: true,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
  }
});
