import React from "react"
import "./Match.css"
//components for a match in bracket
export const Match = ({
    match,
    onMatchClick,
    onPartyClick,
    onMouseEnter,
    onMouseLeave,
    topParty,
    bottomParty,
    topWon,
    bottomWon,
    topHovered,
    bottomHovered,
    topText,
    bottomText,
    connectorColor,
    computedStyles,
    teamNameFallback,
    resultFallback,
}) => {
    // hook that should contain the modal that can make the request to the server
    // to change the points for specific participant
    //TODO: modal, request on change
    onMatchClick = () => {console.log("hio")}

    return (
        <>
            <div className="battle-block" onClick = {() => onMatchClick()}>

                <div className="battle-block__top top-block">

                    <div className="top-block__line top-line">
                        <span className="top-line__name">{topParty.name}</span>
                        <div className="top-line__count">
                            <input className="top-line__number" type="number" value={topParty.resultText}/>
                                <div className="top-line__img"></div>
                        </div>
                    </div>


                    <div className="top-block__line top-line">
                        <span className="top-line__name">{bottomParty.name}</span>

                        <div className="top-line__count">
                        {/* TODO: make not input but just a text tag that refreshes */}
                            <input className="top-line__number" type="number" value={bottomParty.resultText}/>
                                <div className="top-line__img"></div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}