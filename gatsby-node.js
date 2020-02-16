const path = require(`path`)

const PATHS = {
  TEMPLATES: 'src/templates/'
}

const TEMPLATES = {
  BLOG: 'BlogTemplate.js',
  ALL_TAGS: 'AllTagsTemplate.js',
  SINGLE_TAGS: 'SingleTagTemplate.js'
}

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve(`${PATHS.TEMPLATES}${TEMPLATES.ALL_TAGS}`)
  const singleTagIndexTemplate = path.resolve(`${PATHS.TEMPLATES}${TEMPLATES.SINGLE_TAGS}`)

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tag => {
    const posts = postsByTag[tag]

    createPage({
      path: `/tags/${tag}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tag
      }
    })
  })
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`${PATHS.TEMPLATES}${TEMPLATES.BLOG}`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        createTagPages(createPage, posts)

        // Create pages for each markdown file.
        posts.forEach(({ node }, i) => {
          const { path, tags } = node.frontmatter
          createPage({
            path,
            component: blogPostTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
              tags,
              prev: i === 0 ? null : posts[i - 1].node,
              next: i === posts.length - 1 ? null : posts[i + 1].node
            }
          })
        })
      })
    )
  })
}
