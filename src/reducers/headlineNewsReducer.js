import get from 'lodash/get';
import { LOAD_TOP_HEADLINE_NEWS } from '../actions/actionTypes';
import initialState from './initialState';
import * as storeConstants from '../store/constants';

export default function (state = initialState[storeConstants.HEADLINE_NEWS], action) {
  switch (action.type) {
    case LOAD_TOP_HEADLINE_NEWS.SUCCESS: {
      const news = get(action, 'payload.articles', []);
      return [...news];
    }
    case LOAD_TOP_HEADLINE_NEWS.FAILURE: {
        return [];
    }
    default:
      return state;
  }
}