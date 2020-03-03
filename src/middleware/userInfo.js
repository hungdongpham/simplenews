import { LOAD_USER_INFO, UPDATE_USER_INFO } from 'actions/actionTypes';
import {
    loadUserInfoSuccess,
    loadUserInfoFailure,
    updateUserInfoSuccess
} from 'actions';
import { getLocalToken } from 'utilities/localStorage';

export const userInfo = store => next => (action) => {
    switch (action.type) {
        case LOAD_USER_INFO.REQUEST: {
            next(action);

            const response = getLocalToken();
            const { meta } = action;
            if (!response) return store.dispatch(loadUserInfoFailure());
            return store.dispatch({
                ...loadUserInfoSuccess(response),
                meta
            });
        }
        case UPDATE_USER_INFO.REQUEST: {
            const { values } = action.payload;
            const { meta } = action;
            next(action);
            return store.dispatch({
                ...updateUserInfoSuccess(values),
                meta
            });
        }
        default:
            next(action);
            return Promise.resolve();
    }
};

export default userInfo;