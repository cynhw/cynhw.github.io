import React from "react";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";
import { Link, graphql, useStaticQuery } from "gatsby";
import Head from "../components/head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 className={blogStyles.postTitle}>{edge.node.title}</h2>
                <p className={blogStyles.postDate}>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogPage;
