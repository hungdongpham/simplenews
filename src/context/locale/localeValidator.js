
// use: localeFormatValidator('US').phone;

// .matches(phoneValidationRegex, 'Please enter a phone number in US format: (123) 456-7890')

const phoneValidationRegex = /(\([0-9]{3}\)|[0-9]{3})[-\s]*[0-9]{3}[- ]?[0-9]{4}/;
const zipcodeValidationRegex = /[0-9]{5}/;

// export const localeFormatValidator = (locale = 'US') => ({
export const localeFormatValidator = () => ({
  postal: zipcodeValidationRegex,
  phone: phoneValidationRegex
});

export default localeFormatValidator;
