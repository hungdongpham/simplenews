import styled from 'styled-components';

export const StyledPage = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%; 
  padding: 0px!important;
  margin: 0px!important;
`;

export const PageSectionWrapper = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.name.sectiongrey};
  border-radius: 10px
  margin: 0px 5% 20px 5%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.name.white};
  -webkit-box-shadow: 0px 0px 5px 0px  ${({ theme }) => theme.colors.name.sectiongrey};
  -moz-box-shadow: 0px 0px 5px 0px  ${({ theme }) => theme.colors.name.sectiongrey};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.name.sectiongrey};
`;