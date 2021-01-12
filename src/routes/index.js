import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import ResultadoBusca from "../pages/resultadoBusca";
import NotFound from "../pages/404";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/resultado-busca" exact component={ResultadoBusca} />
    <Route path="/not-found" exact component={NotFound} />
    <Route path="/*" exact component={NotFound} />
  </Switch>
);

export default Routes;
