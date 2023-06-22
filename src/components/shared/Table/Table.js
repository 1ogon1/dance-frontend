import React, { useState, useEffect } from 'react';
import "./Table.css"
import Popup from 'reactjs-popup';
import "../style/common.css"
import "../style/reset.css"
import { Match } from './Match/Matсh';
export const Table = (props) => {
    const [role, setRole] = useState("SCREEN")
    const [isAdmin, setIsAdmin] = useState(false)
    const [isJudge, setIsJudge] = useState(true) //меня условие isJudge тут (true/false)
    const match = JSON.parse(`{
        "_id": "6492a8380e21fa9cc15b4a6b",
        "stage": "FINAL",
        "participant_1_total_score": 0,
        "participant_2_total_score": 0,
        "participant_1": {
            "_id": "6492a8380e21fa9cc15b4a6d",
            "nickName": "6",
            "phoenix_power": true
        },
        "participant_2": {
            "_id": "6492a8380e21fa9cc15b4a6f",
            "nickName": "7",
            "phoenix_power": true
        },
        "participant_1_score": [],
        "participant_2_score": []
    }`)
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

                    {/* пример как сделать отображение тега по условию(isJudge = true/false)
                        если isJudge true, то отображается див, если false, то ничего(null)
                     */}
                     {isJudge ? <div style={{color:"red"}}>тут может быть ваша реклама</div> : null}
                    {/*  */}

                <div className="table__main main-table">
                    {/* ===========================КОЛОНКА-1============================= */} 
                    <div className="main-table__column column--first ">
                        <div className="column__block block-column block-column1">
                            <Match match={match} role={role}/>
                            <Match match={null} role={role}/>
                        </div>

                        <div className="column__block block-column block-column1">
                          <Match match={null} role={role}/>
                          <Match match={null} role={role}/>
                        </div>

                        <div className="column__block block-column block-column1">
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                        </div>

                        <div className="column__block block-column block-column1">
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                        </div>
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
                        <div className="column__block block-column  block-column--2">
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                        </div>
                    </div>
                    {/* ===========================КОЛОНКА-2(END)============================= */}

                    <div className="main-table__column  column--connect">
                        <div className="column__line line--midle"></div>
                        <div className="column__line line--midle"></div>
                    </div>

                    {/* ===========================КОЛОНКА-3============================= */}
                    <div className="main-table__column column column2">
                        <div className="column__block block-column block-column--2">
                            <Match match={null} role={role}/>
                            <Match match={null} role={role}/>
                        </div>
                    </div>
                    {/* ===========================КОЛОНКА-3(END)============================= */}

                    <div className="main-table__column column column--connect">
                        <div className="column__line line--big"></div>
                    </div>

                    {/* ===========================КОЛОНКА-4============================= */}
                    <div className="main-table__column column ">
                        <div className="column__block block-column block-column--final">
                            <Match match={null} role={role}/>
                        </div>
                    </div>
                    {/* ===========================КОЛОНКА-4(END)============================= */}
                </div>
            </div>
        </div>
    )
}