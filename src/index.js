import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import history from 'routes/history';
import App from 'components/app';
import configureStore from 'store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import 'vendor/bootstrap-grid.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App
      history={history}
      showHeader={true}
      showFooter={true}
      showNavbar={true}
      showContent={true}
    />
  </Provider>,
  document.getElementById('root')
);
