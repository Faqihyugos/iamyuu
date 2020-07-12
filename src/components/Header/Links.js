import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../Theming';
import ThemeToggler from './ThemeToggler';

export default () => {
  const theme = useTheme();
  return (
    <>
      <Link to='/about' activeClassName='active' aria-label='View about page'>
        Abuot
      </Link>
      <Link to='/blog' activeClassName='active' aria-label='View blog page'>
        Blog
      </Link>

      <ThemeToggler css={{}} toggleTheme={theme.toggleTheme} themeName={theme.themeName} />
    </>
  );
};
