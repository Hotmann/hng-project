import React, { useState } from "react";

import Form from "../../component/form/form";
import Button from "../../component/button/button";

import "./contact.css";

function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    check: false,
  });
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      contactForm.firstName.length == 0 ||
      contactForm.lastName.length == 0 ||
      contactForm.email.length == 0 ||
      contactForm.message.length == 0
    ) {
      setError(true);
      console.log("error found");
    }
  }

  const handleChange = (event) => {
    setContactForm({ ...contactForm, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact">
      <h1 className="heading">Contact Me</h1>
      <p className="text">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <Form
            inptype="input"
            id="first_name"
            name="firstName"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
            value={contactForm.firstName}
            handleChange={handleChange}
            // error={error}
            // error={
            //   error && contactForm.firstName.length <= 0 ? (
            //     <p>This is an hint to help user.</p>
            //   ) : (
            //     ""
            //   )
            // }
          />

          <Form
            inptype="input"
            id="last_name"
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            value={contactForm.lastName}
            handleChange={handleChange}
            // error={error}
            // error={
            //   error && contactForm.lastName.length <= 0 ? (
            //     <p>This is an hint to help user.</p>
            //   ) : (
            //     ""
            //   )
            // }
          />
        </div>
        <Form
          inptype="input"
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="yourname@email.com"
          value={contactForm.email}
          handleChange={handleChange}
          // error={error}
          // error={
          //   error && contactForm.email.length <= 0 ? (
          //     <p>This is an hint to help user.</p>
          //   ) : (
          //     ""
          //   )
          // }
        />
        <Form
          id="message"
          inptype="textarea"
          name="message"
          type="text"
          label="Message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          value={contactForm.message}
          handleChange={handleChange}
          // error={error}
          // error={
          //   error && contactForm.message.length <= 0 ? (
          //     <p>Please enter a new message</p>
          //   ) : (
          //     ""
          //   )
          // }
        />
        <div>
          <input
            id="checkbox"
            type="checkbox"
            name="check"
            value={contactForm.check}
            onChange={handleChange}
          />
          <label id="label" htmlFor="checkbox">
            You agree to providing your data to Ogunbowale Uthman who may
            contact you.
          </label>
        </div>
        <Button btnType="btn__submit">Send message</Button>
      </form>
    </div>
  );
}

export default Contact;
