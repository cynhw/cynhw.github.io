import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      {/* <div className={layoutStyles.content}> */}
        <Header />
        <div className={layoutStyles.main}>
          {props.children}
          <Footer />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout;
