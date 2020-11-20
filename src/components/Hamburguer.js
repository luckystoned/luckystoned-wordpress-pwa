import React from "react"
import propTypes from "prop-types"

import { HamburgerButton } from "./styles/HamburgerStyles"
import HamburguerHeart from "../images/tango_heart_hamburger.svg"

const Hamburguer = ({ handleOverlayMenu }) => (
    <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
        <img src={HamburguerHeart} alt="tango-hamburguer"/>
    </HamburgerButton>
)

Hamburguer.propTypes = {
    handleOverlayMenu: propTypes.func,
}

export default Hamburguer
