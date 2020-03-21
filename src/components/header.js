import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <h3 className={headerStyles.title}>
        Hello, I'm Cynthia 🌧️
      </h3>
      <div className={headerStyles.headerText}>
        <p>
          I am a Seattle-based customer service specialist dedicated to
          elevating the customer experience through empathy and technology. My
          experiences in policy research, retail management, customer service,
          UX design, and web development have substantiated my communicative
          skills and my ability to resolve complex issues. I am looking for
          opportunities in user-experience design.{" "}
          <a href="mailto:cynhowong@gmail.com">Say hello 👋</a>
        </p>
      </div>
      {/* <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog/"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact/"
          >
            Contact
          </Link>
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
