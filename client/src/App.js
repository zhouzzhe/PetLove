import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FaqRoutes from "./routers/faqRoutes.js";
import ShopRoutes from "./routers/shopRoutes.js";
import AdoptRoutes from "./routers/adoptRoutes.js";
import WalkingRoutes from "./routers/walkingRoutes.js";
import MemberRoutes from "./routers/memberRoutes.js";
import HomeRoutes from "./routers/homeRoutes.js";
import NannyRoutes from "./routers/nannyRoutes.js";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import LoadingPage from "./page/home/LoadingPage.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoadingPage} exact />
          <Route>
            <Header />
            <HomeRoutes />
            <ShopRoutes />
            <FaqRoutes />
            <AdoptRoutes />
            <WalkingRoutes />
            <MemberRoutes />
            <NannyRoutes />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
