import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/index";
import { GlobalProvider } from "./context/GlobalContext";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  </React.StrictMode>
);
