import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_NEWS_FINGERPRINT, SHOW_USER_INFO_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getNews, getUserInfo } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadNewsByKeyRequest, loadUserInfoRequest } from 'actions';
import { StyledNewsListContainer } from './styledNewsList';
import { SELECTED_KEY } from 'store/constants';
import getText from 'context/language/getText';
import { generateRowData } from './helpers';

class NewsList extends Component {
    componentDidMount() {
        const { userInfo, loadUserInfo } = this.props;

        if (isEmpty(userInfo)) {
            loadUserInfo();
        }
    }

    componentDidUpdate(nextProps) {
        const { userInfo, loadNews } = this.props;

        if (nextProps.userInfo !== userInfo) {
            if (!isEmpty(userInfo)) {
                loadNews(userInfo[SELECTED_KEY]);
            }
        }
    }

    render() {
        const { isLoading, news } = this.props;

        if (isLoading) return <FullPageLoader />;

        return (
            <fragment>
                <h2>{getText('newsList.header')}</h2>
                <StyledNewsListContainer>
                    {generateRowData(news)}
                </StyledNewsListContainer>
            </fragment>
        );
    }
}


NewsList.propTypes = {
    loadUserInfo: PropTypes.func.isRequired,
    loadNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    userInfo: PropTypes.object.isRequired,
    news: PropTypes.array.isRequired
};

const fingerprint = SHOW_NEWS_FINGERPRINT;
const meta = {
    fingerprint
};

const fingerprint_show = SHOW_USER_INFO_FINGERPRINT;
const meta_show = {
    fingerprint_show
};

function mapStateToProps(state) {
    return {
        news: getNews(state),
        userInfo: getUserInfo(state),
        isLoading: getIsLoading(state)[fingerprint] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadNews: (key) => {
            dispatch(loadNewsByKeyRequest({ key , meta }));
        },
        loadUserInfo: () => {
            dispatch(loadUserInfoRequest({ meta: meta_show }));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);
