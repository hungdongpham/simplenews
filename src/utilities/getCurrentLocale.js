const getCurrentLocale = () => (navigator.languages && navigator.languages[0])
|| navigator.language
|| navigator.userLanguage;

const delimiter = '-'; // per ISO standard

const getLocalePart = (index) => {
  const locale = getCurrentLocale();
  if (!locale) {
    return '';
  }
  return locale.split(delimiter)[index];
};

export const getCurrentLocaleLocation = () => getLocalePart(1);
export const getCurrentLocaleLanguage = () => getLocalePart(0);

export default getCurrentLocale;
