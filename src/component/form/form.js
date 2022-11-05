import React from "react";

import "./form.css";

const Form = (props) => {
  console.log(props);
  let inputElem = null;
  switch (props.inptype) {
    case "input":
      inputElem = (
        <input
          className="form-input"
          onChange={props.handleChange}
          value={props.value}
          {...props}
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
        />
      );
      break;
    default:
      inputElem = <input />;
  }
  return (
    <div className={props.id}>
      <label className={`${props.value ? "shrink" : ""} form-input-label`}>
        {props.label}
      </label>
      {inputElem}
    </div>
  );
};

export default Form;
