import React from "react";

import Profile from "./component/profile/profile";
import Links from "./component/links/links";
import Socials from "./component/socials/socials";
import Footer from "./component/footer/footer";

import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { ReactComponent as Dot } from "./assets/dot.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="/" class="back">
        <Arrow className="arrow" />
        <Dot className="dot" />
      </a>
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
