import React, { useEffect, useState } from "react"
import "./TableAdminBar.css"
import { getParticipants, phoenixPower } from "components/services/requests";
export const TableAdminBar = (props) => {
   const [participants, setParticipants] = useState([]);
   useEffect(() => {
      getParticipants()
         .then((r) => {
            setParticipants(r.data)
         })
         .catch((e) => {
            console.log(e)
            setParticipants(props.users)
         })
   }, [])

   const onClickHandler = (e) => {
      if (e.target.id !== "") {
         console.log(e.target.id)

         phoenixPower(JSON.stringify(e.target.id))
            .then((r) => {
               getParticipants()
                  .then((r) => {
                     setParticipants(r.data)
                  })
                  .catch((e) => {
                     console.log(e)
                     setParticipants(props.users)
                  })
            })
            .catch((e) => {
               console.log(e)
            })
      }
   }



   return (
      <div className="sidebar">
         <div className="sidebar__container">
            <div className="sidebar__logo"></div>
            <h2 className="sidebar__title">Top 16</h2>
            {participants.map((e) => <>{
               <div className="sidebar__box">
                  <div className="sidebar__list" >{e.nickName}</div>
                  <button className="sidebar__img" id={e._id} onClick={onClickHandler} style={e.phoenix_power === true ? null : { filter: "blur(3px)" }} disabled={e.phoenix_power ? false : true}> </button>

               </div>

            }</>)}

            {/* <div className="sidebar__btn btn btn--orange">randomize</div> */}
         </div>
      </div>
   )



}