import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Container from 'components/Container';
import Layout from 'components/Layout';

export default ({ site }) => (
  <Layout site={site}>
    <Container
      css={css`
        margin-bottom: auto;
      `}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Container>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
