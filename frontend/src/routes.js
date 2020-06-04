import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Form from "./pages/form";
import Add from "./pages/Add";
import Header from "./pages/header";
import Iten from "./pages/Iten";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/Add" component={Add} />
        <Route path="/Iten/:id" component={Iten} />
      </Switch>
    </BrowserRouter>
  );
}
