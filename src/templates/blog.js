import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";
import blogStyles from "./blog.module.scss";

// before Contentful, grabbing data from GraphQL

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  const { pageContext } = props;
  const { previous, next } = pageContext;
  console.log(props);
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };

  return (
    <Layout>
      <div className={blogStyles.post}>
        <Head title={props.data.contentfulBlogPost.title} />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p className={blogStyles.smallText}>
          {props.data.contentfulBlogPost.publishedDate}
        </p>
        <hr></hr>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
        <div className={blogStyles.navigation}>
          <div>
            <span className={blogStyles.smallText}>{previous && (
              <Link to={`/blog/${previous.slug}`} rel="prev">
                ← {previous.slug}
              </Link>
            )}</span>
          </div>
          <div>
          <span className={blogStyles.smallText}>{next && (
              <Link to={`/blog/${next.slug}`} rel="next">
                {next.slug} →
              </Link>
            )}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
