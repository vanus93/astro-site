import { defineConfig } from 'astro/config';

// GitHub Pages deployment config
export default defineConfig({
  // Uncomment below for subdomain deployment (github.com/username/repo-name)
  // site: 'https://username.github.io/repo-name',
  
  // For username.github.io, leave site as default or set to:
  // site: 'https://username.github.io',
  
  output: 'static',
  outDir: './dist'
});
