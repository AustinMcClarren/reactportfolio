import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return <div className="navbar">Navbar
    <div className="toggleButton">
        <button></button>
    </div>
        <div className="links"></div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experiance">Experiance</Link>
    </div>;

}

export default Navbar;