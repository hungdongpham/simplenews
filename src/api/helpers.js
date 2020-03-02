// API helper and mock functions
import { GraphQLClient } from 'graphql-request';
import { PAGE_ERROR } from 'constants/errorConstants';
import includes from 'lodash/includes';


// error statuses for which we always want to create page-level errors
const pageErrorStatusCodes = ['unauthorized'];

const host = process.env.GRAPHQL_HOST;

const graphqlQueryRoot = process.env.GRAPHQL_QUERY_ROOT;

export const createClient = (endpoint, headers = {}, hostUrl = host) => new GraphQLClient(`${hostUrl}${endpoint}`, {
  headers
});

const ajaxHost = process.env.AJAX_HOST || '';

export const defaultClient = createClient(graphqlQueryRoot);

export function post(url, data, headers = {}) {
  const body = data instanceof FormData ? data : JSON.stringify(data);

  const options = {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
      ...headers
    }
  };
  return fetch(`${ajaxHost}${url}`, options).then(response => response.json());
}

export function get(url) {
  const options = {
    method: 'GET'
  };
  return fetch(url, options).then(response => response.json());
}

// Graph QL query wrapper
// includes error state detection
// returns a promise
// @todo: passing tokens via header;
// @todo: set cookie

const graphQueryBase = (client, query, variables = undefined) => {
  // graph QL helpers
  const isEmpty = (data) => {
    if (typeof data !== 'object') {
      return true;
    }
    const keys = Object.keys(data);
    return data[keys[0]] === null;
  };

  const hasErrors = data => Array.isArray(data.errors);

  return new Promise((resolve, reject) => client
    .request(query, variables)
    .then((data) => {
      try {
        if (isEmpty(data) || hasErrors(data)) {
          // throw error
          return reject(data);
        }
        // return data
        return resolve(data);
      } catch (e) {
        return reject(data);
      }
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.group('graphQuery request failed'); // eslint-disable-line no-console
        console.error(error); // eslint-disable-line no-console
        console.error(error.response); // eslint-disable-line no-console
        console.error(query); // eslint-disable-line no-console
        console.groupEnd(); // eslint-disable-line no-console
      }
      // return the error in the standard GraphQL format
      try {
        // if our client library returns an error
        if (error.response.status === 500) {
          console.error('500 server error'); // eslint-disable-line no-console
          console.error(error.response.error.message); // eslint-disable-line no-console
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ errors: ['System Error'], type: PAGE_ERROR });
        }
        // it will have a response object that has a human readable array
        const reducerfn = (acc, e) => acc === true || includes(pageErrorStatusCodes, e.status_code);
        const hasErrorPageError = error.response.errors.reduce(reducerfn, false);
        const pageType = hasErrorPageError ? PAGE_ERROR : 'app_error';
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ errors: error.response.errors, type: pageType });
      } catch (e) {
        // if that response object does not exist, we'll assume
        // it's a page level error and construct our own
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ errors: [error.message], type: PAGE_ERROR });
      }
    }));
};

export const graphQueryPromise = (
  query,
  variables,
  requestHeaders = {},
  client = defaultClient
) => {
  const defaultHeaders = {
    Cookie: document.cookie,
  };
  const headers = {
    ...defaultHeaders,
    ...requestHeaders
  };

  client.setHeaders(headers);
  return graphQueryBase(client, query, variables);
};

export const graphMutationPromise = (
  query,
  variables,
  requestHeaders = {},
  client = defaultClient
) => {
  const defaultHeaders = {
    Cookie: document.cookie,
  };

  const headers = {
    ...defaultHeaders,
    ...requestHeaders
  };

  client.setHeaders(headers);
  return graphQueryBase(client, query, variables);
};

export const quoteStringValue = (value) => {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return value;
};

export const prepAttributes = (fields, expectedShape) => {
  const fieldsWithValues = fields.split(',').filter(field => expectedShape[field] !== undefined);

  return fieldsWithValues.map((field) => {
    const value = expectedShape[field];
    if (typeof value === 'string') {
      return `${field}:"${expectedShape[field]}"`;
    }
    if (value instanceof Object) {
      const subObj = expectedShape[field];
      const subAttributes = Object.keys(subObj).map((key) => {
        if (typeof subObj[key] === 'string') {
          return `${key}: "${subObj[key]}"`;
        }
        return `${key}: ${subObj[key]}`;
      });

      return `${field}: { ${subAttributes.join(', ')} }`;
    }
    return `${field}:${expectedShape[field]}`;
  });
};

export const handleUpdateString = (values, fields, isAddNew = false) =>{
  let output = '';
  if (isAddNew) {
    const index = fields.indexOf("id");
    if (index !== -1) {
      fields.splice(index, 1);
    }
  }
  fields.forEach((field) => {
      output += `${field} : "${values[field]}", `;
  });
  return output;
}
