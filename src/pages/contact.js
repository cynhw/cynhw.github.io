import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Don't be afraid to reach out to me!</p>
      <Link to="/">Go Home</Link>
    </Layout>
  );
};

export default ContactPage;
