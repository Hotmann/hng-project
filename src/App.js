import React from "react";

import Profile from "./component/profile/profile";
import Links from "./component/links/links";
import Socials from "./component/socials/socials";

import { ReactComponent as Arrow } from "./assets/arrow.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Arrow className="arrow" />
      <Profile />
      <Links />
      <Socials />
    </div>
  );
}

export default App;
