import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shop from "../page/shop/shop.jsx";
import Products from "../page/shop/products.jsx";

class ShopRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/shop" component={Shop} exact />
        <Route path="/shop/products/:id" component={Products} />
      </Switch>
    );
  }
}

export default ShopRoutes;
