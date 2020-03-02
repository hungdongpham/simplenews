import get from 'lodash/get';
import parse from 'html-react-parser';
import { getLibrary } from './library';

const defaultLibrary = getLibrary();

const getText = (lookupPath, library = defaultLibrary) => {
  const text = get(library, lookupPath, '');
  return text;
};

export const getParameterizedText = (lookupPath, replacementMap, library = defaultLibrary) => {
  const template = getText(lookupPath, library);
  const replaceFunction = (m, p1) => {
    const value = replacementMap[p1];
    if (value) {
      return value.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return '';
  };
  const output = template.replace(/%([\w]+)%/g, replaceFunction);
  return output;
};

// the HTML-REACT-PARSER library does not protect against XSS; only use on library strings
export const textToComponent = (lookupPath, replacementMap = null, library = defaultLibrary) => {
  if (replacementMap) {
    return parse(getParameterizedText(lookupPath, replacementMap, library));
  }
  return parse(getText(lookupPath, library));
};

export default getText;
