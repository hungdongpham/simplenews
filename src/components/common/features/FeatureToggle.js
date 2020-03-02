import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFeatureFlags } from 'selectors';

const FeatureToggle = (props) => {
  const {
    flag: requestedFlag,
    flags,
    ready,
    OnTrueComponent,
    OnFalseComponent,
    ...rest
  } = props;
  if (ready === false) {
    return null;
  }
  if (flags[requestedFlag] === true) {
    return <OnTrueComponent {...rest} />;
  }
  return OnFalseComponent ? <OnFalseComponent {...rest} /> : null;
};

FeatureToggle.propTypes = {
  flag: PropTypes.string.isRequired,
  flags: PropTypes.object.isRequired,
  ready: PropTypes.bool,
  OnTrueComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  OnFalseComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

FeatureToggle.defaultProps = {
  ready: false,
  OnFalseComponent: null,
};

const mapStateToProps = (state) => {
  const flags = getFeatureFlags(state);
  const { isLDReady: ready } = flags;
  return {
    flags,
    ready
  };
};

export default connect(
  mapStateToProps
)(FeatureToggle);
