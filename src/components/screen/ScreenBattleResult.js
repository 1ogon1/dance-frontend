import React, { useState, useEffect } from "react";
import "components/screen/ScreenResult.css";
import "components/style/reset.css";
import "components/style/common.css";

export const ScreenBattleResult = () => {
    // сумма очков
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const [judgeNickname1, setNickName1] = useState('TOLU');
    const [judgeNickname2, setNickName2] = useState('NIKELODEON');
    const [judgeNickname3, setNickName3] = useState('ANKA')

    // Оценки для первого участника
    const [musicScore1Judge1, setMusicScore1Judge1] = useState(0);
    const [techniqueScore1Judge1, setTechniqueScore1Judge1] = useState(0);
    const [originalityScore1Judge1, setOriginalityScore1Judge1] = useState(0);
    const [presentationScore1Judge1, setPresentationScore1Judge1] = useState(0);

    const [musicScore1Judge2, setMusicScore1Judge2] = useState(0);
    const [techniqueScore1Judge2, setTechniqueScore1Judge2] = useState(0);
    const [originalityScore1Judge2, setOriginalityScore1Judge2] = useState(0);
    const [presentationScore1Judge2, setPresentationScore1Judge2] = useState(0);

    const [musicScore1Judge3, setMusicScore1Judge3] = useState(0);
    const [techniqueScore1Judge3, setTechniqueScore1Judge3] = useState(0);
    const [originalityScore1Judge3, setOriginalityScore1Judge3] = useState(0);
    const [presentationScore1Judge3, setPresentationScore1Judge3] = useState(0);

    // Оценки для второго участника
    const [musicScore2Judge1, setMusicScore2Judge1] = useState(0);
    const [techniqueScore2Judge1, setTechniqueScore2Judge1] = useState(0);
    const [originalityScore2Judge1, setOriginalityScore2Judge1] = useState(0);
    const [presentationScore2Judge1, setPresentationScore2Judge1] = useState(0);

    const [musicScore2Judge2, setMusicScore2Judge2] = useState(0);
    const [techniqueScore2Judge2, setTechniqueScore2Judge2] = useState(0);
    const [originalityScore2Judge2, setOriginalityScore2Judge2] = useState(0);
    const [presentationScore2Judge2, setPresentationScore2Judge2] = useState(0);

    const [musicScore2Judge3, setMusicScore2Judge3] = useState(0);
    const [techniqueScore2Judge3, setTechniqueScore2Judge3] = useState(0);
    const [originalityScore2Judge3, setOriginalityScore2Judge3] = useState(0);
    const [presentationScore2Judge3, setPresentationScore2Judge3] = useState(0);

    const handleScoreChange1 = (e) => {
        setScore1(Number(e.target.value));
    };

    const handleScoreChange2 = (e) => {
        setScore2(Number(e.target.value));
    };

    useEffect(() => {});

    return (
        <div className="result bg">
            <div className="result__container">

{/* =============================Header=================================== */}
            <div className="result__header header">
                <div className="header__logo"> </div>
                <div className="header__midle midle-block"> 
                    <div className="midle-block__nickname nickname"> Nickelodeon</div>
                    <div className="midle-block__row info-row">
                            <div className="info-row__judge">Музикальність</div>
                            <div className="info-row__judge">Техніка</div>
                            <div className="info-row__judge">Оригінальність</div>
                            <div className="info-row__judge">Подача</div>
                        </div>
                </div>
                <button className="header__btn btn btn--orange">BACK TO BATTLES</button>
            </div>
{/* =============================Header(end)=================================== */}

{/* =============================Section=================================== */}
            <div className="result__section section section--top"> 

            {/* -----------Блок: судья и результаты--------- */}
            <div className="section__info info"> 

                     {/* -----------Отдельный ряд Судья и Балы--------- */}
                    <div className="info__block block-info"> 
                      <div className="block-info__judge"> {judgeNickname1} </div>
                      <div className="block-info__score">
                            <div className="info-row__score">{musicScore1Judge1}</div>
                            <div className="info-row__score">{techniqueScore1Judge1}</div>
                            <div className="info-row__score">{originalityScore1Judge1}</div>
                            <div className="info-row__score">{presentationScore1Judge1}</div>
                      </div>
                    </div>

                    <div className="info__block block-info"> 
                      <div className="block-info__judge"> {judgeNickname2} </div>
                      <div className="block-info__score">
                            <div className="info-row__score">{musicScore1Judge2}</div>
                            <div className="info-row__score">{techniqueScore1Judge2}</div>
                            <div className="info-row__score">{originalityScore1Judge2}</div>
                            <div className="info-row__score">{presentationScore1Judge2}</div>
                      </div>
                    </div>

                    <div className="info__block block-info"> 
                      <div className="block-info__judge"> {judgeNickname3} </div>
                      <div className="block-info__score">
                            <div className="info-row__score">{musicScore1Judge3}</div>
                            <div className="info-row__score">{techniqueScore1Judge3}</div>
                            <div className="info-row__score">{originalityScore1Judge3}</div>
                            <div className="info-row__score">{presentationScore1Judge3}</div>
                      </div>
                    </div>
                     {/* -----------Отдельный ряд Судья и Балы(end)--------- */}

            </div>
             {/* -----------Блок: total--------- */}
             <div className="section__total total">
                <h2 className="total__text">Total:</h2>
                <input className="total__result" type="text" placeholder="Score 1" value={score1} onChange={handleScoreChange1} />
                </div>

            </div>

{/* =============================Section(end)=================================== */}


{/* =============================Section=================================== */}
<div className="result__section section section--bottom"> 
<div className="midle-block__nickname nickname"> Nickelodeon</div>
<div className="section__box">
    {/* -----------Блок: судья и результаты--------- */}
    <div className="section__info info">
    
             {/* -----------Отдельный ряд Судья и Балы--------- */}
            <div className="info__block block-info">
              <div className="block-info__judge"> {judgeNickname1} </div>
              <div className="block-info__score">
                    <div className="info-row__score">{musicScore1Judge1}</div>
                    <div className="info-row__score">{techniqueScore1Judge1}</div>
                    <div className="info-row__score">{originalityScore1Judge1}</div>
                    <div className="info-row__score">{presentationScore1Judge1}</div>
              </div>
            </div>
    
            <div className="info__block block-info">
              <div className="block-info__judge"> {judgeNickname2} </div>
              <div className="block-info__score">
                    <div className="info-row__score">{musicScore1Judge2}</div>
                    <div className="info-row__score">{techniqueScore1Judge2}</div>
                    <div className="info-row__score">{originalityScore1Judge2}</div>
                    <div className="info-row__score">{presentationScore1Judge2}</div>
              </div>
            </div>
    
            <div className="info__block block-info">
              <div className="block-info__judge"> {judgeNickname3} </div>
              <div className="block-info__score">
                    <div className="info-row__score">{musicScore1Judge3}</div>
                    <div className="info-row__score">{techniqueScore1Judge3}</div>
                    <div className="info-row__score">{originalityScore1Judge3}</div>
                    <div className="info-row__score">{presentationScore1Judge3}</div>
              </div>
            </div>
             {/* -----------Отдельный ряд Судья и Балы(end)--------- */}
    
    </div>
     {/* -----------Блок: total--------- */}
     <div className="section__total total">
        <h2 className="total__text">Total:</h2>
        <input className="total__result" type="text" placeholder="Score 1" value={score1} onChange={handleScoreChange1} />
        </div>
</div>

</div>

{/* =============================Section(end)=================================== */}
              
            </div>
        </div>
    );
};
