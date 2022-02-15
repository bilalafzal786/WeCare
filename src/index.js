import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./Components/ThemeContext";
import Toggle from "./Components/ThemeToggle";
import Background from "./Components/Background";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="absolute left-0 top-44 mr-4 mt-4 md:mr-6 md:mt-6 bg-slate-800 z-30 rounded-lg">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
