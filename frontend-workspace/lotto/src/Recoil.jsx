import { atom, RecoilRoot, useRecoilState } from "recoil";
import React from "react";

export const ballsState = atom({
    key: "ballsState",
    default: [
        { id: 0, num: 0 },
        { id: 1, num: 0 },
        { id: 2, num: 0 },
        { id: 3, num: 0 },
        { id: 4, num: 0 },
        { id: 5, num: 0 },
        { id: 6, num: 0 },
        { id: 7, num: 0 },
        { id: 8, num: 0 },
        { id: 9, num: 0 },
    ],
});
