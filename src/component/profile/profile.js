import React from "react";

import picture from "../../assets/my_img.jpeg";

// import Image from "../component/image/image";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={picture} alt="Profile" id="profile__img" />
      <p id="profile__name"> Ogunbowale Uthman</p>
    </div>
  );
};

export default Profile;
