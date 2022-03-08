import React, { useEffect } from "react";

import "aos/dist/aos.css";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.about__content}>
        <div>
          <h2 data-aos="fade-up">Hi! My Name is John Bryce. </h2>
          <p data-aos="fade-right">
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

export default About;
