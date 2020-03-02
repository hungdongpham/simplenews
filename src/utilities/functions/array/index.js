/* eslint-disable import/prefer-default-export */

// use when joining multiple variables whose values may or may not be strings
export const joinStrings = array => array.filter(item => typeof (item) === 'string').join(' ');
