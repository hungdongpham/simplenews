import React from 'react';
import PropTypes from 'prop-types';
import { StyledSwitchContainer } from './styledSwitch';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const CustomSwitch = ({ theme, value, onChange, checked }) => {

    const ModifyStylesSwitch = withStyles({
        root: {
          width: 38,
          height: 22,
          padding: 0,
        },
        switchBase: {
          padding: 1,
          '&$checked': {
            transform: 'translateX(16px)',
            color: `${theme.colors.customSwitch.base.color}`,
            '& + $track': {
              backgroundColor: `${theme.colors.customSwitch.base.focus}`,
              opacity: 1,
              border: 'none',
            },
          },
          '&$focusVisible $thumb': {
            color: `${theme.colors.customSwitch.base.focus}`,
            border: '6px solid #fff',
          },
        },
        thumb: {
          width: 20,
          height: 20,
        },
        track: {
          borderRadius: 22 / 2,
          border: `1px solid ${theme.colors.customSwitch.track.border}`,
          backgroundColor: `${theme.colors.customSwitch.track.background}`,
          opacity: 1
        },
        checked: {},
      })(Switch);

    return (
        <StyledSwitchContainer>
            <ModifyStylesSwitch
                checked={checked}
                onChange={onChange}
                value={value}
            />
        </StyledSwitchContainer>
    )
};

CustomSwitch.defaultProps = {
    value: '',
    onChange: () => { },
    checked: true
};

CustomSwitch.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    theme: PropTypes.object.isRequired
};

export default CustomSwitch;