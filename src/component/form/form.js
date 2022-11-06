import React from "react";

import "./form.css";

const Form = (props) => {
  let inputElem = null;
  switch (props.inptype) {
    case "input":
      inputElem = (
        <input
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
          className="form-input"
          onChange={props.handleChange}
          value={props.value}
          {...props}
          required
        />
      );
      break;
    default:
      inputElem = <input required />;
  }
  return (
    <div className={props.id}>
      <label className={`${props.value} form-input-label`}>{props.label}</label>
      {inputElem}
    </div>
  );
};

export default Form;
