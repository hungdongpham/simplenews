import getCurrentLocale from 'utilities/getCurrentLocale';

const localeCurrency = (locale) => {
  switch (locale) {
    case 'en-US':
      return 'USD';
    default:
      return 'USD';
  }
};

const formatCurrency = (amount) => {
  const locale = getCurrentLocale();
  const currency = localeCurrency(locale);

  // documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
};

// @todo: this should be more robust
export const getCurrencySymbol = (locale = getCurrentLocale()) => {
  const options = {
    style: 'currency',
    currency: localeCurrency(locale),
    currencyDisplay: 'symbol'
  };
  const parts = new Intl.NumberFormat(locale, options).formatToParts();
  return parts[2].value;
};

export default formatCurrency;
