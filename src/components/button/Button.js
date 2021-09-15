import React from "react";
import IconButton from '@material-ui/core/IconButton';
import "./Button.css";

const  CustomButton = ({text,icon}) => {
  return (
    <IconButton 
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon} </div> : null}
    >
      <span className="btn_text"> {text} </span>
    </IconButton >
    
  );
};

export default  CustomButton;
