import React, { Component, fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_NEWS_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getNews } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadNewsByKeyRequest } from 'actions';
import { StyledNewsDetailContainer } from './styledNewsPage';
import getText from 'context/language/getText';
import { extractNewsIdFromUrl } from 'utilities/urlHelper';
import Link from 'components/common/links/Link';
import { urlMap } from 'routes/urlMap';

class newsPage extends Component {
    componentDidMount() {
        const { loadNews, news } = this.props;
        
        if (isEmpty(news)) {
            loadNews();
        }
    }

    render() {
        const { isLoading, news } = this.props;
        let newsDetail = {};
        const newsId = extractNewsIdFromUrl();
        let originalLink = '';

        if (isLoading) return <FullPageLoader />;

        if (!isEmpty(news)) {
            const selNews = news.filter((newsObj) => newsObj.title === decodeURI(newsId));
            newsDetail = selNews[0];
            originalLink = newsDetail.url;
        }

        return (
            <StyledNewsDetailContainer>
                <Link className="backLink" to={urlMap.HOME}>
                    {getText('newsList.back')}
                </Link>
                <h1 className="title">{newsDetail.title}</h1>
                <div className="author">{getText('newsList.by')} {newsDetail.author} - {new Date(newsDetail.publishedAt).toLocaleDateString('en-US')}</div>
                <img className="img" src={newsDetail.urlToImage} alt="" />
                <div className="description">{newsDetail.description}</div>
                <div className="content">{newsDetail.content}</div>
                <a className="originalLink" href={originalLink}>{originalLink}</a>
            </StyledNewsDetailContainer>
        );
    }
}


newsPage.propTypes = {
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
)(newsPage);
