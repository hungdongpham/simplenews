import React from 'react';
import getText from 'context/language/getText';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledHomePageContainer, StyledTabWrapper } from './styledHomePage';
import NewsList from 'components/common/newsList/newsList';
import TopHeadlineList from 'components/common/topHeadlineList/topHeadlineList';
import { Tab } from 'semantic-ui-react'

const HomePage = () => {
  const panes = [
    { menuItem: getText('home.topHealineNews'), render: () => <Tab.Pane><TopHeadlineList /></Tab.Pane> },
    { menuItem: getText('home.userPreferences'), render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: getText('home.profile'), render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ];

  return (
    <StyledHomePageContainer>
      <Alert
        type={alertTypes.INFO}
        header={getText('home.header')}
        content={getText('home.content')}
      />
      <StyledTabWrapper>
        <Tab panes={panes} />
      </StyledTabWrapper>
      <NewsList />
    </StyledHomePageContainer>
  );
};

export default HomePage;
