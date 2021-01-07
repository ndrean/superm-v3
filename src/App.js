import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import store from "./store";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  store.getCartFromLS();

  return (
    <BrowserRouter>
      <Navbar store={store} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products store={store} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails store={store} />
          </Route>
          <Route exact path="/cart">
            <Cart store={store} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default App;
