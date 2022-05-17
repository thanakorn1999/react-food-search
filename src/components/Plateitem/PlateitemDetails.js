import React from "react";
import '../../styles/PlateItem.css';

export default function PlateitemDetails(props) {
    console.log(props)
    return(
        <>  
            <div className="item-ali-cen platitem--shop--details" key={props.id} >
                <h5>{props.name}</h5>
                <div className="display-f">
                    <div><p>OPEN :{props.operation_time[4].time_open}-{props.operation_time[4].time_close}</p></div>
                    
                    <p className="shop--details--star">{props.rating} star</p>
                </div>
                
            </div>
        </>
    )
}