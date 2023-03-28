import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
    const [car, setCar] = useState("");
    useEffect(() => {
        Axios.post("/api/cars").then((response) => {
            if (response.data) {
                console.log("Post : ", response.data);
                setCar(response.data);
            } else {
                alert("failed to");
            }
        });
        Axios.get("/api/getcar").then((response) => {
            if (response.data) {
                console.log("Get : ", response.data);
                setCar(response.data);
            } else {
                alert("failed to");
            }
        });
    }, []);
    return (
        <div className="App">
            <div align="left" style={{ margin: "20px" }}></div>
            <h2>Car Information</h2>
            ID: {car.id} <br />
            Brand: {car.brand} <br />
            Company: {car.company} <br />
            Price: {car.price} <br />
        </div>
    );
}

export default App;
