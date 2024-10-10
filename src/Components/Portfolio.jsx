/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wrench.jpg";

const imageAltText = "The Economist as Plumber";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Research",
    description:
      "Markups and Public Procurement: Evidence from Czech Construction Tenders, 2006-2021",
    url: "https://github.com/marek-chadim/Markups-and-Public-Procurement",
  },

  {
    title: "Econometrics and Causal Inference",
    description: "PhD Econometrics sequence at Stockholm University",
    url: "https://github.com/marek-chadim/Mastering-Metrics/tree/main/coursework/PhD",
  },
  {
    title: "Machine Learning for Economists",
    description: "Applied economics PhD course at Stockholm University",
    url: "https://github.com/marek-chadim/Applied-Economics",
  },
  {
    title: "Computational Economics",
    description: "Graduate Computational Economics with Julia and MATLAB",
    url: "https://github.com/marek-chadim/Computational-economics",
  },
  {
    title: "Statistics and Data Science",
    description:
      "Specializations by Roger Peng, Jeff Leek and Brian Caffo; Department of Biostatistics at Johns Hopkins.",
    url: "https://coursera.org/share/e7b63d98d00917a1cb08d621e6447881",
  },

  {
    title: "Data Analystics and Visualization",
    description: "DataCamp Data Analyst Career Track Certification.",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/502249c656f5aa18470ce11d206736d9bc29ce29",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
