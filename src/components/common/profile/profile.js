import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_USER_INFO_FINGERPRINT, UPDATE_USER_INFO_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getUserInfo } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadUserInfoRequest, updateUserInfoRequest } from 'actions';
import { StyledProfileContainer } from './styledProfile';
import getText from 'context/language/getText';
import { Input } from 'semantic-ui-react'
import { USERNAME, ADDRESS } from 'store/constants';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [USERNAME]: '',
            [ADDRESS]: ''
        };
    }

    componentDidMount() {
        const { loadUserInfo, userInfo } = this.props;

        if (isEmpty(userInfo)) {
            loadUserInfo();
        } else {
            this.setState({
                [USERNAME]: userInfo[USERNAME],
                [ADDRESS]: userInfo[ADDRESS]
            });
        }
    }

    componentDidUpdate(nextProps) {
        const { userInfo } = this.props;

        if (nextProps.userInfo !== userInfo) {
            if (!isEmpty(userInfo)) {
                this.setState({
                    [USERNAME]: userInfo[USERNAME],
                    [ADDRESS]: userInfo[ADDRESS]
                });
            }
        }
    }

    handleUserNameOnChange = (e, data) => {
        this.setState({ [USERNAME]: data.value });
    }

    handleAddressOnChange = (e, data) => {
        this.setState({ [ADDRESS]: data.value });
    }

    handleUpdateUserInfo = () => {
        const { updateUserInfo, userInfo } = this.props;

        const values = Object.assign(userInfo, this.state);
        updateUserInfo(values);
    }

    render() {
        const { isLoading } = this.props;
        const { userName, address } = this.state;

        if (isLoading) return <FullPageLoader />;

        return (
            <StyledProfileContainer>
                <div className="cus-row">
                    <div className="title">{getText('userInfo.username')}:</div>  
                    <Input value={userName}  
                        onChange={this.handleUserNameOnChange} 
                        placeholder={getText('userInfo.usernamePlaceHolder')}/>
                </div>
                <div className="cus-row">
                    <div className="title">{getText('userInfo.address')}:</div>  
                    <Input value={address} 
                        onChange={this.handleAddressOnChange} 
                        placeholder={getText('userInfo.addressPlaceHolder')}/>
                </div>
                <div className="button-area">
                    <button className="blue ui button" onClick={this.handleUpdateUserInfo}>{getText('buttons.update')}</button>
                </div>
            </StyledProfileContainer>
        );
    }
}


Profile.propTypes = {
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
)(Profile);
