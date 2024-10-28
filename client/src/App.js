import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FaqRoutes from "./routers/faqRoutes.js";
import ShopRoutes from "./routers/shopRoutes.js";
import AdoptRoutes from "./routers/adoptRoutes.js"
import WalkingRoutes from "./routers/walkingRoutes.js";
import MemberRoutes from "./routers/memberRoutes.js";
import HomeRoutes from "./routers/homeRoutes.js"
import NannyRoutes from "./routers/nannyRoutes.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HomeRoutes/>
          <ShopRoutes />
          <FaqRoutes />
          <AdoptRoutes />
          <WalkingRoutes />
          <MemberRoutes/>
          <NannyRoutes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
