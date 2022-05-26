import React from 'react'
import "../App.css";
import { NavbarData } from './NavbarData';

export default function sidebar() {
    return (
        <div className="Navbar">
            <ul className="NavbarList">
                {NavbarData.map((val , key)=>{
                          return(
                              <li key={key}
                              className="row"
                              id = {window.location.pathname == val.name ? "active" : ""}
                               onClick={() => {window.location.pathname = val.name}}>
                                {" "}
                               <div className="icon">{val.name}</div>{" "}
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
