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
  link,
}) => {
  return (
    <article className={classes.projectscard}>
      <a href={link} target="_blank" rel="noreferrer">
        <h4 className={classes.solluna}> {solluna} </h4>
        <h4 className={classes.dailyfeed}> {dailyfeed} </h4>
        <h4 className={classes.dicegame}> {dicegame} </h4>
        <h4 className={classes.notes}> {notes} </h4>

        <img src={img} alt="" className={classes.projectscard__image} />
      </a>
      <div className={classes.projectscard__text}>
        <p>{description}</p>

        <div className={classes.projectscard__text__bottom}>
          <div>
            <p>Languages used: </p>
            <p> Highlighted skill: </p>
          </div>
          <div className={classes.language__skills}>
            <p>{languages}</p>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCards;
