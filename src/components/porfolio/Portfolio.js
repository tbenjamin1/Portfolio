import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import resumeData from "../utils/resumeData";
import'./Portfolio.css';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const[projectDialog,setProjectDialog] = useState(false);


  

  return (
    <Grid container className="section  pb_45  pt_45 mr_30">
      {/* title */}
      <Grid item className="section_title mb_30 ">
        <span></span>
        <h6 variant="h6" className="section_title_text">
          {" "}
          Portfolio
        </h6>
      </Grid>
      {/* tabs */}

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* projects */}

      <Grid item sx={12}>
        <Grid container spacing={2} className='section_project pr_45'>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() =>setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customcard_image"
                          image={project.image}
                          title={project.title}
                        />

                        <CardContent>
                          <Typography className="customcard_title">
                            {" "}
                            {project.title}{" "}
                          </Typography>
                          <Typography className="customcard_description">
                            {" "}
                            {project.capation}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false) } className="projectDialog" fullwidth >
<DialogTitle   onClose={() => setProjectDialog(false) }  > {projectDialog.title}</DialogTitle>
<img src={projectDialog.image} alt="project" className="projectDialog_image" />
<DialogContent>

<Typography  className="projectDialog_description" >{projectDialog.description}</Typography>

</DialogContent>
<DialogActions   className="projectDialog_actions" >
  {projectDialog?.link?.map((links) => (
    <a href={links.link} target='_blank'  className="projectDialog_icon" >{links.icon}</a>
  ))}
</DialogActions>
    </Dialog>


    </Grid>
  );
};

export default Portfolio;
