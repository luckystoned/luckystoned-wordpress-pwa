import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import citatimg from '../../images/tango_citat.svg'
import { CitatWrapper } from './styles/CitatStyles'

const Quote = () => {
    const data = useStaticQuery(graphql`
        query {
            wordpressPage(wordpress_id: {eq: 137}) {
                acf {
                quote_1_text
                quote_1_author
                }
            }
        }
    `)

    return (
        <>
            <CitatWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={citatimg} alt="quote"/>
                            <h6>{data.wordpressPage.acf.quote_1_text}</h6>
                            {data.wordpressPage.acf.quote_1_author}
                        </div>
                    </div>
                </div>
            </CitatWrapper>
        </>
    )
}

export default Quote;
