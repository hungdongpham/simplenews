import React from 'react';
import Loadable from 'react-loadable';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import getText from 'context/language/getText';

export const whileLoading = (props) => {
  let interimComponent = null;
  if (props.error) {
    interimComponent = getText('loading.pageDidntLoad');
  } else if (props.pastDelay) {
    interimComponent = <FullPageLoader />;
  }
  return interimComponent;
};

export const HomePage = Loadable({
  loader: () => import('components/pages/homePage/homePage'),
  loading: whileLoading
});
