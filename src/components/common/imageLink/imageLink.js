import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ImageLink = ({ src, className }) => (
  <Link className={`${className} image-link`} to="/">
    <img className="img" src={src} alt="" />
  </Link>
);

ImageLink.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string
};

ImageLink.defaultProps = {
  src: '',
  className: ''
};

export default ImageLink;
