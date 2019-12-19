import React from "react";
import { ScrollNav } from "../components/ScrollNav";

const cardBodyStyles = {
  color: "white",
  backgroundColor: "grey"
};

const styledNav = {
  position: "absolute",
  top: "200%",
  left: "0",
  right: "0",
  margin: "0 auto",
  cursor: "pointer"
};

export const About = () => (
  <section id="About" className="row justify-content-center align-items-center">
    <div className="container ">
      {" "}
      {/*h-100*/}
      <div className="row  justify-content-center align-items-center">
        {" "}
        {/*h-90*/}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" style={cardBodyStyles}>
              <h2 className="card-title">
                <i className="far fa-address-card"></i> <u>About Me</u>
              </h2>
              <p>
                Hi, I'm Wilson, a software developer from New York City with 4
                years of experience in building full-stack web applications from
                soup to nuts. I love to explore and tinker with new technology
                to see how it works and fit with my exisiting tools.
              </p>
              <p>
                I believe the best way to learn is to just do it and pick up
                pieces of new information along the journey.
              </p>
              <p>
                Currently I am looking for a software developer position to
                offer what I have learned professionally and personally.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" style={cardBodyStyles}>
              <h2 className="card-title text-center mb-3">
                <i className="fas fa-toolbox"></i> <u>Toolbox</u>
              </h2>
              <div className="row">
                <div className="col-6">
                  <h5>
                    <u>Languages</u>:
                  </h5>
                  <p>C#, JavaScript, SQL, HTML, CSS</p>
                </div>
                <div className="col-6">
                  <h5>
                    <u>Frameworks/ Libraries</u>:
                  </h5>
                  <p>ASP.NET, AngularJs, Vue, React, Bootstrap</p>
                </div>
                <div className="col">
                  <h5>
                    <u>IDE</u>:
                  </h5>
                  <p>
                    Microsoft Visual Studio, <br /> Visual Studio Code
                  </p>
                </div>
                <div className="col">
                  <h5>
                    <u>Version Control</u>:
                  </h5>
                  <p>Git/GitHub, Bitbucket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styledNav}>
        <ScrollNav to={"Project"} />
      </div>
    </div>
  </section>
);
