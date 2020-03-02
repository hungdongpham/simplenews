
// URLSearchParams is not supported by IE.
// use this to grab url params

export const getUrlParams = (location) => {
  const a = location.split('?');
  const b = a[1].split('&').map(args => args.split('='));
  return b.reduce((obj, match) => {
    const key = match[0];
    const value = match[1];
    return {
      ...obj,
      [key]: value
    };
  }, {});
};

export default getUrlParams;
