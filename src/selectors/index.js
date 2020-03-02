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

const pickLocations= state => state.locations;
export const getLocations = createSelector(
  [pickLocations],
  locations => (locations === undefined ? [] : locations)
);
