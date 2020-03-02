import { css } from 'styled-components';

const brackets = css`
  display: inline-flex;
  ::before {
    opacity: 0;
    transition: all 0.6s;
    content: '(';
    transform: translateX(10px);
  }
  :hover::before {
    opacity: 1;
    transform: translateX(0px);
  }
  ::after {
    opacity: 0;
    transition: all 0.6s;
    content: ')';
    transform: translateX(-10px);
  }
  :hover::after {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export default {
  brackets
};
