// action types
class AsyncActionType {
  constructor(base) {
    this.base = base;
    this.REQUEST = `${base}_REQUEST`;
    this.SUCCESS = `${base}_SUCCESS`;
    this.FAILURE = `${base}_FAILURE`;
  }
}

// connecte router actions
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

// PAGINATION
export const CONFIGURE_PAGINATION = 'SET_PAGINATION';
export const LOAD_PAGINATION = 'LOAD_PAGINATION';

// all news by key
export const LOAD_ALL_NEWS_BY_KEY = new AsyncActionType('LOAD_ALL_NEWS_BY_KEY');

// top headline news
export const LOAD_TOP_HEADLINE_NEWS = new AsyncActionType('LOAD_TOP_HEADLINE_NEWS');
export const TOGGLE_THEME = 'TOGGLE_THEME';