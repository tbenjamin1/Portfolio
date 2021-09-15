import React from "react";
import { Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import WorkIcon from '@material-ui/icons/Work';
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Timeline.css";

const CustomTimeline = ({title,icon,children}) => {
  return (
    <Timeline className={"timeline"}>
      {/* headere item */}
      <TimelineItem className={"timeline_headerItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"} >
          {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {" "}
          <Typography variant="h6" className={"timeline_title"}>
            {title}
          </Typography>{" "}
        </TimelineContent>
      </TimelineItem>
       {children}

     
    </Timeline>
  );
};

export const CustomTimelineSeparator =()=>(
    <TimelineSeparator className={"separator_padding"}>
          <TimelineDot vari={"outlined"} className={"timeline_dot"} />
          <TimelineConnector />
        </TimelineSeparator>
);
export default CustomTimeline;