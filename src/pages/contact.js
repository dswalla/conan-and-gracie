import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.css"

export default ({ data }) => (
  <Layout>
    <p className={ contactStyles.info }>Please send all fan mail to</p>
    <a className={ contactStyles.info } href="mailto:derek.scott.wallace@gmail.com">
      derek.scott.wallace@gmail.com
    </a>
  </Layout>
)
