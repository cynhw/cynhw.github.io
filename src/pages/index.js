import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <p>
        This is my third time trying to build a gatsby site. Third time's a
        charm!
      </p>
      <p>
        Need a friend? <Link to="/contact/">Contact Me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
