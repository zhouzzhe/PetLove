import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MemberMain from "../page/member/membership.jsx"
// import Adoption from "../page/member/member-adoption.jsx";

class MemberRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/member" component={MemberMain} exact/>
        {/* <Route path="/member/adopt" component={Adoption}/> */}
      </Switch>
    );
  }
}

export default MemberRoutes;