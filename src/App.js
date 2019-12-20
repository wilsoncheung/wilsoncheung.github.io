import React, { Component } from "react";
//import { HashRouter, Route, Switch } from 'react-router-dom';  //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use if not being hosted on GitHub Pages
import ReactGA from "react-ga";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
//import { NoMatch } from './pages/NoMatch';
import { Project } from "./pages/Project";
// import { Resume } from './pages/Resume';
import "./App.css";

function initizeAnalytics() {
  ReactGA.initialize("UA-154886309-1", {
    debug: true
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default class App extends Component {
  render() {
    initizeAnalytics();
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Home />
          <About />
          <Project />
          <Contact />
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}
