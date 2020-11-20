import React from "react"
//import PropTypes from "prop-types"

import tangoFB from "../images/tango-facebook-icon.svg"
import tangoIG from "../images/tango-instagram-icon.svg"
import tangoLI from "../images/tango-linkedin-icon.svg"

import { FooterWrapper } from "./styles/FooterStyles"

const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="whiteText">CONTACT</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>LUCKYSTONED</h3>
                    <p className="tango-contact">
                        <a href="mailto:luckystoned.dev@gmail.com">
                            luckystoned.dev@gmail.com
                        </a>
                    </p>
                    <p className="tango-contact">
                        +54 (011) 21 777 896
                    </p>
                    <span className="social">
                        <a 
                            target="_blank"
                            rel="noopner norefferer"
                            href="https://www.linkedin.com/"
                        >
                            <img src={tangoLI} alt="tango-li"/>
                        </a>
                        <a 
                            target="_blank"
                            rel="noopner norefferer"
                            href="https://www.facebook.com/"
                        >
                            <img src={tangoFB} alt="tango-li"/>
                        </a>
                        <a 
                            target="_blank"
                            rel="noopner norefferer"
                            href="https://www.instagram.com/"
                        >
                            <img src={tangoIG} alt="tango-li"/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </FooterWrapper>
)


export default Footer
