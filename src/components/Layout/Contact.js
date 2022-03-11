import classes from "./Contact.module.css";

// build a form field to email me

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <h2 data-aos="fade-down" className={classes.contact__header}>
        Contact
      </h2>
      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.contact__content}></div>
    </div>
  );
};

export default Contact;
