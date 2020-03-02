import styled from 'styled-components';

export default styled.div`
  display: block;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.panel.header.background};
  color: ${({ theme }) => theme.colors.panel.header.foreground};
  min-height: 74px;
  justify-content: space-between;
  .logo {
    position: absolute;
    z-index: 2;
    padding: 5px 5px 5px 22px;
    .img {
      width: 100px;
      height: 30px;
    }
  }
`;
