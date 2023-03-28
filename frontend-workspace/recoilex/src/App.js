import React from "react";
import { Calculator } from "./Calculator";
import "./App.css";
import { RecoilRoot } from "recoil";
import RecoilEx from "./RecoilEx";

export default function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <Calculator />
            </RecoilRoot>
        </div>
    );
}
