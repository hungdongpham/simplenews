import { TOGGLE_THEME } from '../actions/actionTypes';
import initialState from './initialState';
import * as storeConstants from '../store/constants';

export default function (state = initialState[storeConstants.THEME], action) {
  switch (action.type) {
    case TOGGLE_THEME: {
        const defaultTheme = !state;
        return defaultTheme;
    }
    default:
      return state;
  }
}