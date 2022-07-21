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
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body" style={cardBodyStyles}>
              <h2 className="card-title text-center mb-4">
                <i className="far fa-address-card"></i> <u>About Me</u>
              </h2>
              <p>
                I am a software engineer and enthusiast. My curiosity for technology started at an early age when my parents first brought me a Dell computer running on Windows ME, yeah that was a while ago... It piqued my interest when I first played the preloaded pinball and solitary games, and then the internet opened a whole new world afterward. However, it was not until when I went to college and took the very first programming course that propelled my interest into the actual nitty-gritty of how the "Hello World!" program works.
              </p>
              <p>
                The year 2014 was when I first started my journey as a Software Developer working for a small company. It was not easy going from academia to real-world applications of computer science. Although it was tough at first, I had great mentors and co-workers along the way; with perseverance and a lot of hard work, everything just clicked like putting a puzzle together.
              </p>
              <p>
                Currently, I am a Software Engineer working for an internet company that helps our clients build tools and get their presence into our ever-more digitalized world.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6">
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
        </div> */}
      </div>
      <div style={styledNav}>
        <ScrollNav to={"footer"} />
      </div>
    </div>
  </section>
);
