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
          fixed(width: 400) {
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
      <div className={ postStyles.content }>
        <Img className={ postStyles.image } fixed={post.image.asset.fixed} />
        <p className={ postStyles.description }>{post.description}</p>
      </div>
    </Layout>
  )
}

export default Post
