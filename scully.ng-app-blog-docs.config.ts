import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ng-app-blog-docs",
  outDir: './dist/static',
  routes: {
    '/docs/:doc': {
      type: 'contentFolder',
      doc: {
        folder: "./docs"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
