// state logger; dev only

export const logger = store => next => (action) => {
  console.group(action.type); // eslint-disable-line no-console
  console.info('dispatching', action); // eslint-disable-line no-console
  const result = next(action);
  console.log('next state: ', store.getState()); // eslint-disable-line no-console
  console.groupEnd(); // eslint-disable-line no-console
  return result;
};

export default logger;
