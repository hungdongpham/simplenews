import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SemanticAccordion, Icon } from 'semantic-ui-react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);

    const { active } = this.props;
    this.state = { active };
  }

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active
    });
  }

  render() {
    const {
      active
    } = this.state;

    const {
      icon,
      header,
      children
    } = this.props;

    return (
      <SemanticAccordion>
        <SemanticAccordion.Title onClick={this.handleClick}>
          { icon && <Icon name={icon} />}
          {header}
        </SemanticAccordion.Title>
        <SemanticAccordion.Content active={active}>
          {children}
        </SemanticAccordion.Content>
      </SemanticAccordion>
    );
  }
}

Accordion.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};

Accordion.defaultProps = {
  icon: undefined,
  active: false,
  header: undefined,
  children: undefined,
};
