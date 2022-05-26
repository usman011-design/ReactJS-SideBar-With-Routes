import React from 'react'
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

export const SidebarData = [
   {
    title:"Home",
    icon:<HomeIcon/>,
    link:"/home"
   },
   {
    title:"MailBox",
    icon:<MailIcon/>,
    link:"/MailBox"
   },
   {
    title:"Analytical",
    icon:<AssessmentIcon/>,
    link:"/Analytical"
   },
   {
    title:"Dashboard",
    icon:<DashboardIcon/>,
    link:"/Dashboard"
   },
   {
    title:"friends",
    icon:<GroupIcon/>,
    link:"/friends"
   },
   {
    title:"images",
    icon:<PermMediaIcon/>,
    link:"/images"
   }
];
    