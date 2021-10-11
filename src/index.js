import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MyRelayApp } from "./MyRelayApp";
import {MyNetwork} from "./Components/MyNetwork"
import { CyberLabTrainerApp } from "./CyberLabTrainerApp";
ReactDOM.render(
  <CyberLabTrainerApp/>,

  document.getElementById("root")
);
