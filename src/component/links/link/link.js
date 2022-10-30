import React from "react";

import "./link.css";

const Link = (props) => {
  return (
    <a href={props.url} className="btn__link" id={props.id}>
      {props.btnName}
    </a>
  );
};

export default Link;
