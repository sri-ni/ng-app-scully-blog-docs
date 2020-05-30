"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
