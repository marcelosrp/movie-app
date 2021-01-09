import React from "react";

import SearchBar from "../../components/SearchBar";

const Layout = ({ children }) => {
  return (
    <main>
      <SearchBar />
      {children}
    </main>
  );
};

export default Layout;
