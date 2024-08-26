/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Marek Chadim",
  email: "marek.chadim@iies.su.se",
  gitHub: "marek-chadim",
  linkedIn: "marek-chadim",
  title: (
    <a
      href="https://www.dropbox.com/scl/fi/qcamker6c2t7oj1jwiih8/CV.pdf?rlkey=ku5baio4coxqdwqho8aer3qjg&st=c6mxjayf&dl=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      Curriculum Vitae
    </a>
  ),
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
