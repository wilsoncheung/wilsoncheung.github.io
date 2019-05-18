import React, { Component } from 'react';
import logo from '../assets/favicon-16x16.png'

const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center'
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={footerStyle}>
                <div className="container">
                    <span className="text-muted">
                       <a href="/"><img src={logo} alt="Logo" /></a> Copyright &#169; {new Date().getFullYear()}
                    </span>
                </div>
            </footer>
        )
    }
}