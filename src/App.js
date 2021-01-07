import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { observer } from "mobx-react-lite";
import store from "./store";

import Loader from "./Loader";
const LazyNavbar = lazy(() => import("./Navbar.js"));
const LazyHome = lazy(() => import("./Home.js"));
const LazyAbout = lazy(() => import("./About.js"));
const LazyProducts = lazy(() => import("./Products.js"));
const LazyProductDetails = lazy(() => import("./ProductDetails.js"));
const LazyCart = lazy(() => import("./Cart.js"));

const App = observer(() => {
  store.getCartFromLS();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <LazyNavbar store={store} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LazyHome />
            </Route>
            <Route exact path="/about">
              <LazyAbout />
            </Route>
            <Route exact path="/products">
              <LazyProducts store={store} />
            </Route>
            <Route path="/products/:id">
              <LazyProductDetails store={store} />
            </Route>
            <Route exact path="/cart">
              <LazyCart store={store} />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
});

export default App;
