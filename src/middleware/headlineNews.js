import { LOAD_TOP_HEADLINE_NEWS } from 'actions/actionTypes';
// import { getTopHeadlines } from 'api/newsApi';
import { 
    loadTopHeadlineNewsSuccess,
    loadTopHeadlineNewsFailure
 } from 'actions';
import { apiPromise } from 'middleware/apiPromise';

export const headlineNews = store => next => (action) => {
  switch (action.type) {
    case LOAD_TOP_HEADLINE_NEWS.REQUEST: {
        next(action);
        return apiPromise(
          store,
          action,
          getTopHeadlines,
          [],
          loadTopHeadlineNewsSuccess,
          loadTopHeadlineNewsFailure
        );
      }
    default:
      next(action);
      return Promise.resolve();
  }
};

export default headlineNews;