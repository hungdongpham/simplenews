// selectors
import { createSelector } from 'reselect';
import * as storeConstants from 'store/constants';

const pickErrors = state => state.errors;
export const getErrors = createSelector(
  [pickErrors],
  errors => errors || {}
);

const pickLoadingState = state => state.loading;
export const getIsLoading = createSelector(
  [pickLoadingState],
  loading => loading || {}
);

const pickTheme = state => state[storeConstants.THEME];
export const getTheme = createSelector(
  [pickTheme],
  defaultTheme => (defaultTheme === undefined ? true : defaultTheme)
);

const pickNews = state => state.news;
export const getNews = createSelector(
  [pickNews],
  news => (news === undefined ? [] : news)
);

const pickHeadlineNews = state => state.headlineNews;
export const getHeadlineNews = createSelector(
  [pickHeadlineNews],
  headlineNews => (headlineNews === undefined ? [] : headlineNews)
);

