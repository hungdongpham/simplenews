import React from 'react';
import getText from 'context/language/getText';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledHomePageContainer } from './styledHomePage';
import NewsList from 'components/common/newsList/newsList';
import Tabs from './tabs';

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <Alert
        type={alertTypes.INFO}
        header={getText('home.header')}
        content={getText('home.content')}
      />
      <Tabs />
      <NewsList />
    </StyledHomePageContainer>
  );
};

export default HomePage;
