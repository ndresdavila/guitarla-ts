import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

// ! assertion not null operator: asegura que valor no sea null
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
