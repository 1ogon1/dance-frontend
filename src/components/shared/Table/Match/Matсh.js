import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup"

export const Match = (props) => {
    const navigate = useNavigate();
    const [timer1, setTimer1] = useState('01:00');
    const [timer2, setTimer2] = useState('01:00');
    const isAdmin = (props.role === "ADMIN");
    const handleTimerChange = (event, timerNumber) => {
        const value = event.target.value;

        if (timerNumber === 1) {
            setTimer1(value);
        } else if (timerNumber === 2) {
            setTimer2(value);
        }
    };


  
    //debouncing
    //preventing useEffect on mount
    const mounted = useRef(false)

    const [inputValue1, setInputValue1] = useState(props.match ? props.match.participant_1_total_score : "-")
    const [currentId1, setCurrentId1] = useState("234erw")

    const [inputValue2, setInputValue2] = useState(props.match ? props.match.participant_2_total_score : "-")
    const [currentId2, setCurrentId2] = useState("1qwe2@")

   
   
    const onSavePointsHandler1 = (e) => {
        setCurrentId1(e.target.id)
        setInputValue1(e.target.value);
    };

    const onSavePointsHandler2 = (e) => {
        setCurrentId2(e.target.id)
        setInputValue2(e.target.value);
    };

     useEffect(() => {
        if (mounted.current) {
            const delayInputTimeoutId = setTimeout(() => {
                console.log("value: %d", inputValue1)
                console.log("id: %s", currentId1)
                setCurrentId1("")
              }, 500);
              return () => clearTimeout(delayInputTimeoutId);
        }
      }, [inputValue1, 1000]);
    
      useEffect(() => {
        if (mounted.current) {
            const delayInputTimeoutId = setTimeout(() => {
                console.log("value: %d", inputValue2)
                console.log("id: %s", currentId2)
                setCurrentId2("")
              }, 500);
              return () => clearTimeout(delayInputTimeoutId);
        }
      }, [inputValue2, 1000]);
    
      useEffect(() => {
        mounted.current = true
        return () => {
          mounted.current = false
        }
      }, [])

    return (
        <div className="block-column__item">
                                <div className="battle-block__top top-block" onClick={()=> 
                                {
                                    if (props.role === "JUDGE" && props.match !== null)
                                     navigate(`../..//judge/battle/${props.match._id}`)
                                     else if (props.role === "SCREEN" && props.match !== null)
                                     navigate(`../..//screen/battle/${props.match._id}`)
                                }
                                    }>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">{props.match ? props.match.participant_1.nickName : null}</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" id={props.match ? props.match.participant_1._id : null} type="number" disabled={!isAdmin} value={inputValue1} onChange={onSavePointsHandler1}/>
                                            <div className="top-line__img" hidden={!isAdmin}></div>
                                        </div>
                                    </div>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">{props.match ? props.match.participant_2.nickName : null}</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" id={props.match ? props.match.participant_2._id : null} type="number"  disabled={!isAdmin} value={inputValue2} onChange={onSavePointsHandler2}/>
                                            <div className="top-line__img" hidden={!isAdmin}></div>
                                        </div>

                                    </div>

                                </div>
                                {
                                    isAdmin
                                   ?
                                   <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal" tabIndex="1" >
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} tabIndex="1"/>
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} tabIndex="2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange">SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                                   :
                                    null
                                }
                                
                            </div>
    )
}