// import * as types from '../actions/actionTypes';
import { BYPASS_LOADER_KEY } from 'constants/flowControlConstants';
import initialState from './initialState';
import { LOADING } from '../store/constants';

export default function (state = initialState[LOADING], action) {
  if (action.meta === undefined) return state;

  const { meta } = action;
  const { fingerprint } = meta;
  const bypassLoader = meta[BYPASS_LOADER_KEY];
  if (!fingerprint || bypassLoader) return state;

  const currentloadingState = state[fingerprint] || false;
  return {
    ...state,
    [fingerprint]: !currentloadingState
  };
}
