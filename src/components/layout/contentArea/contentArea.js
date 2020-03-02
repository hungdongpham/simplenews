import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageController from 'routes';
import { getErrors } from 'selectors';
import { PAGE_ERROR } from 'constants/errorConstants';
import Error from 'components/pages/errorPage/errorPage';

import StyledContentContainer from 'components/layout/contentArea/styledContentContainer';
import { withRouter } from 'react-router-dom';
import { StyledPage } from 'components/pages/styledPage';

const Content = ({ showContent, errors }) => {
  const hasPageError = Array.isArray(errors[PAGE_ERROR]);
  return (
    <StyledContentContainer className="container-fluid">
      <StyledPage className="col-sm-12">
        {showContent && !hasPageError && <PageController />}
        {hasPageError && <Error errors={errors[PAGE_ERROR]} />}
      </StyledPage>
    </StyledContentContainer>
  );
};

Content.propTypes = {
  errors: PropTypes.object,
  showContent: PropTypes.bool
};

Content.defaultProps = {
  errors: [],
  showContent: true
};

function mapStateToProps(state) {
  return {
    errors: getErrors(state)
  };
}

export default withRouter(connect(mapStateToProps)(Content));
