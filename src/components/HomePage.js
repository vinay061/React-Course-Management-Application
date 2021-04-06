import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div>
            <h1>Plural Sight Administration</h1>
            <p>React,Flux, and React Router for ultra-responsive web apps</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default HomePage;