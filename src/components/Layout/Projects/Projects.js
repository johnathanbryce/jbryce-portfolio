import ProjectsCard from "./ProjectsCard";
import classes from "./Projects.module.css";

import placeholderimage from "../../../images/placeholder.jpeg";

// Swiper Components & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className={classes.projects} id="projects">
      <h2 data-aos="fade-down" className={classes.projects__header}>
        Projects
      </h2>
      <div className={classes.header__underline} data-aos="fade-left">
        {" "}
      </div>
      <div className={classes.carousel__container} data-aos="fade-up">
        <Swiper
          effect={"flip"}
          speed={1000}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
            horizontalClass: "swiper-pagination-horizontal",
          }}
          modules={[EffectFlip, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProjectsCard
              solluna="SolLuna Essence"
              img={placeholderimage}
              description="This site provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from CREDENTIALS, Sydney Fisher."
              languages="CSS, SCSS, HTML, JavaScript, jQuery "
              skills="Working with a client "
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              dailyfeed="My Daily Feed"
              img={placeholderimage}
              description="A React app I designed for myself which updates curated news articles based on topics of personal interest that refreshes every two hours. It also provides live updates on Vancouver weather"
              languages="React, JavaScript, CSS, HTML "
              skills="Fetching & manipulating API data"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              dicegame="Dice Game"
              img={placeholderimage}
              description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript, which received a grade of 100%."
              languages="JavaScript, jQuery, CSS, SCSS, HTML"
              skills="JavaScript game logic"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              notes="React & JavaScript Notes"
              img={placeholderimage}
              description="My first ever attempt at using React to create an app in which I take notes in a React environment while learning React and refreshing myself on Javascript concepts and includes a to-study list."
              languages="React, JavaScript, CSS, HTML"
              skills="Hooks, Router, Component and File Layout Structuring"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

/*


        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={4}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={3}>I am the fourthSlide.</Slide>
          </Slider>
          <ButtonBack className={classes.buttons}>Back</ButtonBack>
          <ButtonNext className={classes.buttons}>Next</ButtonNext>
        </CarouselProvider>





<h2 data-aos="fade-down"> Projects </h2>
 <div className={classes.projects__cards}></div>








 <ProjectsCard
          title="SolLuna Essence"
          img={placeholderimage}
          description="website made for client. Ipsum mollit ipsum laboris deserunt consequat nulla dolore esse eu excepteur nostrud. Est dolore sunt aute minim esse quis aute quis adipisicing non."
          languages="CSS, SCSS, HTML, JavaScript, jQuery "
        />
        <ProjectsCard
          title="My Daily Feed"
          img={placeholderimage}
          description="website made for me. Ipsum mollit ipsum laboris deserunt consequat nulla dolore esse eu excepteur nostrud. Est dolore sunt aute minim esse quis aute quis adipisicing non."
          languages="React, JavaScript, CSS, HTML "
        />
        <ProjectsCard
          title="Dice Game"
          img={placeholderimage}
          description="website made for me. Ipsum mollit ipsum laboris deserunt consequat nulla dolore esse eu excepteur nostrud. Est dolore sunt aute minim esse quis aute quis adipisicing non."
          languages="JavaScript, jQuery, CSS, SCSS, HTML"
        />
        <ProjectsCard
          title="React & JavaScript Notes"
          img={placeholderimage}
          description="website made for me. Ipsum mollit ipsum laboris deserunt consequat nulla dolore esse eu excepteur nostrud. Est dolore sunt aute minim esse quis aute quis adipisicing non."
          languages="React, JavaScript, CSS, HTML"
        />
        */
