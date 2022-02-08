import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Add from './Addition'

ReactDOM.render(
  <>
    <h1>Sum is {Add(5,6)}</h1>
  </>,
  document.getElementById("root")
);
