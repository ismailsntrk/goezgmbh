import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";


ReactDOM.render(
 
  <HashRouter>
    <App />
  </HashRouter>
 ,

  document.getElementById("root")
);
