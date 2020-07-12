import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Container from 'components/Container';
import Layout from 'components/Layout';

export default ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-bottom: auto;
        `}
      >
        <h1>About Me</h1>
        <p>
          I'm Muhammad Yusuf. I'm a software engineer (not a repairman) based in{' '}
          <a href='https://goo.gl/maps/HGUkeTZqqfho5c93A'>Bogor</a>,{' '}
          <a href='https://goo.gl/maps/1B6fUzTbVKZAo2ux5'>Indonesia</a>. In love with software development with a strong
          passion to learn new things. My interests range from technology to cooking. I'm also interested in education
          and programming.
        </p>
        <p>
          Any question or want to say hello? You might reach me out through{' '}
          <a href='https://telegram.me/iamyuu'>Telegram</a>.
        </p>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
