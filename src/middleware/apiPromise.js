// common middleware for async actions
// inputs are
//  store, action from middleware,
//  the api function that you want to hit and appropriate API args
//  and both functions for success and failure coming off the api endpoint promise

import { getPaginationPayload, addPaginationToQueryVariables } from 'utilities/pagination';
import { graphQueryPromise } from 'api/helpers';

export const apiPromise = (
  store,
  action,
  apiFunction,
  apiArgs,
  onSuccessAction,
  onFailureAction,
  transformResponseFunction = response => response
) => {
  const { meta } = action;
  return apiFunction(...apiArgs)
    .then(response => store.dispatch(onSuccessAction({
      ...transformResponseFunction(response),
      meta
    })))
    .catch((error) => {
      store.dispatch(
        onFailureAction(
          {
            error,
            meta
          },
        )
      );
    });
};

// variant of apiPromise that allows insertion of query variables;
export const apiQueryPromise = (
  store,
  action,
  apiQuery,
  apiArgs,
  onSuccessAction,
  onFailureAction,
  transformResponseFunction = response => response
) => {
  const { meta } = action;
  const pagination = getPaginationPayload(action);
  const { query, variables } = apiQuery();
  const paginatedVariables = addPaginationToQueryVariables(pagination, variables);
  return graphQueryPromise(query, paginatedVariables)
    .then(response => store.dispatch(onSuccessAction({
      ...transformResponseFunction(response),
      meta
    })))
    .catch((error) => {
      store.dispatch(
        onFailureAction(
          {
            error,
            meta
          },
        )
      );
    });
};

export default apiPromise;
