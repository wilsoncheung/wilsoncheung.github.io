import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import logo from '../assets/favicon-32x32.png'

export const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <HashRouter basename='/'>
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link> {/*<i className="fas fa-home"></i>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link" to="/about"><i className="far fa-user"></i> About Me</Link>
                            <Link className="nav-item nav-link" to="/project"><i className="far fa-folder"></i> Projects</Link>
                            <Link className="nav-item nav-link" to="/resume"><i className="far fa-file-alt"></i> Resume</Link>
                            <Link className="nav-item nav-link" to="/contact"><i className="far fa-address-book"></i> Contact</Link>
                        </div>
                </div>
            </div>
        </HashRouter>
    </nav>
)