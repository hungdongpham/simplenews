/* eslint-disable no-restricted-globals */
// number type functions
export const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);
export const coerceNumberType = s => (isNumeric(s) ? parseInt(s, 10) : 0);
export const coerceFloatType = s => (isNumeric(s) ? parseFloat(s) : 0.00);
export const round = (value, decimals = 2) => Number(`${Math.round(`${coerceFloatType(value)}e${decimals}`)}e-${decimals}`);
