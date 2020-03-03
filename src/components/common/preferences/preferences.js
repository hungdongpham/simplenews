import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_USER_INFO_FINGERPRINT, UPDATE_USER_INFO_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getUserInfo } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadUserInfoRequest, updateUserInfoRequest } from 'actions';
import { StyledPreferencesContainer } from './styledPreferences';
import getText from 'context/language/getText';
import { Select } from 'semantic-ui-react';
import * as OPTIONS from 'constants/keywordConstants';
import { SELECTED_KEY } from 'store/constants';

class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = { [SELECTED_KEY]: '' };
    }

    componentDidMount() {
        const { loadUserInfo, userInfo } = this.props;

        if (isEmpty(userInfo)) {
            loadUserInfo();
        } else {
            this.setState({ [SELECTED_KEY]: userInfo[SELECTED_KEY] });
        }
    }

    componentDidUpdate(nextProps) {
        const { userInfo } = this.props;

        if (nextProps.userInfo !== userInfo) {
            if (!isEmpty(userInfo)) {
                this.setState({ [SELECTED_KEY]: userInfo[SELECTED_KEY] });
            }
        }
    }

    handleSelectOnChange = (e, data) => {
        this.setState({ [SELECTED_KEY]: data.value });
    }

    handleUpdateUserInfo = () => {
        const { updateUserInfo, userInfo } = this.props;
        
        const values = Object.assign(userInfo, this.state);
        updateUserInfo(values);
    }

    render() {
        const { isLoading } = this.props;
        const { selectedKey } = this.state;
        const keywordOptions = [
            { key: OPTIONS.BITCOIN, value: OPTIONS.BITCOIN, text: getText('keywordOptions.bitcoin') },
            { key: OPTIONS.APPLE, value: OPTIONS.APPLE, text: getText('keywordOptions.apple') },
            { key: OPTIONS.EARTHQUAKE, value: OPTIONS.EARTHQUAKE, text: getText('keywordOptions.earthquake') },
            { key: OPTIONS.ANIMAL, value: OPTIONS.ANIMAL, text: getText('keywordOptions.animal') }
        ];

        if (isLoading) return <FullPageLoader />;

        return (
            <StyledPreferencesContainer>
                <span className="keyword">{getText('userInfo.keyword')}:</span>
                <span>
                    <Select
                        className="select-ctr"
                        value={selectedKey}
                        onChange={this.handleSelectOnChange}
                        placeholder={getText('userInfo.keywordPlaceHolder')}
                        options={keywordOptions} />
                </span>
                <span className="button-area">
                    <button className="blue ui button" onClick={this.handleUpdateUserInfo}>{getText('buttons.update')}</button>
                </span>
            </StyledPreferencesContainer>
        );
    }
}


Preferences.propTypes = {
    loadUserInfo: PropTypes.func.isRequired,
    updateUserInfo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    userInfo: PropTypes.object.isRequired
};

const fingerprint_show = SHOW_USER_INFO_FINGERPRINT;
const meta_show = {
    fingerprint_show
};

const fingerprint_update = UPDATE_USER_INFO_FINGERPRINT;
const meta_update = {
    fingerprint_update
};

function mapStateToProps(state) {
    return {
        userInfo: getUserInfo(state),
        isLoading: getIsLoading(state)[fingerprint_show] || getIsLoading(state)[fingerprint_update] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserInfo: () => {
            dispatch(loadUserInfoRequest({ meta: meta_show }));
        },
        updateUserInfo: (values) => {
            dispatch(updateUserInfoRequest({ values, meta: meta_update }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Preferences);
