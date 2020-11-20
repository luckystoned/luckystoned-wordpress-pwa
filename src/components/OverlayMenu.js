import React from "react"
//import propTypes from "prop-types" 

import { Link, useStaticQuery, graphql } from "gatsby"

import WhiteLogo from "../images/tango_logo_white.svg"
import CloseButton from "../images/tango_close_button.svg"

import { Overlay } from "./styles/OverlayMenuStyles"

const OverlayMenu = ({menuOpen, callback}) => {
    const {
        menu: {
          edges: [{ node: menu }],
        },
      } = useStaticQuery(
        graphql`
          query OverlayMenu {
            menu:  allWordpressWpApiMenusMenusItems(
              filter: { wordpress_id: { eq: 179 } } 
            ) 
              {
              totalCount
              edges {
                node {
                    items {
                    url
                    title
                    }
                }
              }
            }
          }
        `
      );  

    return (
      <Overlay menuOpen={menuOpen}>
        <div className="inner">
          <img  className="whiteLogo" src={WhiteLogo} alt="tango-white-logo"/>
          <ul className="overlayMenu">
            {menu.items.map(( item, i ) =>(
              <li key={i}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="closeButton"
            onClick={callback}
            role="button"
            tabIndex="0"
            onKeyDown={callback}
          >
            <img src={CloseButton} alt="tango-close-button"/>
          </div>
        </div>
      </Overlay>
    )
}


export default OverlayMenu
