import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {AlertProvider} from "./contexts/AlertContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
);
