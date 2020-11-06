import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Investor from "./Investor/HomePage/Investor";
import Profile from "./Investor/Profile/Profile";
import Documents from "./Investor/Profile/Documents";
import Success from "./Investor/Profile/Success";
import Partner from "./Investor/Partners/Partner";
import Rating from "./Investor/Rating/Rating";
import Invoice from "./Investor/Invoice/Invoicing";

const Routes = () => {
  return (
    <main>
      <Switch>

        <Route path="/" component={App} exact />
        <Route path="/invest" component={Investor} />
        <Route path="/profile" component={Profile} />
        <Route path="/documents" component={Documents} />
        <Route path="/success" component={Success} />
        <Route path="/partner" component={Partner} />
        <Route path="/rating" component={Rating} />
        <Route path="/invoice" component={Invoice} />

        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Routes;