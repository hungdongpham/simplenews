import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'components/common/switch/switch';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { StyledThemeSwitchContainer } from './styledThemeSwitch';
import getText from 'context/language/getText';
import { getTheme } from 'selectors';
import { changeTheme } from 'actions';
import { TOGGLE_THEME_FINGERPRINT } from 'constants/fingerprintConstants';

const ThemeSwitch = ({ theme, defaultTheme, toggleTheme }) => {
    const [checked, toggleCheck] = React.useState(defaultTheme);

    const handleChange = event => {
        toggleCheck(event.target.checked);
        toggleTheme();
    };

    return (
        <StyledThemeSwitchContainer>
            <Switch
                theme={theme}
                checked={checked}
                onChange={handleChange}
                value={getText('buttons.changeTheme')}
            />
        </StyledThemeSwitchContainer>
    )
};

ThemeSwitch.defaultProps = {
};

ThemeSwitch.propTypes = {
    defaultTheme: PropTypes.bool,
    theme: PropTypes.object.isRequired
};

const fingerprint = TOGGLE_THEME_FINGERPRINT;
const meta = {
    fingerprint
};


function mapStateToProps(state) {
    return {
        defaultTheme: getTheme(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: () => {
            dispatch(changeTheme({ meta }));
        }
    };
}


export default withTheme(connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch));