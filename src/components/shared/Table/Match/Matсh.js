import React, { useState } from "react"
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

    const sendDataToBackend = (timerData1, timerData2) => {
        //запросы
    };

    const handleSave = () => {
        // Отправка данных таймеров на бэкэнд
        sendDataToBackend(timer1, timer2);
    };

    return (
        <div className="block-column__item">
                                <div className="battle-block__top top-block" onClick={()=> {if (props.role === "JUDGE" && props.match !== null) {navigate(`../..//judge/battle/${props.match._id}`)}}}>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" disabled={!isAdmin}/>
                                            <div className="top-line__img" hidden={!isAdmin}></div>
                                        </div>
                                    </div>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" disabled={!isAdmin}/>
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
                                                <button  className=" btn btn--orange" onClick={handleSave} >SAVE</button>
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