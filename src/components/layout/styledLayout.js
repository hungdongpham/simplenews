import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ theme }) => theme.backgrounds.main});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  -webkit-filter: grayscale(${({ theme }) => theme.colors.panel.main.filter}); /* Safari 6.0 - 9.0 */
  filter: grayscale(${({ theme }) => theme.colors.panel.main.filter});

  .header,
  .footer {
    flex: 0 0 40px;
  }

  .error{
    color: ${({ theme }) => theme.colors.name.red};
  }
  a.default_link{
    color: ${({ theme }) => theme.colors.name.main_color_4};
    text-decoration: underline;
  }
`;

export default StyledLayoutContainer;
