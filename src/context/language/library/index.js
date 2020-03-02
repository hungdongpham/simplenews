import getCurrentLocale from 'utilities/getCurrentLocale';
import { EN_US } from '../constants';
import USEnglish from './USEnglish';

const defaultLocale = getCurrentLocale();

export const getSupportedLocales = () => [EN_US];

export const getLibrary = (locale = defaultLocale) => {
  switch (locale) {
    case EN_US:
    default:
      return USEnglish;
  }
};