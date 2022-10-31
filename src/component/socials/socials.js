import React from "react";

import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Slack } from "../../assets/slack.svg";

import "./socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/Hotmann" className="logo" id="github">
        <Slack />
      </a>
      <a href="hotmann" className="logo" id="slack">
        <Github />
      </a>
    </div>
  );
};

export default Socials;
