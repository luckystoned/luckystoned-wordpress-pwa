import React from 'react'
import { Link } from 'gatsby'
import { PropTypes } from 'prop-types'

import { BreadCrumbWrapper } from './styles/BreadCrumbStyles'

const BreadCrumb = ({ parent }) => (
    <div className="container">
        <div className="row">
            <div className="col-lg.9 offset-lg-3">
                <BreadCrumbWrapper>
                    <Link to="/">
                        <span>LuckyWordpress</span>
                    </Link>
                    <span className="divider">/</span>
                    {parent ? (
                        <>
                            <Link to={parent.link}></Link>
                            <span dangerouslySetInnerHTML={{ __html: parent.title }} />
                            <span className="divider">/</span>
                        </>
                    ) : null}
                </BreadCrumbWrapper>
            </div>
        </div>
    </div>
)

BreadCrumb.propTypes = {
    parent: PropTypes.object,
}

export default BreadCrumb;