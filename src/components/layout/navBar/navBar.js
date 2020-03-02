import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getText from 'context/language/getText';
import { urlMap } from 'routes/urlMap';
import { StyledNavbarContainer } from 'components/layout/navBar/styledNavbarContainer';
import ThemeSwitch from 'components/layout/themeSwitch/themeSwitch';
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

const NavBar = (props) => {
  const { className } = props;

  const navObjects = {
    [urlMap.ENTERTAINMENT]: {
      label: getText('navbar.entertainment'),
      icon: null
    },
    [urlMap.BUSINESS]: {
      label: getText('navbar.business'),
      icon: null
    },
    [urlMap.Travel]: {
      label: getText('navbar.travel'),
      icon: null
    },
    [urlMap.SIGN_UP]: {
      label: getText('navbar.signup'),
      icon: null
    },
    [urlMap.LOG_IN]: {
      label: getText('navbar.login'),
      icon: null
    }
  }

  const renderNavItems = () => {
    const arr = [];
    Object.entries(navObjects).forEach(([key, value]) => {
      arr.push(
        <NavLink activeClassName="active" to={key}>
        <li>{value.label}</li>
      </NavLink>
      // <BottomNavigationAction
      //   key={key}
      //   component={Link}
      //   to={key}
      //   value={value.label}
      //   label={value.label}
      //   icon={value.icon}/>
       );
    });
    return arr;
  }

  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  return (
    <StyledNavbarContainer className={className}>
      <ThemeSwitch />
      <nav className="nav">
        <Icon name="list ul fa fa-bars" onClick={e => handleToggle(e)} />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          {renderNavItems()}
        </ul>
      </nav>
    </StyledNavbarContainer>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};
NavBar.defaultProps = {
  className: ''
};

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(NavBar);
