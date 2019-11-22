import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <h2>Hello I’m Cynthia 👋</h2>

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
          I enjoy road trips and hiking and have recently started really
          exploring the backcountry a little bit more. I may or may not visit
          REI way too many times. When I’m not hustling at my 9-5 gig and side
          projects, you can find me enjoying a beer and possibly dancing
          awkwardly at a concert.{" "}
        </p>

        <p>I want to work with you, don’t be afraid to say hi * waves *</p>
      </div>

      <p>
        <Link to="/contact/">Don't be afraid to reach out.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
