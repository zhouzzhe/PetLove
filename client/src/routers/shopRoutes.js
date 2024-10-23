import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from "../page/shop/shop_1_main.jsx";
import Products from "../page/shop/shop_2_products.jsx";
import Cart from "../page/shop/shop_3_cart.jsx";

class ShopRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/shop" component={Shop} exact />
        <Route path="/shop/products/:id" component={Products} />
        <Route path="/shop/cart" component={Cart} />
      </Switch>
    );
  }
}

export default ShopRoutes;
