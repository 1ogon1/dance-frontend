import React, { useState } from "react";

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
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div
                style={{
                    maxWidth: '500px',
                    textAlign: 'center',
                }}
            >
                <div style={{ marginBottom: '68px' }}>1/8 FINAL</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ marginRight: '10px' }}>{nickname1}</div>
                        <input
                            type="number"
                            placeholder="Score 1"
                            value={score1}
                            onChange={handleScoreChange1}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>{nickname2}</div>
                        <input
                            type="number"
                            placeholder="Score 2"
                            value={score2}
                            onChange={handleScoreChange2}
                        />
                    </div>
                </div>
                <button
                    style={{ marginTop: '191px' }}
                >
                    BACK TO BATTLES
                </button>
            </div>
        </div>
    );
};
