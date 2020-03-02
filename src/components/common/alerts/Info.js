import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message, Icon } from 'semantic-ui-react';

const StyledMessage = styled(Message)`
  &.ui.message.info {
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.name.white};
    color: ${({ theme }) => theme.colors.name.black};
    -webkit-box-shadow: 0px 0px 5px 0px  ${({ theme }) => theme.colors.name.sectiongrey};
    -moz-box-shadow: 0px 0px 5px 0px  ${({ theme }) => theme.colors.name.sectiongrey};
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.name.sectiongrey};
    border: 3px solid ${({ theme }) => theme.colors.name.blue};
    & .header {
      color: ${({ theme }) => theme.colors.name.black};
    }
  }
`;

export const InfoAlert = ({ content, header, onDismiss }) => {
  const items = Array.isArray(content) ? content : [content];
  return (
    <StyledMessage
      info
      icon
      compact
      onDismiss={onDismiss}
    >
      <Icon name="lightbulb outline" />
      <Message.Content>
        {header !== '' && (
          <div>
            <Message.Header>{header}</Message.Header>
          </div>
        )}
        {items.length > 1 ? <Message.List items={items} /> : <p>{items[0]}</p>}
      </Message.Content>
    </StyledMessage>
  );
};

InfoAlert.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onDismiss: PropTypes.func,
};

InfoAlert.defaultProps = {
  header: '',
  onDismiss: undefined
};

export default InfoAlert;
