import React, { useState } from "react";

import LINK__DATA from "./linkData";
import Link from "./link/link";
// import Image from "../component/image/image";

import "./links.css";

const Links = (props) => {
  const [links, setLinks] = useState(LINK__DATA);

  return (
    <div className="container">
      {links.map(({ id, ...otherProps }) => (
        <Link key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Links;
