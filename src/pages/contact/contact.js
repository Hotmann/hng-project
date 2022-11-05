import React, { useState } from "react";

import Form from "../../component/form/form";

import "./contact.css";

function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    check: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    setContactForm(event.target.value);
  }
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
            type="text"
            label="First Name"
            placeholder="Enter your first name"
            value={contactForm.firstName}
            handleChange={handleChange}
          />

          <Form
            inptype="input"
            id="last_name"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            value={contactForm.lastName}
            handleChange={handleChange}
          />
        </div>
        <Form
          inptype="input"
          id="email"
          type="email"
          label="Email"
          placeholder="yourname@email.com"
          value={contactForm.email}
          handleChange={handleChange}
        />
        <Form
          id="message"
          inptype="textarea"
          type="text"
          label="Message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          value={contactForm.message}
          handleChange={handleChange}
        />
        {/* <input type="checkbox" id="checkbox"  value={contactForm.check}> */}
        <div>
          <input
            id="checkbox"
            type="checkbox"
            value={contactForm.check}
            handleChange={handleChange}
          />
          <label id="label" for="checkbox">
            You agree to providing your data to Ogunbowale Uthman who may
            contact you.
          </label>
        </div>
      </form>
    </div>
  );
}

export default Contact;
