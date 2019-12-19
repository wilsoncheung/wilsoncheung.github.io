import React from "react";
import TypeWriter from "../components/TypeWriter";
import pic from "../assets/profile-pic.png";
import { ScrollNav } from "../components/ScrollNav";

const picStyles = {
  height: "400px",
  width: "400px",
  objectFit: "cover",
  marginRight: "2em"
};

const styledNav = {
  position: "absolute",
  top: "90%",
  left: "0",
  right: "0",
  margin: "0 auto",
  cursor: "pointer"
};

export default function Home() {
  const Intro = "Who Am I? ";
  const words = [
    "Coder",
    "Team Player",
    "Productive",
    "Imaginative",
    "Passionate",
    "Adaptive",
    "Wilson Cheung."
  ];

  return (
    <React.Fragment>
      <section
        id="Home"
        className="row justify-content-center align-items-center"
      >
        <div className="container ">
          {" "}
          {/**h-100 */}
          <div className="row justify-content-center align-items-center">
            {" "}
            {/** h-90 */}
            <div className="col-auto">
              <img
                src={pic}
                alt="profile-pic"
                className="img-thumbnail rounded-circle"
                style={picStyles}
              />
            </div>
            <div className="col-7">
              <TypeWriter heading={Intro} dataText={words} />
            </div>
          </div>
          <div style={styledNav}>
            <ScrollNav to={"About"} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

//export default Home;
