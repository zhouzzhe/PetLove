import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import homeMain from "../page/home/home.jsx";

class FaqRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={homeMain} exact />
      </Switch>
    );
  }
}

export default FaqRoutes;
