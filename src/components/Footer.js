import React, { Component } from 'react';
//import logo from '../assets/favicon-16x16.png'

const footerStyle = {
    // position: 'absolute',
    // bottom: '0',
    // width: '100%',
    // height: '60px',
    //lineHeight: '3em',
    backgroundColor: 'gray', //'#f5f5f5'
    textAlign: 'center',
    padding: '1em'
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={footerStyle}>
                <div className="text-white">
                    &#169; Copyright {new Date().getFullYear()} 
                    <br />
                    Wilson Cheung
                </div>
            </footer>
        )
    }
}