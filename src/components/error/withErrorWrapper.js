// error HOC
import React from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from 'components/common/alerts/Error';

export const withErrorWrapper = (WrappedComponent) => {
  const wrapped = ({ errors, children }) => {
    const hasErrors = errors.length > 0;
    return (
      <WrappedComponent>
        {hasErrors && errors.map(e => <ErrorAlert content={e} key={e} />)}
        {children}
      </WrappedComponent>
    );
  };
  wrapped.propTypes = {
    errors: PropTypes.array.isRequired,
    children: PropTypes.element
  };
  wrapped.defaultProps = {
    children: {}
  };
  return wrapped;
};

withErrorWrapper.propTypes = {
  WrappedComponent: PropTypes.element.isRequired
};

export default withErrorWrapper;
