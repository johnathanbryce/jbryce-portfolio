import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "aos/dist/aos.css";
import classes from "./About.module.css";

import portfolio__image from "../../images/portfolio-image.jpeg";
import github__Icon from "../../images/github-icon.png";
import linkedin__icon from "../../images/linkedin-icon.png";

//https://docs.google.com/document/d/10tNCxexi9zFaYBwJwgDzl9M5rRYRysSu0XYQ4lZOcmQ/export?format=pdf
const About = () => {
  return (
    <div className={classes.about} id="about">
      <div className={classes.about__content}>
        <div className={classes.left}>
          <img
            data-aos="zoom-in"
            className={classes.about__bio__img}
            src={portfolio__image}
            alt="John Bryce at the beach"
          />
        </div>

        <div className={classes.right}>
          <p data-aos="fade-up">
            <span className={classes.highlight}>Hello, </span> my name is
          </p>
          <h3 data-aos="fade-left"> Johnathan Bryce </h3>
          <p data-aos="fade-right">
            and I am a
            <span className={classes.highlight}> Front-End Web Developer </span>
            based in Vancouver, BC. I am excited about building fluid, creative,
            and interactive websites and applications and continually expanding
            on my coding skillsets. Welcome to my portfolio page!
          </p>
          <div className={classes.btn__container} data-aos="fade-right">
            <button className={classes.resume__btn}>
              <a
                href="https://docs.google.com/document/d/1BvGc7f8dbyUsqAugpslSbU677PLChgDRwdLFniFwkJc/export?format=pdf"
                download
                rel="noreferrer"
              >
                Resume
              </a>
            </button>

            <a
              href="https://github.com/johnathanbryce"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github__Icon}
                alt="GitHub's icon"
                className={classes.icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/johnathanbryce/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin__icon}
                alt="Linked-In's icon"
                className={classes.icon}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={classes.scrolldown}>
        <BrowserRouter>
          <Link to="#projects" smooth={true}>
            <FontAwesomeIcon icon={faAnglesDown} size="2x" fade />{" "}
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default About;
