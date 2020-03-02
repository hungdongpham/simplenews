import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errors from './errorReducer';
import loading from './loadingReducer';
import news from './newsReducer';
import headlineNews from './headlineNewsReducer';
import defaultTheme from './themeReducer';

// right now, we have no way to set themes, so no need to reduce them
const rootReducer = history => combineReducers({
  router: connectRouter(history),
  errors,
  loading,
  news,
  headlineNews,
  defaultTheme
});

export default rootReducer;
