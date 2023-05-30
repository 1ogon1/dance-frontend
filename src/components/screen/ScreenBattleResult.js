import React, { useState } from "react";
import  'components/screen/ScreenResult.css';
import  'components/style/reset.css';
import  'components/style/common.css';

export const ScreenBattleResult = () => {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const nickname1 = 'Nickelodeon';
    const nickname2 = 'Timofey';

    const handleScoreChange1 = (e) => {
        setScore1(Number(e.target.value));
    };

    const handleScoreChange2 = (e) => {
        setScore2(Number(e.target.value));
    };

    return (
        <div className="result bg">
            <div className="result__container">

                <div className="result__header">1/8 FINAL</div>

                <div className="result__main main-result">

                    <div className="main-result__logo">   </div>

                    <div className="main-result__info result-info">
                        <div className="result-info__row info-row">
                            <div className="info-row__nickname name-screen">{nickname1}</div>
                            <input className="info-row__input" type="text" placeholder="Score 1" value={score1} onChange={handleScoreChange1} />
                        </div>
                        
                        <div className="result-info__row info-row">
                            <div className="info-row__nickname name-screen">{nickname2}</div>
                            <input className="info-row__input" type="text" placeholder="Score 2" value={score2} onChange={handleScoreChange2} />
                        </div>
                    </div>

                </div>

                <button className="result__btn btn btn--orange"> BACK TO BATTLES </button>
            </div>
        </div>
    );
};
