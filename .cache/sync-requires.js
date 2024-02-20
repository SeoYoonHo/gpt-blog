
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/src/pages/index.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/src/templates/blog-template.js")),
  "component---src-templates-category-template-js": preferDefault(require("/Users/seoyoonho/Project/Study/gptblog/notion-blog/src/templates/category-template.js"))
}

