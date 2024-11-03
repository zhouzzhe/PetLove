import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeMain from "../page/home/home.jsx";

class HomeRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/home" component={HomeMain} exact />
      </Switch>
    );
  }
}

export default HomeRoutes;
