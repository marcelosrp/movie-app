import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import SearchBar from "../SearchBar";
import ModalOverview from "../Modal/Overview";

const Layout = ({ children }) => {
  const { modalIsOpen } = useContext(GlobalContext);

  return (
    <main>
      <SearchBar />
      {children}
      {modalIsOpen && <ModalOverview modalIsOpen={modalIsOpen} />}
    </main>
  );
};

export default Layout;
