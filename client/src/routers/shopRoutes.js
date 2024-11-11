import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "../page/shop/shop_1_main.jsx";
import Product from "../page/shop/shop_2_products.jsx";
import Cart from "../page/shop/shop_3_cart.jsx";
import CategoryPage from "../page/shop/categoryPage.jsx";

class ShopRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/shop" component={Shop} exact />
        <Route path="/shop/product/:id" component={Product} />
        <Route path="/shop/cart" component={Cart} />
        <Route path="/shop/category/:categoryPage" component={CategoryPage} />
      </Switch>
    );
  }
}

export default ShopRoutes;
