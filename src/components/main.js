import React from "react";
import Cover from "./cover/Cover";
import { Switch, Route } from "react-router-dom";
import About from "./About/about";
import Product from "./Product/Product";
import Contact from "./Contact/contact";

const Main = () => (
  <Switch>
    <Route exact path="/cover" component={Cover} />
    <Route path="/about" component={About} />
    <Route path="/product" component={Product} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
