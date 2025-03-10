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
    <>
      <a
        href="https://www.dropbox.com/scl/fi/w3lyr7f60nvcb5p4jmm2h/cv_chadim.pdf?rlkey=nrlrsz9sr04wljww4ucjkc2c0&st=oz2poa24&dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Curriculum Vitæ
      </a>
      <br />
      <a
        href="https://www.dropbox.com/scl/fi/731rg1aqpny6z97t9oql2/MarkupsPublicProcurement.pdf?rlkey=m6ew7wcya1ajj3ru3eer37zj7&st=jz0yx9jf&dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        M.S. Thesis
      </a>
      <br />
      <a
        href="https://www.dropbox.com/scl/fi/rxw60jp1ye4ek5nd7pb37/transcript_scores.pdf?rlkey=wwaobvvtzy7gfmgqvohn4x3r0&st=l7ix552h&dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Transcript and GRE/IELTS
      </a>
      <br />
      <a
        href="https://www.dropbox.com/scl/fi/16dn5z9bs9cumadmixjwc/SoP_chadim.pdf?rlkey=a9gc87v19b9h8ze3fowghhn9a&st=bepmus6a&dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Statement of Purpose
      </a>
    </>
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
