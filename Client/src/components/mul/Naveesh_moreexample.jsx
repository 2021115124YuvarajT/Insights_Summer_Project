import React from "react";
import { useNavigate } from "react-router-dom";
import Navmoreeg1 from "../../images/navmoreeg1.gif";
import Navmoreeg2 from "../../images/navmoreeg2.gif"
export default function NavExample(){
    const navigate = useNavigate();
    return(
        <div >
            <h1 className="main_heading">Examples of Naveesh method:</h1>
            
            <div style={topcontainer}>
            <img src = {Navmoreeg1}/>
            <img style = {{'margin-left':'5px'}} src = {Navmoreeg2}/>
            </div>
            <button style = {backbutton} onClick={()=>navigate(-1)}>Back to previous page</button>
        </div>
    )
}
const topcontainer = {
    marginLeft:'35%'
}
const backbutton = {
    marginLeft:'45%',
    borderRadius:'20px',
    marginTop:'55px',
    display:'block'
}