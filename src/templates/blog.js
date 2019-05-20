import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import blogStyles from "./blog.module.css"

export const query = graphql`
    query BlogQuery($skip: Int!, $limit: Int!) {
        allSanityPost(
            sort: { fields: [_createdAt], order: DESC },
            limit: $limit,
            skip: $skip
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
    const { currentPage, numPages } = props.pageContext

    return (
        <Layout>
            {data.allSanityPost.edges.map(({ node }) => {
            const date = new Date(node._createdAt).toLocaleString()
            const displayedDate = date.substr(0, date.indexOf(','))
            return(
                <Link to={`/${node.title.replace(/\W+/g, '-').toLowerCase()}`} className={ blogStyles.link }>
                <div className={ blogStyles.post }>
                    <div className={ blogStyles.post__header }>
                    <h3 className={ blogStyles.post__title }>{node.title}</h3>
                    <span>Posted on {displayedDate}</span>
                    </div>
                    <Img className={ blogStyles.post__image } fixed={node.image.asset.fixed} />
                </div>
                </Link>
            )
            })}
            {
                !(currentPage === numPages) ?
                <div className={ blogStyles.page__nav }>
                    <Link to={`/${(currentPage === 2) ? `` : currentPage - 1}`} 
                        className={ blogStyles.nav__el }>
                        &#171; Previous
                    </Link>
                    <Link to={`/${currentPage + 1}`} 
                        className={ blogStyles.nav__el }>
                        Next &#187;
                    </Link>
                </div> :
                <div className={ blogStyles.page__nav }>
                    <Link to={`/${(currentPage === 2) ? `` : currentPage - 1}`} 
                        className={ blogStyles.nav__el }>
                        &#171; Previous
                    </Link>
                </div>
            }
        </Layout>
    )
}
