import React from "react";
import { atom, selector } from "recoil";

export const number1State = atom({ key: "number1State", default: 0 });
export const number2State = atom({ key: "number2State", default: 0 });

export const floatNum1State = selector({
    key: "floatNum1State",
    get: ({ get }) => {
        const num1 = get(number1State);
        if (num1 == "") return 0;
        else return parseFloat(num1);
    },
});
export const floatNum2State = selector({
    key: "floatNum2State",
    get: ({ get }) => {
        const num2 = get(number2State);
        if (num2 == "") return 0;
        else return parseFloat(num2);
    },
});
