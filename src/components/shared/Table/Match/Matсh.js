import { hmsToSecondsOnly, secondsToHMS } from "components/services/helper";
import { resetBattle, setWinner } from "components/services/requests";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup"

export const Match = (props) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const navigate = useNavigate();
    const [timer1, setTimer1] = useState(props.match ? secondsToHMS(props.match.participant_1_timer) : "01:00");
    const [timer2, setTimer2] = useState(props.match ? secondsToHMS(props.match.participant_2_timer) : "01:00");
    const isAdmin = (props.role === "ADMIN");
    const handleTimerChange = (event, timerNumber) => {
        const value = event.target.value;

        if (timerNumber === 1) {
            setTimer1(value);
        } else if (timerNumber === 2) {
            setTimer2(value);
        }
    };

    const onClickMakeWinnerHandler = (e) => {
        const body = {
            participantId:`${e.target.id}`
        }
        if (e.target.id && props.match._id) {
            setWinner(body, props.match._id)
            .then((r) => {
                window.location.reload();
                console.log(r)
            })
            .catch((e) => {
                if (e.response.status === 401 || e.response.status === 403) navigate("/")
                console.log(e)
            })
        }
    }

    

    const onClickResetPointsAndTime = () => {
        setOpen(!open)
        if (props.match) {
            const body = {
                participant_1_time: hmsToSecondsOnly(timer1),
                participant_2_time: hmsToSecondsOnly(timer2)
            }
            //reload
            resetBattle(body, props.match._id)
            .then((r) => {
                window.location.reload();
                console.log(r)
            })
            .catch((e) => {
                if (e.response.status === 401 || e.response.status === 403) navigate("/")
                console.log(e)
            })
            
        }
    }

   
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
                                        <span className="top-line__name">{props.match && props.match.participant_1.nickName ? props.match.participant_1.nickName : null}</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number"  type="number" value={props.match ? props.match.participant_1_total_score : 0} disabled={true} />
                                            <button className="top-line__img" hidden={!isAdmin}  id={props.match && props.match.participant_1._id ? props.match.participant_1._id : null} onClick={onClickMakeWinnerHandler}></button>
                                        </div>
                                    </div>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">{props.match && props.match.participant_2.nickName ? props.match.participant_2.nickName : null}</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" value={props.match ? props.match.participant_2_total_score : 0}  disabled={true} />
                                            <button className="top-line__img" hidden={!isAdmin} id={props.match && props.match.participant_2._id ? props.match.participant_2._id : null} onClick={onClickMakeWinnerHandler}></button>
                                        </div>

                                    </div>

                                </div>
                                {
                                    isAdmin
                                   ?
                                   <>
                                   <button className="battle-block__btn" onClick={() => setOpen(o => !o)}>Restart</button>
                                   <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                                    <div className="modal" tabIndex="1" >
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">{props.match && props.match.participant_1 ? props.match.participant_1.nickName : null}</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} tabIndex="1"/>
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">{props.match && props.match.participant_2 ? props.match.participant_2.nickName : null}</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} tabIndex="2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={onClickResetPointsAndTime}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                                </>
                                   :
                                    null
                                }
                                
                            </div>
    )
}