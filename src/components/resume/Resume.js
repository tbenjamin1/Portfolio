import React from "react";
import { Grid, Icon, Paper, TextField, Typography } from "@material-ui/core";
import CustomButton from "../button/Button";
import resumeData from "../utils/resumeData";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../profile/timeline/Timeline";
import { TimelineContent, TimelineDot, TimelineItem } from "@material-ui/lab";
import { Timeline } from "@material-ui/icons";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      {/* about me */}

      <Grid container className="section pb_45  pt_45">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            {" "}
            AbutMe
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_text">
            {" "}
            {resumeData.about}{" "}
          </Typography>
        </Grid>
      </Grid>
      {/* eduction  and experince*/}

      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            {" "}
            Resume
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* work experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="work experience" icon="work">
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent>
                      <Typography className="timeline_title">
                        {" "}
                        {experience.title}{" "}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {" "}
                        {experience.date}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {" "}
                        {experience.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* eduction */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon="skull">
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent>
                      <Typography className="timeline_title">
                        {" "}
                        {education.title}{" "}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {" "}
                        {education.date}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {" "}
                        {education.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* services */}

      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 className="section_title_text"> Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon"> {service.icon} </Icon>
                  <Typography className="service_title" variant="h6">
                    {" "}
                    {service.title}{" "}
                  </Typography>
                  <Typography className="service_description">
                    {" "}
                    {service.description}{" "}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*skills*/}

      <Grid
        container
        spacing={"space-between"}
        justify="space-between"
        className="section_skils graybg pb_45"
      >
        {resumeData.skills.map((skill) => (
          <Grid item sx={12} sm={6} md={3}>
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skill_title">
                {skill.title}
              </Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" classNam="skill_description">
                  <TimelineDot className="timeline_dot">{element}</TimelineDot>
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/*contact  */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/* left part */}
        <Grid item sx={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30 ">
              <span></span>
              <h6 variant="h6" className="section_title_text">
                {" "}
                contact us
              </h6>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item sm={12} sm={5}>
                    <TextField fullWidth name="name" label="Name" className="textfield" />
                  </Grid>
                  <Grid item sm={12} sm={5}>
                    <TextField fullWidth name="email" label="E-mail" />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={3}
                    />
                  </Grid>
                  <Grid item sm={12}>
                   
                    <button> submmit</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* right part */}
        <Grid item sx={12} lg={5}>
          <Grid container>
            <Grid item sm={12} className="section_title mb_30">
              <Paper elevation={0} className="skill">
                <figure className="profile_image">
                  <img
                    src={require("../../assets/images/face.jpeg").default}
                    alt=""
                  />
                </figure>
              </Paper>
              {/* <ContactImage/> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
