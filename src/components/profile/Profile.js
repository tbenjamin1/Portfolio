import { Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../button/Button";
import "./Profile.css";
import CustomTimeline, { CustomTimelineSeparator } from "./timeline/Timeline";
import GetAppIcon from "@material-ui/icons/GetApp";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from "@material-ui/lab/TimelineItem";
import resumeData from "../utils/resumeData";

const CustomTimelineItem = ({ title,txt, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    
    <TimelineContent  className="timeline_content" >
      {link ? (
        <Typography  className="timelineItem_text" >



{/* {Object.keys(resumeData.socials).map((key) =>(

<span>  {resumeData.socials[key].icon.icon} </span>

))}; */}
          <span> {txt} </span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography  className="timelineItem_text" >
          <span>{title}: </span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
        {/* <Typography className="title">{resumeData.email}</Typography> */}
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/images/me.jpeg").default} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          {/* <CustomTimelineItem title="Name" text={resumeData.name} /> */}
          
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem title="Title" text={resumeData.phone} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
           
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
      <div className="btn_container" >
      <CustomButton text={"download cv"} icon={<GetAppIcon />} />
      </div>
      
   
      </div>
    </div>
  );
};

export default Profile;
