import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WalkingMain from "../page/walking/walking_1_main.jsx";
import WalkingReserve from "../page/walking/walking_2_reserve.jsx";
import WalkingSearch from "../page/walking/walking_3_search.jsx";
import WalkingId from "../page/walking/walking_4_info.jsx";
import WalkingDetail from "../page/walking/walking_5_detail.jsx";

class WalkingRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/walking" component={WalkingMain} exact/>
        <Route path="/walking/reserve" component={WalkingReserve} />
        <Route path="/walking/search" component={WalkingSearch} exact/>
        <Route path="/walking/search/id=:id([0-9]+)" component={WalkingId} exact/>
        <Route path="/walking/search/id=:id([0-9]+)/detail" component={WalkingDetail} />
      </Switch>
    );
  }
}

export default WalkingRoutes;