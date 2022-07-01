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
    padding: '2em'
}

const iconStyle = {
    fontSize: '25px',
    color: 'white',
    marginRight: '5px'
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={footerStyle}>
                <div class="row">
                    <div class="col-lg-12 mb-2">
                        <div className="text-white font-weight-bold">
                            &#169; Copyright {new Date().getFullYear()}
                            <br />
                            Wilson Cheung
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <ul class="list-unstyled list-inline text-center mb-0">
                            <li class="list-inline-item">
                                <a href="https://github.com/wilsoncheung" target="_blank">
                                    <i class="fab fa-github social-icon" style={iconStyle}></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/wilson-c-1347b549/" target="_blank">
                                    <i class="fab fa-linkedin social-icon" style={iconStyle}></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="mailto:wc683@nyu.edu">
                                    <i class="far fa-envelope social-icon" style={iconStyle}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}