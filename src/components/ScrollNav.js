import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const StyledNavLink = styled(Link)`
    color: #4e4e4e !important;
    &:hover {
        border-bottom: none;
        color: black !important;
        cursor: pointer;
    }
`;

export const ScrollNav = (props) => (
    <div className="row justify-content-center">
        <StyledNavLink 
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            //offset={ (props.to.toUpperCase() === "CONTACT" ? 65 : 0) }
            duration={500}
        > 
        <h1><i className={ "animated infinite bounce slow " + (props.to.toUpperCase() === "HOME" ? 'fas fa-angle-double-up' : 'fas fa-chevron-down') }></i></h1>
        </StyledNavLink>
    </div>
)