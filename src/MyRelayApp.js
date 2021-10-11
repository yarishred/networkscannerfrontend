import React, { useState } from "react";
import axios from "axios";

import "./MyRelayApp.css";

export const MyRelayApp = () => {
  const [state, setstate] = useState(true);

  const handleSwitchOnOff = () => {
    const handleRelay = () => {
      axios.get("http://localhost:5000").then((res) => {
        setstate(res.data.status);
      });
    };
    handleRelay();
  };

  return (
    <div className="relay-container">
      <h1>IoT Switch Relay</h1>
      <button className={`btn ${state && "btnOn"}`} onClick={handleSwitchOnOff}>
        {state === true ? "ON" : "OFF"}
      </button>
    </div>
  );

};