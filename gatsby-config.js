/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Mohammed Ali',
    description: 'Freelance Front-end Developer',
    strapline: "Hey! I'm Mohammed,\nfreelance Front-end Engineer."
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/favicon.png'
      }
    },
    {
      resolve: 'gatsby-remark-embedded-codesandbox',
      options: {
        // Required:

        // Example code folders are relative to this dir.
        // eg src/_examples/some-example-folder
        directory: `${__dirname}/src/_examples/`,

        // Optional:

        // Custom protocol for parsing the embedding link
        // default:
        protocol: 'embedded-codesandbox://',

        // Customise Codesandbox embedding options:
        // https://codesandbox.io/docs/embedding#embed-options
        // default:
        embedOptions: {
          view: 'preview',
          hidenavigation: 1
        },

        // Customise the embedding iframe given the generated url
        // default:
        getIframe: url =>
          `<iframe src="${url}" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
      }
    }
  ]
}
