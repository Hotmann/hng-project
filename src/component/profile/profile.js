import React from "react";

import picture from "../../assets/my_img.jpeg";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={picture} alt="Profile" id="profile__img" />
      <h2 id="twitter">@_Hotmann</h2>
      <h2 id="slack" hidden>
        Hotmann
      </h2>
    </div>
  );
};

export default Profile;
