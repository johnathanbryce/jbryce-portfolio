import classes from "./Contact.module.css";

import { useState } from "react";

const EMAIL_CONTACT_EXTERNAL = "https://formsubmit.co/johnathanbryce@gmail.com";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setFormSubmitted(true);
    }, 100);
  };

  if (formSubmitted) {
    return (
      <div className={classes.contact} id="contact">
        <h3> Thank you for reaching out! </h3>
        <p> I'll respond to your email as soon as possible. </p>
        <p> - John Bryce</p>
      </div>
    );
  }

  return (
    <div className={classes.contact} id="contact">
      <h2 data-aos="fade-down" className={classes.contact__header}>
        Contact Me
      </h2>
      <div className={classes.header__underline} data-aos="fade-left"></div>
      <div className={classes.contact__content}>
        <form
          action={EMAIL_CONTACT_EXTERNAL}
          onSubmit={handleFormSubmit}
          method="POST"
          target="_blank"
        >
          <input type="text" placeholder="Your name" name="name" required />
          <input type="email" placeholder="Your email" name="email" required />
          <textarea
            placeholder="Your message"
            name="message"
            className=""
            required
          />
          <button type="submit" className={classes.form__button}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
