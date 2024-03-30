import React, { Component } from "react";

import "./app.scss";
import reactImg from "./react.png";

function App() {
  return (
    <div className="app">
      <h1>React App</h1>
      <img src={reactImg} style={{ width: "100px" }} />
    </div>
  );
}

//

export { App };
