import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    const activeStyle = { color: "orange" };
    return (
        <div>
            <NavLink activeStyle={activeStyle} exact to="/">Home</NavLink>{" | "}
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>{" | "}
            <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink>{" | "}
        </div>
        
    );
}

export default Header;