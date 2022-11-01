import React from "react";

import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Slack } from "../../assets/slack.svg";

import "./socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <a href="Hotmann" className="logo" id="slack">
        <Slack />
      </a>
      <a
        href="https://github.com/Hotmann/hng-project"
        className="logo"
        id="github"
      >
        <Github />
      </a>
    </div>
  );
};

export default Socials;
