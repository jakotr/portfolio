import React from "react";
import ReactDOM from "react-dom/client";

//conponents
import { App } from "./App";
//context
import { LangContextProvider } from "./context/LangContext";
//styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>
);
