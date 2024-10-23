import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NannyMain from "../page/nanny/nanny_1_main.jsx";
import NannyBook from "../page/nanny/nanny_2_book.jsx";
import NannyInfo from "../page/nanny/nanny_3_info.jsx"


class AdoptRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/nanny" component={NannyMain} exact/>
        <Route path="/nanny/book" component={NannyBook} />
        <Route path="/nanny/id=:id([0-9]+)/info" component={NannyInfo} />
      </Switch>
    );
  }
}

export default AdoptRoutes;