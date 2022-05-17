import React from "react";
import { useState } from 'react';
import '../styles/Header.css';
import { FiAlignJustify,FiX } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import Profile from "./nav/Profile";

export default function Header(props) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const sizeIcon = 28

    // setMenuIsOpen(menuIsOpen => !menuIsOpen)

    return(
        <header className="header" >
            <nav className="navbar">
                
                <div className="header--profile">
                    { menuIsOpen?  <FiX color="white" onClick={e =>setMenuIsOpen(!menuIsOpen)} size={sizeIcon}/> : <FiAlignJustify color="white"  onClick={e =>setMenuIsOpen(!menuIsOpen)} size={sizeIcon}/>}
                    <Profile sizeIcon={sizeIcon}/>
                </div>
            </nav>
            

            
            
        </header>
    )
}