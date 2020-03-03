import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from 'routes/privateRoute';
import Page404 from 'components/error/page404';
import { urlMap } from 'routes/urlMap';
import * as Loadable from 'routes/loadableRouteComponents';
import NewsPage from 'components/pages/newsPage/newsPage';
import RegisterPage from 'components/pages/registerPage/registerPage';

const PageController = () => (
  <Switch>
    <AuthRoute exact path={urlMap.HOME} component={Loadable.HomePage} />
    <AuthRoute exact path={urlMap.SIGN_UP} component={RegisterPage} />
    <AuthRoute exact path={urlMap.NEWS_DETAIL} component={NewsPage} />
    <AuthRoute exact path={urlMap.TOPLINES_DETAIL} component={NewsPage} />
    <Route component={Page404} />
  </Switch>
);

export default PageController;


