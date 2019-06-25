import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'
import resume from '../assets/Wilson-Resume.pdf'
//import logo from '../assets/favicon-32x32.png'

const StyledLinks = styled(Link)`
    color: #4e4e4e !important;
    &:hover {
        border-bottom: 2px solid black;
        cursor: pointer;
        color: #0376dd !important;
    }
`;

const ResumeBtn = styled.button`
    color: #0376dd;
    border-color: #0376dd;
    padding: 0.15rem .5rem;
    line-height: 1.25;
    &:hover {
        color:inherit;
        background-color: white;
    }
    &:active {
        color: inherit;
        background-color: white;
    }
`;

export const NavigationBar = () => (
    <nav className="navbar navbar-light bg-white navbar-expand-lg fixed-top">
        <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="fas fa-bars"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <li className="nav-item nav-link">
                        <i className="far fa-user"></i>
                        <StyledLinks 
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            //offset={-70}
                            duration={500}
                        > About Me
                        </StyledLinks>
                    </li>
                    {/* <li className="nav-item nav-link">
                        <i className="far fa-folder"></i>
                        <StyledLinks 
                            activeClass="active"
                            to="Project"
                            spy={true}
                            smooth={true}
                            //offset={-70}
                            duration={500}
                        > Projects
                        </StyledLinks>
                    </li> */}
                    <li className="nav-item nav-link">
                        <i className="far fa-address-book"></i>
                        <StyledLinks 
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            //offset={-70}
                            duration={500}
                        > Contact
                        </StyledLinks>
                    </li>
                    <li className="nav-item nav-link">
                        {/* <StyledLinks 
                            activeClass="active"
                            to="Resume"
                            spy={true}
                            smooth={true}
                            //offset={-70}
                            duration={500}
                        > Resume
                        </StyledLinks> */}
                        <ResumeBtn type="button" className="btn btn-outline-primary btn-sm">
                            <i className="far fa-file-alt"></i>
                            <a href={resume} target="_blank"> Resume</a>
                        </ResumeBtn>
                    </li>
                </div>
            </div>
        </div>
    </nav>
)