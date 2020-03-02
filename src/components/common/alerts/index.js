import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Message } from 'semantic-ui-react';
import { ErrorAlert } from './Error';
import { InfoAlert } from './Info';
import { SuccessAlert } from './Success';

export const alertTypes = {
  ERROR: 'ERROR',
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  NOTICE: 'NOTICE',
  DEFAULT: 'DEFAULT'
};


export const AlertSet = ({ type, alertObjects }) => {
  const content = alertObjects.map(obj => (
    <Alert
      type={type}
      header={obj.header}
      content={obj.message}
      key={`alertset-${Math.random() * 100000}`}
      onDismiss={obj.onDismiss}
    />
  ));
  return <div>{content}</div>;
};

AlertSet.propTypes = {
  type: PropTypes.oneOf(Object.keys(alertTypes)).isRequired,
  alertObjects: PropTypes.array.isRequired
};


export const Alert = ({
  type,
  header,
  content,
  onDismiss,
}) => {
  switch (type) {
    case alertTypes.ERROR:
      return <ErrorAlert header={header} content={content} onDismiss={onDismiss} />;
    case alertTypes.DANGER:
    case alertTypes.WARNING:
    case alertTypes.INFO:
      return <InfoAlert header={header} content={content} onDismiss={onDismiss} />;
    case alertTypes.SUCCESS:
      return <SuccessAlert headfer={header} content={content} onDismiss={onDismiss} />;
    case alertTypes.NOTICE:
    default:
      return <Message header={header} content={content} onDismiss={onDismiss} />;
  }
};

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(alertTypes)),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
  onDismiss: PropTypes.func,
};
Alert.defaultProps = {
  type: alertTypes.DEFAULT,
  header: '',
  onDismiss: undefined
};

export default styled(Alert)`
  grid-column: 1 / -1;
`;
