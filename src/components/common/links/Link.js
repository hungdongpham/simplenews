import React from 'react';
import PropTypes from 'prop-types';
import { Link as InternalLink } from 'react-router-dom';

const Link = ({
  to, className, children, onClick
}) => (
    process.env.LINK_OUT === 'true'
      ? (
        <a
          href={`${process.env.RAILS_HOST}/${to}`}
          className={className}
          onClick={onClick}
        >
          {children}
        </a>
      )
      : (
        <InternalLink
          to={to}
          className={className}
          onClick={onClick}
        >
          {children}
        </InternalLink>
      )
  );

Link.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  children: '',
  onClick: () => { },
  className: 'default_link',
};

export default Link;
