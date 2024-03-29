import React from "react";
import ReactGA from "react-ga";
import weatherSS from "../assets/weather-app.png";
import moviesSS from "../assets/movies-app.png";
import whatToWatchSS from "../assets/what-to-watch.png";
import { ScrollNav } from "../components/ScrollNav";

const cardStyles = {
  maxWidth: "550px"
};
const imgStyles = {
  width: "100%",
  height: "16vw",
  objectFit: "cover"
};
const imgContainer = {
  overflow: "hidden"
};
const cardText = {
  fontSize: "14px"
};
const styledNav = {
  position: "absolute",
  top: "300%",
  left: "0",
  right: "0",
  margin: "0 auto",
  cursor: "pointer"
};

// REACT ARROW FUNCTION COMPONENT
export const Project = () => {
  return (
    <section
      id="Project"
      className="row justify-content-center align-items-center"
    >
      <div className="container ">
        {" "}
        {/**h-100 */}
        <div className="row ">
          {" "}
          {/**h-90 */}
          <div className="col-lg-12 align-self-center">
            <h2 className="text-center font-weight-bold">
              <u>Projects</u>
            </h2>
            <br />
            <div className="row justify-content-center">
              <div className="col-lg-6">
                {/* <a
                  href="https://wilsoncheung.github.io/weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={weatherNav}
                > */}
                <ReactGA.OutboundLink
                  eventLabel="weather-app"
                  to="https://wilsoncheung.github.io/weather-app/"
                  target="_blank"
                >
                  <div
                    className="card text-white bg-dark mb-3 shadow rounded"
                    style={cardStyles}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-6" style={imgContainer}>
                        <img
                          src={weatherSS}
                          className="card-img img-zoom h-100"
                          style={imgStyles}
                          alt="weather-app"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">Weather App</h5>
                          <p className="card-text " style={cardText}>
                            A handy weather app that shows you the current
                            weather and the next 5-day forecast. You can use any
                            part of the address (city, zip, etc.) to search for
                            the weather.
                          </p>
                          <p className="card-text" style={cardText}>
                            Built using Vue, Google Geocoding API, Dark Sky API
                            and Bootstrap.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </ReactGA.OutboundLink>
              </div>
              <div className="col-lg-6">
                {/* <a
                  href="https://wilsoncheung.github.io/movies-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={moviesNav}
                > */}
                <ReactGA.OutboundLink
                  eventLabel="movies-app"
                  to="https://wilsoncheung.github.io/movies-app/"
                  target="_blank"
                >
                  <div
                    className="card text-white bg-dark mb-3 shadow rounded"
                    style={cardStyles}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-6" style={imgContainer}>
                        <img
                          src={moviesSS}
                          className="card-img img-zoom h-100"
                          style={imgStyles}
                          alt="movies-app"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">Movies App</h5>
                          <p className="card-text " style={cardText}>
                            A simpler IMDB website where you can search for
                            movies, play trailers, find information about casts,
                            read reviews and explore current popular movies.
                          </p>
                          <p className="card-text" style={cardText}>
                            Built using Vue, Vuex, The Movie DB API and
                            Materialize.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </ReactGA.OutboundLink>
              </div>
              <div className="col-lg-6">
                <ReactGA.OutboundLink
                  eventLabel="what-to-watch"
                  to="https://wilsoncheung.github.io/what-to-watch/"
                  target="_blank"
                >
                  <div
                    className="card text-white bg-dark mb-3 shadow rounded"
                    style={cardStyles}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-6" style={imgContainer}>
                        <img
                          src={whatToWatchSS}
                          className="card-img img-zoom h-100"
                          style={imgStyles}
                          alt="weather-app"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">What To Watch</h5>
                          <p className="card-text " style={cardText}>
                            An awesome web app where you type a movie title and it returns a
                            list of similar movie recommendations.
                          </p>
                          <p className="card-text" style={cardText}>
                            Built using Angular, Bootstrap, and The Movie DB API.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </ReactGA.OutboundLink>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={styledNav}>
          <ScrollNav to={"Contact"} />
        </div> */}
      </div>
    </section>
  );
};
