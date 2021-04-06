import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <p>Refresh later</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default NotFoundPage;