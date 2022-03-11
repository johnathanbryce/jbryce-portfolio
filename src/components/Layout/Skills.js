import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills} id="skills">
      <h2 data-aos="fade-down" className={classes.skills__header}>
        Skills
      </h2>
      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.skills__content}></div>
    </div>
  );
};

export default Skills;
