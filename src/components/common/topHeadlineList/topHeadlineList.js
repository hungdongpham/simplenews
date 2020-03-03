import React, { Component, fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_HEADLINE_NEWS_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getHeadlineNews } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadTopHeadlineNewsRequest } from 'actions';
import { StyledHeadlineNewsListContainer } from './styledTopHeadlineList';
import getText from 'context/language/getText';
import { generateRowData } from './helpers';

class TopHeadlineList extends Component {
    componentDidMount() {
        const { loadHeadlineNews, headlineNews } = this.props;

        if (isEmpty(headlineNews)) {
            loadHeadlineNews();
        }
    }

    render() {
        const { isLoading, headlineNews } = this.props;

        if (isLoading) return <FullPageLoader />;

        return (
            <StyledHeadlineNewsListContainer>
                {generateRowData(headlineNews)}
            </StyledHeadlineNewsListContainer>
        );
    }
}


TopHeadlineList.propTypes = {
    loadHeadlineNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    headlineNews: PropTypes.array.isRequired
};

const fingerprint = SHOW_HEADLINE_NEWS_FINGERPRINT;
const meta = {
    fingerprint
};

function mapStateToProps(state) {
    return {
        headlineNews: getHeadlineNews(state),
        isLoading: getIsLoading(state)[fingerprint] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadHeadlineNews: () => {
            dispatch(loadTopHeadlineNewsRequest({ meta }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopHeadlineList);
