import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FAQMain from "./page/FAQ/FAQ_1_main";
import FAQForm from "./page/FAQ/FAQ_2_form";

class FaqRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/faq" component={FAQMain} />
        <Route path="/faq/form" component={FAQForm} />
      </Switch>
    );
  }
}

export default FaqRoutes;
