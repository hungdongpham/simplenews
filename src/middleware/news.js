import { LOAD_ALL_NEWS_BY_KEY } from 'actions/actionTypes';
// import { getEverythingByKey } from 'api/newsApi';
import { 
    loadNewsByKeySuccess, 
    loadNewsByKeyFailure
 } from 'actions';
import { apiPromise } from 'middleware/apiPromise';

export const news = store => next => (action) => {
  switch (action.type) {
    case LOAD_ALL_NEWS_BY_KEY.REQUEST: {
      next(action);
      const { key } = action.payload;
      return apiPromise(
        store,
        action,
        getEverythingByKey,
        [key],
        loadNewsByKeySuccess,
        loadNewsByKeyFailure
      );
    }
    default:
      next(action);
      return Promise.resolve();
  }
};

export default news;