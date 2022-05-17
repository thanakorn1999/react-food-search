import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchInput(props) {

    return(
        <>  
            <div className="nav--search">
                <input type="text" class="searchTerm" placeholder="Search name..." onChange={(e) => props.searchItems(e.target.value)}>
                </input>
                <button type="submit" class="searchButton" >
                    <BiSearch size={props.sizeIcon-8}/>
                </button>
            </div>

        </>
    )
}