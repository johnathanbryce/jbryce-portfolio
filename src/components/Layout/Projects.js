import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <div className={classes.projects__content}>
        <div>
          <h2 data-aos="fade-up">Here are my Projects. </h2>
          <p data-aos="fade-down">
            Aliqua dolor id mollit dolor sint eiusmod commodo commodo qui enim
            proident pariatur officia. Non enim commodo commodo voluptate amet
            veniam nisi sit officia consectetur aliqua aliquip consectetur.
            Ipsum aliquip esse voluptate tempor consequat et non quis et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
