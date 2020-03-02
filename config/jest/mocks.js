import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StaticRouter } from 'react-router';
import theme from '../../src/theme/defaults';

const MockAppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticRouter context={{}}>
      {children}
    </StaticRouter>
  </ThemeProvider>
);

MockAppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default MockAppWrapper;
