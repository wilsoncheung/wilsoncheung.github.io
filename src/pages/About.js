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
              <h3>A Journey into Software Engineering</h3>
              <p>
                My fascination with technology began at a young age, sparked by my family's first computer—a Dell running Windows ME. While the pre-loaded games like Pinball and Solitaire initially captivated my interest, it was the internet that truly opened up a new world of possibilities. However, my curiosity didn't evolve into a career path until I took my first programming course in college, where I delved into the fundamentals and finally understood the mechanics behind a simple "Hello, World!" program.
              </p>
              <hr color="white"></hr>
              <p>
                I started my professional journey as a software developer in 2014 at a small company. The transition from academic theory to real-world applications was challenging, but with the guidance of great mentors and coworkers, I persevered. Through hard work and determination, the pieces of the puzzle began to fall into place.
              </p>
              <hr color="white"></hr>
              <p>
                Today, I'm a Software Engineer, tackling unique challenges and finding creative solutions. Hello, World and happy coding! 
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
