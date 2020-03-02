import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import Logo from 'components/common/imageLink/imageLink';
import StyledHeaderContainer from 'components/layout/header/styledHeaderContainer';
import NavBar from 'components/layout/navBar/navBar';


const Header = ({ theme, className, showNavbar }) => {
  const logo = theme.icons.header;

  return (
    <StyledHeaderContainer className={`${className} header`}>
      <Logo className="logo" src={logo} />
      {showNavbar && <NavBar className="nav-bar" />}
    </StyledHeaderContainer>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  showNavbar: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

Header.defaultProps = {
  showNavbar: true,
  className: ''
};

function mapStateToProps(state) {
}

export default withTheme(connect(mapStateToProps)(Header));
