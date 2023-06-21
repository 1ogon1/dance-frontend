import React, { useEffect, useState } from "react"
import "./TableAdminBar.css"
import { getParticipants } from "components/services/Requests";
export const TableAdminBar = (props) => {

   const [participants, setParticipants] = useState([]);
   useEffect(() => {
      getParticipants()
      .then((r) => {
         console.log(r.data)
         setParticipants(r.data)
      })
      .catch((e) => {
         console.log(e)
      })
   }, [])

   return (
      <div className="sidebar">
         <div className="sidebar__container">
            <div className="sidebar__logo"></div>
            <h2 className="sidebar__title">Top 16</h2>
            {participants.map((e) => <>{
               <div className="sidebar__list" id={e.id}>{e.nickName}</div>
            }</>)}
       
              {/* <div className="sidebar__btn btn btn--orange">randomize</div> */}
         </div>
      </div>
   )



}