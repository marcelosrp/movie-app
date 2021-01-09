import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "../../components/Layout";

const ResultadoBusca = (props) => {
  const { search } = props.location.state || {};

  if (search === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <h1>Termo pesquisado: {search}</h1>
    </Layout>
  );
};

export default ResultadoBusca;
