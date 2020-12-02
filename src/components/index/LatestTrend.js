/* eslint-disable react/no-danger  */
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const LatestTrenWrapper = styled.div`
    text-align:center;
    margin: 40px 0;
`

const LatestTrend = () => {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPost(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        title
                        excerpt
                        slug
                    }
                }
            }
        }
    `)

    return  (
        <LatestTrenWrapper>
            <div>
                <div>
                    <div>
                        <h1>Latest Trend</h1>
                        <h4>{data.allWordpressPost.edges[0].node.title}</h4>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.allWordpressPost.edges[0].node.excerpt,
                            }}
                        />
                        <Link
                            to={`/trends/${data.allWordpressPost.edges[0].node.slug}`}
                        >
                            <h5>Read More</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </LatestTrenWrapper>
    )
}

export default LatestTrend;
