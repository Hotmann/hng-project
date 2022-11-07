import React from "react";

import "./form.css";

const Form = (props) => {
  let inputElem = null;
  switch (props.inptype) {
    case "input":
      inputElem = (
        <input
          id={props.id}
          className="form-input"
          onChange={props.handleChange}
          value={props.value}
          {...props}
          required
        />
      );
      break;
    case "textarea":
      inputElem = (
        <textarea
          id={props.id}
          className="form-input"
          onChange={props.handleChange}
          value={props.value}
          {...props}
          required
        />
      );
      break;
    default:
      inputElem = <input id={props.id} required />;
  }
  return (
    <div className={props.name}>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElem}
    </div>
  );
};

export default Form;
