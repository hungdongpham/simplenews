import React from 'react';
import getText from 'context/language/getText';
import TopHeadlineList from 'components/common/topHeadlineList/topHeadlineList';
import Preferences from 'components/common/preferences/preferences';
import Profile from 'components/common/profile/profile';
import { Tab } from 'semantic-ui-react';
import { StyledTabWrapper } from './styledHomePage';

const Tabs = () => {
    const panes = [
        { menuItem: getText('home.topHealineNews'), render: () => <Tab.Pane><TopHeadlineList /></Tab.Pane> },
        { menuItem: getText('home.userPreferences'), render: () => <Tab.Pane><Preferences /></Tab.Pane> },
        { menuItem: getText('home.profile'), render: () => <Tab.Pane><Profile /></Tab.Pane> },
    ];

    return (<StyledTabWrapper>
        <Tab panes={panes} />
    </StyledTabWrapper>
    );
};

export default Tabs;
