import React from "react";

import picture from "../../assets/my_img.jpeg";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={picture} alt="Profile" id="profile__img" />
      <p id="profile__name"> Ogunbowale Uthman</p>
      <p id="slack" hidden>
        hotmann
      </p>
    </div>
  );
};

export default Profile;
