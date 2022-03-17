import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills} id="skills">
      <h2 data-aos="fade-left" className={classes.skills__header}>
        My Skills{" "}
      </h2>
      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.skills__container}>
        <ul className={classes.skills__container__list}>
          <div>
            <li> JavaScript ES6</li>
            <li> jQuery </li>
          </div>
          <div>
            <li> HTML & CSS </li>
            <li> SASS </li>
          </div>

          <div>
            <li> React </li>
            <li> Styled Components</li>
          </div>
          <div>
            <li> Git & GitHub</li>
            <li> Adobe XD </li>
          </div>
        </ul>
      </div>
      <h2 data-aos="fade-right" className={classes.skills__header}>
        My Relevant Education{" "}
      </h2>

      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.education__container}>
        <a
          href="https://www.bcit.ca/programs/web-development-fundamentals-statement-of-completion-part-time-0325000000/"
          target="_blank"
          rel="noreferrer"
        >
          <h5>Web Development Fundamentals - BCIT</h5>
        </a>
        <a
          href="https://www.lighthouselabs.ca/en/intro-web-development-course"
          target="_blank"
          rel="noreferrer"
        >
          <h5>Intro to Web Development (Part Time) - Lighthouse Labs</h5>
        </a>
        <a
          href="https://www.uvic.ca/socialsciences/psychology/index.php"
          target="_blank"
          rel="noreferrer"
        >
          <h5> Bachelor of Science, Psychology - University of Victoria </h5>
        </a>
      </div>
      <div className={classes.scrolldown__skills}>
        <BrowserRouter>
          <Link to="#contact" smooth={true}>
            <FontAwesomeIcon icon={faAnglesDown} size="2x" fade />{" "}
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Skills;

/* skills icons if needed for future changess
 <img
          src={js__icon}
          alt="JavaScript's icon"
          className={classes.skills__icon}
        />
        <img
          src={jquery__icon}
          alt="jQuery's icon"
          className={classes.skills__icon}
        />
        <img
          src={react__icon}
          alt="React's icon"
          className={classes.skills__icon}
        />
        <img
          src={html__icon}
          alt="HTML's icon"
          className={classes.skills__icon}
        />
        <img
          src={css__icon}
          alt="CSS's icon"
          className={classes.skills__icon}
        />
        <img
          src={sass__icon}
          alt="SASS's icon"
          className={classes.skills__icon}
        />
        <img
          src={git__icon}
          alt="Git's icon"
          className={classes.skills__icon}
        />
        <img
          src={github__icon}
          alt="GitHub's icon"
          className={classes.skills__icon}
        />
        <img
          src={xd__icon}
          alt="Adobe XD's icon"
          className={classes.skills__icon}
        />
        <img
          src={excel__icon}
          alt="Excel's icon"
          className={classes.skills__icon}
        />
        <img
          src={access__icon}
          alt="Microsoft Access's icon"
          className={classes.skills__icon}
        />

      */
