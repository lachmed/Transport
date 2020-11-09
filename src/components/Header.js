import React from "react";

//style
import "./Header/HeaderStyle.css";

//components
import Logo from "./Header/Logo";
import NavBar from "./Header/NavBar";


const Header = () => 
{
    return (
        <div className="header container-fluid">
            <Logo />
            <NavBar />
        </div>
        
    );
}

export default Header;