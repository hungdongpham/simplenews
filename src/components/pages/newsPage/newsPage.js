import React, { Component, fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_NEWS_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getNews, getHeadlineNews } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadNewsByKeyRequest, loadTopHeadlineNewsRequest } from 'actions';
import { StyledNewsDetailContainer } from './styledNewsPage';
import getText from 'context/language/getText';
import { extractNewsIdFromUrl, checkTopHeadlinesUrl } from 'utilities/urlHelper';
import Link from 'components/common/links/Link';
import { urlMap } from 'routes/urlMap';

class newsPage extends Component {
    componentDidMount() {
        const { loadNews, loadHeadlineNews, news, headlineNews } = this.props;

        if (checkTopHeadlinesUrl()) {
            if (isEmpty(headlineNews)) loadHeadlineNews();
        } else {
            if (isEmpty(news)) loadNews();
        }

    }

    handleNewsObject = (newsArray, newsId) => {
        const selNews = newsArray.filter((newsObj) => newsObj.title === decodeURI(newsId));
        const newsObj= selNews[0];
        
        if (isEmpty(newsObj)){
            return { 
                title: '',
                author: '',
                urlToImage: '',
                description: '',
                publishedAt: '',
                content: '',
                url: ''
            };
        } 
        return newsObj;
    }

    render() {
        const { isLoading, news, headlineNews } = this.props;
        let newsDetail = {};
        const newsId = extractNewsIdFromUrl();
        let originalLink = '';

        if (isLoading) return <FullPageLoader />;

        if (checkTopHeadlinesUrl()) {
            if (!isEmpty(headlineNews)) newsDetail = this.handleNewsObject(headlineNews, newsId);
        } else {
            if (!isEmpty(news)) newsDetail = this.handleNewsObject(news, newsId);
        }

        return (
            <StyledNewsDetailContainer>
                <Link className="backLink" to={urlMap.HOME}>
                    {getText('newsList.back')}
                </Link>
                <h1 className="title">{newsDetail.title}</h1>
                {newsDetail.author !== '' && (<div className="author">{getText('newsList.by')} {newsDetail.author} - {new Date(newsDetail.publishedAt).toLocaleDateString('en-US')}</div>)}
                <img className="img" src={newsDetail.urlToImage} alt="" />
                <div className="description">{newsDetail.description}</div>
                <div className="content">{newsDetail.content}</div>
                <a className="originalLink" href={newsDetail.url}>{newsDetail.url}</a>
            </StyledNewsDetailContainer>
        );
    }
}


newsPage.propTypes = {
    loadNews: PropTypes.func.isRequired,
    loadHeadlineNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    news: PropTypes.array.isRequired,
    headlineNews: PropTypes.array.isRequired
};

const fingerprint = SHOW_NEWS_FINGERPRINT;
const meta = {
    fingerprint
};

function mapStateToProps(state) {
    return {
        news: getNews(state),
        headlineNews: getHeadlineNews(state),
        isLoading: getIsLoading(state)[fingerprint] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadNews: () => {
            dispatch(loadNewsByKeyRequest({ meta }));
        },
        loadHeadlineNews: () => {
            dispatch(loadTopHeadlineNewsRequest({ meta }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(newsPage);
