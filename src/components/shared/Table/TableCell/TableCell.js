import React from "react"
import "./TableCell.css";
export const TableCell = () => {
    return (
        <>
            <div className="battle-block">

                <div className="battle-block__top top-block">

                    <div className="top-block__line top-line">
                        <span className="top-line__name">Nickelodeon</span>
                        <div className="top-line__count">
                            <input className="top-line__number" type="number" value="0"/>
                                <div className="top-line__img"></div>
                        </div>
                    </div>


                    <div className="top-block__line top-line">
                        <span className="top-line__name">Maximus</span>

                        <div className="top-line__count">
                            <input className="top-line__number" type="number" value="0"/>
                                <div className="top-line__img"></div>
                        </div>

                    </div>

                </div>

                <button className="battle-block__btn">Restart</button>

            </div>
        </>
    )
}