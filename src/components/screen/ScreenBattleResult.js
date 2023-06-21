import React, { useState, useEffect } from "react";
import "components/screen/ScreenResult.css";
import "components/style/reset.css";
import "components/style/common.css";
import { useNavigate, useParams } from "react-router-dom";
import { getBattleById } from "components/services/requests";

export const ScreenBattleResult = () => {
  const navigate = useNavigate()

  const [battle, setBattle] = useState({})
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

  const params = useParams()

  const handleScoreChange1 = (e) => {
    setScore1(Number(e.target.value));
  };

  const handleScoreChange2 = (e) => {
    setScore2(Number(e.target.value));
  };

  const onClickHandler = () => {
    navigate("../table")
  }

  useEffect(() => {
    getBattleById(params.id)
      .then((r) => {
        setBattle(r.data)
        console.log(r.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="result bg">
      <div className="result__container">

        {/* =============================Header=================================== */}
        <div className="result__header header">
          <div className="header__logo"> </div>
          <div className="header__midle midle-block">
            <div className="midle-block__nickname nickname">{battle.participant_1 ? battle.participant_1.nickName : null}</div>
            <div className="midle-block__row info-row">
              <div className="info-row__judge">Музикальність</div>
              <div className="info-row__judge">Техніка</div>
              <div className="info-row__judge">Оригінальність</div>
              <div className="info-row__judge">Подача</div>
            </div>
          </div>
          <button className="header__btn btn btn--orange" onClick={onClickHandler}>BACK TO BATTLES</button>
        </div>
        {/* =============================Header(end)=================================== */}

        {/* =============================Section=================================== */}
        <div className="result__section section section--top">

          {/* -----------Блок: судья и результаты--------- */}
          <div className="section__info info">

            {/* -----------Отдельный ряд Судья и Балы--------- */}
            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_1_score ? battle.participant_1_score[0].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[0].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[0].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[0].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[0].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_1_score ? battle.participant_1_score[1].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[1].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[1].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[1].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[1].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_1_score ? battle.participant_1_score[2].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[2].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[2].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[2].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score? battle.participant_1_score[2].filing: null}</div>
              </div>
            </div>
            {/* -----------Отдельный ряд Судья и Балы(end)--------- */}

          </div>
          {/* -----------Блок: total--------- */}
          <div className="section__total total">
            <h2 className="total__text">Total:</h2>
            <input className="total__result" type="text" placeholder="Score 1" value={battle.participant_1_total_score ? battle.participant_1_total_score : null} disabled  />
          </div>

        </div>

        {/* =============================Section(end)=================================== */}


        {/* =============================Section=================================== */}
        <div className="result__section section section--bottom">
          <div className="midle-block__nickname nickname"> {battle.participant_2 ? battle.participant_2.nickName : null  }</div>
          <div className="section__box">
            {/* -----------Блок: судья и результаты--------- */}
            <div className="section__info info">

              {/* -----------Отдельный ряд Судья и Балы--------- */}
              <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_2_score ? battle.participant_2_score[0].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[0].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[0].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[0].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[0].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_2_score ? battle.participant_2_score[1].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[1].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[1].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[1].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[1].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_2_score ? battle.participant_2_score[2].judge: null} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[2].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[2].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[2].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score? battle.participant_2_score[2].filing: null}</div>
              </div>
            </div>
              {/* -----------Отдельный ряд Судья и Балы(end)--------- */}

            </div>
            {/* -----------Блок: total--------- */}
            <div className="section__total total">
              <h2 className="total__text">Total:</h2>
              <input className="total__result" type="text" placeholder="Score 1" value={battle.participant_2_total_score ? battle.participant_2_total_score : null} disabled  />
            </div>
          </div>

        </div>

        {/* =============================Section(end)=================================== */}

      </div>
    </div>
  );
};
