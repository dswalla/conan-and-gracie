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
      <meta name="description" content="A blog dedicated to bringing you only the best Conan & Gracie content" />
    </Helmet>
    <Link to={`/`} className={ layoutStyles.title }>
      <h1 className={ layoutStyles.title }>Conan & Gracie</h1>
    </Link>
    <div className={ layoutStyles.nav }>
      <Link to={`/`} className={ layoutStyles.nav__button }>Dog Blog</Link>
      <Link to={`/about`} className={ layoutStyles.nav__button }>About</Link>
      <Link to={`/contact`} className={ layoutStyles.nav__button }>Contact</Link>
    </div>
    <div className={ layoutStyles.content }>
      {children}
    </div>
    <p className={ layoutStyles.footer }>&copy; Derek Wallace 2019</p>
  </div>
)
