import classes from "./Skills.module.css";
import github__icon from "../../images/github-icon.png";
import js__icon from "../../images/js.png";
import jquery__icon from "../../images/jquery-icon.jpg";
import react__icon from "../../images/react.png";
import html__icon from "../../images/html-5.png";
import css__icon from "../../images/css.png";
import sass__icon from "../../images/sass.png";
import git__icon from "../../images/git.png";
import xd__icon from "../../images/xd.png";
import excel__icon from "../../images/sheets.png";
import access__icon from "../../images/access.png";

const Skills = () => {
  return (
    <div className={classes.skills} id="skills">
      <h2 data-aos="fade-left" className={classes.skills__header}>
        Skills{" "}
      </h2>
      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.skills__container}>
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
      </div>
      <h2 data-aos="fade-right" className={classes.skills__header}>
        Relavent Education{" "}
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
    </div>
  );
};

export default Skills;

/*

 <h2 data-aos="fade-down" className={classes.skills__header}>
        Skills:
        <div className={classes.skills__header__icons}>
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
        </div>
      </h2>

      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.skills__content}></div>

      */
