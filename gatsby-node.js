const postsPerPage = 5

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []
  const numPages = Math.ceil(postEdges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve('./src/templates/blog.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  postEdges.forEach((edge) => {
    const { id, title } = edge.node
    const slug = title.replace(/\W+/g, '-').toLowerCase();
    const path = `/${slug}`

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: { id }
    })
  })
}
