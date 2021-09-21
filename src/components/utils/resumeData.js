import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import LanguageIcon from "@material-ui/icons/Language";
// import pp from "../../assets/images/pp.jpg";

export default {
  name: "tyisingize benjamin",
  title: "full stack bdeveloper",
  birthday: "06th december 1999",
  email: "sam@sam.com",
  address: "23 kg st",
  phone: "+250787438701",
  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "Mytwitter",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://www.facebook.com",
      text: "Mytwitter",
      icon: <TwitterIcon />,
    },
    GitHub: {
      link: "https://www.facebook.com",
      text: "Mylinkdin",
      icon: <GitHubIcon />,
    },
    Linkedlin: {
      link: "https://www.facebook.com",
      text: "myGitHub",
      icon: <LinkedInIcon />,
    },
  },

  about:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  Lorem Ipsum has been the industry's ",
  experiences: [
    {
      title: "work 1",
      date: "218 - PresentToAll",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
    },
    {
      title: "work 2",
      date: "214 -215",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
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
      title: "education1",
      date: "218 - PresentToAll",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
    },
    {
      title: "education 2",
      date: "214 -215",
      description:
        "imply dummy text of the printing and typesetting industry. standard dummy ",
    },
    {
      title: "education 3",
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
      image: require("../../assets/images/pp.jpg"),
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

    {
      tag: "React",
      image: require("../../assets/images/pp.jpg"),
      title: "project 2",
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
      image: require("../../assets/images/pp.jpg"),
      title: "project 3",
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
      tag: "JavaScrpt",
      image: require("../../assets/images/pp.jpg"),
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

    {
      tag: "php",
      image: require("../../assets/images/pp.jpg"),
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

    {
      tag: "Python",
      image: require("../../assets/images/pp.jpg"),
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
