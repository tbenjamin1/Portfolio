import { Typography } from "@material-ui/core";
import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">TUYISINGIZE BENJAMIN</Typography>
        <Typography className="title">web developer</Typography>
      </div>
      <figure className="profile_image" >
        <img src={require('../../assets/images/pp.jpg').default} alt="" />
      </figure>
      <div className="profile_information">
        insert timeline
        <br></br>
        <button>my cv</button>
      </div>
    </div>
  );
};

export default Profile;
