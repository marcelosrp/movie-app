import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import ResultadoBusca from "../pages/resultadoBusca";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/resultado-busca" exact component={ResultadoBusca} />
  </Switch>
);

export default Routes;
