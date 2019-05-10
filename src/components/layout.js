import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import layoutStyles from "./layout.module.css"
import favicon from "../images/ConanIcon.png"

export default ({ children }) => (
  <div className={ layoutStyles.layout }>
    <Helmet
      link={[
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
    ]}>
      <title>Conan & Gracie</title>
      <description>A blog dedicated to bringing you only the best Conan & Gracie content"</description>
    </Helmet>
    <Link to={`/`} className={ layoutStyles.title }>
      <h1 className={ layoutStyles.title }>Conan & Gracie</h1>
    </Link>
    <div className={ layoutStyles.content }>
      {children}
    </div>
    <p className={ layoutStyles.footer }>&copy; Derek Wallace 2019</p>
  </div>
)
