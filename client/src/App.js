import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FaqRoutes from "./faqRoutes.js"
import ShopRoutes from "./shopRoutes.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ShopRoutes/>
          <FaqRoutes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
