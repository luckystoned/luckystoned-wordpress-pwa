import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AboutWrapper } from './styles/AboutStyles'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            wordpressPage(wordpress_id: {eq: 10018}) {
                content
                featured_media {
                    localFile {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 2000) {
                                ...GatsbyImageSharpFluid_withWebp 
                            }
                        }
                        absolutePath
                    }
                }
            }
        }
    `)

    return (
        <>
            <AboutWrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-md-6 aboutImage"
                            style={{
                                backgroundImage: `url(${
                                    data.wordpressPage.featured_media.localFile.childImageSharp.fluid.src
                                })`
                            }}
                        />

                        <div className="col-md-6 aboutText">
                            <div
                                dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
                            />
                        </div>
                    </div>
                </div>
            </AboutWrapper>
        </>
    )
}

export default About;
