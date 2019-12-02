import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.footer}>
      <p>
        Built with <a href="http://gatsbyjs.org">GatsbyJS</a>, <a href="http://https://www.contentful.com/">Contentful</a> & &hearts; © 2019
      </p>
      <ul>
        <li><a href="http://instagram.com/cynhw">Instagram</a></li> 
        <li><a href="http://github.com/cynhw">Github</a> </li>
        <li><a href="https://www.linkedin.com/in/cynhwong/">LinkedIn</a></li>
        </ul>
    </footer>
  );
};

export default Footer;
