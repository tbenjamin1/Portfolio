import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import LanguageIcon from "@material-ui/icons/Language";
// import pp from "../../assets/images/pp.jpg";

export default {
  name: "tuyisingize benjamin",
  title: "FULL STACK WEB DEVELOPER",
  birthday: "06th december 1999",
  email: "tbenpollyl@gmail.com",
  address: "23 kg st",
  phone: "+250787438701",
  socials: {
    facebook: {
      link: "https://www.facebook.com",
      txt: "Myfacebook",
      text: <FacebookIcon />,
    },

    Twitter: {
      link: "https://www.facebook.com",
      txt: "Mytwitter",
      text: <TwitterIcon />,
    },
    GitHub: {
      link: "https://www.facebook.com",
      txt: "Mylinkdin",
      text: <GitHubIcon />,
    },
    Linkedlin: {
      link: "https://www.facebook.com",
      txt: "myGitHub",
      text: <LinkedInIcon />,
    },
  },

  about:
    " Am persistent and ambitious software engineer with a desire to grow fast in this domain. Capable of ramping up  quickly and efficiently, and of both working in a team or solo. Love of remote work. Skills in many languages,frameworks, and technologies.",
  experiences: [
    {
      title: "PANEL TECH",
      date: "218 - PresentToAll",
      description:
        "software engineer",
    },
    {
      title: "UNIVERSITY OF RWANDA",
      date: "214 -215",
      description:
        "internship ",
    },
    {
      title: "work 3",
      date: "218 - 214",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
    },
  ],

  educations: [
    {
      title: "UNIVERSITY OF RWANDA",
      date: "217 - PresentToAll",
      description:
        " Honor’s Bachelor of Computer Software Engineering ",
    },
    {
      title: "ES KANOMBE/EFOTEC",
      date: "2014 -2016",
      description:
        "HIGH SCHOOL DIPLOMA/A LEVEL ",
    },
    {
      title: "GROUP SCORAILE ST JOSEPH",
      date: "2010 - 2013",
      description:
        "O LEVEL ",
    },
    {
      title: "EP GISOZI II",
      date: "218 - 214",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
    },
  ],
  services: [
    {
      title: "web dev",
      description: "i have a been a good dev for 2 years",
      icon: <LanguageIcon />,
    },
    {
      title: "web dev",
      description: "i have a been a good dev for 2 years",
      icon: <LanguageIcon />,
    },

    {
      title: "web dev",
      description: "i have a been a good dev for 2 years",
      icon: <LanguageIcon />,
    },

    {
      title: "web dev",
      description: "i have a been a good dev for 2 years",
      icon: <LanguageIcon />,
    },
  ],
  skills: [
    {
      title: "FRONT _END",
      description: [
        "React js",
        "javaScript",
        "typeScript",
        "laravel",
        "bootStrap",
        "material ui",
      ],
    },
    {
      title: "BACK_END",
      description: ["Node js", "php"],
    },
    {
      title: "DATABASES",

      description: ["git", "gitHub", "Netlify", "heroko"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: require("../../assets/images/pp.jpg").default,
      title: "COVID TRACKER",
      capation:'s simply dummy text of the printing and typesetting ',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image: require("../../assets/images/pp.jpg").default,
      title: "FOOD ORDER APP",
      capation:'s simply dummy text of the printing and typesetting ',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image: require("../../assets/images/pp.jpg").default,
      title: "ALBUM VIEW",
      capation:'web App used to view the album of photos  ',
      description:
        "it is a web App used to view the album of photos but it depends on the id user entered In the input field and when they click on the “Get Album Photos By Id” button, the application displays the title and a thumbnail image of all  the photos of the album by that id",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "javascript",
      image: require("../../assets/images/pp.jpg").default,
      title: "USER VIEWER",
      capation:' purpose of this project is to displays all users and their related information ',
      description:
        "the purpose of this project is to displays all 10 users (name and email only) from the API after page loads and after loading all  of user it comes with button, when that button is clicked it display a list of posts by that user",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },


    {
      tag: "php",
      image: require("../../assets/images/pp.jpg").default,
      title: "UR-ALUMN I",
      capation:'university of rwand alumnI database',
      description:
        "the purpose of this project is build website that will help University of Rwanda to manage all UR-graduates in their college and to maintain all the information related to all of their Alumnus, so that the Alumnus is great partner of the University of Rwanda based on their expertise. they are one of the partner needed to empower through inviting them to give their contribution to the University of Rwanda",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "Python",
      image: require("../../assets/images/pp.jpg").default,
      title: "project 1",
      capation:'s simply dummy text of the printing and typesetting ',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: [
        { link: "https://www.google.com", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};
