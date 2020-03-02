import React from 'react';
import PropTypes from 'prop-types';
import getText from 'context/language/getText';
import StyledFooterContainer from 'components/layout/footer/styledFooterContainer';

const Footer = ({ className }) => (
  <StyledFooterContainer className={`${className} footer`}>
    {getText('info.copyright')}
  </StyledFooterContainer>
);


Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''

};

export default Footer;
