import React from 'react';
import { StyledLayoutContainer } from 'components/layout/styledLayout';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from 'components/layout/header/header';
import Footer from 'components/layout/footer/footer';
import ContentArea from 'components/layout/contentArea/contentArea';

const Layout = ({
  showHeader, showFooter, ...props
}) => {
  return (
    <StyledLayoutContainer>
      <base target="_parent" />
      { showHeader && <Header />}
      <ContentArea {...props} />
      {showFooter && <Footer />}
    </StyledLayoutContainer>
  )
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true
};

export default withRouter(Layout);
