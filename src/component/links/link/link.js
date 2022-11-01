import React from "react";

import "./link.css";

const Link = (props) => {
  return (
    <a
      href={props.url}
      className="btn"
      id={props.id}
      type="button"
      title={props.title}
    >
      {props.btnName}
    </a>
  );
};

export default Link;
