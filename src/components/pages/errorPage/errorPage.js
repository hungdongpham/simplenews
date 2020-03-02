import React from 'react';
import PropTypes from 'prop-types';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledPage } from 'components/pages/styledPage';

const Alerts = ({ errors }) => errors.map((error) => {
  const message = typeof error === 'string' ? error : error.message;
  return <Alert type={alertTypes.ERROR} header="Oops!" content={message} key={`error-alert-${Math.random() * 100000}`} />;
});

const ErrorPage = ({ errors }) => (
  <StyledPage className="col-md-10">
    <Alerts errors={errors} />
  </StyledPage>
);

ErrorPage.propTypes = {
  errors: PropTypes.array.isRequired
};

export default ErrorPage;
