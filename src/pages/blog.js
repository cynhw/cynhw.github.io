import React from "react";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order:DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `);
  return (
    <Layout>
      <div className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3 className={blogStyles.postTitle}>
                  {edge.node.title}
                </h3>
                <p className={blogStyles.postDate}>
                  {edge.node.publishedDate}
                </p>
              </Link>
            </li>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogPage;
