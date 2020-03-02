import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

export const StyledMessage = styled(Message)`
  &.ui.success.message {
    display: flex;
    align-items: center;
    justify-content: center;

    i.icon {
      padding-left: 20px;
      cursor: pointer;
    }
  }
`;

export default StyledMessage;
