/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/stockholm.jpg";

const imageAltText = "Stockholm";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I’m second year Economics MSc student at the Stockholm School of Economics interested in econometrics, statistics, machine learning, and applied microeconomic research.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Bc Economic Theory @ IES Charles University in Prague + Exchange Econometrics & Operations Research @ SBE Maastricht University",
  "MSc Economics @ SSE + PhD Econometrics @ Stockholm University, Upcoming Exchange Statistics and Machine Learning @ Università Bocconi ",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <div>
    I am currently working as a research assistant at the Institute for International Economic Studies, where I work with Professor <a href="http://perseus.iies.su.se/~ialm/">Ingvild Almås</a> on analyzing a large dataset from the <a href="https://www.su.se/english/research/research-projects/kizazi-kijacho-research-for-the-next-generation?open-collapse-boxes=research-project-description,research-project-members/">Kizazi Kijacho</a> early childhood development project.
  </div>
);
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
