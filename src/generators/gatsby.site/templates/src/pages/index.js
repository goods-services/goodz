import React from 'react';
import { Link } from 'gatsby';

import Layout from '@organisms/Layout';
import SEO from '@atoms/SEO';

const IndexPage = (
{
    data: {
      site: {
        siteMetadata: { title, description, author },
      },
    },
  }
) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <br />
    <h1>{title}</h1>
    <br />
    <p>Built by: {author}</p>
    <br />
    <p>Hey! If you're using Contentful, look here for help: <a href="https://www.gatsbyjs.org/packages/gatsby-source-contentful/">Gatsby Source Contentful</a></p>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
    <br />
  </Layout>
);

export default IndexPage;

// eslint-disable-next-line
export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
