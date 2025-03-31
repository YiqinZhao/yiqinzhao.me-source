import * as fs from 'fs';
import * as path from 'path';

function findMarkdownFiles(dir: string): string[] {
  let results: string[] = [];

  // Read directory entries
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // If it's a directory, recurse
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    }
    // If it's a file with .md extension, add it
    else if (entry.isFile() && fullPath.endsWith('.md')) {
      results.push(fullPath);
    }
  }

  return results;
}

const allMarkdowns = findMarkdownFiles('./content')
  .map(v => v.replace("content", "").replace(".md", "/").replace("index/", ""))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-28',
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: allMarkdowns
    }
  }
})