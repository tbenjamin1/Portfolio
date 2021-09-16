
import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { PresentToAll } from "@material-ui/icons";


 export default {
    name:'tyisingize benjamin' ,
    title:'full stack bdeveloper',
    birthday:'06th december 1999',
    email:'sam@sam.com',
    address:'23 kg st',
    phone:'+250787438701',
    socials:{
        facebook:{
            link:'https://www.facebook.com',
            text:'Mytwitter',
            icon:<FacebookIcon/>,

        },

       Twitter:{
            link:'https://www.facebook.com',
            text:'Mytwitter',
            icon:<TwitterIcon/>,

        },
      GitHub:{
            link:'https://www.facebook.com',
            text:'Mylinkdin',
            icon:<GitHubIcon/>,

        },
        Linkedlin:{
            link:'https://www.facebook.com',
            text:'myGitHub',
            icon:<LinkedInIcon/>,

        },
    },

    about:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  Lorem Ipsum has been the industry's ",
    experiences: [

        {
            title:'work 1',
            date:'218 - PresentToAll',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },
        {
            title:'work 2',
            date:'214 -215',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },
        {
            title:'work 3',
            date:'218 - 214',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },

       ],

      educations: [ 

        {
            title:'education1',
            date:'218 - PresentToAll',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },
        {
            title:'education 2',
            date:'214 -215',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },
        {
            title:'education 3',
            date:'218 - 214',
            description:'imply dummy text of the printing and typesetting industry. standard dummy '
        },

       ]
    
};