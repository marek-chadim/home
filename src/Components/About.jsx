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
  "I am an MSc Economics student focused on econometrics and applied microeconomics.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Bachelor of Economics @ Institute of Economic Studies, Charles University Prague & Econometrics @ Maastricht University",
  "MSc in Economics @ Stockholm School of Economics & Data Science/AI @ Bocconi University + PhD Econometrics @ Stockholm University",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <div>
    I am currently working as a research assistant at the Institute for International Economic
    Studies, where I work with Professor{" "}
    <a href="http://perseus.iies.su.se/~ialm/" target="_blank" rel="noopener noreferrer">
      Ingvild Almås
    </a>{" "}
    and the{" "}
    <a
      href="https://www.su.se/english/research/research-projects/kizazi-kijacho-research-for-the-next-generation?open-collapse-boxes=research-project-description,research-project-members/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kizazi Kijacho research team.
    </a>{" "}
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
