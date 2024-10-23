import React, { Component } from "react";
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom";
import AdoptMain from "../page/adopt/adopt_1_main.jsx";
import AdoptInfo from "../page/adopt/adopt_2_info.jsx";
import AdoptForm from "../page/adopt/adopt_3_form.jsx";
import { replace } from "react-router";

class AdoptRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/adopt" exact>
          <Redirect to="/adopt/page=1" />
        </Route>
        <Route path="/adopt/page=:page([0-9]+)" component={AdoptMain} exact/>
        <Route path="/adopt/info/item=:item([0-9]+)" component={AdoptInfo} exact/>
        <Route path="/adopt/form" component={AdoptForm} />
      </Switch>
    );
  }
}

export default AdoptRoutes;