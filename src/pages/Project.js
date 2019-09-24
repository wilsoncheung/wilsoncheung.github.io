import React from 'react'
import weatherSS from '../assets/weather-app.png';
import { ScrollNav } from '../components/ScrollNav'

const cardStyles = {
    maxWidth: '550px'
}
const imgStyles = {
    width: '100%',
    height: '16vw',
    objectFit: 'cover'
}
const imgContainer = {
    overflow: 'hidden',
    
}
const cardText = {
    fontSize: '14px'
}

export const Project = () => (
    <section id="Project">
        <div className="container h-100">
            <div className="row h-90">
                <div className="col align-self-center">
                    <h2 className="text-center font-weight-bold">
                        <u>Projects</u>
                    </h2>
                    <br />
                    <a href="https://wilsoncheung.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                        <div className="card text-white bg-dark mb-3 shadow rounded" style={cardStyles}>
                            <div className="row no-gutters">
                                <div className="col-md-6" style={imgContainer}>
                                    <img src={weatherSS} className="card-img img-zoom h-100" style={imgStyles} alt="weather-app" />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Weather App</h5>
                                        <p className="card-text " style={cardText}>A local weather app that shows you the current weather and the next 5 day forecast. You can also search the weather with any part of the address (city, zip, country, etc..). Built using Vue framework, Google Geocoding API and Dark Sky API.</p>
                                        <p className="card-text"><small className="text-muted">Born Sept 2019</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <ScrollNav to={'Contact'} />
        </div>
    </section>
)