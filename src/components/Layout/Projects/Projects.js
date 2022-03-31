import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import ProjectsCard from "./ProjectsCard";
import classes from "./Projects.module.css";

import sollunaimage from "../../../images/solluna-img.jpeg";
import dailyfeedimage from "../../../images/daily-feed-img.jpeg";
import dicegameimage from "../../../images/dice-game-img.jpeg";
import reactjsnotesimage from "../../../images/react-js-notes-img.jpeg";

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
          loop={true}
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
              link="https://www.sollunaessence.com/"
              img={sollunaimage}
              description="This site provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher."
              languages="CSS, SCSS, HTML, JavaScript, jQuery "
              skills="Working with a client "
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              dailyfeed="My Daily Feed"
              link="https://my-daily-feed.netlify.app/"
              img={dailyfeedimage}
              description="A React app which provides curated  articles that are tailored towards topics of personal interest that updates every two hours. It also provides updates on Vancouver weather."
              languages="React, JavaScript, CSS, HTML "
              skills="Fetching & manipulating API data"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              dicegame="Dice Game"
              link="https://dice-game-jb.netlify.app/"
              img={dicegameimage}
              description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript that received a grade of 100%."
              languages="JavaScript, jQuery, CSS, SCSS, HTML"
              skills="JavaScript game logic"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              notes="React & JavaScript Notes"
              link="https://react-js-notes.netlify.app/"
              img={reactjsnotesimage}
              description="In order to better familiarize myself with the React framework I took an interactive approach to note-taking by transcribing React and JavaScript core concepts directly in a React environment."
              languages="React, JavaScript, CSS, HTML"
              skills="Hooks/Router/Component Structuring"
            />
          </SwiperSlide>
        </Swiper>

        <BrowserRouter>
          <Link to="#skills" smooth={true}>
            <FontAwesomeIcon
              icon={faAnglesDown}
              size="2x"
              fade
              className={classes.downbtn}
            />{" "}
          </Link>
        </BrowserRouter>
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
