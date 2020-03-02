
import * as constant from 'constants/paginationConstants';

export const addPaginationToQueryVariables = (pagination, variables) => {
  // pages for graphQL are indexed from 0; our UI element is indexed from 1;
  // this converts between the two
  const queryPage = pagination[constant.PAGE_NUMBER] - 1;
  const queryPerPage = pagination[constant.PER_PAGE];
  const queryPagination = {
    [constant.PER_PAGE]: queryPerPage,
    [constant.PAGE_NUMBER]: queryPage
  };

  return {
    ...variables,
    ...queryPagination
  };
};

// constructs the pagination payload for graphql
export const constructPaginationPayload = (config) => {
  if (config) {
    return {
      [constant.PAGINATION]: config
    };
  }
  return {};
};

export const paginationSchema = {
  [constant.PAGE_NUMBER]: constant.DEFAULT_START_PAGE,
  [constant.PER_PAGE]: constant.DEFAULT_PER_PAGE
};

// input the redux action object
// output is an object matching the schema
export const getPaginationPayload = (action) => {
  const { payload } = action;
  if (payload && payload[constant.PAGINATION]) {
    const pagination = payload[constant.PAGINATION];
    return { ...paginationSchema, ...pagination };
  }
  return {};
};
