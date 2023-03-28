import React from "react";
import { useRecoilState } from "recoil";

import { number1State, number2State } from "./Recoil";

export const Input = () => {
    const [num1, setNum1] = useRecoilState(number1State);
    const [num2, setNum2] = useRecoilState(number2State);
    const onChange1 = (e) => {
        setNum1(e.target.value);
    };
    const onChange2 = (e) => {
        setNum2(e.target.value);
    };
    return (
        <div>
            <div className="input-wrapper">
                <span>Number1</span>
                <input type="text" value={num1} onChange={onChange1} />
            </div>
            <div className="input-wrapper">
                <span>Number2</span>
                <input type="text" value={num2} onChange={onChange2} />
            </div>
        </div>
    );
};
