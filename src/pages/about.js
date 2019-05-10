import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import aboutStyles from "./about.module.css"

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

export default ({ data }) => (
  <Layout>
    <Img className={ aboutStyles.dogs } fluid={data.file.childImageSharp.fluid} />
    <p className={ aboutStyles.about }><strong>Welcome to the dog blog.</strong></p>
    <p className={ aboutStyles.about }>
      This website is the home of all the Conan and Gracie content you
      could ever want. Conan is a fun-loving brindle boxer and Gracie
      is everyone's favorite laid-back pitbull. Thanks for visiting and please
      enjoy all of their wild and crazy adventures.
    </p>
  </Layout>
)
