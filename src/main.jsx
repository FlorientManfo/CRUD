import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
  containerStyle: {
    textTransform: "none",
    fontSize: "10px",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
