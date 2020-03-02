import React from 'react';
import styled from 'styled-components';
import getText from 'context/language/getText';
import background from './seeking.svg';

const Background = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: bottom;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  text-align: center;
  margin: auto;
  font-weight: bold;
  margin-top: 15%;
  text-shadow: 1px 1px 3px #FFDB71;
`;

const Header = styled.h1`
  font-size: 140px;
  margin-bottom: 150px;
`;

const Line1 = styled.p`
  font-size: 30px;
  margin-bottom: 0px;
`;

const Line2 = styled.p`
  font-size: 60px;
`;

const Page404 = () => (
  <Background>
    <Container>
      <Header>{getText('page404.errorMsg')}</Header>
      <Line1>{getText('page404.theWorkersYouSeek')}</Line1>
      <Line2>{getText('page404.thePageYouSeek')}</Line2>
    </Container>
  </Background>
);

export default Page404;
