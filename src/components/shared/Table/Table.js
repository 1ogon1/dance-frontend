import React, { useState, useEffect } from 'react';
import "./Table.css"
import Popup from 'reactjs-popup';
import "../style/common.css"
import "../style/reset.css"
export const Table = (props) => {
    const [role, setRole] = useState("admin")
    const [timer1, setTimer1] = useState('01:00');
    const [timer2, setTimer2] = useState('01:00');

    const handleTimerChange = (event, timerNumber) => {
        const value = event.target.value;

        if (timerNumber === 1) {
            setTimer1(value);
        } else if (timerNumber === 2) {
            setTimer2(value);
        }
    };

    const handleSave = () => {
        // Отправка данных таймеров на бэкэнд
        sendDataToBackend(timer1, timer2);
    };

    const sendDataToBackend = (timerData1, timerData2) => {
        //запросы
    };

    return (

        <div className="table bgg">
            <div className="table__container">
                <h1 className="table__title">Battles</h1>

                <ul className="column__final">
                    <li>1/8 final</li>
                    <li>1/4 final</li>
                    <li>1/2 final</li>
                    <li>Final</li>
                </ul>
                <div className="table__main main-table">


                    {/* ===========================КОЛОНКА-1============================= */}

                    <div className="main-table__column column--first ">


                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column1">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>
                        {/* ============Внутри 2 компонента(END)========= */}

                        {/* ---------------------------------------------------- */}
                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column1">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>
                        {/* ============Внутри 2 компонента(END)========= */}

                        {/* ---------------------------------------------------- */}
                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column1">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>
                        {/* ============Внутри 2 компонента(END)========= */}

                        {/* ---------------------------------------------------- */}
                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column1">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>
                        {/* ============Внутри 2 компонента(END)========= */}

                    </div>
                    {/* ===========================КОЛОНКА-1(END)============================= */}

                    <div className="main-table__column column column--connect">
                        <div className="column__line"></div>
                        <div className="column__line"></div>
                        <div className="column__line"></div>
                        <div className="column__line"></div>
                    </div>



                    {/* ===========================КОЛОНКА-2============================= */}

                    <div className="main-table__column column ">


                        {/* ============Внутри 4 компонента========= */}
                        <div className="column__block block-column  block-column--2">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>






                    </div>
                    {/* ===========================КОЛОНКА-2(END)============================= */}

                    <div className="main-table__column  column--connect">
                        <div className="column__line line--midle"></div>
                        <div className="column__line line--midle"></div>
                    </div>




                    {/* ===========================КОЛОНКА-3============================= */}

                    <div className="main-table__column column column2">


                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column--2">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}
                        </div>

                    </div>
                    {/* ===========================КОЛОНКА-3(END)============================= */}

                    <div className="main-table__column column column--connect">
                        <div className="column__line line--big"></div>
                    </div>



                    {/* ===========================КОЛОНКА-4============================= */}

                    <div className="main-table__column column ">


                        {/* ============Внутри 2 компонента========= */}
                        <div className="column__block block-column block-column--final">
                            {/* ============ITEM========= */}
                            <div className="block-column__item">
                                <div className="battle-block__top top-block">

                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Nickelodeon</span>
                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>
                                    </div>


                                    <div className="top-block__line top-line">
                                        <span className="top-line__name">Maximus</span>

                                        <div className="top-line__count">
                                            <input className="top-line__number" type="number" />
                                            <div className="top-line__img"></div>
                                        </div>

                                    </div>

                                </div>

                                <Popup trigger={<button className="battle-block__btn">Restart</button>} modal>
                                    <div className="modal">
                                        <div className="window modal-active">
                                            <div className="window__header header-window">
                                                <div className='header-window__final'>1/8 final</div>
                                                <div className='header-window__set'>PLEASE SET THE TIMER</div>
                                            </div>

                                            <div className="window__columns column-wind">
                                                <div className="column-wind__left">
                                                    <h2 className="column-wind__nick">Nickname1</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer1} onChange={(event) => handleTimerChange(event, 1)} />
                                                    </div>
                                                </div>

                                                <div className="column-wind__right">
                                                    <h2 className="column-wind__nick">Nickname2</h2>
                                                    <div className="column-wind__input">
                                                        <input type="text" value={timer2} onChange={(event) => handleTimerChange(event, 2)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="window__btn">
                                                <button className="btn btn--orange" onClick={handleSave}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            {/* ============ITEM(END)========= */}

                        </div>
                        {/* ============Внутри 2 компонента(END)========= */}



                    </div>
                    {/* ===========================КОЛОНКА-4(END)============================= */}



                </div>
            </div>

  
        </div >


    )
}