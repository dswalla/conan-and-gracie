import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import postStyles from "./post.module.css"

export const query = graphql`
  query PostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      description
      image {
        asset {
          fixed(height: 400) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`

const Post = props => {
  const { data } = props
  const post = data && data.post
  return (
    <Layout>
      <Img className={ postStyles.image } fixed={post.image.asset.fixed} />
      <p>{post.description}</p>
    </Layout>
  )
}

export default Post
