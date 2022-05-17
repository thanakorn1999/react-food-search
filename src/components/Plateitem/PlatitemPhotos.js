import React from "react";
import '../../styles/PlateItem.css';

// import Container from 'react-bootstrap/Container'

export default function PlatitemPhotos(props) {
    return(
        <>  
          <div className="platitem--sample--photo">
            <img className="border-radius-l" src={props.images[0]}></img>
            <img src={props.images[1]}></img>
            <img className="border-radius-r" src={props.images[2]}></img>
          </div>
        </>
    )
}