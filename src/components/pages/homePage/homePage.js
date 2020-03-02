import React from 'react';
import getText from 'context/language/getText';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledHomePageContainer } from './styledHomePage';


const HomePage = () => {

  return (
    <StyledHomePageContainer>
      <Alert
        type={alertTypes.INFO}
        header={getText('home.header')}
        content={getText('home.content')}
      />
    </StyledHomePageContainer>
  );
};

export default HomePage;
