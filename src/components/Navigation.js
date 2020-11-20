import React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

import { NavigationWrapper } from "./styles/NavigationStyles"

const Navigation = ({ menu }) => (
    
    <NavigationWrapper>
        <ul>
            {menu.items.map((item,i) => (
                <li key={i}>
                    <Link to={item.url} activeClassName="nav-active">
                        {item.title}
                    </Link>
                    {item.wordpress_children ? (
                        <ul>
                            {item.wordpress_children.map((child, iChild) => (
                                <li key={iChild}>
                                    <Link to={child.url} activeClassName="nav-active">
                                        {child.title}
                                    </Link>   
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            ))}
        </ul>
    </NavigationWrapper>
)

Navigation.propTypes = {
    manu: propTypes.object,
}

export default Navigation
