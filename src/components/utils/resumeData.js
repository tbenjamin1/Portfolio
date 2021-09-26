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
      link: "https://github.com/tbenjamin1",
      txt: "Mylinkdin",
      text: <GitHubIcon />,
    },
    Linkedlin: {
      link: "https://www.linkedin.com/in/tuyisingize-benjamin-2480a3211/",
      txt: "myGitHub",
      text: <LinkedInIcon />,
    },
  },

  about:
    " Am persistent and ambitious software engineer with a desire to grow fast in this domain. Capable of ramping up  quickly and efficiently, and of both working in a team or solo. Love of remote work. Skills in many languages,frameworks, and technologies.",
  experiences: [
    {
      title: "PANEL TECH",
      date: "2018 - PresentToAll",
      description:
        "software engineer",
    },
    {
      title: "ARCONSULT ENGINEERING ",
      date: "2018 - 2014",
      description:
        "IT SUPPROT TECHNICIAN  ",
    },
    {
      title: "UNIVERSITY OF RWANDA",
      date: "2014 -2015",
      description:
        "internship ",
    },
                                                           
  ],

  educations: [
    {
      title: "UNIVERSITY OF RWANDA",
      date: "2017 - PresentToAll",
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
      date: "",
      description:
        "",
    },
  ],
  services: [
    {
      title: "web dev",
      description: "i have a been a good dev for 2 years",
      icon: <LanguageIcon />,
    },
    {
      title: "UI / UX DESIGN",
      description: " we learn ..we create ..design",
      icon: <LanguageIcon />, 
    },

    {
      title: "PHOTOSHOP",
      description: "Your Wish Our Command",
      icon: <LanguageIcon />,
    },

    // {
    //   title: "web dev",
    //   description: "i have a been a good dev for 2 years",
    //   icon: <LanguageIcon />,
    // },
  ], 
  skills: [
    {
      title: "FRONT _END",
      description: [
        "React js",
        "javaScript",
        "typeScript",
        
        "bootStrap",
        "material ui",
      ],
    },
    {
      title: "BACK_END",
      description: ["Node js", "php","laravel"],
    },
    {
      title: "DATABASES",

      description: ["mysql", "postgrace"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: require("../../assets/images/cvd.PNG").default,
      title: "COVID TRACKER",
      capation:'This project consists of creating a simple one page COVID calculator that pulls data from an open COVID API.',
      description:
        "This project consists of creating a simple one page COVID calculator that pulls data from an open COVID API",
      link: [
        { link: "https://sad-brown-b32ada.netlify.app/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/covid-_tracker", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image: require("../../assets/images/food.PNG").default,
      title: "FOOD ORDER APP",
      capation:' meals order app  Front-end: REACT JS  back -end :FIREBASE',
      description:
        "The purpose of this was and is to create web app that will help restaurant to be connected with their customers via  app ,this app  allows user to view menus from different restaurant and also he /she can record their selected food to order list after they should confirm order to the restaurant",
      link: [
        { link: "https://foodordapp.netlify.app/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/Order-Food-App", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      image: require("../../assets/images/EXPENSE.PNG").default,
      title: "EXPENSE TRACKER",
      capation:'web App used to view the album of photos  ',
      description:
        "it is a web App used to view the album of photos but it depends on the id user entered In the input field and when they click on the “Get Album Photos By Id” button, the application displays the title and a thumbnail image of all  the photos of the album by that id",
      link: [
        { link: "https://expenseapp250.netlify.app/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/Order-Food-App", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image: require("../../assets/images/albm.PNG").default,
      title: "ALBUM VIEW",
      capation:'web App used to view the album of photos  ',
      description:
        "it is a web App used to view the album of photos but it depends on the id user entered In the input field and when they click on the “Get Album Photos By Id” button, the application displays the title and a thumbnail image of all  the photos of the album by that id",
      link: [
        { link: "https://happy-leavitt-20a8e6.netlify.app/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/ALBUM-VIEW", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      image: require("../../assets/images/ck.PNG").default,
      title: "CK BUSINESS LTD",
      capation:'This project was about to build website which will be used selling and advertising  furniture online ',
      description:
        "This project was about to build website which will be used selling and advertising  furniture online",
      link: [
        { link: " https://ckbusinessltd.com/landing", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "React",
      image: require("../../assets/images/pnl.PNG").default,
      title: "PANEL TECH",
      capation:'Portfolio web for panel tech company ',
      description:
        "Portfolio web for panel tech company",
      link: [
        { link: "https://paneltechrwanda.com/", icon: <LanguageIcon /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },


    

    {
      tag: "javascript",
      image: require("../../assets/images/user.PNG").default,
      title: "USER VIEWER",
      capation:' purpose of this project is to displays all users and their related information ',
      description:
        "the purpose of this project is to displays all 10 users (name and email only) from the API after page loads and after loading all  of user it comes with button, when that button is clicked it display a list of posts by that user",
      link: [
        { link: "https://tbenjamin1.github.io/USER-CONTROLLER/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/USER-CONTROLLER", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "javascript",
      image: require("../../assets/images/TASK.PNG").default,
      title: "TASK MANAGER",
      capation:' purpose of this project is to displays all users and their related information ',
      description:
        "the purpose of this project is to displays all 10 users (name and email only) from the API after page loads and after loading all  of user it comes with button, when that button is clicked it display a list of posts by that user",
      link: [
        { link: "https://taskmangerapp.netlify.app", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/task--manager", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },


    {
      tag: "php",
      image: require("../../assets/images/alm.PNG").default,
      title: "UR-ALUMN I",
      capation:'university of rwand alumnI database',
      description:
        "the purpose of this project is build website that will help University of Rwanda to manage all UR-graduates in their college and to maintain all the information related to all of their Alumnus, so that the Alumnus is great partner of the University of Rwanda based on their expertise. they are one of the partner needed to empower through inviting them to give their contribution to the University of Rwanda",
      link: [
        { link: "/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/Alumni", icon: <GitHubIcon /> },
        // { link: "https://www.google.com", icon: <LanguageIcon /> },
      ],
    },

    {
      tag: "javascript",
      image: require("../../assets/images/ltry.PNG").default,
      title: "LOTTERY APP",
      capation:'s simply dummy text of the printing and typesetting ',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: [
        { link: "https://tbenjamin1.github.io/Loterry-App/", icon: <LanguageIcon /> },
        { link: "https://github.com/tbenjamin1/Loterry-App", icon: <GitHubIcon /> },
        
      ],
    },
  ],
};
