import React from 'react'
import "../App.css";
import { SidebarData } from './SidebarData';

export default function sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val , key)=>{
                          return(
                              <li key={key}
                              className="row"
                              id = {window.location.pathname == val.link ? "active" : ""}
                               onClick={() => {window.location.pathname = val.link}}>
                                {" "}
                               <div className="icon">{val.icon}</div>{" "}
                               <div className="title">
                                   {val.title}
                               </div>
                              </li>
                          );

                })}
            </ul>
        </div>
    )
}
