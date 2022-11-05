import React from "react";

import "./button.css";

const Button = (props) => (
  <button id={props.btnType} onClick={props.clicked} disabled={props.disabled}>
    {props.children}
  </button>
);

export default Button;
