import React, { Component, fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_NEWS_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getNews } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadNewsByKeyRequest } from 'actions';
import { StyledNewsListContainer } from './styledNewsList';
import getText from 'context/language/getText';
import { generateRowData } from './helpers';

class NewsList extends Component {
    componentDidMount() {
        const { loadNews, news } = this.props;

        if (isEmpty(news)) {
            loadNews();
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
    loadNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    news: PropTypes.array.isRequired
};

const fingerprint = SHOW_NEWS_FINGERPRINT;
const meta = {
    fingerprint
};

function mapStateToProps(state) {
    return {
        news: getNews(state),
        isLoading: getIsLoading(state)[fingerprint] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadNews: () => {
            dispatch(loadNewsByKeyRequest({ meta }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);
