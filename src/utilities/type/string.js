export const timePattern = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');
export const isEmptyPattern = new RegExp('^\\s*$');

export const resemblesTime = string => timePattern.test(string);
export const isString = string => typeof string === 'string';
export const isEmpty = string => isEmptyPattern.test(string);
