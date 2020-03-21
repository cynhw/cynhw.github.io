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