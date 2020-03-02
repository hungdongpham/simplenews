import React from 'react';
import PropTypes from 'prop-types';
import { MAX_LAYOUT_COLUMNS } from 'constants/layoutConstants';
import { Row, Col } from './grid';

const LayoutRow = ({
  elements, widths, id, colSize, className
}) => {
  const columns = elements.map((e, index) => {
    const colWidth = Math.round(MAX_LAYOUT_COLUMNS * widths[index]);
    const key = `${id}-${index}`;
    const columnAttrs = {
      [colSize]: colWidth,
    };
    return (
      <Col {...columnAttrs} key={key}>
        {e}
      </Col>
    );
  });

  return (
    <Row>
      <Col md={MAX_LAYOUT_COLUMNS}>
        <Row className={className}>{columns}</Row>
      </Col>
    </Row>
  );
};

LayoutRow.propTypes = {
  elements: PropTypes.array.isRequired,
  widths: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  colSize: PropTypes.string,
  className: PropTypes.string,
};

LayoutRow.defaultProps = {
  colSize: 'md',
  className: undefined
};

export default LayoutRow;
