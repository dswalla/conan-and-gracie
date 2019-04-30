import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"

export default ({ data }) => (
  <Layout>
    <Img className={ indexStyles.dogs } fluid={data.file.childImageSharp.fluid} />
    <p><strong>Welcome to the dog blog.</strong></p>
    <p>This website is the future home of all the Conan and Gracie content you
    could ever want.</p>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "Conan&Gracie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
