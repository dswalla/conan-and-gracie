import React from "react"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={ layoutStyles.layout }>
    <h1>Conan & Gracie</h1>
    <div className={ layoutStyles.content }>
      {children}
    </div>
  </div>
)
