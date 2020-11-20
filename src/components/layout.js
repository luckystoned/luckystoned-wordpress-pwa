/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import propTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import OverlayMenu from "./OverlayMenu"
import Hamburguer from "./Hamburguer"
import Footer from "./Footer"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.main `
  padding: 110px 0 0 0;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return(
    <>
      <Hamburguer handleOverlayMenu={handleOverlayMenu}/>
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
