import React from "react"
import "./TableAdminBar.css"
export const TableAdminBar = (props) => {

   return (
    <div className="table-admin-bar">
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}> 
       <img alt="a" style={{backgroundColor: "black"}} src="../../../../public/phoenix_1.png" />
    </div>
    
    <h2 style={{paddingLeft:"2vw", paddingBottom:"2.5vh"}}>Top 16</h2>
    {props.users.map((e) => <>{
      <div style={{paddingLeft: "1vw", paddingBottom:"2vh"}} id={e.id}>
      {e.name} 
      <img src="../../../../public/phoenix_1.png"/>
      </div>
      }</>)}
    </div>
   )

    
    
}