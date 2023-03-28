import React from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export const Calculator = () => {
    return (
        <div className="Calculator">
            <div className="calculator-title">GCU Calculator</div>
            <Input />
            <div className="divider" />
            <Output />
        </div>
    );
};
