import React from "react";
import ReactDOM from "react-dom";

import DigitalClicker from "./components/DigitalClicker";
// eslint-disable-next-line
import YouTubeDebugger from "./components/YouTubeDebugger";

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById("global")
);
