import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import aboutStyles from "./about.module.scss";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutContainer}>
          <img src="https://images.squarespace-cdn.com/content/v1/52788d22e4b012c43beac243/1548387658928-CYMKZJ8KCGMFOWIMAGKK/ke17ZwdGBToddI8pDm48kO9Lj4Tun4o6SGrtX5UrT5V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWTk_9wm3L3nZsplXYFITk2Q_1DZGDr5NEO6ahhrlw6M50LbXHpB5vd1yJy8CDH29Q/me?format=1000w" alt="Picture of Me" />
        <div>
          <p>
            Fueled by my interests in political economy, tech, design and human
            interaction, I moved to Seattle 10 years ago and graduated from the
            University of Washington with a B.A. in Political Science. I then
            started working in the customer service industry and that’s when it
            really ignited my desire to get into user experience design.{" "}
          </p>

          <p>
            Growing up, I have always been passionate about visual design and code
            and then I grew up and became an adult. Now I want to focus on
            understanding how to create experiences that would help a customer
            (aka user) and help them get from point A to point B with the least
            amount of effort. I decided to enroll in the part-time UX design
            course at General Assembly and went on to complete a 3-month intensive
            coding bootcamp because I wanted to learn to make my vision come
            alive. Plus, who hasn’t tried to fiddle with the HTML and CSS when
            they were on MySpace to make their page look the coolest of them all?
            </p>
            
            <p>
            I enjoy road trips and hiking and have recently started really
            exploring the backcountry a little bit more. I may or may not visit
            REI way too many times. When I’m not hustling at my 9-5 gig and side
            projects, you can find me enjoying a beer and possibly dancing
            awkwardly at a concert.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
