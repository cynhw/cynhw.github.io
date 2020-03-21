const path = require("path");

// the old way of fetching data without Contentful

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md");

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     });
//   }
// };

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 1. get path to template
  const blogTemplate = require.resolve(`./src/templates/blog.js`);
  // 2. get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  // 3. create new pages

  const posts = res.data.allContentfulBlogPost.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
