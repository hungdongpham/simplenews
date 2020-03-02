import React from 'react';
import PropTypes from 'prop-types';
import { Alert, alertTypes } from 'components/common/alerts/index';

const FlashAlertSet = ({ type, flashAlertObjects, handleDismiss }) => {
  const content = flashAlertObjects.map(obj => (
    <Alert
      type={type}
      header={obj.header}
      content={obj.message}
      onDismiss={() => handleDismiss(obj.fingerprint)}
      key={`flashalertset-${Math.random() * 100000}`}
    />
  ));
  return <div>{content}</div>;
};


FlashAlertSet.propTypes = {
  type: PropTypes.oneOf(Object.keys(alertTypes)).isRequired,
  flashAlertObjects: PropTypes.array.isRequired,
  handleDismiss: PropTypes.func.isRequired,
};

export default FlashAlertSet;
