import { createAction } from 'redux-actions';
import * as types from './actionTypes';

const actionInputParser = (inputs, returnMeta = false) => {
  if (inputs === undefined) {
    return undefined;
  }
  if (inputs.meta) {
    const { meta, ...rest } = inputs;
    const payload = rest.error === undefined ? rest : rest.error;
    return returnMeta ? meta : payload;
  }
  return returnMeta ? {} : inputs;
};

const payloadCreator = inputs => actionInputParser(inputs, false);
const metaCreator = inputs => actionInputParser(inputs, true);

////// load all news by key //////
export const loadNewsByKeyRequest = createAction(
  types.LOAD_ALL_NEWS_BY_KEY.REQUEST,
  payloadCreator,
  metaCreator
);
export const loadNewsByKeySuccess = createAction(
  types.LOAD_ALL_NEWS_BY_KEY.SUCCESS,
  payloadCreator,
  metaCreator
);
export const loadNewsByKeyFailure = createAction(
  types.LOAD_ALL_NEWS_BY_KEY.FAILURE,
  payloadCreator,
  metaCreator
);

////// load top headline news //////
export const loadTopHeadlineNewsRequest = createAction(
  types.LOAD_TOP_HEADLINE_NEWS.REQUEST,
  payloadCreator,
  metaCreator
);
export const loadTopHeadlineNewsSuccess = createAction(
  types.LOAD_TOP_HEADLINE_NEWS.SUCCESS,
  payloadCreator,
  metaCreator
);
export const loadTopHeadlineNewsFailure = createAction(
  types.LOAD_TOP_HEADLINE_NEWS.FAILURE,
  payloadCreator,
  metaCreator
);


////// load user information //////
export const loadUserInfoRequest = createAction(
  types.LOAD_USER_INFO.REQUEST,
  payloadCreator,
  metaCreator
);
export const loadUserInfoSuccess = createAction(
  types.LOAD_USER_INFO.SUCCESS,
  payloadCreator,
  metaCreator
);
export const loadUserInfoFailure = createAction(
  types.LOAD_USER_INFO.FAILURE,
  payloadCreator,
  metaCreator
);

////// update user information //////
export const updateUserInfoRequest = createAction(
  types.UPDATE_USER_INFO.REQUEST,
  payloadCreator,
  metaCreator
);
export const updateUserInfoSuccess = createAction(
  types.UPDATE_USER_INFO.SUCCESS,
  payloadCreator,
  metaCreator
);
export const updateUserInfoFailure = createAction(
  types.UPDATE_USER_INFO.FAILURE,
  payloadCreator,
  metaCreator
);



//// toggle theme //////
export const changeTheme = createAction(
  types.TOGGLE_THEME,
  payloadCreator,
  metaCreator
);
