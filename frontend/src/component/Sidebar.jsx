import React, { useState } from "react";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
 }from 'react-icons/fa'
import { NavLink, useLocation } from "react-router-dom";

const Sidebar=({children})=>{
    const[isOpen , SetIsOpen]= useState(false);
    const toggle =()=>SetIsOpen(!isOpen);
const menuItem=[
    {
        Path:"/ ",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        Path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        Path:"/addannouncent",
        name:"Add Announcent",
        icon:<FaRegChartBar/>
    },
    {
        Path:"/users",
        name:"Users",
        icon:<FaCommentAlt/>
    },
    {
        Path:"/uokmis",
        name:"Uokmis",
        icon:<FaShoppingBag/>
    }
   
]
const location=useLocation();
let a=location.pathname;
    return( 
        <div className="sd-container bg-primary vh-100 ">
            <div style={{width: isOpen ? "300px" :"50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" :"none"}} className="logo">logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" :"0px"}}className="bars">
                      <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.Path} key ={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" :"none"}}className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
<main>{children}</main>
        </div>
    );
};
export default Sidebar;