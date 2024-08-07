import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/myPortfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
