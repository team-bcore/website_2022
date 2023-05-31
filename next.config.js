// const withMDX = require("@next/mdx")({
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// });
// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// });

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}