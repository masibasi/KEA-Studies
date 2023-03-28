import React, { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";

function getWinNumbers() {
    const balls = Array(45)
        .fill()
        .map((v, i) => i + 1);
    const shuffle = [];
    while (balls.length > 0) {
        shuffle.push(
            balls.splice(Math.floor(Math.random() * balls.length), 1)[0]
        );
    }
    const bonus = shuffle[shuffle.length - 1];
    const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);

    return [...winBalls, bonus];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [winNumbers]);

    const onClickRedo = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    };

    return (
        <>
            <div>당첨 숫자</div>
            {winBalls.map((v) => (
                <Ball key={v} number={v} />
            ))}
            <div>보너스</div>
            {bonus && <Ball key={bonus} number={bonus} />}
            {redo && <button onClick={onClickRedo}>다시!</button>}
        </>
    );
};

export default Lotto;
