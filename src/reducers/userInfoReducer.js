import get from 'lodash/get';
import { LOAD_USER_INFO, UPDATE_USER_INFO } from '../actions/actionTypes';
import initialState from './initialState';
import * as storeConstants from '../store/constants';
import * as OPTIONS from 'constants/keywordConstants';
import getText from 'context/language/getText';
import { updateLocalToken } from 'utilities/localStorage';

export default function (state = initialState[storeConstants.USER_INFO], action) {
    switch (action.type) {
        case LOAD_USER_INFO.SUCCESS: {
            const infoStr = get(action, 'payload', {});
            const userInfo = JSON.parse(infoStr);
            return { ...userInfo };
        }
        case LOAD_USER_INFO.FAILURE: {
            //In the case, don't have local storage before
            const userInfo = {
                [storeConstants.SELECTED_KEY]: OPTIONS.BITCOIN,
                [storeConstants.USERNAME]: getText('userInfo.guestUserName'),
                [storeConstants.ADDRESS]: getText('userInfo.guestAddress')
            }
            updateLocalToken(userInfo);
            return { ...userInfo };
        }
        case UPDATE_USER_INFO.SUCCESS: {
            const userInfo = get(action, 'payload', {});
            updateLocalToken(userInfo);
            return { ...userInfo };
        }
        default:
            return state;
    }
}