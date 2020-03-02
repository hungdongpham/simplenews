import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import Themer from 'theme';
import Layout from 'components/layout/layout';

export const AppWrapper = ({ children, history }) => (
  <Themer>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Themer>
);

AppWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const App = ({
  history, ...props
}) => {
  return (
  <AppWrapper history={history}>
    <Layout {...props} />
  </AppWrapper>
)};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
