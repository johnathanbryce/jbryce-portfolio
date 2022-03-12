import classes from "./ProjectsCard.module.css";

const ProjectsCards = ({
  solluna,
  dailyfeed,
  dicegame,
  notes,
  img,
  description,
  languages,
  skills,
}) => {
  return (
    <article className={classes.projectscard}>
      <h4 className={classes.solluna}> {solluna} </h4>
      <h4 className={classes.dailyfeed}> {dailyfeed} </h4>
      <h4 className={classes.dicegame}> {dicegame} </h4>
      <h4 className={classes.notes}> {notes} </h4>

      <img src={img} alt="" className={classes.projectscard__image} />
      <div className={classes.projectscard__text}>
        <p>{description}</p>
        <div className={classes.projectscard__text__bottom}>
          <div>
            <p>Languages used: </p>
            <p> Highlighted skill: </p>
          </div>
          <div>
            <p>{languages}</p>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCards;

/*

        <p className={classes.languages}>
          Languages used:
          <span className={classes.languages__style}>{languages}</span>
        </p>
        <p className={classes.skills}>
          Skills demonstrated:
          <span className={classes.skills__style}>{skills}</span>
        </p>


*/
