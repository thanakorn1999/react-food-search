import React,{ useState, useEffect } from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import PlateItem from "./PlateItem"
import SearchInput from "./SearchInput";

export default function MainContain(props) {

    const [allData ,setAllData] = useState(props.datas)
    const [filteredResults, setFilteredResults] = useState(allData);
    const [searchInput, setSearchInput] = useState('');


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = allData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(allData)
        }
      }

    // const plateItems = props.datas.map((item,index) => {
    //         return (
    //             index%3 == 0?
    //                 <Row  xs={1} md={3}>
    //                     <Col className="pad-10"  ><PlateItem {...props.datas[index]}/></Col>
    //                     {props.datas[index+1]&&<Col className="pad-10" ><PlateItem {...props.datas[index+1]}/></Col>}
    //                     {props.datas[index+2]&&<Col className="pad-10" ><PlateItem {...props.datas[index+2]}/></Col>}
    //                 </Row>
    //                 :
    //                 null
    //         )
    //     }
    // )
    
    const plateItems = filteredResults.map((item,index) => {
        return (
            <Col className="pad-10" md={4} ><PlateItem {...item}/></Col>
            )
        }
    )


    return(
        <>  
            <Container>

                <div className="header--nav--search">
                    <h3>Place List</h3>
                    <SearchInput sizeIcon={28} searchItems={searchItems}/>
                </div>

                <Row  xs={1} md={3}>
                    {plateItems}
                </Row>

            </Container>
        </>
    )


}