import { Grid, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../utils/resumeData";
// import WorkIcon from '@mui/icons-material/Work';
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../profile/timeline/Timeline";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
import { Timeline } from "@material-ui/icons";
import'./Resume.css';

const Resume = () => {
  return (
    <>
      {/* about me */}

      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            {" "}
            About Me
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

      <Grid container className="section">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            {" "}
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* work experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="work experience" icon='work'>
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
              <CustomTimeline title="Education" icon='skull'>
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
      {/* skills */}

      <Grid container className="section"></Grid>
      {/*contact  */}

      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
