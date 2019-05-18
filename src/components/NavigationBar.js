import React from 'react';
import logo from '../assets/favicon-32x32.png'

export const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} alt="Logo" /></a> {/*<i className="fas fa-home"></i>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/about"><i className="far fa-user"></i> About Me</a>
                    <a className="nav-item nav-link" href="/project"><i className="far fa-folder"></i> Projects</a>
                    <a className="nav-item nav-link" href="/resume"><i className="far fa-file-alt"></i> Resume</a>
                    <a className="nav-item nav-link" href="/contact"><i className="far fa-address-book"></i> Contact</a>
                </div>
            </div>
        </div>
    </nav>
)