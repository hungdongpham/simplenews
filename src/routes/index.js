import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from 'routes/privateRoute';
import Page404 from 'components/error/page404';
import { urlMap } from 'routes/urlMap';
import * as Loadable from 'routes/loadableRouteComponents';


const PageController = () => (
  <Switch>
    <AuthRoute exact path={urlMap.HOME} component={Loadable.HomePage} />
    <Route component={Page404} />
  </Switch>
);

export default PageController;


