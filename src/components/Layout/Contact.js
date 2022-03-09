import classes from "./Contact.module.css";

// build a form field to email me

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.contact__content}>
        <p> Contact Me </p>
      </div>
    </div>
  );
};

export default Contact;
