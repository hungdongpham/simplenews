import styled from 'styled-components';

export default styled.div`
    align-items: center;
    background: ${({ theme }) => theme.colors.panel.footer.background};
    display: flex;
    flex: 0 0 40px;
    height: 100%;
    justify-content: flex-end;
    padding: 0.5em;
    color: ${({ theme }) => theme.colors.panel.footer.foreground};
`;
