import React from "react";

import I4G from "../../assets/I4G.png";
import Zuri from "../../assets/ZuriInten.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="flex">
      <img src={Zuri} alt="ZURI Internship" id="zuri" />
      <p id="text">HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="I4G" id="i4g" />
    </div>
  );
};

export default Footer;
