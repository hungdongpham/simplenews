import React from 'react';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const InlineLoader = ({ size }) => <Loader active inline size={size} />;

InlineLoader.propTypes = {
  size: PropTypes.string,
};

InlineLoader.defaultProps = {
  size: 'small'
};

export default InlineLoader;
