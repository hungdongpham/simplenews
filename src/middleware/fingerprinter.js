// dev tool to show which fingerprints are passing through

import get from 'lodash/get';

export const fingerprinter = () => next => (action) => {
  const { type } = action;
  const fp = get(action, 'meta.fingerprint', null);
  console.log(`${type} had a fingerprint of "${fp}"`); // eslint-disable-line no-console
  next(action);
};

export default fingerprinter;
