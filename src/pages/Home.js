import React from 'react'
import TypeWriter from '../components/TypeWriter'
import pic from '../assets/profile-pic.png';
import { ScrollNav } from '../components/ScrollNav'

const picStyles = {
    height: '400px',
    width: '400px',
    objectFit: 'cover',
    marginRight: '2em'
}

export default function Home() {
    const Intro = 'Who Am I? ';
    const words = [
        'Coder',
        'Team Player',
        'Productive',
        'Imaginative', 
        'Passionate',
        'Adaptive',
        'Wilson Cheung.']

    return (
        <React.Fragment>
            <section id="Home">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-90">
                        <div className="col-auto">
                            <img src={pic} alt="profile-pic" className="img-thumbnail rounded-circle" style={picStyles} />
                        </div>
                        <div className="col-6">
                            <TypeWriter 
                                heading={Intro}
                                dataText={words}
                            />
                        </div>
                    </div>
                    <ScrollNav to={'About'} />
                </div>
            </section>
        </React.Fragment>
    )
}

//export default Home;