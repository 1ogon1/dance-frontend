import React, { useState, useEffect } from "react";
import "components/screen/ScreenResult.css";
import "components/style/reset.css";
import "components/style/common.css";
import { useNavigate, useParams } from "react-router-dom";
import { getBattleById } from "components/services/requests";

export const ScreenBattleResult = () => {
  const navigate = useNavigate()

  const [battle, setBattle] = useState({})
 
  const params = useParams()

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
        if (e.response.status === 401 || e.response.status === 403) navigate("/")
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
              <div className="block-info__judge"> {battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[0] ? battle.participant_1_score[0].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[0]? battle.participant_1_score[0].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[0]? battle.participant_1_score[0].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[0]? battle.participant_1_score[0].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[0]? battle.participant_1_score[0].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[1] ? battle.participant_1_score[1].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length  && battle.participant_1_score[1] ? battle.participant_1_score[1].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[1] ? battle.participant_1_score[1].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[1] ? battle.participant_1_score[1].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[1] ? battle.participant_1_score[1].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_1_score  && battle.participant_1_score.length && battle.participant_1_score[2] ? battle.participant_1_score[2].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[2] ? battle.participant_1_score[2].musicality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[2] ? battle.participant_1_score[2].technique: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[2] ? battle.participant_1_score[2].originality: null}</div>
                <div className="info-row__score">{battle.participant_1_score && battle.participant_1_score.length && battle.participant_1_score[2] ? battle.participant_1_score[2].filing: null}</div>
              </div>
            </div>
            {/* -----------Отдельный ряд Судья и Балы(end)--------- */}

          </div>
          {/* -----------Блок: total--------- */}
          <div className="section__total total">
            <h2 className="total__text">Total:</h2>
            <input className="total__result" type="text" placeholder="Score 1" value={battle.participant_1_total_score ? battle.participant_1_total_score : 0} disabled  />
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
              <div className="block-info__judge"> {battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[0] ? battle.participant_2_score[0].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[0]? battle.participant_2_score[0].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[0]? battle.participant_2_score[0].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[0]? battle.participant_2_score[0].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[0]? battle.participant_2_score[0].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[1] ? battle.participant_2_score[1].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[1]? battle.participant_2_score[1].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[1]? battle.participant_2_score[1].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[1]? battle.participant_2_score[1].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[1]? battle.participant_2_score[1].filing: null}</div>
              </div>
            </div>

            <div className="info__block block-info">
              <div className="block-info__judge"> {battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[2] ? battle.participant_2_score[2].judge: "none"} </div>
              <div className="block-info__score">
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[2]? battle.participant_2_score[2].musicality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[2]? battle.participant_2_score[2].technique: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[2]? battle.participant_2_score[2].originality: null}</div>
                <div className="info-row__score">{battle.participant_2_score  && battle.participant_2_score.length && battle.participant_2_score[2]? battle.participant_2_score[2].filing: null}</div>
              </div>
            </div>
              {/* -----------Отдельный ряд Судья и Балы(end)--------- */}

            </div>
            {/* -----------Блок: total--------- */}
            <div className="section__total total">
              <h2 className="total__text">Total:</h2>
              <input className="total__result" type="text" placeholder="Score 1" value={battle.participant_2_total_score ? battle.participant_2_total_score : 0} disabled  />
            </div>
          </div>

        </div>

        {/* =============================Section(end)=================================== */}

      </div>
    </div>
  );
};
