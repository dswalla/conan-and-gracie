import React from "react"
import { Helmet } from "react-helmet"
import layoutStyles from "./layout.module.css"
import favicon from "../images/ConanIcon.png"

export default ({ children }) => (
  <div className={ layoutStyles.layout }>
    <Helmet
      title="Conan & Gracie"
      description="A blog dedicated to bringing you only the best Conan & Gracie content"
      link={[
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
      ]}
    />
    <h1>Conan & Gracie</h1>
    <div className={ layoutStyles.content }>
      {children}
    </div>
    <p className={ layoutStyles.footer }>&copy; Derek Wallace 2019</p>
  </div>
)
