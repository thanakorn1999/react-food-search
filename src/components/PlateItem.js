import React from "react";
import '../styles/PlateItem.css';
import PlatitemDetails from "./Plateitem/PlateitemDetails"
import PlatitemPhotos from "./Plateitem/PlatitemPhotos"

export default function PlateItem(props) {
    return(
        <>  <div className="platitem">
                <div className="display-f">
                    <img className="platitem--shop--photo" src={props.profile_image_url}></img>
                    <PlatitemDetails {...props}/>
                    
                </div>
                <PlatitemPhotos images={props.images}/>
            </div>
        </>
    )
}