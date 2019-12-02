import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page Not Found</h1>
      <p>
        Looks like you're lost, <Link to="/">head back home.</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
