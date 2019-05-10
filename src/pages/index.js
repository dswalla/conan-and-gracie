import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"

export const query = graphql`
  {
    allSanityPost(sort: { fields: [_createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          description
          _createdAt
          image {
            asset {
              fixed(width: 400) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => (
  <Layout>
    {data.allSanityPost.edges.map(({ node }) => {
      const date = new Date(node._createdAt).toLocaleString()
      return(
        <Link to={`/${node.title.replace(/\W+/g, '-').toLowerCase()}`} className={ indexStyles.link }>
          <div className={ indexStyles.post }>
            <div className={ indexStyles.post__header }>
              <h3 className={ indexStyles.post__title }>{node.title}</h3>
              <span>Posted on {date}</span>
            </div>
            <Img className={ indexStyles.post__image } fixed={node.image.asset.fixed} />
          </div>
        </Link>
      )
    })}
  </Layout>
)
