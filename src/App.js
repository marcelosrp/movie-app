import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStorage } from "./GlobalContext";

import GlobalStyle from "./GlobalStyles";
import Routes from "./routes";

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
