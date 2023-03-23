import React, { useState } from "react";
import { useRecoilState } from "recoil";

const Lottery = () => {
    const [lotteryNumbers, setLotteryNumbers] = useRecoilState([]);
    const [userGuess, setUserGuess] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [correctGuesses, setCorrectGuesses] = useRecoilState(0);

    const generateLotteryNumbers = () => {
        let numbers = [];
        while (numbers.length < 7) {
            let random = Math.floor(Math.random() * 45) + 1;
            if (numbers.indexOf(random) === -1) {
                numbers.push(random);
            }
        }
        setLotteryNumbers(numbers);
    };

    const handleUserGuess = (event, index) => {
        let guess = [...userGuess];
        guess[index] = parseInt(event.target.value);
        setUserGuess(guess);
    };

    const checkGuess = () => {
        let correct = 0;
        for (let i = 0; i < 7; i++) {
            if (userGuess[i] === lotteryNumbers[i]) {
                correct++;
            }
        }
        setCorrectGuesses(correct);
    };

    return (
        <div>
            <h2>Lottery Program</h2>
            <button onClick={generateLotteryNumbers}>Generate Numbers</button>
            <br />
            <div className="lottery-numbers">
                {lotteryNumbers.map((number, index) => (
                    <div key={index} className="lotto-ball">
                        {number}
                    </div>
                ))}
            </div>
            <br />
            <label htmlFor="user-guess">Your Guess: </label>
            {userGuess.map((guess, index) => (
                <input
                    key={index}
                    type="number"
                    min="1"
                    max="45"
                    onChange={(event) => handleUserGuess(event, index)}
                    value={guess}
                />
            ))}
            <button onClick={checkGuess}>Check</button>
            <br />
            <p>Number of Correct Guesses: {correctGuesses}</p>
        </div>
    );
};

export default Lottery;
