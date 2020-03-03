import React from 'react';
import getText from 'context/language/getText';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledHomePageContainer } from './styledHomePage';
import NewsList from 'components/common/newsList/newsList';

const HomePage = () => {

  return (
    <StyledHomePageContainer>
      <Alert
        type={alertTypes.INFO}
        header={getText('home.header')}
        content={getText('home.content')}
      />
      <NewsList />
    </StyledHomePageContainer>
  );
};

export default HomePage;
