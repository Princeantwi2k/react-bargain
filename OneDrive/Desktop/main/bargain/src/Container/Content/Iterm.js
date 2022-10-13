import React from "react";
import "./Content.css"
import BasicTabs from "./ItermTabs";

const Iterm = () => {
    return(  <>
     <div className="ItermHeader">
        <div className="Header">
        <h4>Iterm Management</h4>
        <p>Iterm list</p>
        </div>
       <div className="ItermBody">
        <BasicTabs />
       </div>
     </div>
    </>
    )
}

export default Iterm