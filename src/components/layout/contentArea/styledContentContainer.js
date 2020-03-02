import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  margin: 0 !important;
  padding: 0 !important;
  @media (max-width: 676px) {
    .nav-bar {
      display: none;
    }
  }
  h1, h2, h3, h4, h5 {
    font-family: "Helvetica", Helvetica, Arial, sans-serif !important; 
  }
  h1 { margin-top:0; margin-bottom: 20px; font-size: 36px; margin: 0.67em 0; font-weight: 500; line-height: 1.1em}
`;
