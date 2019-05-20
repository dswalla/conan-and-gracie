import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import indexStyles from "../templates/blog.module.css"

const currentPage = 1

export const query = graphql`
    query IndexQuery($limit: Int! = 5) {
        allSanityPost(
            sort: { fields: [_createdAt], order: DESC },
            limit: $limit
            ) {
            edges {
                node {
                    id
                    title
                    description
                    _createdAt
                    image {
                        asset {
                            fixed(width: 500) {
                                ...GatsbySanityImageFixed
                            }
                        }
                    }
                }
            }
        }
    }
`
export default (props) => {
    const { data } = props

    return (
        <Layout>
            {data.allSanityPost.edges.map(({ node }) => {
            const date = new Date(node._createdAt).toLocaleString()
            const displayedDate = date.substr(0, date.indexOf(','))
            return(
                <Link to={`/${node.title.replace(/\W+/g, '-').toLowerCase()}`} className={ indexStyles.link }>
                <div className={ indexStyles.post }>
                    <div className={ indexStyles.post__header }>
                    <h3 className={ indexStyles.post__title }>{node.title}</h3>
                    <span>Posted on {displayedDate}</span>
                    </div>
                    <Img className={ indexStyles.post__image } fixed={node.image.asset.fixed} />
                </div>
                </Link>
            )
            })}
            {
                (currentPage === 1) ?
                    <div className={ `${indexStyles.page__nav} ${indexStyles.page__nav__index}` }>
                      <Link to={`/${currentPage + 1}`} 
                        className={ indexStyles.nav__el }>
                        Next &#187;
                      </Link>
                    </div> :
                    null
            }
        </Layout>
    )
}

