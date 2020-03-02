import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';


export const ErrorAlert = ({ content, header, onDismiss }) => {
  const items = Array.isArray(content) ? content : [content];
  return (
    <Message
      negative
      onDismiss={onDismiss}
    >
      {header !== '' && <Message.Header>{header}</Message.Header>}
      {items.length > 1 ? <Message.List items={items} /> : <p>{`${items[0]}`}</p>}
    </Message>
  );
};

ErrorAlert.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  onDismiss: PropTypes.func,
};

ErrorAlert.defaultProps = {
  header: '',
  onDismiss: undefined
};

export default ErrorAlert;
