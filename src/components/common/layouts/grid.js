/* eslint react/no-multi-comp: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const Grid = React.memo(({ fluid, children }) => {
  const className = fluid ? 'container-fluid' : 'container';
  return <div className={className}>{children}</div>;
});

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.object.isRequired
};

Grid.defaultProps = {
  fluid: true
};

export const Row = React.memo(({ children, className }) => {
  const rowClassName = className ? `row ${className}` : 'row';
  return <div className={rowClassName}>{children}</div>;
});

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

Row.defaultProps = {
  className: undefined
};

const generateColClassNames = (columns, offsets) => {
  const classNames = [];
  Object.keys(columns).forEach((key) => {
    const value = columns[key];
    if (value && key === 'xs') {
      classNames.push(`col-${value}`);
    } else if (value) {
      classNames.push(`col-${key}-${value}`);
    }
  });
  Object.keys(offsets).forEach((key) => {
    const value = offsets[key];
    if (value) {
      classNames.push(`offset-${key}-${value}`);
    }
  });
  return classNames.join(' ');
};

export const Col = React.memo((props) => {
  const {
    xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, children
  } = props;
  const hasProps = Object.keys(props).length > 0;

  const classNames = !hasProps
    ? 'col'
    : generateColClassNames(
      {
        xs,
        sm,
        md,
        lg
      },
      {
        xsOffset,
        smOffset,
        mdOffset,
        lgOffset
      }
    );

  return <div className={classNames}>{children}</div>;
});

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  children: PropTypes.node.isRequired
};

Col.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xsOffset: undefined,
  smOffset: undefined,
  mdOffset: undefined,
  lgOffset: undefined,
};
