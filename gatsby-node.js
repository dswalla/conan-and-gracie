exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug } = edge.node
    const path = `/${slug}`

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: { id }
    })
  })
}
