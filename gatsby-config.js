const path = require(`path`)
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Conan & Gracie`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Conan & Gracie",
        short_name: "Conan & Gracie",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/ConanIcon.png"
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "ajuuvc35",
        dataset: "dev",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
