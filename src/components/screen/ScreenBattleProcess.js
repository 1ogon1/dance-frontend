import React, { useState, useEffect } from 'react';
import  'components/screen/ScreenStyle.css';
import  'components/style/reset.css';
import  'components/style/common.css';

export const ScreenBattleProcess = () => {
    const [nickname1, setNickname1] = useState('Nickname1');
    const [nickname2, setNickname2] = useState('Nickname2');
    const [time1, setTime1] = useState('01:00');
    const [time2, setTime2] = useState('01:00');
    const [timer1, setTimer1] = useState(0);
    const [timer2, setTimer2] = useState(0);
    const [isRunning1, setIsRunning1] = useState(false);
    const [isRunning2, setIsRunning2] = useState(false);
    const [isEditing1, setIsEditing1] = useState(false);
    const [isEditing2, setIsEditing2] = useState(false);

    useEffect(() => {
        setTimer1(convertTimeToSeconds(time1));
        setTimer2(convertTimeToSeconds(time2));
    }, [time1, time2]);

    useEffect(() => {
        if (isRunning1) {
            const intervalId = setInterval(() => {
                setTimer1(prevTimer1 => {
                    const newTimer1 = prevTimer1 - 1;
                    if (newTimer1 <= 0) {
                        stopTimer1();
                        return 0;
                    }
                    return newTimer1;
                });
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isRunning1]);

    useEffect(() => {
        if (isRunning2) {
            const intervalId = setInterval(() => {
                setTimer2(prevTimer2 => {
                    const newTimer2 = prevTimer2 - 1;
                    if (newTimer2 <= 0) {
                        stopTimer2();
                        return 0;
                    }
                    return newTimer2;
                });
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isRunning2]);

    const startTimer1 = () => {
        setIsRunning1(true);
    };

    const startTimer2 = () => {
        setIsRunning2(true);
    };

    const stopTimer1 = () => {
        setIsRunning1(false);
    };

    const stopTimer2 = () => {
        setIsRunning2(false);
    };

    const handleTimer1Click = () => {
        if (!isRunning1) {
            setIsEditing1(true);
        }
    };

    const handleTimer2Click = () => {
        if (!isRunning2) {
            setIsEditing2(true);
        }
    };

    const handleTimer1Change = (e) => {
        setTime1(e.target.value);
    };

    const handleTimer2Change = (e) => {
        setTime2(e.target.value);
    };

    const handleTimer1Blur = () => {
        setIsEditing1(false);
    };

    const handleTimer2Blur = () => {
        setIsEditing2(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${padZero(minutes)}:${padZero(seconds)}`;
    };

    const padZero = (value) => {
        return value.toString().padStart(2, '0');
    };

    const convertTimeToSeconds = (time) => {
        const [minutes, seconds] = time.split(':');
        return parseInt(minutes) * 60 + parseInt(seconds);
    };

    return (
        <div className='timer bg' >
            <div className="timer__container ">

                <div className='timer__header header-timer'>
                     <div className='header-timer__logo'> </div>
                     <div className='header-timer__final'>1/8 final</div>
                </div>
                <div className='timer__content content'>

                    <div className='content__column ' >
                    <h2 className='content__column-name name-screen'>{nickname1}</h2>
                    <h3 className='content__column__time' onClick={handleTimer1Click} onBlur={handleTimer1Blur}>
                            {isEditing1 ? (
                                <input className='content__column-input timer-input' type="text" value={time1} onChange={handleTimer1Change} autoFocus />
                            ) : (
                                formatTime(timer1)
                            )}
                    </h3>
                        {isRunning1 ? (
                            <button className='content__column-stop btn btn--black' onClick={stopTimer1}>Stop</button>
                        ) : (
                            <button className='content__column-go btn btn--orange' onClick={startTimer1}>Go</button>
                        )}
                    </div>

                    <div className='content__column'>
                    <h2 className='content__column-name name-screen'>{nickname2}</h2>
                        <h3 className='content__column__time' onClick={handleTimer2Click} onBlur={handleTimer2Blur}>
                            {isEditing2 ? (
                                <input className='content__column-input' type="text" value={time2} onChange={handleTimer2Change} autoFocus />
                            ) : (
                                formatTime(timer2)
                            )}
                        </h3>
                        {isRunning2 ? (
                            <button className='content__column-stop btn btn--black' onClick={stopTimer2}>Stop</button>
                        ) : (
                            <button className='content__column-go btn btn--orange' onClick={startTimer2}>Go</button>
                        )}
                    </div>

                </div>

                <div className='btt'><button className='timer__btn btn btn--orange'>RESULTS</button></div>
            </div>
        </div>
    );
};

export default ScreenBattleProcess