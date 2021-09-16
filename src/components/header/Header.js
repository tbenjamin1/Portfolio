import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  NavbarBrand,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, navLink, withRouter } from "react-router-dom";

import {
  HomeRounded,
  ScheduleRounded,
  WorkOffRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import resumeData from "../utils/resumeData";
import CustomButton from "../button/Button";
import './Header.css';

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className='header_navLink' >
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left' >
        <Nav.Link
          as={NavLink}
          to="/"
          className={pathName == "/" ? "header_link_active" : "header_link"}
        >
          Resume
        </Nav.Link>

        {/* portfolio link */}
        <Nav.Link
          as={NavLink}
          to="/Portfolio"
          className={pathName == "/Portfolio" ? "header_link_active" : "header_link"}
        >
        Portfolio
        </Nav.Link>
         </Nav>
         <div className='header_right'  >
           {Object.keys(resumeData.socials).map((key) =>(
             <a href={resumeData.socials[key].link} target ='_blank'>
               {resumeData.socials[key].icon}
             </a>
           ))}
           <CustomButton  text={'Hire Me'} icon={<Telegram/> } />
              </div>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter( Header);
