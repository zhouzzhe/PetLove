import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import Header from "./components/header.jsx";
import Footer from "../src/components/footer.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
      <App />
  </React.Fragment>
);

// reportWebVitals();
