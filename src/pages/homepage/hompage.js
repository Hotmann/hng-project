import React from "react";

import Profile from "../../component/profile/profile";
import Links from "../../component/links/links";
import Socials from "../../component/socials/socials";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Dot } from "../../assets/dot.svg";

import "./homepage.css";

function Homepage() {
  return (
    <div className="Hompage">
      <a href="/hng-project" className="back">
        <Arrow className="arrow" />
        <Dot className="dot" />
      </a>
      <a href="/hng-project/contact">Contact</a>
      <Profile />
      <Links />
      <Socials />
    </div>
  );
}

export default Homepage;
