import React from "react";
import { useRecoilValue } from "recoil";
import { floatNum1State, floatNum2State } from "./Recoil";

export const Output = () => {
    const floatNum1 = useRecoilValue(floatNum1State);
    const floatNum2 = useRecoilValue(floatNum2State);
    return (
        <div className="display">
            <div className="operator-wrapper">
                <span>Operator</span>
                <div className="operand">+</div>
                <div className="operand">-</div>
                <div className="operand">*</div>
                <div className="operand">/</div>
            </div>
            <div className="result-wrapper">
                <span>Result</span>
                <div className="result">{floatNum1 + floatNum2}</div>
                <div className="result">{floatNum1 - floatNum2}</div>
                <div className="result">{floatNum1 * floatNum2}</div>
                <div className="result">
                    {(floatNum1 / floatNum2).toFixed(2)}
                </div>
            </div>
        </div>
    );
};
