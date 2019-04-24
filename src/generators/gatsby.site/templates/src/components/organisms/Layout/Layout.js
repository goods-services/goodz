import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '@styles/global';
import config from '@utils/siteConfig';
import Footer from '@molecules/Footer';
import Header from '@molecules/Header';
import theme from '@styles/theme';

/**
 * Layout component that provides theme for overall site
 * @param {object} props Incoming Props
 * @returns {*} React Component
 */
const Layout = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
