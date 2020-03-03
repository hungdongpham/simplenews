import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  UPDATE_USER_INFO_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading  } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { updateUserInfoRequest } from 'actions';
import { StyledRegisterPageContainer } from './styledRegisterPage';
import getText from 'context/language/getText';
import { Input, Select } from 'semantic-ui-react'
import { SELECTED_KEY, USERNAME, ADDRESS } from 'store/constants';
import * as OPTIONS from 'constants/keywordConstants';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [SELECTED_KEY]: '',
            [USERNAME]: '',
            [ADDRESS]: ''
        };
    }

    handleUserNameOnChange = (e, data) => {
        this.setState({ [USERNAME]: data.value });
    }

    handleAddressOnChange = (e, data) => {
        this.setState({ [ADDRESS]: data.value });
    }

    handleSelectOnChange = (e, data) => {
        this.setState({ [SELECTED_KEY]: data.value });
    }

    handleUpdateUserInfo = () => {
        const { updateUserInfo } = this.props;

        const values = Object.assign({}, this.state);
        updateUserInfo(values);
    }

    render() {
        const { isLoading } = this.props;
        const { userName, address, selectedKey } = this.state;
        const keywordOptions = [
            { key: OPTIONS.BITCOIN, value: OPTIONS.BITCOIN, text: getText('keywordOptions.bitcoin') },
            { key: OPTIONS.APPLE, value: OPTIONS.APPLE, text: getText('keywordOptions.apple') },
            { key: OPTIONS.EARTHQUAKE, value: OPTIONS.EARTHQUAKE, text: getText('keywordOptions.earthquake') },
            { key: OPTIONS.ANIMAL, value: OPTIONS.ANIMAL, text: getText('keywordOptions.animal') }
        ];

        if (isLoading) return <FullPageLoader />;

        return (
            <StyledRegisterPageContainer>
                <h2>{getText('userInfo.signupHeader')}</h2>
                <div className="cus-row">
                    <div className="title">{getText('userInfo.username')}:</div>  
                    <Input value={userName}  
                        onChange={this.handleUserNameOnChange} 
                        placeholder={getText('userInfo.userNamePlaceHolder')}/>
                </div>
                <div className="cus-row">
                    <div className="title">{getText('userInfo.address')}:</div>  
                    <Input value={address} 
                        onChange={this.handleAddressOnChange} 
                        placeholder={getText('userInfo.addressPlaceHolder')}/>
                </div>
                <div className="cus-row">
                    <div className="title">{getText('userInfo.keyword')}:</div>  
                    <Select
                        className="select-ctr"
                        value={selectedKey}
                        onChange={this.handleSelectOnChange}
                        placeholder={getText('userInfo.keywordPlaceHolder')}
                        options={keywordOptions} />
                </div>
                <div className="button-area">
                    <button className="blue ui button" onClick={this.handleUpdateUserInfo}>{getText('buttons.submit')}</button>
                </div>
            </StyledRegisterPageContainer>
        );
    }
}


RegisterPage.propTypes = {
    updateUserInfo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const fingerprint_update = UPDATE_USER_INFO_FINGERPRINT;
const meta_update = {
    fingerprint_update
};

function mapStateToProps(state) {
    return {
        isLoading: getIsLoading(state)[fingerprint_update] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: (values) => {
            dispatch(updateUserInfoRequest({ values, meta: meta_update }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);
