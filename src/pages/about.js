import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Cynthia. I am learning to build websites with Gatbsy.</p>
      <p>
        <Link to="/contact/">Don't be afraid to reach out.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
