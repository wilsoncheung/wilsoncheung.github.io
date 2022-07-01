import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-scroll";
import styled from "styled-components";
import resume from "../assets/Wilson-Resume.pdf";
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
  padding: 0.15rem 0.5rem;
  line-height: 1.25;
  &:hover {
    color: inherit;
    background-color: white;
  }
  &:active {
    color: inherit;
    background-color: white;
  }
`;

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <li className="nav-item nav-link">
              <i className="fas fa-home"></i>
              <StyledLinks
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                {" "}
                Wilson
              </StyledLinks>
            </li>
            <li className="nav-item nav-link">
              <i className="far fa-user"></i>
              <StyledLinks
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                {" "}
                About Me
              </StyledLinks>
            </li>
            <li className="nav-item nav-link">
              <i className="far fa-folder"></i>
              <StyledLinks
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                {" "}
                Projects
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
              <ResumeBtn
                type="button"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="far fa-file-alt"></i>
                {/* <a href={resume} target="_blank" rel="noopener noreferrer"> */}
                <ReactGA.OutboundLink
                  eventLabel="resume"
                  to={resume}
                  target="_blank"
                >
                  {" "}
                  Resume
                  {/* </a> */}
                </ReactGA.OutboundLink>
              </ResumeBtn>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
