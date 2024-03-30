import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { App } from "./components/app/app";
import { ErrorBoundary } from "./components/error-boundary/error-boundary";
// Global styles
import "./components/reset.scss";
import "./components/page/page.scss";

//

const rootEl = document.getElementById("root");

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  rootEl
);

//

export default hot(App);
