import get from 'lodash/get';
import { LOAD_ALL_NEWS_BY_KEY } from '../actions/actionTypes';
import initialState from './initialState';
import * as storeConstants from '../store/constants';

export default function (state = initialState[storeConstants.NEWS], action) {
  switch (action.type) {
    case LOAD_ALL_NEWS_BY_KEY.SUCCESS: {
      const countries = get(action, 'payload.countries', []);
      const locations = countries[0].cities;
      return [...locations];
    }
    case LOAD_ALL_NEWS_BY_KEY.FAILURE: {
        return [];
      }
    default:
      return state;
  }
}