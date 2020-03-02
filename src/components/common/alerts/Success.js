import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';
import { StyledMessage } from './styledMessage';

export const SuccessAlert = ({ content, header, onDismiss }) => {
  const items = Array.isArray(content) ? content : [content];
  return (
    <StyledMessage
      success
      compact
    >
      {header !== '' && <Message.Header>{header}</Message.Header>}
      {items.length > 1 ? <Message.List items={items} /> : <div>{`${items[0]}`}</div>}
      <Icon onClick={onDismiss} name="times circle outline" size="large" />
    </StyledMessage>
  );
};

SuccessAlert.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  onDismiss: PropTypes.func,
};

SuccessAlert.defaultProps = {
  header: '',
  onDismiss: null
};

export default SuccessAlert;
