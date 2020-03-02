import Raven from 'raven-js';
import createRavenMiddleware from 'raven-for-redux';

const { SENTRY_DSN } = process.env;
export const configureRaven = dsn => Raven.config(dsn).install();

function blankMiddleware() {
  return () => () => {
  };
}

// blankMiddleware is required. configureRaven sometimes runs even when NODE_ENV === 'development'
export const ravenMiddleWare = process.env.NODE_ENV === 'development' ? blankMiddleware : createRavenMiddleware(configureRaven(SENTRY_DSN), {
  breadcrumbDataFromAction: action => ({ STRING: action.str })
});
