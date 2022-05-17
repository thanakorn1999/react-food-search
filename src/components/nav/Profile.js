import React from "react";
// import '../../styles/Header.css';

import { BiChevronDown } from "react-icons/bi";
import { FaBell } from "react-icons/fa";


export default function Profile(props) {

    const testObjectData = {
        nameUser : "name_user",
        photoUser : "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos.jpg"
    }

    return(
        <>  
            <div className="header--profile--user">
                <FaBell color="white" size={props.sizeIcon}/>
                <img className="header--profile--user--photo" src={testObjectData.photoUser}></img>
                <p>{testObjectData.nameUser}</p>
                <BiChevronDown color="white" size={props.sizeIcon}/>

            </div>
            
        </>
    )
}