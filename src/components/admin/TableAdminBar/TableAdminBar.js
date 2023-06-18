import React from "react"
import "./TableAdminBar.css"
export const TableAdminBar = (props) => {

   return (
      <div className="sidebar">
         <div className="sidebar__container">
            <div className="sidebar__logo"></div>
            <h2 className="sidebar__title">Top 16</h2>
            {props.users.map((e) => <>{
               <div className="sidebar__list" id={e.id}>{e.name}</div>
            }</>)}
       
              <div className="sidebar__btn btn btn--orange">randomize</div>
         </div>
      </div>
   )



}