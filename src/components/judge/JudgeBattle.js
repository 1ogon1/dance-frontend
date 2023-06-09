import React, { useState } from 'react';
import 'components/style/common.css';
import 'components/style/rest.css';
import 'components/judge/JudgeBattleCSS/style.css';

export const JudgeBattle = () => {
    const [tournamentStage, setTournamentStage] = useState('Hip-Hop Pro 1/8 final');
    const [judgeNickname, setJudgeNickname] = useState('Tolu');
    const [battleNumber, setBattleNumber] = useState('Battle #1');
    const [participant1Nickname, setParticipant1Nickname] = useState('BADABOOOM CHIKIBOOM');
    const [participant2Nickname, setParticipant2Nickname] = useState('TIMOFEY');

    const [musicValue, setMusicValue] = useState(0);
    const [musicValue2, setMusicValue2] = useState(0);
    const [techniqueValue, setTechniqueValue] = useState(0);
    const [techniqueValue2, setTechniqueValue2] = useState(0);
    const [originalityValue, setOriginalityValue] = useState(0);
    const [originalityValue2, setOriginalityValue2] = useState(0);
    const [presentationValue, setPresentationValue] = useState(0);
    const [presentationValue2, setPresentationValue2] = useState(0);
    const [isOKClicked, setIsOKClicked] = useState(false);

    const handleMusicChange = (event) => {
        setMusicValue(event.target.value);
    };

    const handleMusicChange2 = (event) => {
        setMusicValue2(event.target.value);
    };

    const handleTechniqueChange = (event) => {
        setTechniqueValue(event.target.value);
    };

    const handleTechniqueChange2 = (event) => {
        setTechniqueValue2(event.target.value);
    };

    const handleOriginalityChange = (event) => {
        setOriginalityValue(event.target.value);
    };

    const handleOriginalityChange2 = (event) => {
        setOriginalityValue2(event.target.value);
    };

    const handlePresentationChange = (event) => {
        setPresentationValue(event.target.value);
    };

    const handlePresentationChange2 = (event) => {
        setPresentationValue2(event.target.value);
    };

    const handleOKClick = () => {
        setIsOKClicked(true);
    };

    return (
        <div className="battle">
            <div className="battle__header header-battle">
                <div className="header-battle__container">
                    <div className="header-battle__logo"></div>
                    <div className="header-battle__info">
                        <div className="header-battle__left header-left">
                            <div className="header-left__round header-title">Round</div>
                            <div className="header-left__nomination header-bottom">{tournamentStage}</div>
                        </div>
                        <div className="header-battle__right header-right">
                            <div className="header-right__judge header-title">judge</div>
                            <div className="header-right__nomination header-bottom">{judgeNickname}</div>
                        </div>
                    </div>
                    <div className="header-battle__number-battle">{battleNumber}</div>
                    <div className="header-battle__participant participant">
                        <div className="participant__name">{participant1Nickname}</div>
                        <div className="participant__name">{participant2Nickname}</div>
                    </div>
                </div>
            </div>
            <div className="battle__main main-battle">
                <div className="main-battle__container">
                    <div className="main-battle__musicality battle-top">Музикальність</div>
                    <div className="main-battle__slider slider">
                        <div className="slider__box slider--left">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={musicValue}
                                onChange={handleMusicChange}
                            />
                            <div className="scale">
                                <div className="scale__line line--1 reverse"></div>
                                <div className="scale__line line--2 reverse"></div>
                                <div className="scale__line line--3 reverse"></div>
                                <div className="scale__line line--4 reverse"></div>
                                <div className="scale__line line--5 reverse"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                        <div className="slider__box slider--right">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={musicValue2}
                                onChange={handleMusicChange2}
                            />
                            <div className="scale">
                                <div className="scale__line line--1"></div>
                                <div className="scale__line line--2"></div>
                                <div className="scale__line line--3"></div>
                                <div className="scale__line line--4"></div>
                                <div className="scale__line line--5"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                    </div>
                    <div className="main-battle__technique battle-top">Техніка</div>
                    <div className="main-battle__slider slider">
                        <div className="slider__box slider--left">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={techniqueValue}
                                onChange={handleTechniqueChange}
                            />
                            <div className="scale">
                                <div className="scale__line line--1 reverse"></div>
                                <div className="scale__line line--2 reverse"></div>
                                <div className="scale__line line--3 reverse"></div>
                                <div className="scale__line line--4 reverse"></div>
                                <div className="scale__line line--5 reverse"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                        <div className="slider__box slider--right">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={techniqueValue2}
                                onChange={handleTechniqueChange2}
                            />
                            <div className="scale">
                                <div className="scale__line line--1"></div>
                                <div className="scale__line line--2"></div>
                                <div className="scale__line line--3"></div>
                                <div className="scale__line line--4"></div>
                                <div className="scale__line line--5"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                    </div>
                    <div className="main-battle__originality battle-top">Оригінальність</div>
                    <div className="main-battle__slider slider">
                        <div className="slider__box slider--left">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={originalityValue}
                                onChange={handleOriginalityChange}
                            />
                            <div className="scale">
                                <div className="scale__line line--1 reverse"></div>
                                <div className="scale__line line--2 reverse"></div>
                                <div className="scale__line line--3 reverse"></div>
                                <div className="scale__line line--4 reverse"></div>
                                <div className="scale__line line--5 reverse"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                        <div className="slider__box slider--right">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={originalityValue2}
                                onChange={handleOriginalityChange2}
                            />
                            <div className="scale">
                                <div className="scale__line line--1"></div>
                                <div className="scale__line line--2"></div>
                                <div className="scale__line line--3"></div>
                                <div className="scale__line line--4"></div>
                                <div className="scale__line line--5"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                    </div>
                    <div className="main-battle__filling battle-top">Подача</div>
                    <div className="main-battle__slider slider">
                        <div className="slider__box slider--left">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={presentationValue}
                                onChange={handlePresentationChange}
                            />
                            <div className="scale">
                                <div className="scale__line line--1 reverse"></div>
                                <div className="scale__line line--2 reverse"></div>
                                <div className="scale__line line--3 reverse"></div>
                                <div className="scale__line line--4 reverse"></div>
                                <div className="scale__line line--5 reverse"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                        <div className="slider__box slider--right">
                            <input
                                className="input"
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={presentationValue2}
                                onChange={handlePresentationChange2}
                            />
                            <div className="scale">
                                <div className="scale__line line--1"></div>
                                <div className="scale__line line--2"></div>
                                <div className="scale__line line--3"></div>
                                <div className="scale__line line--4"></div>
                                <div className="scale__line line--5"></div>
                            </div>
                            <div className="thumb"></div>
                        </div>
                    </div>
                    <div onClick={handleOKClick} className="main-battle__btn btn btn--orange">ok</div>
                </div>
            </div>
        </div>
    );
};

export default JudgeBattle;
