import React from "react";
import { ScrollNav } from "../components/ScrollNav";

const textAreaStyles = {
  resize: "none"
};
const styledNav = {
  position: "absolute",
  top: "400%",
  left: "0",
  right: "0",
  margin: "0 auto",
  cursor: "pointer"
};

// make this a class component with states and even handlers

export const Contact = () => (
  <section
    id="Contact"
    className="row justify-content-center align-items-center"
  >
    <div className="container ">
      {" "}
      {/**h-100 */}
      <div className="row justify-content-center align-items-center">
        {" "}
        {/**h-90 */}
        <div className="col align-self-center">
          <h2 className="text-center">
            <strong>
              <u>Contact</u>
            </strong>
          </h2>
          <form
            className="form-horizontal"
            action="mailto:wc683@nyu.edu?subject=Mail from Portfolio Site"
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                type="email"
                name="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                name="Message"
                style={textAreaStyles}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={styledNav}>
        <ScrollNav to={"Home"} />
      </div>
    </div>
  </section>
);
