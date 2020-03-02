import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';

const Panel = ({ header, children }) => (
  <div>
    <Header attached="top" block>
      {header}
    </Header>
    <Segment attached>
      {children}
    </Segment>
  </div>
);

Panel.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Panel.defaultProps = {
  header: ''
};

export default Panel;
