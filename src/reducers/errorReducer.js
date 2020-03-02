import { ERRORS } from 'store/constants';
import get from 'lodash/get';
import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';
import { PAGE_ERROR } from 'constants/errorConstants';

export default function (state = initialState[ERRORS], action) {
  const errors = get(action, 'payload.errors', []);
  const fingerprint = get(action, 'meta.fingerprint');

  if (action.type === types.LOCATION_CHANGE) {
    return initialState[ERRORS];
  }

  if (!fingerprint) {
    return state;
  }

  if (errors.length > 0 && fingerprint) {
    const isPageError = get(action, 'payload.type', null) === PAGE_ERROR;
    const nextFingerprint = isPageError ? PAGE_ERROR : fingerprint;
    return {
      ...state,
      [nextFingerprint]: errors
    };
  }
  // if fingerprint and no error
  const newState = Object.assign({}, state);
  delete newState[fingerprint];
  return newState;
}
