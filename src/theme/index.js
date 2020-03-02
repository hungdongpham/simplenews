import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { getTheme } from 'selectors';
import default_Theme from './defaults';
import dark_Theme from './darkTheme';

export const ThemerHOC = ({ defaultTheme, children }) => {
  const themeMode = defaultTheme ? default_Theme : dark_Theme;
  return (
    <ThemeProvider
      theme={themeMode}
    >
      {children}
    </ThemeProvider>
  )
};

function mapStateToProps(state) {
  return {
    defaultTheme: getTheme(state)
  };
}

export default connect(mapStateToProps)(ThemerHOC);

ThemerHOC.propTypes = {
  children: PropTypes.object.isRequired,
  defaultTheme: PropTypes.bool.isRequired
};

